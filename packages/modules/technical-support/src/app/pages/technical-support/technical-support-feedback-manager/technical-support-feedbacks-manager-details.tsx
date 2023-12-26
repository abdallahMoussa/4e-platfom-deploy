import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import TechnicalSupportFeedbacksManagerDetailsHome from './components/TechnicalSupportFeedbacksAdminstrationManagerDetails'
import TechnicalSupportFeedbacksManagerDetailsToolbar from "./toolbar/TechnicalSupportFeedbacksManagerToolbarDetails";
const TechnicalSupportFeedbacksManagerDetails: FC = () => {
  return (
    <>
      <RightToolbar />
      <TechnicalSupportFeedbacksManagerDetailsToolbar/>
      <TechnicalSupportFeedbacksManagerDetailsHome/>
    </>
  );
};

export { TechnicalSupportFeedbacksManagerDetails };
