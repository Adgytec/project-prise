import React from "react";
import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";

const data = {
  heading: "Études et renforcement des capacités",
  list: [
    "Élaboration de la stratégie de mise en œuvre de l’AEP en milieu rural",
    "Réalisation d’une étude de mise en place d’un réseau pilote de suivi des ressources en eau du fleuve Kasaï",
    "Réalisation d’une étude socio-économique Genre",
    "Élaboration d’un répertoire société civile et PTF du Genre",
    "Renforcement des capacités des acteurs locaux",
    "Formation des 1000 femmes sur le développement des activités génératrices de revenus",
    "Renforcement de capacités des membres des 60 unités de gestion des systèmes d’AEP",
    "Formation des 300 membres dont 40% de femmes",
    "Réalisation de l’étude de la centrale hydroélectrique de Tshikapa.",
  ],
};

const StudiesAndCapacityBuilding = () => {
  return (
    <>
      <Hero heading={data.heading} />

      <Container className={styles.list}>
        <ul>
          {data.list.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </Container>
    </>
  );
};

export default StudiesAndCapacityBuilding;
