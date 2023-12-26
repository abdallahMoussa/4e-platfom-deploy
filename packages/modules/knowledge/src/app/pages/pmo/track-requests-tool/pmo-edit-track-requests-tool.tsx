import React, { Fragment } from 'react'
import EditTrackRequestsToolToolbar from './toolbar/EditTrackRequestsToolToolbar'
import EditTrackRequestsTool from './components/EditTrackRequestsTool'
import { RightToolbar } from '../../pmo/partials/RightToolbar'
function PmoEditTrackRequestsTool() {
  return (
    <Fragment>
        <EditTrackRequestsToolToolbar/>
        <EditTrackRequestsTool/>
        <RightToolbar/>
    </Fragment>
  )
}

export default PmoEditTrackRequestsTool