import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { SystemPagination } from '../../../../../partials/SystemPagination'

const MileStones: FC = () => {

    const intl = useIntl()

  return (
    <>
  <div className=' my-7'>
        <div className="card card-xl-stretch  mb-xl-8">
                    <div className="card-header border-0 pt-3 pb-2 mb-2">
                      <h3 className="card-title align-items-start flex-column">
                        <span className="card-label fw-bolder fs-4 mb-1 ">{intl.formatMessage({ id: "Milestones" })}</span>
                        <span className="mt-1 fw-semibold fs-6 text-muted">{intl.formatMessage({ id: "To_add_anew_milestone_you_must_go_to _the_project_timeline" })}</span>
                      </h3>
                      <div className="card-toolbar card-diff-toolbar w-150px">
                      <select className="form-select form-select-lg mb-3 form-select-solid" aria-label=".form-select-lg example">
                        <option selected> {intl.formatMessage({ id: "MilestoneStatus" })}</option>
                        <option value="1">مكتمل	</option>
                        <option value="2">متأخر</option>
                        <option value="3">جارى التنفيذ	</option>
                        <option value="4"> لم يبدأ		</option>

                        </select>
                      </div>
                    </div>
                    <div className="card-body py-3">
                      <div className="tab-content">
                        <div className="tab-pane fade active show" id="REGA_table_widget_5_tab_1">
                          <div className="table-responsive">
                            <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                              <thead>
                                <tr className="fw-bolder text-muted">
                                  <th className="px-2 pb-3 min-w-100px">{intl.formatMessage({ id: "Milestones" })} </th>
                                  <th className="px-2 pb-3 min-w-50px">{intl.formatMessage({ id: "Status" })}</th>
                                  <th className="px-2 pb-3 min-w-50px">{intl.formatMessage({ id: "Progress" })}</th>
                                  <th className="px-2 pb-3 min-w-110px">{intl.formatMessage({ id: "DateAccordingToLatestPlan" })}   </th>
                                  <th className="px-2 pb-3 min-w-110px"> {intl.formatMessage({ id: "ExpectedDate" })}</th>
                                  <th className="px-2 pb-3 min-w-50px">{intl.formatMessage({ id: "Details" })}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="d-flex align-items-center justify-content-start">
                                    <span className="bullet bullet-vertical h-40px bg-success ms-auto"></span>
                                    <label className="text-center ms-auto fw-bolder">وثائق المشروع</label>
                                  </td>
                                  <td>
                                    <div className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-success">مكتمل</div>
                                  </td>
                                  <td className='fw-bolder'>100%</td>
                                  <td >
                                    <span className="fw-bolder">25 Jun 2022</span>
                                  </td>
                                  <td >
                                    <span className="fw-bolder">25 Jun 2022</span>
                                  </td>
                                  <td className="text-center">
                                    <a className="mb-0 btn btn-light">{intl.formatMessage({ id: "View" })}</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="d-flex align-items-center justify-content-start">
                                  <span className="bullet bullet-vertical h-40px bg-danger ms-auto"></span>
                                    <label className="text-center ms-auto fw-bolder">وثائق المشروع</label>
                                  </td>
                                  <td>
                                    <div className="d-inline py-2 px-3 fw-bolder fs-6  badgex badge-light-danger">متأخر</div>
                                  </td>
                                  <td className=" fw-bolder">80%</td>
                                  <td >
                                    <span className="fw-bolder">25 Jun 2022</span>
                                  </td>
                                  <td>
                                    <span className="fw-bolder">25 Jun 2022</span>
                                  </td>
                                  <td className="text-center">
                                  <a className="mb-0 btn btn-light">{intl.formatMessage({ id: "View" })}</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="d-flex align-items-center justify-content-start">
                                  <span className="bullet bullet-vertical h-40px bg-warning ms-auto"></span>
                                  <label className="text-center ms-auto fw-bolder">وثائق المشروع</label>
                                  </td>
                                  <td>
                                    <div className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-primary">جارى التنفيذ</div>
                                  </td>
                                  <td className=" fw-bolder">50%</td>
                                  <td >
                                    <span className="fw-bolder">25 Jun 2022</span>
                                  </td>
                                  <td >
                                    <span className="fw-bolder">25 Jun 2022</span>
                                  </td>
                                  <td className="text-center">
                                  <a className="mb-0 btn btn-light">{intl.formatMessage({ id: "View" })}</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="d-flex align-items-center justify-content-start">
                                  <span className="bullet bullet-vertical h-40px bg-info ms-auto"></span>
                                    <label className="text-center ms-auto fw-bolder">وثائق المشروع</label>
                                  </td>
                                  <td>
                                    <div className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-info">لم يبدأ</div>
                                  </td>
                                  <td className=" fw-bolder">0%</td>
                                  <td >
                                    <span className="fw-bolder">25 Jun 2022</span>
                                  </td>
                                  <td >
                                    <span className="fw-bolder">25 Jun 2022</span>
                                  </td>
                                  <td className="text-center">
                                  <a className="mb-0 btn btn-light">{intl.formatMessage({ id: "View" })}</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <SystemPagination/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
            </>
    )
  }
  
  export { MileStones }
