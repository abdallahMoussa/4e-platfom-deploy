import React, { FC } from "react";
import { useIntl } from "react-intl";
import { KnowledgeBloggingToolbarDetails } from "./toolbar/KnowledgeBloggingToolbarDetails";
import { RightToolbar } from "../partials/RightToolbar";
import { KnowledgeBlogDetailsUser } from "./components/KnowledgeBlogDetailsUser";

const KnowledgeBloggingDetailsUser: FC = () => {
  const intl = useIntl();
  return (
    <>
      <KnowledgeBloggingToolbarDetails />
      <KnowledgeBlogDetailsUser />
      <RightToolbar />
    </>
  );
};

export { KnowledgeBloggingDetailsUser };
