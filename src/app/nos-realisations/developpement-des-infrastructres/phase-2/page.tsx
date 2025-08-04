import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";
import { LIMIT, PageInfo, safeApiCall, buildApiUrl, ApiResponse } from "@/data/helper";
import AlbumItem from "../components/album-list/AlbumItem";
import AlbumList from "../components/album-list/AlbumList";
import { Album } from "../phase-1/page";

export const revalidate = 60 * 60;

const PhaseIPage = async () => {
	const url = buildApiUrl('/services/gallery/albums');

	if (!url) {
		return (
			<>
				<Hero
					heading={rootLinks.infrastructureDevelopmentPhase2.title}
				/>
				<Container
					style={{
						height: "20rem",
						display: "grid",
						placeItems: "center",
					}}
				>
					<h4>Configuration error. Please check environment variables.</h4>
				</Container>
			</>
		);
	}

	let pageInfo: PageInfo = {
		nextPage: false,
		cursor: "",
	};
	
	const albums: Album[] | null = await safeApiCall<ApiResponse>(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_PHASE_II}`,
		},
	})
		.then((res) => {
			if (res?.error) throw new Error(res.message || 'API error');
			pageInfo = res?.data?.pageInfo || { nextPage: false, cursor: "" };
			return res?.data?.albums || [];
		})
		.catch((err) => {
			console.error(err.message);
			return null;
		});

	if (!albums) {
		return (
			<>
				<Hero
					heading={rootLinks.infrastructureDevelopmentPhase2.title}
				/>

				<Container
					style={{
						height: "20rem",
						display: "grid",
						placeItems: "center",
					}}
				>
					<h4>Oops! Something went wrong.</h4>
				</Container>
			</>
		);
	}

	if (albums.length === 0) {
		return (
			<>
				<Hero
					heading={rootLinks.infrastructureDevelopmentPhase2.title}
				/>

				<Container
					style={{
						height: "20rem",
						display: "grid",
						placeItems: "center",
					}}
				>
					<h4>There are no albums at Phase II</h4>
				</Container>
			</>
		);
	}

	return (
		<>
			<Hero heading={rootLinks.infrastructureDevelopmentPhase2.title} />

			<AlbumList phase2={true} url={url} pageInfo={pageInfo}>
				{albums.map((item) => {
					return (
						<AlbumItem phase2={true} key={item.id} details={item} />
					);
				})}
			</AlbumList>
		</>
	);
};

export default PhaseIPage;
