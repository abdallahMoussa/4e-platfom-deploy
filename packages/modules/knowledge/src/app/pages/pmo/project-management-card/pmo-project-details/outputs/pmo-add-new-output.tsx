import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { AddNewOutput } from "./components/add-new-output";
import { AddNewOutputToolbar } from "./toolbars/AddNewOutputToolbar";


const PmoAddNewOutput: FC = () => {
  return (
    <>
      <div>
        <AddNewOutputToolbar />
        <RightToolbar />
        < AddNewOutput/>
      </div>
    </>
  );
};

export { PmoAddNewOutput };
