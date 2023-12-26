import { FC, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { RiFilter2Fill } from "react-icons/ri";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { SystemPagination } from "../../../../../partials/SystemPagination";
import FilterApprovalsPopup from "../popup/filter-approvals-popup";

const ApprovalsTable: FC = () => {
  const intl = useIntl();
  const [modalFShow, setModalFShow] = useState<boolean>(false);

  return (
    <>
      <div className="card card-xl-stretch mb-xl-8">
        <Row className="justify-content-center mb-5">
          <div className="col-md-8 ">
            <div className="card-header border-0 pt-3">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bolder fs-4 mb-1">
                  {intl.formatMessage({ id: "Approvals" })}
                </span>
                <span className="text-muted mt-1 fw-semibold fs-6">
                  {intl.formatMessage({ id: "ApprovalsTable" })}
                </span>
              </h3>
            </div>
          </div>
          <Col lg={2}>
            <Row className="justify-content-between py-4 ">
              {/* <Col lg={6}> */}
              <div
                className="btn btn-secondary mx-1 w-100"
                // data-bs-toggle="modal"
                // data-bs-target="#rega_modal_filter_approvals"
                onClick={(event) => {
                  event.preventDefault();
                  setModalFShow(true);
                }}
              >
                <RiFilter2Fill size={17} />{" "}
                {intl.formatMessage({ id: "Filtering" })}
              </div>
              {/* </Col> */}
              {/* <Col lg={6}>
                <div className="btn btn-primary mx-1 text-center w-100">
                  {intl.formatMessage({ id: "AddApproval" })}
                </div>
              </Col> */}
            </Row>
          </Col>
        </Row>
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
                        {intl.formatMessage({ id: "RequestName" })}
                      </th>
                      <th className="text-muted fw-semibold fs-6">
                        {intl.formatMessage({ id: "CurrentManagement" })}
                      </th>
                      <th className="text-muted fw-semibold fs-6">
                        {intl.formatMessage({ id: "RequestStatus" })}
                      </th>
                      <th className="text-muted fw-semibold fs-6">
                        {intl.formatMessage({ id: "Date" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ verticalAlign: "middle" }}>
                      <td style={{ verticalAlign: "middle" }}>
                        <Link to="/pmo-project-approvals-details">
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
                          {intl.formatMessage({ id: "ApprovalDone" })}
                        </span>
                      </td>

                      <td className="text-muted fw-bold">25 Jun 2022</td>
                    </tr>
                    <tr style={{ verticalAlign: "middle" }}>
                      <td style={{ verticalAlign: "middle" }}>
                        <Link to="/pmo-project-approvals-details">
                          <label role="button" className="text-center">
                            الاسم الاساسى للطلب
                          </label>
                        </Link>
                      </td>
                      <td>
                        <a
                          href="#"
                          className="text-dark fw-bolder text-hover-primary fs-6 my-5 d-flex align-items-center justify-content-center"
                        >
                          إدارة 2
                        </a>
                      </td>
                      <td className="">
                        <span className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-danger">
                          {intl.formatMessage({ id: "RejectionDone" })}
                        </span>
                      </td>

                      <td className="text-muted fw-bold">25 Jun 2022</td>
                    </tr>
                    <tr style={{ verticalAlign: "middle" }}>
                      <td style={{ verticalAlign: "middle" }}>
                        <Link to="/pmo-project-approvals-details">
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
                          {intl.formatMessage({ id: "WaitingForApproval" })}
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
      <FilterApprovalsPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      />
    </>
  );
};
export { ApprovalsTable };
