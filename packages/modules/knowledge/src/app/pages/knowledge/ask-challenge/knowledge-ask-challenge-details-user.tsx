import { FC } from "react";
import { KnowledgeAskChallengeToolbarDetails } from "./toolbar/KnowledgeAskChallengeToolbarDetails";
import { RightToolbar } from "../partials/RightToolbar";
import { KnowledgeChallengeDetailsUser } from "./components/KnowledgeChallengeDetailsUser";

const KnowledgeAskChallengeDetailsUser: FC = () => {
  return (
    <>
      <KnowledgeAskChallengeToolbarDetails />
      <KnowledgeChallengeDetailsUser />
      <RightToolbar />
    </>
  );
};

export { KnowledgeAskChallengeDetailsUser };
