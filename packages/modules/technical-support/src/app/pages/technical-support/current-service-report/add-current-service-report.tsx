import React, { Fragment } from "react";
import AddCurrentServiceReportToolbar from "./toolbar/AddCurrentReportToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import AddCurrentReport from "./components/AddCurrentReport";
function AddCurrentServiceReport() {
  return (
    <Fragment>
      <AddCurrentServiceReportToolbar />
      <RightToolbar />
      <AddCurrentReport/>
    </Fragment>
  );
}

export default AddCurrentServiceReport;
