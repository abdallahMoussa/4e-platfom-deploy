import { FC, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { RiFilter2Fill } from "react-icons/ri";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { SystemPagination } from "../../../partials/SystemPagination";
import FilterGeneralApprovalsPopup from "../popup/filter-general-approvals-popup";

const GeneralApprovalsTable: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const intl = useIntl();

  return (
    <>
      <div className="card card-xl-stretch mb-xl-8">
        <div className="card-header border-0 pt-3 pb-2 mb-2">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-4 mb-1 ">
              {intl.formatMessage({ id: "Approvals" })}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted">
              {" "}
              {intl.formatMessage({ id: "ApprovalsTable" })}
            </span>
          </h3>
          <div className="card-toolbar card-diff-toolbar w-150px">
            <div
              className="btn btn-secondary mx-1 text-center w-100"
              //   data-bs-toggle="modal"
              //   data-bs-target="#rega_modal_filter_general_approvals"
              onClick={(event) => {
                event.preventDefault();
                setModalFShow(true);
              }}
            >
              <RiFilter2Fill size={17} />{" "}
              {intl.formatMessage({ id: "Filtering" })}
            </div>
          </div>
        </div>

        <div className="card-body py-3">
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="REGA_table_widget_5_tab_1"
            >
              <div className="table-responsive">
                <Table className="table table-row-dashed text-center table-row-gray-200 align-middle gs-0 gy-4">
                  <thead>
                    <tr style={{ verticalAlign: "middle" }}>
                      <th className="text-muted fw-semibold fs-6">
                        {intl.formatMessage({ id: "ProjectName" })}{" "}
                      </th>
                      <th className="text-muted fw-semibold fs-6">
                        {intl.formatMessage({ id: "RequestName" })}{" "}
                      </th>
                      <th className="text-muted fw-semibold fs-6">
                        {" "}
                        {intl.formatMessage({ id: "CurrentManagement" })}
                      </th>
                      <th className="text-muted fw-semibold fs-6">
                        {intl.formatMessage({ id: "RequestStatus" })}{" "}
                      </th>
                      <th className="text-muted fw-semibold fs-6">
                        {intl.formatMessage({ id: "Date" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ verticalAlign: "middle" }}>
                      <td>الاسم الاساسى للمشروع</td>
                      <td style={{ verticalAlign: "middle" }}>
                        <Link to="/pmo-general-approval-details">
                          <label role="button" className="text-center">
                            الاسم الاساسى للطلب
                          </label>
                        </Link>
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <a className="text-dark fw-bolder text-hover-primary my-5 d-flex align-items-center justify-content-center fs-6 ">
                          ادارة 1
                        </a>
                      </td>
                      <td className="">
                        <span className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-success ">
                          تمت الموافقة
                        </span>
                      </td>

                      <td className="text-muted fw-bold">25 Jun 2022</td>
                    </tr>
                    <tr style={{ verticalAlign: "middle" }}>
                      <td>الاسم الاساسى للمشروع</td>

                      <td style={{ verticalAlign: "middle" }}>
                        <Link to="/pmo-general-approval-details">
                          <label role="button" className="text-center">
                            الاسم الاساسى للطلب
                          </label>
                        </Link>
                      </td>
                      <td>
                        <a className="text-dark fw-bolder text-hover-primary fs-6 my-5 d-flex align-items-center justify-content-center">
                          {" "}
                          ادارة 2
                        </a>
                      </td>
                      <td className="">
                        <span className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-danger">
                          تم الرفض
                        </span>
                      </td>

                      <td className="text-muted fw-bold">25 Jun 2022</td>
                    </tr>
                    <tr style={{ verticalAlign: "middle" }}>
                      <td>الاسم الاساسى للمشروع</td>

                      <td style={{ verticalAlign: "middle" }}>
                        <Link to="/pmo-general-approval-details">
                          <label role="button" className="text-center">
                            الاسم الاساسى للطلب
                          </label>
                        </Link>
                      </td>
                      <td>
                        <a className="text-dark fw-bolder text-hover-primary fs-6 my-5 d-flex align-items-center justify-content-center ">
                          ادارة 3
                        </a>
                      </td>
                      <td className="">
                        <span className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-primary">
                          فى انتظار موافقه
                        </span>
                      </td>

                      <td className="text-muted fw-bold">25 Jun 2022</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <SystemPagination />
        </div>
      </div>
      <div
        className="modal fade"
        id="rega_modal_filter_general_approvals"
        aria-hidden="true"
      >
        <FilterGeneralApprovalsPopup
          show={modalFShow}
          handleClose={() => setModalFShow(false)}
        />
      </div>
    </>
  );
};
export { GeneralApprovalsTable };
