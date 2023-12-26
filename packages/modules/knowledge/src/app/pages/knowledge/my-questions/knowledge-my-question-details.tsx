import { RightToolbar } from '../partials/RightToolbar'
import { KnowledgeMyQuestionDetailsToolbar } from "./toolbar/KnowledgeMyQuestionDetailsToolbar";
import { KnowledgeQuestionDetails } from "./components/QuestionDetails";

const KnowledgeMyQuestionDetails = () => {
  return (
    <>
      <KnowledgeMyQuestionDetailsToolbar />
      <KnowledgeQuestionDetails />
      <RightToolbar />
    </>
  )
}

export default KnowledgeMyQuestionDetails