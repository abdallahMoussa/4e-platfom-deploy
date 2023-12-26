import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { AddChallenge } from "./components/add-challenge";
import { AddChallengeToolbar } from "./toolbar/AddChallengeToolbar";

const PmoProjectAddChallenge: FC = () => {
  return (
    <>
      <div>
      <AddChallengeToolbar />
        <RightToolbar />
        <AddChallenge />
      </div>
    </>
  );
};

export { PmoProjectAddChallenge };
