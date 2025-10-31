import { rootLinks } from "./navigation";

export const news = "69589cd5-bbe2-4043-822d-7926eee541b1";

// phase 1
// category -> link
export const categoryMap = {
  "Appels d'offres": rootLinks.callForTendersPhase1,
  "Appel à Manifestation d’Intérêt (AMI)":
    rootLinks.callForExpressionOfInterestPhase1,
  Contrats: rootLinks.contractsPhase1,
  "Contrat De Travaux": rootLinks.worksContractsPhase1,
  "Contrat Des Services": rootLinks.serviceContractsPhase1,
  "Contrats Des Biens": rootLinks.contractsForGoodsPhase1,
};

// category -> id
export const categoryIdMap = {
  "Appels d'offres": "973ac216-d756-4ca5-a9a3-7729e8eded74",
  "Appel à Manifestation d’Intérêt (AMI)":
    "afaa1467-a624-41e6-84f5-315ce7c8791c",
  Contrats: "e617ad3c-4ec5-424f-8e43-3cfdd6658a19",
  "Contrat De Travaux": "b7e752d5-4d90-466f-95a1-0e17a7a73975",
  "Contrat Des Services": "f1681c27-b162-4b0f-892b-8fa6fb93633e",
  "Contrats Des Biens": "aad3e65c-d365-41d6-9b41-4b9424d5df28",
};

// phase 2
// category -> link
export const categoryPhase2Map = {
  "Appels d'offres": rootLinks.callForTendersPhase2,
  "Appel à Manifestation d’Intérêt (AMI)":
    rootLinks.callForExpressionOfInterestPhase2,
  Contrats: rootLinks.contractsPhase2,
  "Contrat De Travaux": rootLinks.worksContractsPhase2,
  "Contrat Des Services": rootLinks.serviceContractsPhase2,
  "Contrats Des Biens": rootLinks.contractsForGoodsPhase2,
};

// category -> id
export const categoryIdPhase2Map = {
  "Appels d'offres": "ed260997-ed48-4b4e-a0e1-eddbd725c44b",
  "Appel à Manifestation d’Intérêt (AMI)":
    "68d1ec68-230e-46e1-bca0-7020de78cabb",
  Contrats: "2dc9b83b-3a24-4778-bd78-a30461434065",
  "Contrat De Travaux": "88e44c76-1c98-49ea-a539-d13bab652c38",
  "Contrat Des Services": "d419d963-f383-4675-865a-a9c19087ffa2",
  "Contrats Des Biens": "f9d99de6-c3ba-412d-8f5a-b62905d3be29",
};

export const eventsPhase2 = "7cc6c256-968f-4a47-adff-efd825862118";

interface CategroyDetail {
  id: string;
  name: string;
}

export interface Blog {
  title: string;
  summary?: string;
  author: string;
  blogId: string;
  createdAt: string;
  cover: string;
  category: CategroyDetail;
}

export interface BlogItem {
  blogId: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  cover: string;
  category: string;
}
