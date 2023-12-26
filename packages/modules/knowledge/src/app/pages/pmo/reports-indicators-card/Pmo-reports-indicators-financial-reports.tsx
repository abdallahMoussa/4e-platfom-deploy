import React, { Fragment } from "react";

import { RightToolbar } from "../partials/RightToolbar";
import PmoReportsIndicatorFinancialReportsToolbar from "./toolbar/PmoReportsIndicatorFinancialReportsToolbar";
import PmoReportsIndicatorReportsFinancialReports from "./components/PmoReportsIndicatorFinancialReports";
import { ReportsIndicatorsRightToolbar } from './partials/reports-indicators-right-toolbar/ReportsIndicatorsRightToolbar'


function PmoReportsIndicatorsFinancialReports() {
  return (
    <Fragment>
        <PmoReportsIndicatorFinancialReportsToolbar/>
        <PmoReportsIndicatorReportsFinancialReports/>
      <RightToolbar />
      <ReportsIndicatorsRightToolbar />
    </Fragment>
  );
}

export default PmoReportsIndicatorsFinancialReports;
