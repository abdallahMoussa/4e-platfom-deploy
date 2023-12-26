import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { AddChangeRequestToolbar } from "./toolbar/AddChangeRequestToolbar";
import { AddNewchange } from "./components/add-new-change";


const PmoProjectAddChangeRequest: FC = () => {
  return (
    <>
      <div>
        <AddChangeRequestToolbar/>
        <RightToolbar />
        <AddNewchange/>
      </div>
    </>
  );
};

export { PmoProjectAddChangeRequest };
