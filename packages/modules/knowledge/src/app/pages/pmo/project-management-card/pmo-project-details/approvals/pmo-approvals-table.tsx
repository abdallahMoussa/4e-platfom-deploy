import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { PmoProjectCard } from "../PmoProjectCard";
import { ApprovalsTableToolbar } from "./toolbar/ApprovalsTableToolbar";
import { ApprovalsTable } from "./components/approvals-table";


const PmoProjectApprovals: FC = () => {
  return (
    <>
      <div>
        <ApprovalsTableToolbar />
        <RightToolbar />
        <PmoProjectCard ActiveNav={"approvals"} />
        <ApprovalsTable/>
      </div>
    </>
  );
};

export { PmoProjectApprovals };
