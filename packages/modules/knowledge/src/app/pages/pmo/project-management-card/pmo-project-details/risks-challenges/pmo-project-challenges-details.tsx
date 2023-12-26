import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { ChallengesDetails } from "./components/challenges-details";
import { ChallengesDetailsToolbar } from "./toolbar/ChallengesDetailsToolbar";

const PmoProjectChallengesDetails: FC = () => {
  return (
    <>
      <div>
        <ChallengesDetailsToolbar />
        <RightToolbar />
        <ChallengesDetails />
      </div>
    </>
  );
};

export { PmoProjectChallengesDetails };
