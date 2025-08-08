export interface ReportTable {
  territory: string;
  sector: string;
  site: string;
  infrastructure: string;
  latitude: string;
  longitude: string;
}

export interface ReportTableVariant {
  site: string;
  ouvrage: string;
  implantation: string;
  territory: string;
  sector: string;
  coords: string;
}

export interface ReportTableVariantCommunity {
  site: string;
  ouvrage: string;
  implantation: string;
  territory: string;
  collectivité: string;
  coords: string;
}
