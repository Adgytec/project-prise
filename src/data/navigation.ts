import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { title } from "process";

// links which will have dedicated page
export const rootLinks = {
  home: {
    title: "D'accueil",
    link: "/",
  },

  projectOverview: {
    title: "Aperçu du projet",
    link: "/a-propos/apercu-du-projet",
  },
  backgroundAndRationale: {
    title: "Contexte et justification",
    link: "/a-propos/contexte-et-justification",
  },
  overallAndSpecificObjective: {
    title: "Objectif global et spécifique",
    link: "/a-propos/objectif-global-et-specifique",
  },
  expectedResults: {
    title: "Résultats attendus",
    link: "/a-propos/resultats-attendus",
  },
  kasai: {
    title: "Kasaï",
    link: "/repertoire-ouvrages/kasai",
  },
  kasaiCentral: {
    title: "Kasaï central",
    link: "/repertoire-ouvrages/kasai-central",
  },
  kasaiEastern: {
    title: "Kasaï oriental",
    link: "/repertoire-ouvrages/kasai-oriental",
  },
  Loamami: {
    title: "Lomami",
    link: "/repertoire-ouvrages/lomami",
  },
  sankuru: {
    title: "Sankuru",
    link: "/repertoire-ouvrages/sankuru",
  },
  hautLomami: {
    title: "Haut-lomami",
    link: "/repertoire-ouvrages/haut-lomami",
  },
  kwango: {
    title: "Kwango",
    link: "/repertoire-ouvrages/kwango",
  },
  kwilu: {
    title: "Kwilu",
    link: "/repertoire-ouvrages/kwilu",
  },
  maindombe: {
    title: "Maindombe",
    link: "/repertoire-ouvrages/maindombe",
  },
  maniema: {
    title: "Maniema",
    link: "/repertoire-ouvrages/maniema",
  },
  infrastructureDevelopment: {
    title: "Développement des infrastructres",
    link: "/nos-realisations/developpement-des-infrastructres",
  },
  infrastructureDevelopmentPhase1: {
    title: "Phase I",
    link: "/nos-realisations/developpement-des-infrastructres/phase-1",
  },
  infrastructureDevelopmentPhase2: {
    title: "Phase II",
    link: "/nos-realisations/developpement-des-infrastructres/phase-2",
  },
  studiesAndCapacityBuilding: {
    title: "Études et renforcement des capacités",
    link: "/nos-realisations/etudes-et-reforcement-des-capacites",
  },
  projectCoordinationAndManagement: {
    title: "Coordination et gestion du projet",
    link: "/nos-realisations/coordination-et-gestion-du-projet",
  },
  annualReports: {
    title: "Rapports annuels",
    link: "/publications/rapports-annuels",
  },
  news: {
    title: "Nouvelles",
    link: "/publications/nouvelles",
  },
  contracts: {
    title: "Contrats",
    link: "/publications/contrats",
  },
  contractsPhase1: {
    title: "Phase I",
    link: "/publications/contrats/phase-1",
  },
  contractsPhase2: {
    title: "Phase II",
    link: "/publications/contrats/phase-2",
  },
  contractsForGoods: {
    title: "Contrat des biens",
    link: "/publications/contrats/contrat-des-biens",
  },
  contractsForGoodsPhase1: {
    title: "Phase I",
    link: "/publications/contrats/contrat-des-biens/phase-1",
  },
  contractsForGoodsPhase2: {
    title: "Phase II",
    link: "/publications/contrats/contrat-des-biens/phase-2",
  },
  serviceContracts: {
    title: "Contrat des services",
    link: "/publications/contrats/contrat-des-services",
  },
  serviceContractsPhase1: {
    title: "Phase I",
    link: "/publications/contrats/contrat-des-services/phase-1",
  },
  serviceContractsPhase2: {
    title: "Phase II",
    link: "/publications/contrats/contrat-des-services/phase-2",
  },
  worksContracts: {
    title: "Contrat de travaux",
    link: "/publications/contrats/contrat-de-travaux",
  },
  worksContractsPhase1: {
    title: "Phase I",
    link: "/publications/contrats/contrat-de-travaux/phase-1",
  },
  worksContractsPhase2: {
    title: "Phase II",
    link: "/publications/contrats/contrat-de-travaux/phase-2",
  },
  quarterlyProgressReports: {
    title: "Rapports d'avancement trismestriels",
    link: "/publications/rapports-d-avancement-trismestriels",
  },
  difficulties: {
    title: "Difficultés",
    link: "/publications/difficultes",
  },
  callForTenders: {
    title: "Appels d'offres",
    link: "/opportunites/appels-d-offres",
  },
  callForTendersPhase1: {
    title: "Phase I",
    link: "/opportunites/appels-d-offres/phase-1",
  },
  callForTendersPhase2: {
    title: "Phase II",
    link: "/opportunites/appels-d-offres/phase-2",
  },
  noticeCallForApplications: {
    title: "Avis appel candidature",
    link: "/opportunites/avis-appel-candidature",
  },
  callForExpressionOfInterest: {
    title: "Appel a manifestation d'intérêt",
    link: "/opportunites/appel-a-manifestation-d-interet",
  },
  callForExpressionOfInterestPhase1: {
    title: "Phase I",
    link: "/opportunites/appel-a-manifestation-d-interet/phase-1",
  },
  callForExpressionOfInterestPhase2: {
    title: "Phase II",
    link: "/opportunites/appel-a-manifestation-d-interet/phase-2",
  },
  theMinistry: {
    title: "Le ministère",
    link: "/le-ministere",
  },
  contact: {
    title: "Contact",
    link: "/contact",
  },
  donate: {
    title: "Faites un don aujourd'hui",
    link: "/faire-un-don",
  },
};

