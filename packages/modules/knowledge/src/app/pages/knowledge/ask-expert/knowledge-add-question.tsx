import React from "react";
import { useIntl } from "react-intl";
import { RightToolbar } from '../partials/RightToolbar'
import { KonwledgeAddQuestionToolbar } from "./toolbar/KonwledgeAddQuestionToolbar";
import { AddQuestion } from "./components/AddQuestion";

const KnowledgeAddQuestion = () => {
    const intl = useIntl()
  return (
    <>
      <KonwledgeAddQuestionToolbar />
      <AddQuestion />
      <RightToolbar />
    </>
  )
}

export {KnowledgeAddQuestion}