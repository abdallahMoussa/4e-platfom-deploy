import { FC } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import TechnicalSupportReportsDetailsHome from "./components/TechnicalSupportReportsDetails";
import TechnicalSupportFeedbacksEmployeeDetailsToolbar from "./toolbar/TechnicalSupportFeedbacksEmployeeDetailsToolbar";
const TechnicalSupportFeedbacksEmployeeDetails: FC = () => {
  return (
    <>
      <RightToolbar />
      <TechnicalSupportFeedbacksEmployeeDetailsToolbar />
      <TechnicalSupportReportsDetailsHome />
    </>
  );
};

export { TechnicalSupportFeedbacksEmployeeDetails };
