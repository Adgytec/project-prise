import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableHautLomami } from "@/data/reports-table/haut-lomami";
import React from "react";
import DriveLink from "../drive-link/DriveLink";
import Reports from "@/components/Reports/Reports";
import { convertFromVariant, regionMap } from "@/components/Reports/types";

export const revalidate = 3600;

const url =
  "https://docs.google.com/document/d/1ialqya9ImJnyXp15Om47OYm2f9tVJVeC/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";

const HautLomamiPage = () => {
  return (
    <>
      <Hero heading={rootLinks.hautLomami.title} />
      <DriveLink url={url} />
      <Reports
        heading="PRISE II"
        data={convertFromVariant(tableHautLomami)}
        region={regionMap.hautLomami}
      />
    </>
  );
};

export default HautLomamiPage;
