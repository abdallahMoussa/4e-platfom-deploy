import React, { FC } from "react";
import { useIntl } from "react-intl";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileEditJobDataToolbar } from "./toolbar/UserProfileEditJobDataToolbar";
import EditJobDataOverview from "./components/EditJobDataOverview";
import { UserProfileCard } from "../../UserProfileCard";
const UserProfileOverviewEditJobData: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileEditJobDataToolbar />
      <RightToolbar />
      <UserProfileCard ActiveNav={intl.formatMessage({ id: "Overview" })} />
      <EditJobDataOverview />
    </>
  );
};

export { UserProfileOverviewEditJobData };
