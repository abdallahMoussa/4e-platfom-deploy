import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileDelegationToolbar } from "./toolbar/UserProfileDelegationToolbar";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileCard } from "../../UserProfileCard";
import Delegation from "./components/Delegation";

const UserProfileDelegation: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileDelegationToolbar />
      <RightToolbar />
      <UserProfileCard ActiveNav={intl.formatMessage({ id: "TheDelegation" })} />
      <Delegation/>
    </>
  );
};

export { UserProfileDelegation };
