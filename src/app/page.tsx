import Hero from "@/components/Home/Hero/Hero";
import Map from "@/components/Home/Map/Map";
import Opportunities from "@/components/Home/Opportunities/Opportunities";
import Project from "@/components/Home/Project/Project";
import Video from "@/components/Home/Video/Video";
import Word from "@/components/Home/Word/Word";
import {
  Blog,
  categoryIdMap,
  categoryIdPhase2Map,
  news,
} from "@/data/blog-category";
import { location } from "@/data/helper";
import { Phase } from "@/data/phases";
import React from "react";

export const revalidate = 3600;

const data = [
  // {
  // 	image: "/home/hero/hero-1.webp",
  // 	text: "Le Premier ministre salue l’efficacité de Déo Nsunzu, coordonnateur du projet PRISE",
  // },
  {
    image: "/home/hero/hero-2.webp",
    text: "Mission de suivi du pilotage du projet PRISE dans le Grand Kasai conduite  par le Secretaire General du Ministere de Developpement Rural",
  },
  {
    image: "/home/hero/hero-3.webp",
    text: "Château d'eau de KATENDE , Au Kasaï Central",
  },
  {
    image: "/home/hero/hero-4.webp",
    text: "Château d'eau & Espaces à vivre a Luandanda, Au Kasaï Central",
  },
  {
    image: "/home/hero/hero-5.webp",
    text: "Château d'eau de lukalaba, Kasaï Oriental",
  },
];

const limit = 3;

const categories = [
  {
    id: news,
    phase: Phase.ONE,
  },
  {
    id: categoryIdMap["Appel à Manifestation d’Intérêt (AMI)"],
    phase: Phase.ONE,
  },
  {
    id: categoryIdPhase2Map["Appels d'offres"],
    phase: Phase.TWO,
  },
];

const Home = async () => {
  const promises = categories.map((item) => {
    let token = process.env.NEXT_PUBLIC_TOKEN;
    if (item.phase === Phase.TWO) {
      token = process.env.NEXT_PUBLIC_TOKEN_PHASE_II;
    }

    const url = `${process.env.NEXT_PUBLIC_API}/services/blogs/category/${item.id}`;
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });

  const results = await Promise.allSettled(promises);
  const blogs: Blog[][] = [];
  for (const result of results) {
    if (result.status === "fulfilled") {
      var res = await result.value.json();

      if (res.error) {
        blogs.push([]);
        continue;
      }

      const tempBlogs: Blog[] = res.data.blogs;
      blogs.push(tempBlogs.slice(0, limit));
    } else {
      blogs.push([]);
    }
  }

  return (
    <>
      <Hero data={data} location={location.hero} />
      <Word />
      <Project />
      <Map />

      <Opportunities blogs={blogs} categories={categories} />
      <Video />
    </>
  );
};

export default Home;
