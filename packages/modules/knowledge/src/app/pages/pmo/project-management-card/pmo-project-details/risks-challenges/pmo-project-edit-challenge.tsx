import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { EditChallenge } from "./components/edit-challenge";
import { EditChallengeToolbar } from "./toolbar/EditChallengeToolbar";

const PmoProjectEditChallenge: FC = () => {
  return (
    <>
      <div>
      <EditChallengeToolbar />
        <RightToolbar />
        <EditChallenge />
      </div>
    </>
  );
};

export { PmoProjectEditChallenge };
