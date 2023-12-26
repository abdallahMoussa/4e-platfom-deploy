﻿import  { FC } from "react";
import { useIntl } from "react-intl";

const Requests: FC = () => {
  const intl = useIntl();
  return (
    <>
      <div className="card card-xl-stretch mb-xl-8">
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-3 mb-1">
              {intl.formatMessage({ id: "Requests" })}{" "}
            </span>
            <span className="text-muted mt-1 fw-bold fs-7">
              {" "}
              {intl.formatMessage({ id: "RequestLists" })}
            </span>
          </h3>
          <div className="card-toolbar">
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bolder px-4 me-1 active"
                  data-bs-toggle="tab"
                  href="#kt_table_widget_5_tab_1"
                >
                  {intl.formatMessage({ id: "RequestsIncoming" })}
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bolder px-4"
                  data-bs-toggle="tab"
                  href="#kt_table_widget_5_tab_3"
                >
                  {intl.formatMessage({ id: "RequestsOutgoing" })}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body py-3">
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="kt_table_widget_5_tab_1"
            >
              <div className="table-responsive">
                <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="p-0 min-w-100px">
                        {intl.formatMessage({ id: "OrderID" })}
                      </th>
                      <th className="p-0 min-w-150px">
                        {intl.formatMessage({ id: "Applicant" })}
                      </th>
                      <th className="p-0 min-w-140px">
                        {intl.formatMessage({ id: "Date" })}
                      </th>
                      <th className="p-0 min-w-110px">
                        {intl.formatMessage({ id: "Status" })}
                      </th>
                      <th className="p-0 min-w-50px">
                        {intl.formatMessage({ id: "Details" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="text-center">123456</label>
                      </td>
                      <td>
                        <a
                          href="#"
                          className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >
                          فهد الحمد أحمد
                        </a>
                        <span className="text-muted fw-bold d-block">
                          الإدارة القانونية
                        </span>
                      </td>
                      <td className="text-muted fw-bold">5/04/2022</td>
                      <td className="">
                        <span className="badgex badge-light-success">
                          {intl.formatMessage({ id: "Received" })}
                        </span>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        >
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="text-center">123456</label>
                      </td>
                      <td>
                        <a
                          href="#"
                          className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >
                          فهد الحمد أحمد
                        </a>
                        <span className="text-muted fw-bold d-block">
                          الإدارة القانونية
                        </span>
                      </td>
                      <td className="text-muted fw-bold">5/04/2022</td>
                      <td className="">
                        <span className="badgex badge-light-danger">
                          {intl.formatMessage({ id: "Rejected" })}
                        </span>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        >
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="text-center">123456</label>
                      </td>
                      <td>
                        <a
                          href="#"
                          className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >
                          فهد الحمد أحمد
                        </a>
                        <span className="text-muted fw-bold d-block">
                          الإدارة القانونية
                        </span>
                      </td>
                      <td className="text-muted fw-bold">5/04/2022</td>
                      <td className="">
                        <span className="badgex badge-light-primary">
                          {intl.formatMessage({ id: "Completed" })}
                        </span>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        >
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="text-center">123456</label>
                      </td>
                      <td>
                        <a
                          href="#"
                          className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >
                          فهد الحمد أحمد
                        </a>
                        <span className="text-muted fw-bold d-block">
                          الإدارة القانونية
                        </span>
                      </td>
                      <td className="text-muted fw-bold">5/04/2022</td>
                      <td className="">
                        <span className="badgex badge-light-warning">
                          {" "}
                          {intl.formatMessage({ id: "UnderProcessing" })}
                        </span>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        >
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade" id="kt_table_widget_5_tab_3">
              <div className="table-responsive">
                <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="p-0 min-w-100px">
                        {intl.formatMessage({ id: "OrderID" })}
                      </th>
                      <th className="p-0 min-w-150px">
                        {intl.formatMessage({ id: "Applicant" })}
                      </th>
                      <th className="p-0 min-w-140px">
                        {intl.formatMessage({ id: "Date" })}
                      </th>
                      <th className="p-0 min-w-110px">
                        {intl.formatMessage({ id: "Status" })}
                      </th>
                      <th className="p-0 min-w-50px">
                        {intl.formatMessage({ id: "Details" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="text-center">123456</label>
                      </td>
                      <td>
                        <a
                          href="#"
                          className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >
                          فهد الحمد أحمد
                        </a>
                        <span className="text-muted fw-bold d-block">
                          الإدارة القانونية
                        </span>
                      </td>
                      <td className="text-muted fw-bold">5/04/2022</td>
                      <td className="">
                        <span className="badgex badge-light-success">
                          {intl.formatMessage({ id: "Received" })}
                        </span>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        >
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="text-center">123456</label>
                      </td>
                      <td>
                        <a
                          href="#"
                          className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >
                          فهد الحمد أحمد
                        </a>
                        <span className="text-muted fw-bold d-block">
                          الإدارة القانونية
                        </span>
                      </td>
                      <td className="text-muted fw-bold">5/04/2022</td>
                      <td className="">
                        <span className="badgex badge-light-danger">
                          {intl.formatMessage({ id: "Rejected" })}
                        </span>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        >
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="text-center">123456</label>
                      </td>
                      <td>
                        <a
                          href="#"
                          className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >
                          فهد الحمد أحمد
                        </a>
                        <span className="text-muted fw-bold d-block">
                          الإدارة القانونية
                        </span>
                      </td>
                      <td className="text-muted fw-bold">5/04/2022</td>
                      <td className="">
                        <span className="badgex badge-light-primary">
                          {intl.formatMessage({ id: "Completed" })}
                        </span>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        >
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="text-center">123456</label>
                      </td>
                      <td>
                        <a
                          href="#"
                          className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >
                          فهد الحمد أحمد
                        </a>
                        <span className="text-muted fw-bold d-block">
                          الإدارة القانونية
                        </span>
                      </td>
                      <td className="text-muted fw-bold">5/04/2022</td>
                      <td className="">
                        <span className="badgex badge-light-warning">
                          {" "}
                          {intl.formatMessage({ id: "UnderProcessing" })}
                        </span>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                        >
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Requests };
