import React, { FC } from 'react'
import { useIntl } from "react-intl";

const ReportsToolsBoxToggleDrawer: FC = () => {
  const intl = useIntl()
  return (
    <button
      id='reports_indicators_id'
      className='engage-demos-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm fs-6 px-4 rounded-top-0'
      title={intl.formatMessage({ id: "ReportsAndIndicators" })}
      data-bs-toggle='tooltip'
      data-bs-placement='left'
      data-bs-dismiss='click'
      data-bs-trigger='hover'
      style={{ position: "absolute", right: "23px", width: "144px" }}
    >
      <span id='kt_tools_reports_label'>{intl.formatMessage({ id: "ReportsAndIndicators" })}</span>
    </button>
  )
}
export { ReportsToolsBoxToggleDrawer}
