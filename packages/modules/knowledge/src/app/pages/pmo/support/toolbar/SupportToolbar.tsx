﻿import React, { FC } from 'react'

const SupportToolbar: FC = () => {
  return <>
    <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
      <div id="kt_toolbar_container" className="container-xxl d-flex flex-stack flex-wrap p-0">
        <div className="page-title d-flex flex-column me-3">
          <h1 className="d-flex text-white fw-bolder my-1 fs-3">Support</h1>
        </div>
        <div className="d-flex align-items-center py-3 py-md-1"></div>
      </div>
    </div>
  </>
}

export { SupportToolbar }
