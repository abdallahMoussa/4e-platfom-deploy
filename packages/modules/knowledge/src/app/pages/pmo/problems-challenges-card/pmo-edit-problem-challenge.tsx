import { FC } from 'react'
import { RightToolbar } from '../partials/RightToolbar'
import { EditProblem } from './components/edit-problem-request'
import { PmoEditProblemToolbar } from './toolbar/PmoEditProblemToolbar'

const PmoEditProblemChallenge: FC = () => {
  return (
    <>
      <PmoEditProblemToolbar />
      <EditProblem />
      <RightToolbar />
    </>
  )
}

export default PmoEditProblemChallenge