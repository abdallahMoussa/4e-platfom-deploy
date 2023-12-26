import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { RisksDetails } from "./components/risks-details";
import { RisksDetailsToolbar } from "./toolbar/RisksDetailsToolbar";

const PmoProjectRisksDetails: FC = () => {
  return (
    <>
      <div>
        <RisksDetailsToolbar />
        <RightToolbar />
        <RisksDetails />
      </div>
    </>
  );
};

export { PmoProjectRisksDetails };
