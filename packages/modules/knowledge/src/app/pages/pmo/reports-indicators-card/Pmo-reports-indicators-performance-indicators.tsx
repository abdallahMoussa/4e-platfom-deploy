import React, { Fragment } from "react";
import PmoReportsIndicatorsPerformanceIndicatorsToolbar from "./toolbar/PmoReportsIndicatorsPerformanceIndicatorsToolbar";
import PmoReportsIndicatorsPerformanceIndicatorsHome from './components/PmoReportsIndicatorsPerformanceIndicatorsToolbar'
import { RightToolbar } from "../partials/RightToolbar";
import { ReportsIndicatorsRightToolbar } from './partials/reports-indicators-right-toolbar/ReportsIndicatorsRightToolbar'

function PmoReportsIndicatorsPerformanceIndicators() {
  return (
    <Fragment>
      <PmoReportsIndicatorsPerformanceIndicatorsToolbar />
      <PmoReportsIndicatorsPerformanceIndicatorsHome />
      <RightToolbar />
      <ReportsIndicatorsRightToolbar />

    </Fragment>
  );
}

export default PmoReportsIndicatorsPerformanceIndicators;
