import React, { Fragment } from 'react'
import AddTrackRequestsToolToolbar from './toolbar/AddTrackRequestsToolToolbar'
import AddTrackRequestsTool from './components/AddTrackRequestsTool'
import { RightToolbar } from '../../pmo/partials/RightToolbar'
function PmoAddTrackRequestsTool() {
  return (
    <Fragment>
        <AddTrackRequestsToolToolbar/>
        <AddTrackRequestsTool/>
        <RightToolbar/>
    </Fragment>
  )
}

export default PmoAddTrackRequestsTool