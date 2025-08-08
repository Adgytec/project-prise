import Hero from "@/components/Hero/Hero";
import TableVariant from "@/components/table/TableVariant";
import { rootLinks } from "@/data/navigation";
import { tableMaindombe } from "@/data/reports-table/maindombe";
import React from "react";
import DriveLink from "../drive-link/DriveLink";
import Reports from "@/components/Reports/Reports";
import { convertFromVariant, regionMap } from "@/components/Reports/types";
export const revalidate = 3600;

const url =
  "https://docs.google.com/document/d/19tS8QzkW5miVJg3IE8mFax2y3KsezMrp/edit?usp=sharing&ouid=111217782836782452255&rtpof=true&sd=true";

const MaindombePage = () => {
  return (
    <>
      <Hero heading={rootLinks.maindombe.title} />
      <DriveLink url={url} />
      <Reports
        heading="PRISE II"
        data={convertFromVariant(tableMaindombe)}
        region={regionMap.maindombe}
      />
    </>
  );
};

export default MaindombePage;
