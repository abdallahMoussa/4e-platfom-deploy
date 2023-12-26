import React, { FC } from "react";
import { useIntl } from "react-intl";
import EditingSolutionToTechnicalSupportReportsToolbar from "./toolbar/EditingSolutionToTechnicalSupportReportsToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import EditingSolutionToTechnicalSupportReportsHome from "./components/EditingSolutionToTechnicalSupportReports";
const EditingSolutionToTechnicalSupportReports: FC = () => {
  const intl = useIntl();
  return (
    <>
      <EditingSolutionToTechnicalSupportReportsToolbar />
      <RightToolbar />
      <EditingSolutionToTechnicalSupportReportsHome />
    </>
  );
};

export { EditingSolutionToTechnicalSupportReports };
