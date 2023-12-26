import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileToolbar } from "./toolbar/UserProfileToolbar";
import { RightToolbar } from "./partials/RightToolbar";
import { UserProfileCard } from "./UserProfileCard";
import Overview from "./pages/overview/components/Overview";

const UserProfile: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileToolbar />
      <RightToolbar />
      <UserProfileCard ActiveNav="" />
      <Overview />
    </>
  );
};

export { UserProfile };
