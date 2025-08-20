import {
  ReportTable,
  ReportTableVariantCommunity,
  ReportTableVariant,
} from "@/data/reports-table/type";
import { nanoid } from "nanoid/non-secure";

export interface ReportItem {
  id: string;
  Ouvrage: string;
  Territoire: string;
  Coordonnées: string;
  Infrastructures: string;
  "Lieu d'implantation": string;
  Secteur: string;
  "Site d'intervention": string;
  Latitude: string;
  Longitude: string;
}

export const regions = [
  { displayValue: "Kasaï", value: "kasai" },
  {
    displayValue: "Kasaï central",
    value: "kasai-central",
  },
  {
    displayValue: "Kasaï oriental",
    value: "kasai-oriental",
  },
  { displayValue: "Lomami", value: "lomami" },
  { displayValue: "Sankuru", value: "sankuru" },
  { displayValue: "Haut-lomami", value: "haut-lomami" },
  { displayValue: "Kwango", value: "kwango" },
  { displayValue: "Kwilu", value: "kwilu" },
  { displayValue: "Maindombe", value: "maindombe" },
  { displayValue: "Maniema", value: "maniema" },
];

export const regionMap = {
  kasai: "kasai",
  kasaiCentral: "kasai-central",
  kasaiOriental: "kasai-oriental",
  lomami: "lomami",
  sankuru: "sankuru",
  hautLomami: "haut-lomami",
  kwango: "kwango",
  kwilu: "kwilu",
  maindombe: "maindombe",
  maniema: "maniema",
};

export interface ReportsProps {
  heading: string;
  data: ReportItem[];
  region: string;
}

export interface ReportsDisplayProps {
  heading: string;
  data: ReportItem[];
}

// helpers to migrate
export function convertFromReportTable(data: ReportTable[]): ReportItem[] {
  return data.map((item) => ({
    id: nanoid(),
    Ouvrage: "", // Not present in ReportTable, so set as empty
    Territoire: item.territory || "",
    Coordonnées: `${item.latitude || ""}, ${item.longitude || ""}`.trim(),
    Infrastructures: item.infrastructure || "",
    "Lieu d'implantation": "", // Not present in ReportTable
    Secteur: item.sector || "",
    "Site d'intervention": item.site || "",
  }));
}

export function convertFromVariant(data: ReportTableVariant[]): ReportItem[] {
  return data.map((item) => ({
    id: nanoid(),
    Ouvrage: item.ouvrage || "",
    Territoire: item.territory || "",
    Coordonnées: item.coords || "",
    Infrastructures: "", // Not present in input
    "Lieu d'implantation": item.implantation || "",
    Secteur: item.sector || "",
    "Site d'intervention": item.site || "",
  }));
}

export function convertFromVariantCommunity(
  data: ReportTableVariantCommunity[],
): ReportItem[] {
  return data.map((item) => ({
    id: nanoid(),
    Ouvrage: item.ouvrage || "",
    Territoire: item.territory || "",
    Coordonnées: item.coords || "",
    Infrastructures: "", // Not present in input
    "Lieu d'implantation": item.implantation || "",
    Secteur: item.collectivité || "", // collectivité mapped to Secteur
    "Site d'intervention": item.site || "",
  }));
}
