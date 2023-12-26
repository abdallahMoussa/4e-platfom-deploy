import { FC } from "react";
import TechnicalSupportAdminstrationEmployeeReportsDetails from "./components/TechnicalSupportAdminstrationEmployeeReportsDetails";
import { TechnicalSupportFeedbacksAdministrationEmployeeDetailsToolbar } from "./toolbar/TechnicalSupportFeedbacksAdministrationEmployeeDetailsToolbar";
import { RightToolbar } from "../partials/RightToolbar";

const TechnicalSupportFeedbacksAdministrationEmployeeDetails: FC = () => {
  return (
    <>
      <RightToolbar/>
      <TechnicalSupportFeedbacksAdministrationEmployeeDetailsToolbar />
      <TechnicalSupportAdminstrationEmployeeReportsDetails />
    </>
  );
};

export { TechnicalSupportFeedbacksAdministrationEmployeeDetails };
