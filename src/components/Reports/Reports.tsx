import ReportsDisplay from "./ReportsDisplay";
import { ReportItem, ReportsProps } from "./types";

const Reports = async ({ heading, data, region }: ReportsProps) => {
  const url = `${process.env.NEXT_PUBLIC_API}/services/prise-reports/${region}`;
  let token = process.env.NEXT_PUBLIC_TOKEN_PHASE_II;
  if (heading === "PRISE I") {
    token = process.env.NEXT_PUBLIC_TOKEN;
  }

  const reportItems: ReportItem[] | null = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) throw new Error(res.message);

      const flattendResponse = res.data.map((item: any) => {
        const { data, ...rest } = item;
        return { ...rest, ...data };
      });
      return flattendResponse;
    })
    .catch((err) => {
      console.error(err.message);
      return null;
    });
  let completeData = data;
  if (reportItems) {
    completeData = [...reportItems, ...data];
  }

  return <ReportsDisplay heading={heading} data={completeData} />;
};

export default Reports;
