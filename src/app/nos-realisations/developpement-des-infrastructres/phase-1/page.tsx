import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";
import { LIMIT, PageInfo, safeApiCall, buildApiUrl, ApiResponse } from "@/data/helper";
import AlbumItem from "../components/album-list/AlbumItem";
import AlbumList from "../components/album-list/AlbumList";

export const revalidate = 60 * 60;

export interface Album {
	id: string;
	name: string;
	cover: string;
	createdAt: string;
}

const PhaseIPage = async () => {
	const url = buildApiUrl('/services/gallery/albums');

	if (!url) {
		return (
			<>
				<Hero
					heading={rootLinks.infrastructureDevelopmentPhase1.title}
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
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
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
					heading={rootLinks.infrastructureDevelopmentPhase1.title}
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
					<h4>There are no albums at Phase I</h4>
				</Container>
			</>
		);
	}

	return (
		<>
			<Hero heading={rootLinks.infrastructureDevelopmentPhase1.title} />

			<AlbumList url={url} pageInfo={pageInfo}>
				{albums.map((item) => {
					return <AlbumItem key={item.id} details={item} />;
				})}
			</AlbumList>
		</>
	);
};

export default PhaseIPage;
