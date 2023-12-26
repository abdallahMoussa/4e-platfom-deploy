import React from "react";
import { useIntl } from 'react-intl'
import { RightToolbar } from '../partials/RightToolbar'
import { KnowledgeQuestionDetailsToolbar } from "./toolbar/KnowledgeQuestionDetailsToolbar";
import { KnowledgeQuestionDetails } from "./components/QuestionDetails";

const KonwledgeQuestionDetails = () => {
    const intl = useIntl()
  return (
    <>
      <KnowledgeQuestionDetailsToolbar />
      <KnowledgeQuestionDetails />
      <RightToolbar />
    </>
  )
}

export {KonwledgeQuestionDetails}