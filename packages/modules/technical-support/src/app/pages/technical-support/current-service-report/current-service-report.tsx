import React, { FC } from "react";
import { useIntl } from "react-intl";
import { CurrentServiceReportToolbar } from "./toolbar/CurrentServiceReportToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import CurrentServiceReportHome from "./components/CurrentServiceReport";
const CurrentServiceReport: FC = () => {
  const intl = useIntl();
  return (
    <>
      <CurrentServiceReportToolbar />
      <RightToolbar />
      <CurrentServiceReportHome />
    </>
  );
};

export { CurrentServiceReport };
