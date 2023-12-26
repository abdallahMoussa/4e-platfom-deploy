import React, { Fragment } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { EditTaskToolbar } from "./toolbar/EditTaskToolbar";
import {EditTask} from "./components/EditTask";

function PmoAddTask() {
  return (
    <Fragment>
      <RightToolbar />
      <EditTaskToolbar />
      <EditTask />
    </Fragment>
  );
}

export default PmoAddTask;
