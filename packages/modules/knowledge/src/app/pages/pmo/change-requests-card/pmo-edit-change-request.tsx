import { FC } from 'react'
import { RightToolbar } from '../partials/RightToolbar'
import { EditChangeRequest } from './components/edit-change-request'
import { PmpEditChangeToolbar } from './toolbar/PmoEditChangeToolbar'

const PmoEditChangeRequest: FC = () => {
  return (
    <>
      <PmpEditChangeToolbar />
      <EditChangeRequest />
      <RightToolbar />
    </>
  )
}

export default PmoEditChangeRequest