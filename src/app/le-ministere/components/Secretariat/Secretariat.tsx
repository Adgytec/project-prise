import React from "react";
import styles from "./secretariat.module.scss";
import Image from "next/image";

const data = {
    heading: "Le Secretariat General",
};

interface List {
    item: string;
    sublist?: List[];
}

interface SecretariatData {
    name: string;
    image: string;
    summary: string;
    mission: {
        heading: string;
        text: string;
        list?: List[];
    }[];
    footer: string;
}

const secretariatData: SecretariatData = {
    name: "MONGOPASI SANDJA Pélé",
    image: "/le-ministry/pele.jpg",
    summary:
        "Secrétaire Général au Développement Rural, nommée par le Vice-Premier Ministre, Ministre de la Fonction Publique, Modernisation de l’Administration et Innovation du Service Public par l’Arrêté N°008/CAB.VPMIN/FP-MA-ISP/JPL/2026 portant mise en place des Secrétaires Généraux de l’Administration Publique, du mercredi 28 Janvier 2026.",
    mission: [
        {
            heading: "MISSION GÉNÉRALE",
            text: "Contribuer à l’amélioration des conditions socio-économiques de base des populations vivant en milieu rural et péri-urbain en République Démocratique du Congo.",
        },
        {
            heading: "MISSIONS SPÉCIFIQUES",
            text: "Les missions spécifiques du Secrétariat Général au Développement Rural sont:",
            list: [
                {
                    item: "Concevoir et élaborer les projets de politique et des stratégies en matière du développement rural et en assurer le suivi de la mise en œuvre après validation.",
                },
                {
                    item: "concevoir et élaborer les avant-projets de textes législatifs, les projets de textes règlementaires et les normes relatifs au développement rural et en assurer la mise en œuvre après publication au Journal Officiel ;",
                },
                {
                    item: "assurer l’organisation et l’encadrement :",
                    sublist: [
                        {
                            item: "des paysans dans des coopératives et associations en milieu rural ;",
                        },
                        {
                            item: "de la population pour l’accroissement de la production en milieu rural ;",
                        },
                    ],
                },
                {
                    item: "mener des études relatives à l’aménagement de l’espace rural et de son équipement en faveur de la population rurale et péri-urbaine ;",
                },
                {
                    item: "assurer la coordination et l’intégration des projets et programmes de développement en milieu rural péri-urbain ;",
                },
                {
                    item: "assurer l’aménagement, la construction, la réhabilitation et l’entretien des infrastructures socioéconomiques de base en milieu rural et péri-urbain ;",
                },
                {
                    item: "Initier et participer aux conclusions des projets de traités, de conventions et d’accords internationaux en matière du développement rural et en assurer le suivi.",
                },
            ],
        },
    ],
    footer: "Situation Géographique : 1211, croisement des avenues le Premier mall (Ex TSF) et Lt.col LUKUSA (Dans l'enceinte de l'ex la voix du Zaire) ",
};

type HandleList = (listItem: List, level: number) => React.JSX.Element;

const Secretariat = () => {
    const handleList: HandleList = (listItem, level) => {
        return (
            <li data-level={level} key={listItem.item}>
                {listItem.item}
                {listItem.sublist && (
                    <ul>
                        {listItem.sublist.map((elem) => {
                            return handleList(elem, level + 1);
                        })}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <div>
            <h2>{data.heading}</h2>

            <div className={styles.container}>
                <div className={styles.image}>
                    <Image
                        src={secretariatData.image}
                        width={450}
                        height={550}
                        alt={secretariatData.name}
                    />
                </div>

                <h2>{secretariatData.name}</h2>

                <p>{secretariatData.summary}</p>

                <ol type="a" className={styles.mission}>
                    {secretariatData.mission.map((item) => {
                        return (
                            <li key={item.heading}>
                                <span>{item.heading}</span>

                                <p>{item.text}</p>

                                {item.list && (
                                    <ul data-level="1">
                                        {item.list.map((elem) => {
                                            return handleList(elem, 1);
                                        })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ol>

                <p className={styles.footer}>{secretariatData.footer}</p>
            </div>
        </div>
    );
};

export default Secretariat;
