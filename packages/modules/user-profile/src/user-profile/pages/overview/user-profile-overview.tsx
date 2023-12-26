import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileOverviewToolbar } from "./toolbar/UserProfileOverviewToolbar";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileCard } from "../../UserProfileCard";
import  Overview  from "./components/Overview";

const UserProfileOverview: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileOverviewToolbar />
      <RightToolbar />
      <UserProfileCard ActiveNav={intl.formatMessage({ id: "Overview" })} />
      <Overview/>
    </>
  );
};

export { UserProfileOverview };
