import { FC } from "react";
import { TechnicalSupportFeedbacksAdministrationEmployeeToolbar } from "./toolbar/TechnicalSupportFeedbacksAdministrationEmployeeToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import TechnicalSupportAdminstrationEmployeeReports from "./components/TechnicalSupportAdminstrationEmployeeReports";

const TechnicalSupportFeedbacksAdministrationEmployee: FC = () => {
  return (
    <>
      <RightToolbar />
      <TechnicalSupportFeedbacksAdministrationEmployeeToolbar/>
      <TechnicalSupportAdminstrationEmployeeReports/>
    </>
  );
};

export { TechnicalSupportFeedbacksAdministrationEmployee };
