import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import TechnicalSupportFeedbacksAdminstrationManagerDetailsHome from "./components/TechnicalSupportFeedbacksManagerDetails";
import TechnicalSupportFeedbacksAdminstrationManagerDetailsToolbar from "./toolbar/TechnicalSupportFeedbacksAdminstrationManagerDetailsToolbar";
const TechnicalSupportFeedbacksAdminstrationManagerDetails: FC = () => {
  return (
    <>
      <RightToolbar />
      <TechnicalSupportFeedbacksAdminstrationManagerDetailsToolbar />
      <TechnicalSupportFeedbacksAdminstrationManagerDetailsHome />
    </>
  );
};

export { TechnicalSupportFeedbacksAdminstrationManagerDetails };
