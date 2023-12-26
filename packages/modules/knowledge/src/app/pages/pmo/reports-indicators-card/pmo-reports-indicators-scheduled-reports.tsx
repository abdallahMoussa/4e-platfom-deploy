import React, { Fragment } from "react";
import PmoReportsIndicatorsScheduledReportsHome from "./components/PmoReportsIndicatorsScheduledReports";
import PmoReportsIndicatorsScheduledReportsToolbar from "./toolbar/PmoReportsIndicatorsScheduledReportsToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import { ReportsIndicatorsRightToolbar } from './partials/reports-indicators-right-toolbar/ReportsIndicatorsRightToolbar'

function PmoReportsIndicatorsScheduledReports() {
  return (
    <Fragment>
      <PmoReportsIndicatorsScheduledReportsToolbar />
      <PmoReportsIndicatorsScheduledReportsHome />
      <RightToolbar />
      <ReportsIndicatorsRightToolbar />

    </Fragment>
  );
}

export default PmoReportsIndicatorsScheduledReports;
