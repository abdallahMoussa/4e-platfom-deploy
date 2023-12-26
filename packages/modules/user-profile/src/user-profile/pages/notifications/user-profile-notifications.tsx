import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileNotificationsToolbar } from "./toolbar/UserProfileNotificationsToolbar";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileCard } from "../../UserProfileCard";
import Notifications from "./components/Notifications";

const UserProfileNotifications: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileNotificationsToolbar />
      <RightToolbar />
      <UserProfileCard
        ActiveNav={intl.formatMessage({ id: "Notifications" })}
      />
      <Notifications/>
    </>
  );
};

export { UserProfileNotifications };
