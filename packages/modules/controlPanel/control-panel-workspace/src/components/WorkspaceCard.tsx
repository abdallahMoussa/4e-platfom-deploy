import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { KTSVG, toAbsoluteUrl } from '../helpers'

interface Iprop {
  id: any,
  name: string,
  dept: string,
  title: string,
  subTitle: string,
  count: string,
  lastUpdate: string,
  lastLogin: string,
  link: string,
  icon: any,
  subIcon: any,
  color: string,
  background: string
  isShow: boolean
}

const WorkspaceCard: FC<Iprop> = ({ id, name, dept, title, subTitle, count, lastUpdate, lastLogin, link, icon, subIcon, color, background, isShow }) => {
  const intl = useIntl()
  return (
    <>
      {isShow && <div id={id} className="col-md-4 col-xl-3 col-xxl-3">
        <div className="card">
          <div className="card-header border-0 pt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder text-dark fs-6">{name}</span>
              <span className="text-muted mt-2 fw-bold fs-9">{dept}</span>
            </h3>
            <div className="card-toolbar">
              <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <span className="svg-icon svg-icon-2">
                  <KTSVG path='/media/icons/duotune/general/gen074.svg' />
                </span>
              </button>
              <div className="menu menu-sub menu-sub-dropdown w-200px w-md-200px" data-kt-menu="true" >
                <div className="px-7 py-5">
                  <div className="fs-5 text-dark fw-bolder">{intl.formatMessage({ id: "Properties" })}</div>
                </div>
                <div className="separator border-gray-200"></div>
                <div className="p-4">
                  <div className="mb-5">
                    <div className="">
                      <label className="form-check form-check-sm form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" value="2" />
                        <span className="form-check-label">{intl.formatMessage({ id: "AddToFavorites" })}</span>
                      </label>
                      <label className="form-check form-check-sm form-check-custom form-check-solid py-2">
                        <input id="indicatorsCardHideInput" className="form-check-input check-danger" type="checkbox" value="2" />
                        <span className="form-check-label">{intl.formatMessage({ id: "HideFromWorkspace" })}  </span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="form-label fw-bold">{intl.formatMessage({ id: "Notifications" })}:</label>
                    <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid py-2">
                      <input className="form-check-input" type="checkbox" value="" name="notifications" />
                      <label className="form-check-label">{intl.formatMessage({ id: "Enable" })}</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">{intl.formatMessage({ id: "Cancel" })}</button>
                    <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">{intl.formatMessage({ id: "Agree" })}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body d-flex flex-center flex-column p-5">
            <div className="symbol symbol-75px mb-2">

              <span className={'symbol-label ' +
                (background === 'bg-light-warning' ? 'bg-light-warning' :
                  background === 'bg-light-primary' ? 'bg-light-primary' :
                    background === 'bg-light-info' ? 'bg-light-info' :
                      background === 'bg-light-gblue' ? 'bg-light-gblue' :
                        background === 'bg-light-success' ? 'bg-light-success' :
                          background === 'bg-light-danger' ? 'bg-light-danger' :
                            '')}>
                <span className={'svg-icon svg-icon-4x ' +
                  (color === 'svg-icon-warning' ? 'svg-icon-warning' :
                    color === 'svg-icon-primary' ? 'svg-icon-primary' :
                      color === 'svg-icon-info' ? 'svg-icon-info' :
                        color === 'svg-icon-gblue' ? 'svg-icon-gblue' :
                          color === 'svg-icon-success' ? 'svg-icon-success' :
                            color === 'svg-icon-danger' ? 'svg-icon-danger' :
                              '')}>
                  {icon}
                </span>
              </span>
              <span className="top-icon">
                {subIcon}
              </span>
            </div>
            <Link to={link} className="fs-4 text-gray-800 text-hover-gblue fw-bolder mb-0">{title}</Link>
            <div className="fw-bold text-gray-400 mb-6">{subTitle}  {count}</div>
            <div className="d-flex flex-center flex-wrap">
              <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                <div className="fs-7 fw-bolder text-gray-700">{lastUpdate}</div>
                <div className="fw-bold text-gray-400 text-center fs-9">{intl.formatMessage({ id: "LastUpdate" })}</div>
              </div>
              <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                <div className="fs-7 fw-bolder text-gray-700">{lastLogin}</div>
                <div className="fw-bold text-gray-400 text-center fs-9">{intl.formatMessage({ id: "LastLogin" })}</div>
              </div>
            </div>
            <Link to={link} className="btn btn-primary py-3 mx-8 mt-2">{intl.formatMessage({ id: "ViewDetails" })} </Link>
          </div>
        </div>
      </div>}
    </>
  )
}

export { WorkspaceCard }
