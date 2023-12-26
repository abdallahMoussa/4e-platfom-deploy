import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import { CommunicationsSolvedToolbar } from "./toolbar/CommunicationsSolvedToolbar";
import CommunicationsSolvedCharts from "./components/CommunicationsSolvedCharts";
import { CommunicationsSolvedTable } from "./components/CommunicationsSolvedTable";

const CommunicationsSolved: FC = () => {
  return (
    <>
      <CommunicationsSolvedToolbar />
      <CommunicationsSolvedCharts />
      <CommunicationsSolvedTable />
      <RightToolbar />
    </>
  );
};

export { CommunicationsSolved };