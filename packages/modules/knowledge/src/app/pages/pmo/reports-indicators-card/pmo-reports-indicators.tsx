import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { PmoReportsIndicatorsToolbar } from "./toolbar/PmoReportsIndicatorsToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import PmoReportsIndicatorsHome from "./components/PmoReportsIndicators";
import { ReportsIndicatorsRightToolbar } from "./partials/reports-indicators-right-toolbar/ReportsIndicatorsRightToolbar";
const PmoReportsIndicators: FC = () => {
  const intl = useIntl();
  return (
    <>
      <PmoReportsIndicatorsToolbar />
      <PmoReportsIndicatorsHome />
      <RightToolbar />
      <ReportsIndicatorsRightToolbar />
    </>
  );
};

export { PmoReportsIndicators };
