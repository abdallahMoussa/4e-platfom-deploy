import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import CommunicationsEmloyeesCharts from "./components/CommunicationsEmloyeesCharts";
import { CommunicationsEmloyeesTable } from "./components/CommunicationsEmloyeesTable";
import { ReportsEmployeesToolbar } from "./toolbar/ReportsEmployeesToolbar";
import ReportEmployeesCharts from "./components/ReportEmployeesCharts";
import { ReportEmployeeTable } from "./components/ReportEmployeeTable";

const ReportsEmployees: FC = () => {
  return (
    <>
      <ReportsEmployeesToolbar />
      <ReportEmployeesCharts />
      <ReportEmployeeTable />
      <RightToolbar />
    </>
  );
};

export { ReportsEmployees };