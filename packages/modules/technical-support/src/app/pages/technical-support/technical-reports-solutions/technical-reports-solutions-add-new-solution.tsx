import React, { FC } from "react";
import { useIntl } from "react-intl";
import AddingNewSolutionToTechnicalSupportReportsToolbar from "./toolbar/AddingNewSolutionToTechnicalSupportReportsToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import AddingNewSolutionToTechnicalSupportReportsHome from "./components/AddingNewSolutionToTechnicalSupportReports";
const AddingNewSolutionToTechnicalSupportReports: FC = () => {
  const intl = useIntl();
  return (
    <>
      <AddingNewSolutionToTechnicalSupportReportsToolbar />
      <RightToolbar />
      <AddingNewSolutionToTechnicalSupportReportsHome />
    </>
  );
};

export { AddingNewSolutionToTechnicalSupportReports };
