import React, { FC } from "react";
import { useIntl } from "react-intl";
import { KnowledgeBloggingToolbarDetails } from "./toolbar/KnowledgeBloggingToolbarDetails";
import { RightToolbar } from "../partials/RightToolbar";
import { KnowledgeBlogDetailsAdmin } from "./components/KnowledgeBlogDetailsAdmin";

const KnowledgeBloggingDetailsAdmin: FC = () => {
  const intl = useIntl();
  return (
    <>
      <KnowledgeBloggingToolbarDetails />
      <KnowledgeBlogDetailsAdmin />
      <RightToolbar />
    </>
  );
};

export { KnowledgeBloggingDetailsAdmin };
