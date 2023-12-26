import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { PmoProjectCard } from "../PmoProjectCard";
import { LessonsLearnedTable } from "./components/lessons-learned-table";
import { LessonsLearnedToolbar } from "./toolbar/LessonsLearnedToolbar";


const PmoProjectLessonsLearned: FC = () => {
  return (
    <>
      <div>
        <LessonsLearnedToolbar/>
        <RightToolbar />
        <PmoProjectCard ActiveNav={"lessonsLearned"} />
        <LessonsLearnedTable/>
      </div>
    </>
  );
};

export { PmoProjectLessonsLearned };
