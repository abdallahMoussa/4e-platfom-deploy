import { FC } from 'react'
import { RightToolbar } from '../partials/RightToolbar'
import PmoChangeDetailsToolbar from './toolbar/PmoChangeDetailsToolbar'
import ChangeRequestDetails from './components/ChangeRequestDetails'

const PmoChangeRequestDetails: FC = () => {
  return (
    <>
      <PmoChangeDetailsToolbar />
      <ChangeRequestDetails />
      <RightToolbar />
    </>
  )
}

export default PmoChangeRequestDetails