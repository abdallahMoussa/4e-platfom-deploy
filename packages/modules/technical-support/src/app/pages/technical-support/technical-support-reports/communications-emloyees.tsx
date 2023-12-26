import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import { CommunicationsSolvedTable } from "./components/CommunicationsSolvedTable";
import { CommunicationsEmloyeesToolbar } from "./toolbar/CommunicationsEmloyeesToolbar";
import CommunicationsEmloyeesCharts from "./components/CommunicationsEmloyeesCharts";
import { CommunicationsEmloyeesTable } from "./components/CommunicationsEmloyeesTable";

const CommunicationsEmployees: FC = () => {
  return (
    <>
      <CommunicationsEmloyeesToolbar />
      <CommunicationsEmloyeesCharts />
      <CommunicationsEmloyeesTable />
      <RightToolbar />
    </>
  );
};

export { CommunicationsEmployees };