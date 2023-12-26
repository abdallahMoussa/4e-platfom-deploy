import { FC } from "react";
import { KnowledgeBloggingToolbar } from "./toolbar/KnowledgeBloggingToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import { KnowledgeBloggingBody } from "./components/KnowledgeBloggingBody";

const KnowledgeBlogging: FC = () => {
  return (
    <>
      <KnowledgeBloggingToolbar />
      <KnowledgeBloggingBody />
      <RightToolbar />
    </>
  );
};

export { KnowledgeBlogging };
