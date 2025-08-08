import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableManiema } from "@/data/reports-table/maniema";
import React from "react";
import DriveLink from "../drive-link/DriveLink";
import Reports from "@/components/Reports/Reports";
import { convertFromVariant, regionMap } from "@/components/Reports/types";
export const revalidate = 3600;

const url =
  "https://docs.google.com/document/d/1oSUDINsF2HcUB9JETy8cnZNFcpWgeHNR/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";

const ManiemaPage = () => {
  return (
    <>
      <Hero heading={rootLinks.maniema.title} />
      <DriveLink url={url} />
      <Reports
        data={convertFromVariant(tableManiema)}
        region={regionMap.maniema}
        heading="PRISE II"
      />
    </>
  );
};

export default ManiemaPage;
