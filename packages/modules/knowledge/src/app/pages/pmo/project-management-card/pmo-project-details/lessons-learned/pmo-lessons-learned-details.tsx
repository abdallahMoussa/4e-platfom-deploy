import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { LessonsLearnedDetails } from "./components/lessons-learned-details";
import { LessonsLearnedDetailsToolbar } from "./toolbar/LessonsLearnedDetailsToolbar";


const PmoProjectLessonsLearnedDetails: FC = () => {
  return (
    <>
      <div>
        <LessonsLearnedDetailsToolbar/>
        <RightToolbar />
        <LessonsLearnedDetails/>
      </div>
    </>
  );
};

export { PmoProjectLessonsLearnedDetails };
