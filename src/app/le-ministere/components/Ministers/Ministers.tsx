import React from "react";
import styles from "./ministers.module.scss";
import Image from "next/image";

const data = [
  {
    name: "Félix-Antoine Tshisekedi Tshilombo",
    image: "/le-ministry/felix.png",
    content: [
      "Né le 13 juin 1963 à Kinshasa, Félix-Antoine Tshisekedi Tshilombo est l' homme d'État de la République démocratique du Congo (RDC). Il a prêté serment comme président de la République le 24 janvier 2019.",
      "Avant d'être élu président de la RDC lors de la première passation pacifique du pouvoir, il était l'un des hauts dirigeants de l'UDPS (Union pour la démocratie sociale et le progrès social), un parti dirigé par son défunt père, Etienne Tshisekedi, décédé. en février 2017.",
      "En 2011, il a été élu député à l'Assemblée nationale représentant la circonscription de Kananga dans la province du Kasaï Occidental.",
      "Ayant refusé de siéger à l'Assemblée nationale pour protester contre la fraude électorale, il fut ensuite déchu de son mandat parlementaire en 2013.",
      "Après le décès de son père, il a été élu président national de l'UDPS lors d'un congrès extraordinaire du parti en mars 2018. Le même mois, il a été choisi par ses collègues leaders de l'opposition pour diriger le « Rassemblement », sur la vaste plate-forme électorale de l'opposition. l'élection présidentielle.",
      "Il est l'un des initiateurs du Dialogue congolais pour le respect de la Constitution et pour la transition pacifique du pouvoir en RDC. Un processus qu'il a défendu sans relâche, et qui l'a conduit à s'allier avec Vital Kamerhe de l'Union pour la nation congolaise (UCN) dans un accord politique signé à Nairobi le 23 novembre 2018, formant la plateforme « CACH » (Cap for Change). pour les élections de décembre 2018.",
      "Le 30 décembre 2018, il est élu Président de la République pour un mandat de cinq ans. À 56 ans, il est devenu le 5e président de la République démocratique du Congo lors du tout premier transfert de pouvoir pacifique dans le plus grand pays d'Afrique centrale.",
    ],
  },
  {
    name: "Grégoire Mutshail Mutomb",
    image: "/le-ministry/gregoire.png",
    content: [
      "Grégoire Mutshail Mutomb est né le 8 mai 1964 à Lubumbashi, dans l’ancienne province du Katanga, aujourd’hui le Haut-Katanga. Son choix par le Chef de l’État au poste qu’il occupe dans le gouvernement de Judith Suminwa 2 n’est pas un hasard. L’homme a obtenu plusieurs diplômes dans le domaine de l’agronomie, notamment un diplôme d’ingénieur agronome en 1989 à l’Institut Supérieur d’Études Agronomiques de Bengamisa, une licence en sciences agrovétérinaires en 2006 de l’Institut Supérieur Pédagogique de Lubumbashi, et une maîtrise en leadership organisationnel et management de l’Université Méthodiste en collaboration avec DAI International des États-Unis en 2009.",
      "En 2000 que cet ingénieur de formation a lancé le premier projet pilote d’agriculture urbaine en Afrique sous l’égide de la FAO, qui a été mis en œuvre en RDC et a ensuite été reproduit dans d’autres pays africains. Il a également contribué à l’élaboration de plusieurs stratégies nationales et urbaines de développement agricole, notamment au Rwanda, en Côte d’Ivoire et au Burundi.",
      "Mutshail Mutomb possède une vaste expérience dans le secteur de l’agriculture et du développement rural. Avant sa nomination en tant que ministre, il a travaillé pendant plus de 30 ans dans divers programmes et projets, notamment ceux de la FAO. Il a occupé des postes tels que conseiller technique, coordonnateur provincial de projets agricoles et consultant international, appuyant plusieurs pays africains dans le développement de l’agriculture urbaine et périurbaine.",
      "En mois d’août, le huitième jour de l’année 2025, il est nommé Ministre d'État ministre du Développement rural.",
    ],
  },
];

const Ministers = () => {
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <div className={styles.item} key={item.name}>
            <div className={styles.image}>
              <Image
                src={item.image}
                width={430}
                height={550}
                alt={item.name}
              />
            </div>
            <h2>{item.name}</h2>
            {item.content.map((info) => {
              return <p key={info}>{info}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Ministers;
