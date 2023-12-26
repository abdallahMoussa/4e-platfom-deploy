import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { RightToolbar } from '../partials/RightToolbar'
import { KnowledgeIdeaBankDetailsToolbar } from './toolbar/KnowledgeIdeaBankDetailsToolbar'
import { IdeaDetails } from './components/IdeaDetails'

const KnowledgeIdeasBankDetails: FC = () => {
  const intl = useIntl()
  return (
    <>
      <KnowledgeIdeaBankDetailsToolbar />
      <IdeaDetails />
      <RightToolbar />
    </>
  )
}

export { KnowledgeIdeasBankDetails }