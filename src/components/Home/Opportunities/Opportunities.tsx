"use client";

import React, { useState } from "react";
import styles from "./opportunities.module.scss";
import Container from "@/components/Container/Container";
import { rootLinks } from "@/data/navigation";
import Link from "next/link";
import { Blog } from "@/data/blog-category";
import OpportunitiesChild from "./components/OpportunitiesChild";

const links = [
	rootLinks.callForTenders,
	// rootLinks.noticeCallForApplications,
	rootLinks.callForExpressionOfInterest,
];

const data = {
	heading: "Actualités",
};

interface OpportunitiesProps {
	blogs: Blog[][];
}

const Opportunities = ({ blogs }: OpportunitiesProps) => {
	const [currentTrigger, setCurrentTrigger] = useState(0);

	if (blogs.length !== links.length) {
		return (
			<div className={styles.opportunities_fallback}>
				<Container className={styles.container}>
					<h2 className={`accent ${styles.heading}`}>
						{data.heading}
					</h2>

					<div className={styles.items}>
						{links.map((item) => {
							return (
								<div key={item.link + "-" + data.heading}>
									<Link
										data-type="button"
										data-variant="primary"
										href={item.link}
									>
										{item.title}
									</Link>
								</div>
							);
						})}
					</div>
				</Container>
			</div>
		);
	}

	return (
		<Container className={styles.opportunities}>
			<h2 className={`accent ${styles.heading}`}>{data.heading}</h2>
			<div className={styles.trigger}>
				{links.map((item, index) => {
					return (
						<label key={item.link}>
							<span>{item.title}</span>
							<input
								type="radio"
								name="trigger"
								value={item.title}
								checked={index === currentTrigger}
								onChange={(e) => setCurrentTrigger(index)}
							/>
						</label>
					);
				})}
			</div>

			<OpportunitiesChild
				key={blogs[currentTrigger][0].category.id}
				blogs={blogs[currentTrigger]}
			/>

			<div className={styles.redirect}>
				<Link
					href={links[currentTrigger].link}
					data-type="link"
					data-variant="secondary"
				>
					Learn More {">"}
				</Link>
			</div>
		</Container>
	);
};

export default Opportunities;
