import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileEditBasicInfoToolbar } from "./toolbar/UserProfileEditBasicInfoToolbar";
import { RightToolbar } from "../../partials/RightToolbar";
import EditBasicInfoOverview from "./components/EditBasicInfoOverview";
import { UserProfileCard } from "../../UserProfileCard";
const UserProfileOverviewEditBasicInfo: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileEditBasicInfoToolbar />
      <RightToolbar />
      <UserProfileCard ActiveNav={intl.formatMessage({ id: "Overview" })} />
      <EditBasicInfoOverview />
    </>
  );
};

export { UserProfileOverviewEditBasicInfo };
