import { FC } from 'react'
import { AddNewChangeReqest } from './components/add-new-change-requast'
import { PmpAddNewChangeToolbar } from './toolbar/PmpAddNewChangeToolbar'
import { RightToolbar } from '../partials/RightToolbar'

const PmoAddNewChangeRequest: FC = () => {
  return (
    <>
      <PmpAddNewChangeToolbar />
      <AddNewChangeReqest />
      <RightToolbar />
    </>
  )
}

export default PmoAddNewChangeRequest