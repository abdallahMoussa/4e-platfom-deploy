import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { PmoProjectCard } from "../PmoProjectCard";
import { OutputsTable } from "./components/output-table";
import { OutputTableToolbar } from "./toolbars/OutputTableToolbar";


const PmoProjectOutputs: FC = () => {
  return (
    <>
      <div>
        <OutputTableToolbar />
        <RightToolbar />
        <PmoProjectCard ActiveNav={"outputs"} />
        <OutputsTable />
      </div>
    </>
  );
};

export { PmoProjectOutputs };
