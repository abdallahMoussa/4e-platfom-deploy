import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { EditRisk } from "./components/edit-risk";
import { EditRiskToolbar } from "./toolbar/EditRiskToolbar";

const PmoProjectEditRisk: FC = () => {
  return (
    <>
      <div>
        <EditRiskToolbar />
        <RightToolbar />
        <EditRisk />
      </div>
    </>
  );
};

export { PmoProjectEditRisk };
