import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { ApprovalsDetailsToolbar } from "./toolbar/ApprovalsDetailsToolbar";
import { ApprovalsDetails } from "./components/aprrovals-details";


const PmoProjectApprovalsDetails: FC = () => {
  return (
    <>
      <div>
        <ApprovalsDetailsToolbar />
        <RightToolbar />
        <ApprovalsDetails/>
      </div>
    </>
  );
};

export { PmoProjectApprovalsDetails };
