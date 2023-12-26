import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import TechnicalSupportFeedbacksManagerApprovalDetailsHome from "./components/TechnicalSupportFeedbacksAdminstrationManagerApprovalDetails";
import TechnicalSupportFeedbacksManagerApprovalRequestDetailsToolbar from "./toolbar/TechnicalSupportFeedbacksManagerApprovalRequestDetailsToolbar";
const TechnicalSupportFeedbacksManagerApprovalRequestDetails: FC =
  () => {
    return (
      <>
        <RightToolbar />
        <TechnicalSupportFeedbacksManagerApprovalRequestDetailsToolbar />
        <TechnicalSupportFeedbacksManagerApprovalDetailsHome />
      </>
    );
  };

export { TechnicalSupportFeedbacksManagerApprovalRequestDetails };
