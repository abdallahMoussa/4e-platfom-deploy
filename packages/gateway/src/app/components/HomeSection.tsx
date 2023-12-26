import React from 'react'
import { useIntl } from "react-intl";

const HomeSection = () => {
  const intl = useIntl();

  return (
    <div className="toolbar py-5 py-lg-15 min-height-300" id="kt_toolbar">
    <div id="kt_toolbar_container" className="container-xxl d-flex flex-stack flex-wrap p-0">
      <div className="page-title d-flex flex-column me-3">
      <h1 className="d-flex text-white fw-bolder my-1 fs-3">{intl.formatMessage({ id: "Home" })}
</h1>
      </div>
      <div className="d-flex align-items-center py-3 py-md-1"></div>
    </div>
</div>
    )
}

export default HomeSection