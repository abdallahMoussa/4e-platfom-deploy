import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { KnowledgeAskExpertToolbar } from './toolbar/KnowledgeAskExpertToolbar'
import { RightToolbar } from '../partials/RightToolbar'
import { AllQuestion } from './components/AllQuestion'

const KnowledgeAskExpert: FC = () => {
  const intl = useIntl()
  return (
    <>
      <KnowledgeAskExpertToolbar />
      <AllQuestion />
      <RightToolbar />
    </>
  )
}

export { KnowledgeAskExpert }
