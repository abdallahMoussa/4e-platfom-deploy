import { FC } from "react";
import TechnicalSupportFeedbacksManagerHome from "./components/TechnicalSupportFeedbacksAdminstrationManager";
import { RightToolbar } from "../partials/RightToolbar";
import { TechnicalSupportFeedbacksManagerToolbar } from "./toolbar/TechnicalSupportFeedbacksManagerToolbar";
const TechnicalSupportFeedbacksManager: FC = () => {
  return (
    <>
      <RightToolbar />
      <TechnicalSupportFeedbacksManagerToolbar />
      <TechnicalSupportFeedbacksManagerHome />
    </>
  );
};

export { TechnicalSupportFeedbacksManager };
