import React, { FC } from "react";
import { useIntl } from "react-intl";
import { TechnicalReportsSolutionsToolbar } from "./toolbar/TechnicalReportsSolutionsToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import TechnicalReportsSolutionsHome from "./components/TechnicalReportsSolutions";
const TechnicalReportsSolutions: FC = () => {
  const intl = useIntl();
  return (
    <>
      <TechnicalReportsSolutionsToolbar />
      <RightToolbar />
      <TechnicalReportsSolutionsHome />
    </>
  );
};

export { TechnicalReportsSolutions };
