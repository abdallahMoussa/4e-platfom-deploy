import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { PmoProjectCard } from "../PmoProjectCard";
import { RisksTable } from "./components/risks-table";
import { ChallengesTable } from "./components/challenges-table";
import { RisksAndChallengesTableToolbar } from "./toolbar/RisksAndChallengesTableToolbar";

const PmoProjectRisksAndChallenges: FC = () => {
  return (
    <>
      <div>
        <RisksAndChallengesTableToolbar />
        <RightToolbar />
        <PmoProjectCard ActiveNav={"risksAndChallenges"} />
        <RisksTable />
        <ChallengesTable/>
      </div>
    </>
  );
};

export { PmoProjectRisksAndChallenges };
