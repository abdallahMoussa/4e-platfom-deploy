import React, { Fragment } from "react";
import PmoReportsIndicatorsProjectsStatusToolbar from "./toolbar/PmoReportsIndicatorsProjectsStatusToolba";
import PmoReportsIndicatorsProjectsStatusHome from "./components/PmoReportsIndicatorsProjectsStatus";
import { RightToolbar } from "../partials/RightToolbar";
import { ReportsIndicatorsRightToolbar } from './partials/reports-indicators-right-toolbar/ReportsIndicatorsRightToolbar'

function PmoReportsIndicatorsProjectsStatus() {
  return (
    <Fragment>
      <PmoReportsIndicatorsProjectsStatusToolbar />
      <PmoReportsIndicatorsProjectsStatusHome />
      <RightToolbar />
      <ReportsIndicatorsRightToolbar />
    </Fragment>
  );
}

export default PmoReportsIndicatorsProjectsStatus;
