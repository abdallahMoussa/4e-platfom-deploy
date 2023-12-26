import { FC } from 'react'
import { RightToolbar } from '../partials/RightToolbar'
import PmoProblemDetailsToolbar from './toolbar/PmoProblemsDetailsToolbar'
import ProblemDetails from './components/ProblemDetails'

const PmoProblemChallengeDetails: FC = () => {
  return (
    <>
      <PmoProblemDetailsToolbar />
      <ProblemDetails />
      <RightToolbar />
    </>
  )
}

export default PmoProblemChallengeDetails