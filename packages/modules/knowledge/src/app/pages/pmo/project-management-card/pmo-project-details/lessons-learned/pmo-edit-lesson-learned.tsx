import { FC } from "react";
import { RightToolbar } from "../../../partials/RightToolbar";
import { EditLessonLearnedToolbar } from "./toolbar/EditLessonLearnedToolbar";
import { EditLearnedLesson } from "./components/edit-learned-lesson";


const PmoProjectEditLearnedLesson: FC = () => {
  return (
    <>
      <div>
        <EditLessonLearnedToolbar/>
        <RightToolbar />
        <EditLearnedLesson/>
      </div>
    </>
  );
};

export { PmoProjectEditLearnedLesson };