export type NavBarLinks = {
  title: string;
  link?: string;
  active?: string;
  links?: NavBarLinks[];
};

export const navBarLinks: NavBarLinks[] = [
  // rootLinks.home,
  {
    title: "A propos",
    active: "/a-propos",
    links: [
      rootLinks.projectOverview,
      rootLinks.backgroundAndRationale,
      rootLinks.overallAndSpecificObjective,
      rootLinks.expectedResults,
    ],
  },
  {
    title: "Répertoire/Ouvrages",
    active: "/repertoire-ouvrages",
    links: [
      rootLinks.kasai,
      rootLinks.kasaiCentral,
      rootLinks.kasaiEastern,
      rootLinks.Loamami,
      rootLinks.sankuru,
      rootLinks.hautLomami,
      rootLinks.kwango,
      rootLinks.kwilu,
      rootLinks.maindombe,
      rootLinks.maniema,
    ],
  },
  {
    title: "Composantes",
    active: "/nos-realisations",
    links: [
      {
        ...rootLinks.infrastructureDevelopment,
        // title: "Développement des infrastructres",
        // links: [
        // 	rootLinks.infrastructureDevelopmentPhase1,
        // 	rootLinks.infrastructureDevelopmentPhase2,
        // ],
      },
      rootLinks.studiesAndCapacityBuilding,
      rootLinks.projectCoordinationAndManagement,
    ],
  },
  {
    title: "Publication",
    active: "/publications",
    links: [
      rootLinks.annualReports,
      {
        ...rootLinks.contracts,
        links: [
          rootLinks.contractsForGoods,
          rootLinks.serviceContracts,
          rootLinks.worksContracts,
        ],
      },
      // rootLinks.quarterlyProgressReports,
      rootLinks.difficulties,
    ],
  },
  {
    title: "Opportunites",
    active: "/opportunites",
    links: [
      rootLinks.callForTenders,
      // rootLinks.noticeCallForApplications,
      rootLinks.callForExpressionOfInterest,
    ],
  },
  rootLinks.theMinistry,
  rootLinks.contact,
];

export const footer = [
  rootLinks.projectOverview,
  rootLinks.annualReports,
  rootLinks.backgroundAndRationale,
  rootLinks.overallAndSpecificObjective,
  rootLinks.noticeCallForApplications,
  rootLinks.contracts,
  rootLinks.difficulties,
  rootLinks.theMinistry,
];

export const phone = ["(+243) 817 073 112", "(+243) 817 073 118"];
export const email = ["projetpriserdc@prise-rdc.com"];
export const address =
  "Avenue Lukusa, n°111-112, croisement des avenues TSF et Lukusa,dans l'enceinte du secrétariat Général au Développement Rural";
export const galleryAlbum =
  "/nos-realisations/developpement-des-infrastructres";

export const socialMedia = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/ProjetPRISE",
    icon: faFacebookF,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/projetprise2/",
    icon: faInstagram,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/company/projet-prise",
    icon: faLinkedinIn,
  },
  {
    title: "TikTok",
    link: "https://www.tiktok.com/@projet_prise",
    icon: faTiktok,
  },
];
