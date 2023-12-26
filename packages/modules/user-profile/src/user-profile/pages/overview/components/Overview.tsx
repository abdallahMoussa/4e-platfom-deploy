import React, { Fragment } from "react";
import MainDataOverview from "./MainDataOverview";
import JobDataOverview from "./JobDataOverview";
import ScientificData from "./ScientificData";

function Overview() {
  return (
    <Fragment>
      <MainDataOverview />
      <JobDataOverview />
      <ScientificData />
    </Fragment>
  );
}

export default Overview;
