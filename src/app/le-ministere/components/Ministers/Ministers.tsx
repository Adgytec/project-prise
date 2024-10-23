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
		name: "Muhindo Nzangi Butondo",
		image: "/le-ministry/muhindo.png",
		content: [
			"Muhindo Nzangi est né le 11 novembre 1980 à Kyavinyonge dans le territoire de Beni, sur le rivage du lac Édouard1,2.",
			"En 2006, Muhindo Nzangi est élu député provincial de la circonscription du territoire de Lubero dans la province du Nord Kivu.",
			"Il est élu député national lors des élections de 2011 pour la circonscription de Butembo-ville. et réélu lors des élections de 2018 et rejoint le groupe MS-G7 d'Ensemble pour la République1.",
			"En avril 2021, Muhindo Nzangi est nommé ministre de l'Enseignement supérieur et universitaire dans les gouvernements Lukonde I et II.",
			"En janvier 2024, après publication des résultats provisoires des élections législatives du 20 décembre 2023, il est réélu député national de la ville de Goma.",
			"En 29 mai 2024, il est nommé ministre d'État ministre du Développement rural.",
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
