import Hero from "@/components/Hero/Hero";
import Table from "@/components/table/Table";
import { rootLinks } from "@/data/navigation";
import {
  kasaiCentralPhase1,
  kasaiCentralPhase2,
} from "@/data/reports-table/kasai-central";
import React from "react";
import DriveLink from "../drive-link/DriveLink";
import Reports from "@/components/Reports/Reports";
import { convertFromReportTable, regionMap } from "@/components/Reports/types";

export const revalidate = 3600;

const url =
  "https://docs.google.com/document/d/1EcREb3JjRzevHza3jCNkdh5QrbMF2zID/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";

const KasaiCentralPage = () => {
  return (
    <>
      <Hero heading={rootLinks.kasaiCentral.title} />
      <DriveLink url={url} />
      <Reports
        region={regionMap.kasaiCentral}
        heading="PRISE I"
        data={convertFromReportTable(kasaiCentralPhase1)}
      />
      <Reports
        region={regionMap.kasaiCentral}
        heading="PRISE II"
        data={convertFromReportTable(kasaiCentralPhase2)}
      />
    </>
  );
};

export default KasaiCentralPage;
