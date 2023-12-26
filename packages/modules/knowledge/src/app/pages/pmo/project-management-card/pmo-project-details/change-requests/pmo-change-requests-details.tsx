import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { ChangesRequestsDetailsToolbar } from "./toolbar/ChangesRequestsDetailsToolbar";
import { ChangeRequestsDetails } from "./components/change-requests-details";


const PmoProjectChangeRequestsDetails: FC = () => {
  return (
    <>
      <div>
        <ChangesRequestsDetailsToolbar/>
        <RightToolbar />
        <ChangeRequestsDetails/>
      </div>
    </>
  );
};

export { PmoProjectChangeRequestsDetails };
