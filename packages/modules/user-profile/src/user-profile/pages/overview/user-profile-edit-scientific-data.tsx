import React, { FC } from "react";
import { useIntl } from "react-intl";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileCard } from "../../UserProfileCard";
import EditScientificDataOverview from "./components/EditScientificDataOverview";
import { UserProfileEditScientificDataToolbar } from "./toolbar/UserProfileEditScientificDataToolbar";
const UserProfileOverviewEditScientificData: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileEditScientificDataToolbar />
      <RightToolbar />
      <UserProfileCard ActiveNav={intl.formatMessage({ id: "Overview" })} />
      <EditScientificDataOverview />
    </>
  );
};

export { UserProfileOverviewEditScientificData };
