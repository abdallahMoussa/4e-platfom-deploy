import {FC} from 'react'
import { KnowledgeMyQuestionsToolbar } from './toolbar/KnowledgeMyQuestionsToolbar'
import { RightToolbar } from '../partials/RightToolbar'
import Questions from './components/Questions'

const KnowledgeMyQuestions: FC = () => {
  return (
    <>
      <KnowledgeMyQuestionsToolbar />
      <Questions/>
      <RightToolbar />
    </>
  )
}

export { KnowledgeMyQuestions }
