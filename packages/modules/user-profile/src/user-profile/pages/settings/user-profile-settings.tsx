import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileSettingsToolbar } from "./toolbar/UserProfileSettingsToolbar";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileCard } from "../../UserProfileCard";
import Settings from "./components/Settings";

const UserProfileSettings: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileSettingsToolbar />
      <RightToolbar />
      <UserProfileCard ActiveNav={intl.formatMessage({ id: "Settings" })} />
      <Settings/>
    </>
  );
};

export { UserProfileSettings };
