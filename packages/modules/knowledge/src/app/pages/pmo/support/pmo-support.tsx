import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { SupportToolbar } from './toolbar/SupportToolbar'
import { RightToolbar } from '../partials/RightToolbar'

const PmoSupport: FC = () => {
  const intl = useIntl()
  return (
    <>
      <SupportToolbar />
      <RightToolbar />
    </>
  )
}

export { PmoSupport}
