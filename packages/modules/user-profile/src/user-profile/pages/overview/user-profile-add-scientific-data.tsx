import React, { FC } from "react";
import { useIntl } from "react-intl";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileCard } from "../../UserProfileCard";
import { UserProfileAddScientificDataToolbar } from "./toolbar/UserProfileAddScientificDataToolbar";
import AddScientificDataOverview from "./components/AddScientificDataOverview";
const UserProfileOverviewAddScientificData: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileAddScientificDataToolbar />
      <RightToolbar />
      <UserProfileCard ActiveNav={intl.formatMessage({ id: "Overview" })} />
      <AddScientificDataOverview />
    </>
  );
};

export { UserProfileOverviewAddScientificData };
