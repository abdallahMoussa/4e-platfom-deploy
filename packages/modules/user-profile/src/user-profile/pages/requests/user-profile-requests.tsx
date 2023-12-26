import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileRequestsToolbar } from "./toolbar/UserProfileRequestsToolbar";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileCard } from "../../UserProfileCard";
import RequestsTables from "./components/RequestsTables";

const UserProfileRequests: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileRequestsToolbar />
      <RightToolbar />
      <UserProfileCard ActiveNav={intl.formatMessage({ id: "Requests" })} />
      <RequestsTables/>
    </>
  );
};

export { UserProfileRequests };
