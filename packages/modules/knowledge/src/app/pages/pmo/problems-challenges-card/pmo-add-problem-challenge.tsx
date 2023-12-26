import { FC } from 'react'
import { RightToolbar } from '../partials/RightToolbar'
import { AddNewProblem } from './components/add-new-problem-requast'
import { PmpAddNewProblemToolbar } from './toolbar/PmpAddNewProblemToolbar'

const PmoAddProblemChallenge: FC = () => {
  return (
    <>
      <PmpAddNewProblemToolbar />
      <AddNewProblem />
      <RightToolbar />
    </>
  )
}

export default PmoAddProblemChallenge