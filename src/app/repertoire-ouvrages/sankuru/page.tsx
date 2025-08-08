import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import {
  tableSankuruPhase1,
  tableSankuruPhase2,
} from "@/data/reports-table/sankuru";
import React from "react";
import DriveLink from "../drive-link/DriveLink";
import Reports from "@/components/Reports/Reports";
import { convertFromVariant, regionMap } from "@/components/Reports/types";
export const revalidate = 3600;

const url =
  "https://docs.google.com/document/d/11Jq7S06OUNyRWsuMkA00WoVg2Gm-HhWT/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";
const SankuruPage = () => {
  return (
    <>
      <Hero heading={rootLinks.sankuru.title} />
      <DriveLink url={url} />
      <Reports
        heading="PRISE I"
        data={convertFromVariant(tableSankuruPhase1)}
        region={regionMap.sankuru}
      />
      <Reports
        heading="PRISE II"
        data={convertFromVariant(tableSankuruPhase2)}
        region={regionMap.sankuru}
      />
    </>
  );
};

export default SankuruPage;
