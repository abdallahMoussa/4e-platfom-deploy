import React, { Fragment, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { Actions } from "./Actions";
import { SystemPagination } from "../../../partials/SystemPagination";
import { DeletePopup } from "../../../partials/DeletePopup";
function TrackRequestsTool() {
  let navigate = useNavigate();
  const intl = useIntl();
  let [tableData, setTableData] = useState([
    { id: 1, name: "اسم الطلب", type: "طلب تغيير", number: 5 },
    { id: 2, name: "اسم الطلب", type: "طلب تغيير", number: 2 },
    { id: 3, name: "اسم الطلب", type: "طلب تغيير", number: 3 },
    { id: 4, name: "اسم الطلب", type: "طلب تغيير", number: 1 },
    {
      id: 5,
      name: "اسم الطلب",
      type: "طلب تغيير",
      number: 4,
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
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-dark fs-4 mb-1">
                      {intl.formatMessage({ id: "TrackRequests" })}
                    </span>
                    <span className="mt-1 fw-semibold fs-6 text-muted">
                      {intl.formatMessage({ id: "TrackRequestsTable" })}
                    </span>
                  </h3>
                </div>

                <div className="py-5 taskLogs">
                  <div className="table-responsive">
                    <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                      <thead>
                        <tr className="fw-bolder text-muted">
                          <th className="min-w-250px text-center">
                          {intl.formatMessage({ id: "OrderName" })}
                          </th>
                          <th className="min-w-250px text-center">
                          {intl.formatMessage({ id: "OrderType" })}
                          </th>
                          <th className="min-w-250px text-center">
                          {intl.formatMessage({ id: "TheNumberOfDepartmentsOfTheRequestTrack" })}                          </th>
                          <th className="min-w-250px text-center">
                          {intl.formatMessage({ id: "Options" })}
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {tableData.map((item: any, index) => {
                          let { id, number, name, type } = item;
                          return (
                            <Fragment key={Math.random()}>
                              <tr>
                                <td className="text-center">
                                  <Link to={{ pathname: `/track-requests-tools/${id}/details` }}>
                                    {" "}
                                    {name}
                                  </Link >
                                </td>
                                <td className="text-center">{type}</td>

                                <td className="text-center">{number}</td>
                                <td className="text-center">
                                  <Actions id={id} />
                                </td>
                              </tr>
                            </Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                    <SystemPagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TrackRequestsTool;
