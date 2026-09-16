import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";
import FilesList from "../components/Files/FilesList/FilesList";

export interface Doc {
    title: string;
    link: string;
}

const data: Doc[] = [
    {
        title: "Rapport Annuel 2020",
        link: "/annual-reports/Rapport-annuel-PRISE-2020.pdf",
    },
    {
        title: "PRISE_rapport annuel 2022 VF",
        link: "/annual-reports/PRISE_rapport annuel 2022 Vf.pdf",
    },
    {
        title: "Rapport  annuel  PRISE 2016 VF CN POUR LA BANQUE",
        link: "/annual-reports/Rapport  annuel  PRISE 2016 VF CN POUR LA BANQUE.pdf",
    },
    {
        title: "Rapport annuel  d_avancement 2018 version finale",
        link: "/annual-reports/Rapport annuel  d_avancement 2018 version finale.pdf",
    },
    {
        title: "Rapport annuell des activités du PRISE en 2017 VF Revue CN",
        link: "/annual-reports/Rapport annuell des activités du PRISE en 2017 VF Revue CN.pdf",
    },
    {
        title: "Rapport  annuel au 31 decembre 2015   Rf CN. PUBLIEE",
        link: "/annual-reports/Rapport  annuel au 31 decembre 2015   Rf CN. PUBLIEE.pdf",
    },
    {
        title: "rapport annuel 2019-05-05-2020 vesion1",
        link: "/annual-reports/rapport annuel 2019-05-05-2020 vesion1.pdf",
    },
    {
        title: "rapport annuel 2021 au 31 decembre",
        link: "/annual-reports/rapport annuel 2021 au 31 decembre.pdf",
    },
    {
        title: "Rapport annuel PRISE I  2023_web",
        link: "/annual-reports/Rapport annuel PRISE I  2023_web.pdf",
    },
    {
        title: "Annexe RP Annuel 2023",
        link: "/annual-reports/Annexe RP Annuel 2023.pdf",
    },
];

const prise2: Doc[] = [
    {
        title: "Rapport annuel PRISE II au 31 decembre  2023",
        link: "/annual-reports/Rapport annuel PRISE II au 31 decembre  2023.pdf",
    },
    {
        title: "RAPPORT ACTIVITES 2025 PRISE II",
        link: "/annual-reports/RAPPORT ACTIVITES 2025 PRISE II (1).pdf",
    },
    {
        title: "RAPPORT T1-2026 DES ACTIVITES PRISE II",
        link: "/annual-reports/RAPPORT T1-2026 DES ACTIVITES PRISE II.pdf",
    },
    {
        title: "RAPPORT T2-2026 DES ACTIVITES PRISE II FINAL",
        link: "/annual-reports/RAPPORT T2-2026 DES ACTIVITES PRISE II FINAL.pdf",
    },
];

const RapportAnnuelsPage = () => {
    return (
        <>
            <Hero heading={rootLinks.annualReports.title} />

            <Container>
                <h3>PRISE I</h3>
                <br />
                <FilesList list={data} />
            </Container>

            <Container>
                <h3>PRISE II</h3>
                <br />
                <FilesList list={prise2} />
            </Container>
        </>
    );
};

export default RapportAnnuelsPage;
