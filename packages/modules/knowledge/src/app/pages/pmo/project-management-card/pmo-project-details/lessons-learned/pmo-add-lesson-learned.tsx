import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { AddLearnedLesson } from "./components/add-learned-lesson";
import { AddLessonLearnedToolbar } from "./toolbar/AddLessonLearnedToolbar";


const PmoProjectAddLearnedLesson: FC = () => {
  return (
    <>
      <div>
        <AddLessonLearnedToolbar/>
        <RightToolbar />
        <AddLearnedLesson/>
      </div>
    </>
  );
};

export { PmoProjectAddLearnedLesson };
