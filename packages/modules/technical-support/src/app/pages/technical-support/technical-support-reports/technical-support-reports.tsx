import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import { TechnicalSupportReportsToolbar } from "./toolbar/TechnicalSupportReportsToolbar";
import CommunicationsReport from "./components/CommunicationsReport";
import { CommunicationsReportTable } from "./components/CommunicationsReportTable";
import CommunicationsReportChart from "./components/CommunicationsReportCharts";

const TechnicalSupportReports: FC = () => {
  return (
    <>
      <TechnicalSupportReportsToolbar/>
      <CommunicationsReport />
      <CommunicationsReportChart />
      <CommunicationsReportTable />
      <RightToolbar />
      
    </>
  );
};

export { TechnicalSupportReports };