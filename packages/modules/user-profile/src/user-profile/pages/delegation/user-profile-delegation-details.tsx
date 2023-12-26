import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileDelegationDetailsToolbar } from "./toolbar/UserProfileDelegationDetailsToolbar";
import { RightToolbar } from "../../partials/RightToolbar";
import DelegationDetails from "./components/DelegationDetails";

const UserProfileDelegationDetails: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileDelegationDetailsToolbar />
      <RightToolbar />
      <DelegationDetails/>
    </>
  );
};

export { UserProfileDelegationDetails };
