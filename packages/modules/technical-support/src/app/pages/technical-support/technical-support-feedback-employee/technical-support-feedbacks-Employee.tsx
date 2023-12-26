import { FC, Fragment } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import TechnicalSupportReportsHome from "./components/TechnicalSupportReports";
import { TechnicalSupportFeedbacksEmployeeToolbar } from "./toolbar/TechnicalSupportFeedbacksEmployeeToolbar";

const TechnicalSupportFeedbacksEmployee: FC = () => {
  return (
    <Fragment>
      <RightToolbar />
      <TechnicalSupportFeedbacksEmployeeToolbar />
      <TechnicalSupportReportsHome />
    </Fragment>
  );
};

export { TechnicalSupportFeedbacksEmployee };
