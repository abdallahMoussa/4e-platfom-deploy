import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { OutputsDetails } from "./components/output-details";
import { OutputDetailsToolbar } from "./toolbars/OutputDetailsToolbar";


const PmoProjectOutputsDetails: FC = () => {
  return (
    <>
      <div>
        <OutputDetailsToolbar />
        <RightToolbar />
        <OutputsDetails />
      </div>
    </>
  );
};

export { PmoProjectOutputsDetails };
