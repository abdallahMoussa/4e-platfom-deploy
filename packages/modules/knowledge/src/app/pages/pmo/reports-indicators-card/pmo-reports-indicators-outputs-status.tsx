import React, { Fragment } from "react";
import PmoReportsIndicatorsOuputsStatusToolbar from './toolbar/PmoReportsIndicatorOutputsStatusToolbar'
import { RightToolbar } from "../partials/RightToolbar";
import PmoReportsIndicatorsOuputsStatusHome from './components/PmoReportsIndicatorOutputsStatus'
import { ReportsIndicatorsRightToolbar } from './partials/reports-indicators-right-toolbar/ReportsIndicatorsRightToolbar'

function PmoReportsIndicatorsOuputsStatus() {
  return (
    <Fragment>
        <PmoReportsIndicatorsOuputsStatusToolbar/>
        <PmoReportsIndicatorsOuputsStatusHome/>
      <RightToolbar />
      <ReportsIndicatorsRightToolbar />
    </Fragment>
  );
}

export default PmoReportsIndicatorsOuputsStatus;
