import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { PmoProjectCard } from "../PmoProjectCard";
import { RequestsTable } from "./components/change-requests-table";
import { ChangesRequestsToolbar } from "./toolbar/ChangesRequestsToolbar";


const PmoProjectChangeRequests: FC = () => {
  return (
    <>
      <div>
        <ChangesRequestsToolbar/>
        <RightToolbar />
        <PmoProjectCard ActiveNav={"changeRequests"} />
        <RequestsTable/>
      </div>
    </>
  );
};

export { PmoProjectChangeRequests };
