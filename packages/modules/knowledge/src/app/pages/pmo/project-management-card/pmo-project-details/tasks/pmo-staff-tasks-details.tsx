import React, { Fragment } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { StaffTasksDetailsToolbar } from "./toolbar/StaffTasksDetailsToolbar";
import StaffTasksDetails from "./components/StaffTasksDetails";

function PmoStaffTasksDetails() {
  return (
    <Fragment>
      <RightToolbar />
      <StaffTasksDetailsToolbar />
      <StaffTasksDetails />
    </Fragment>
  );
}

export default PmoStaffTasksDetails;
