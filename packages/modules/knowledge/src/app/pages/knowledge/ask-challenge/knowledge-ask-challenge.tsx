import {FC} from 'react'
import { useIntl } from 'react-intl'
import { KnowledgeAskChallengeToolbar } from './toolbar/KnowledgeAskChallengeToolbar'
import { RightToolbar } from '../partials/RightToolbar'
import { KnowledgeAskChallengeBody } from './components/KnowledgeAskChallengeBody'

const KnowledgeAskChallenge: FC = () => {
  const intl = useIntl()
  return (
    <>
      <KnowledgeAskChallengeToolbar />
      <KnowledgeAskChallengeBody />
      <RightToolbar />
    </>
  )
}

export { KnowledgeAskChallenge }
