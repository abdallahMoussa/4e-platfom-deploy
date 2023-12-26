import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { AddRisk } from "./components/add-risk";
import { AddRiskToolbar } from "./toolbar/AddRiskToolbar";

const PmoProjectAddRisk: FC = () => {
  return (
    <>
      <div>
        <AddRiskToolbar />
        <RightToolbar />
        <AddRisk />
      </div>
    </>
  );
};

export { PmoProjectAddRisk };
