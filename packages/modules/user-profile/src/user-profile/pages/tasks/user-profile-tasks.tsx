import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileTasksToolbar } from "./toolbar/UserProfileTasksToolbar";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileCard } from "../../UserProfileCard";
import Tasks from "./components/Tasks";

const UserProfileTasks: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileTasksToolbar />
      <RightToolbar />
      <UserProfileCard ActiveNav={intl.formatMessage({ id: "Tasks" })} />
      <Tasks/>
    </>
  );
};

export { UserProfileTasks };
