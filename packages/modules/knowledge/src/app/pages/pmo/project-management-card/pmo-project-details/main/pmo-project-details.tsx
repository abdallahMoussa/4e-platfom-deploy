import React, { FC } from "react";

import { Row } from "react-bootstrap";
import { NewestAttachments } from "./components/newest-attachments";
import { MyTasks } from "./components/my-tasks";
import { TaskOverTime } from "./components/task-overtime";
import { TaskSummary } from "./components/task-summary";
import { MileStones } from "./components/milestones";
import { PmoProjectCard } from "../PmoProjectCard";
import { RightToolbar } from "../../../partials/RightToolbar";
import { ProjectDetailsToolbar } from "./toolbars/ProjectDetailsToolbar";


const PmoProjectDetails: FC = () => {
  return (
    <>
      <div>
        <ProjectDetailsToolbar />
        <RightToolbar />
        <PmoProjectCard ActiveNav={"mainSection"} />
        <MileStones />
        <Row>
          <TaskSummary />
          <TaskOverTime />
        </Row>
        <Row>
          <MyTasks />
          <NewestAttachments />
        </Row>
      </div>
    </>
  );
};

export { PmoProjectDetails };
