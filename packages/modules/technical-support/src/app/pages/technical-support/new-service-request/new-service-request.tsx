import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { NewServiceRequestToolbar } from './toolbar/NewServiceRequestToolbar'
import { RightToolbar } from '../partials/RightToolbar'
import NewServiceRequestHome from './components/NewServiceRequest'
const NewServiceRequest: FC = () => {
  const intl = useIntl()
  return (
    <>
      <NewServiceRequestToolbar />
      <RightToolbar />
      <NewServiceRequestHome/>
    </>
  )
}

export { NewServiceRequest }
