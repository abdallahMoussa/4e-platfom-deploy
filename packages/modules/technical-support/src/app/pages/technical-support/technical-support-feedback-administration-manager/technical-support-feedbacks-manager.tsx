import { FC } from "react";
import TechnicalSupportFeedbacksManagerHome from "./components/TechnicalSupportFeedbacksManager";
import { RightToolbar } from "../partials/RightToolbar";
import { TechnicalSupportFeedbacksAdminstrationManagerToolbar } from "./toolbar/TechnicalSupportFeedbacksAdminstrationManagerToolbar ";
const TechnicalSupportFeedbacksAdminstrationManager: FC = () => {
  return (
    <>
      <RightToolbar />
      <TechnicalSupportFeedbacksAdminstrationManagerToolbar />
      <TechnicalSupportFeedbacksManagerHome />
    </>
  );
};

export {TechnicalSupportFeedbacksAdminstrationManager};
