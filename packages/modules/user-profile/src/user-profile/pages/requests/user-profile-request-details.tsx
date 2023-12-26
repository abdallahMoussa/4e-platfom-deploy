import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileRequestDetailsToolbar } from "./toolbar/UserProfileRequestsDetailsToolbar";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileCard } from "../../UserProfileCard";
import RequestDetails from "./components/RequestDetails";
import RequestDetails2 from "./components/PostingRequest";

const UserProfileRequestDetails: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileRequestDetailsToolbar />
      <RightToolbar />
      <RequestDetails/>
    </>
  );
};

export { UserProfileRequestDetails };
