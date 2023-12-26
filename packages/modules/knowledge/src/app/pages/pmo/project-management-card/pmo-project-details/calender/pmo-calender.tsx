import React, { Fragment } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { CalenderToolbar } from "./toolbars/CalenderToolbar";
import { PmoProjectCard } from "../PmoProjectCard";
import Calender from "./components/Calender";

function PmoCalender() {
  return (
    <Fragment>
      <CalenderToolbar />
      <RightToolbar />
      <PmoProjectCard ActiveNav={"calender"} />
      <Calender />
    </Fragment>
  );
}

export default PmoCalender;
