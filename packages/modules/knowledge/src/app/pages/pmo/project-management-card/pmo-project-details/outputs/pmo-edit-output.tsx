import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { EditOutput } from "./components/edit-output";
import { EditOutputToolbar } from "./toolbars/EditOutputToolbar";


const PmoEditOutput: FC = () => {
  return (
    <>
      <div>
        <EditOutputToolbar />
        <RightToolbar />
        < EditOutput/>
      </div>
    </>
  );
};

export { PmoEditOutput };
