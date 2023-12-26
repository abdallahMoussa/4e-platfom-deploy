import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import { ManagementCommunicationsReportsToolbar } from "./toolbar/ManagementCommunicationsReportsToolbar";
import ManagementCommunicationsReportsCharts from "./components/ManagementCommunicationsReportsCharts";
import { ManagementCommunicationsReportsTable } from "./components/ManagementCommunicationsReportsTable";

const ManagementCommunicationsReports: FC = () => {
  return (
    <>
      <ManagementCommunicationsReportsToolbar />
      <ManagementCommunicationsReportsCharts />
      <ManagementCommunicationsReportsTable />
      <RightToolbar />
    </>
  );
};

export { ManagementCommunicationsReports };