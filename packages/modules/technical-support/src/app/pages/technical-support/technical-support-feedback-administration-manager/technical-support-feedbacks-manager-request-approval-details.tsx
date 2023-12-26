import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import TechnicalSupportFeedbacksAdminstrationManagerApprovalDetailsHome from './components/TechnicalSupportFeedbacksManagerApprovalDetails'
import TechnicalSupportModToolbar from "./toolbar/TechnicalSupportModToolbar";
const TechnicalSupportFeedbacksAdminstrationManagerApprovalRequestDetails: FC = () => {
  return (
    <>
      <RightToolbar />
      <TechnicalSupportModToolbar/>
      <TechnicalSupportFeedbacksAdminstrationManagerApprovalDetailsHome />
    </>
  );
};

export { TechnicalSupportFeedbacksAdminstrationManagerApprovalRequestDetails };
