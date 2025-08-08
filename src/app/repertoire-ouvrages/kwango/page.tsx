import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableKwango } from "@/data/reports-table/kwango";
import React from "react";
import DriveLink from "../drive-link/DriveLink";
import Reports from "@/components/Reports/Reports";
import { convertFromVariant, regionMap } from "@/components/Reports/types";
export const revalidate = 3600;

const url =
  "https://docs.google.com/document/d/1wHc7W7eqU6mp4DX4rVVqPHKALPaB4iI2/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";

const KwangoPage = () => {
  return (
    <>
      <Hero heading={rootLinks.kwango.title} />
      <DriveLink url={url} />
      <Reports
        heading="PRISE II"
        data={convertFromVariant(tableKwango)}
        region={regionMap.kwango}
      />
    </>
  );
};

export default KwangoPage;
