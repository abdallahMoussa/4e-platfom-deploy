import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { CloseProjectToolbar } from "./toolbar/CloseProjectToolbar";
import { ClosingItems } from "./components/closing-items";
import { ProjectStatus } from "./components/project-status";
import { Row } from "react-bootstrap";



const PmoCloseProject: FC = () => {
  return (
    <>
      <div>
        <CloseProjectToolbar/>
        <RightToolbar />
        <Row>
        <ClosingItems/>
        <ProjectStatus/>
        </Row>
      </div>
    </>
  );
};

export { PmoCloseProject };
