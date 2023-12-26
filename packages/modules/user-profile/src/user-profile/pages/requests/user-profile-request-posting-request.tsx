import React, { FC } from "react";
import { useIntl } from "react-intl";
import { UserProfileRequestsPostingRequestToolbar } from "./toolbar/UserProfileRequestsPostingRequestToolbar";
import { RightToolbar } from "../../partials/RightToolbar";
import { UserProfileCard } from "../../UserProfileCard";
import PostingRequest from "./components/PostingRequest";

const UserProfileRequestPostingRequest: FC = () => {
  const intl = useIntl();
  return (
    <>
      <UserProfileRequestsPostingRequestToolbar />
      <RightToolbar />
      <PostingRequest />
    </>
  );
};

export { UserProfileRequestPostingRequest };
