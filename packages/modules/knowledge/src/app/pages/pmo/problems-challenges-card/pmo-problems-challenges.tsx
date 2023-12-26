import {FC} from 'react'
import { useIntl } from 'react-intl'
import { PmoProblemsChallengesToolbar } from './toolbar/PmoProblemsChallengesToolbar'
import { RightToolbar } from '../partials/RightToolbar'
import ProblemsAndChallengesTable from './components/ProblemsAndChallengesTable'
import ProblemsSummary from './components/ProblemsAndChallengesSummary'

const PmoProblemsChallenges: FC = () => {
  return (
    <>
      <PmoProblemsChallengesToolbar />
      <ProblemsSummary />
      <ProblemsAndChallengesTable />
      <RightToolbar />
    </>
  )
}

export { PmoProblemsChallenges }
