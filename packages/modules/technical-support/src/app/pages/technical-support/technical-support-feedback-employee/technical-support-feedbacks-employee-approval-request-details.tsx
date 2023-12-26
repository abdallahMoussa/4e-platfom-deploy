import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import TechnicalRequestApprovalDetailsHome from "./components/TechnicalRequestApprovalDetails";
import TechnicalSupportFeedbacksEmployeeApprovalRequestDetailsToolbar from "./toolbar/TechnicalSupportFeedbacksEmployeeApprovalRequestDetailsToolbar";
const TechnicalSupportFeedbacksEmployeeApprovalRequestDetails: FC = () => {
  return (
    <>
      <RightToolbar />
      <TechnicalSupportFeedbacksEmployeeApprovalRequestDetailsToolbar />
      <TechnicalRequestApprovalDetailsHome />
    </>
  );
};

export { TechnicalSupportFeedbacksEmployeeApprovalRequestDetails };
