import React, {useEffect} from 'react'
import {useLocation} from 'react-router'
import clsx from 'clsx'
import {DrawerComponent} from '../../assets/ts/components'

interface Iprop {
  children?: React.ReactNode;
}

const Content: React.FC<Iprop> = ({children}) => {
  const location = useLocation()
  useEffect(() => {
    DrawerComponent.hideAll()
  }, [location])

  return (
    <div id='kt_content_container' className={clsx('content flex-row-fluid')}>
      {children}
    </div>
  )
}

export {Content}
