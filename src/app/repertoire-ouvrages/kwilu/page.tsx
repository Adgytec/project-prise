import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableKiwlu } from "@/data/reports-table/kwilu";
import React from "react";
import DriveLink from "../drive-link/DriveLink";
import Reports from "@/components/Reports/Reports";
import { convertFromVariant, regionMap } from "@/components/Reports/types";
export const revalidate = 3600;

const url =
  "https://docs.google.com/document/d/1mU3kiuoIMac5vHRXlMa2sWmHX0g4XzGO/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";
const KwiluPage = () => {
  return (
    <>
      <Hero heading={rootLinks.kwilu.title} />
      <DriveLink url={url} />
      <Reports
        region={regionMap.kwilu}
        heading="PRISE II"
        data={convertFromVariant(tableKiwlu)}
      />
    </>
  );
};

export default KwiluPage;
