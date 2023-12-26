import React, { FC } from "react";
import { useIntl } from "react-intl";
import TechnicalReportsSolutionsDetailsToolbar from "./toolbar/TechnicalReportsSolutionsDetailsToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import TechnicalReportsSolutionsDetailsHome from "./components/TechnicalReportsSolutionsDetails";
const TechnicalReportsSolutionsDetails: FC = () => {
  const intl = useIntl();
  return (
    <>
      <TechnicalReportsSolutionsDetailsToolbar />
      <RightToolbar />
      <TechnicalReportsSolutionsDetailsHome />
    </>
  );
};

export { TechnicalReportsSolutionsDetails };
