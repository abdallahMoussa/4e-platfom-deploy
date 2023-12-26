import React, { Fragment, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { SystemPagination } from "../../../../partials/SystemPagination";
import { NotificationsActions } from "./NotificationsActions";
import { DeletePopup } from "../../../../partials/DeletePopup";
function Notifications() {
  let navigate = useNavigate();
  const intl = useIntl();
  let [tableData, setTableData] = useState([
    { id: 1, type: "طلب تفويض", name: "التقارير الماليه", date: "14 Dec 2023" },
    {
      id: 2,
      type: "طلب موافقه",
      name: "التقارير الماليه",
      date: "14 Dec 2023",
    },
    {
      id: 3,
      type: "الغاء تفويض",
      name: "التقارير الماليه",
      date: "14 Dec 2023",
    },
    {
      id: 4,
      type: "بريد الكتروني",
      name: "التقارير الماليه",
      date: "14 Dec 2023",
    },
    {
      id: 5,
      type: "موعد اجتماع",
      name: "التقارير الماليه",
      date: "14 Dec 2023",
    },
  ]);
  return (
    <Fragment>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  mt-4"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row g-5 g-xl-8">
            <div className="col-xl-12">
              <div className="card card-xl-stretch mb-xl-8 card-body  ">
                <div className="py-5 ">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="d-flex justify-content-end">
                      <div className="col-5">
                        <div className="mb-2 pb-3 ">
                            <select
                              id="RoleName"
                              className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder={intl.formatMessage({ id: "NotificationClassification" })}
                              data-dropdown-parent="#kt_menu_62775e8642438"
                              data-allow-clear="true"
                              data-select2-id="select2-data-4-vqtd"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option selected>
                                  {intl.formatMessage({ id: "NotificationClassification" })}
                              </option>
                              <option value="1">
                                  الاشعار 1
                              </option>
                              <option value="2">
                                  الاشعار 2
                              </option>
                              <option value="3">
                                  الاشعار 3
                              </option>
                            </select>
                        </div>
                      </div>
                  </div>
                    <div className="table-responsive">
                      <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                        <thead>
                          <tr className="fw-bolder text-muted">
                            <th className="min-w-250px text-center">
                              <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                <input
                                  className="form-check-input widget-9-check xCheckBg"
                                  type="checkbox"
                                  id="Checkboxes1"
                                />
                              </div>
                              <label htmlFor="Checkboxes1">
                                {intl.formatMessage({
                                  id: "LogoType",
                                })}{" "}
                              </label>
                            </th>
                            <th className="min-w-250px text-center">
                              {intl.formatMessage({ id: "LogoName" })}
                            </th>
                            <th className="min-w-250px text-center">
                              {intl.formatMessage({
                                id: "Date",
                              })}{" "}
                            </th>
                            <th className="min-w-250px text-center">
                              {intl.formatMessage({ id: "Procedures" })}
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {tableData.map((item: any, index) => {
                            let { id, name, type, date } = item;
                            return (
                              <Fragment key={Math.random()}>
                                <tr>
                                  <td className="text-center">
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id={`Checkbox${id}`}
                                      />
                                    </div>
                                    <label htmlFor={`Checkbox${id}`}>
                                      <Link
                                        to={{
                                          pathname: ".",
                                        }}
                                      >
                                        {" "}
                                        {type}
                                      </Link>
                                    </label>
                                  </td>
                                  <td className="text-center">{name}</td>

                                  <td className="text-center">{date}</td>
                                  <td className="text-center">
                                    <NotificationsActions id={id} />
                                  </td>
                                </tr>
                              </Fragment>
                            );
                          })}
                        </tbody>
                      </table>
                      <SystemPagination />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Notifications;
