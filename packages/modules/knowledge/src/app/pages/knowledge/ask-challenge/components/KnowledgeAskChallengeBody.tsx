import { FC } from "react";
import { KnowledgeChallengeCard } from "./KnowledgeChallengeCard";

const KnowledgeAskChallengeBody: FC = () => {
  return (
    <div className="card card-custom card-stretch gutter-b">
      <div className="card-body">
        <div className="row gy-5">
          <KnowledgeChallengeCard />
          <KnowledgeChallengeCard />
          <KnowledgeChallengeCard />
          <KnowledgeChallengeCard />
          <KnowledgeChallengeCard />
          <KnowledgeChallengeCard />
        </div>
      </div>
    </div>
  );
};

export { KnowledgeAskChallengeBody };
