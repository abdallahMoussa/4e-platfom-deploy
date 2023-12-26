import { FC } from "react";
import { KnowledgeAskChallengeToolbarDetails } from "./toolbar/KnowledgeAskChallengeToolbarDetails";
import { RightToolbar } from "../partials/RightToolbar";
import { KnowledgeChallengeDetailsAdmin } from "./components/KnowledgeChallengeDetailsAdmin";

const KnowledgeAskChallengeDetailsAdmin: FC = () => {
  return (
    <>
      <KnowledgeAskChallengeToolbarDetails />
      <KnowledgeChallengeDetailsAdmin />
      <RightToolbar />
    </>
  );
};

export { KnowledgeAskChallengeDetailsAdmin };
