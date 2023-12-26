import React, { Fragment } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { PmoProjectCard } from "../PmoProjectCard";
import { TasksToolbar } from "./toolbar/TasksToolbar"
import PmoTasksTable from './components/PmoTasks'
function PmoTasks() {
  return (
    <Fragment>
      <TasksToolbar />
      <RightToolbar />
      <PmoProjectCard ActiveNav={"tasks"} />
      <PmoTasksTable/>
    </Fragment>
  );
}

export default PmoTasks;
