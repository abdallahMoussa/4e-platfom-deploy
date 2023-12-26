import React, { Fragment, useState } from "react";
import { AddTaskToolbar } from "./toolbar/AddTaskToolbar";
import { RightToolbar } from "../../../partials/RightToolbar";
import { AddTask } from "./components/AddTask";
import AddReliabilityPopup from "./popup/AddReliabilityPopup";

function PmoAddTask() {
  return (
    <Fragment>
      <RightToolbar />
      <AddTaskToolbar />
      <AddTask />
      <div
        className={`modal fade `}
        id="Rega_modal_add_reliability"
        tabIndex={-1}
        aria-hidden="true"
        aria-modal="true"
        role="dialog"
      >
        <AddReliabilityPopup />
      </div>
    </Fragment>
  );
}

export default PmoAddTask;
