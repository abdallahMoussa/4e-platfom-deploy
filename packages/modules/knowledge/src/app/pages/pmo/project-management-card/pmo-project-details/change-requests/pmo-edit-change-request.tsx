import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { EditChangeRequestToolbar } from "./toolbar/EditChangeRequestToolbar";
import { EditNewchange } from "./components/edit-change-request";


const PmoProjectEditChangeRequest: FC = () => {
  return (
    <>
      <div>
        <EditChangeRequestToolbar/>
        <RightToolbar />
        <EditNewchange/>
      </div>
    </>
  );
};

export { PmoProjectEditChangeRequest };
