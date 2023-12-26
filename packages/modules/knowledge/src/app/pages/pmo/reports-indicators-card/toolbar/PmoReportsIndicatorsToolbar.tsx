import React, { FC } from 'react'
import { WorkSpaceToolbar1 } from '../partials/reports-indicators-workspace/toolbar/WorkSpaceToolbar1'

const PmoReportsIndicatorsToolbar: FC = () => {
  return <>
   <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
        <div id="kt_toolbar_container" className="container-xxl p-0 d-flex flex-stack flex-wrap p-0">
          <WorkSpaceToolbar1 />
        </div>
      </div>
  </>
}

export { PmoReportsIndicatorsToolbar }
