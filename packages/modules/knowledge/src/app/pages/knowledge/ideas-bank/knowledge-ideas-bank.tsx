import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { KnowledgeIdeasBankToolbar } from './toolbar/KnowledgeIdeasBankToolbar'
import { RightToolbar } from '../partials/RightToolbar'
import { IdeaCard } from './components/IdeaCard'

const KnowledgeIdeasBank: FC = () => {
  const intl = useIntl()
  return (
    <>
      <KnowledgeIdeasBankToolbar />
      <IdeaCard />
      <RightToolbar />
    </>
  )
}

export { KnowledgeIdeasBank }
