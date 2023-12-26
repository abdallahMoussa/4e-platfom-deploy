import { FC, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { RxDotFilled } from "react-icons/rx";

import { useIntl } from "react-intl";
import { AllDepartmentsPopup } from "../popup/all-departments-popup";

const HeaderCards: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const intl = useIntl();
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={3} md={6} sm={12} className={"my-2"}>
          <Card>
            <Card.Body className={"p-4"}>
              <Card.Title className={"fs-4 fw-blod"}>22</Card.Title>
              <div className="fs-5 mb-2">
                {" "}
                {intl.formatMessage({ id: "ProjectsClassification" })}
              </div>
            </Card.Body>
            <Row className="px-3 text-right justify-content-center">
              <div className={"d-flex justify-content-between mx-3 my-1"}>
                <div>
                  <RxDotFilled color="blue" size={"25px"} />{" "}
                  {intl.formatMessage({ id: "Current" })}
                </div>
                <div className={"fs-6 fw-blod ms-5"}>30</div>
              </div>
            </Row>
            <Row className="px-3 text-right justify-content-center">
              <div className={"d-flex justify-content-between mx-3 my-1"}>
                <div>
                  <RxDotFilled color="green" size={"25px"} />{" "}
                  {intl.formatMessage({ id: "Completed" })}
                </div>
                <div className={"fs-6 fw-blod ms-5"}>45</div>
              </div>
            </Row>
            <Row className="px-3 text-right justify-content-center">
              <div className={"d-flex justify-content-between mx-3 my-1"}>
                <div>
                  <RxDotFilled color="yellow" size={"25px"} />{" "}
                  {intl.formatMessage({ id: "Sent" })}
                </div>
                <div className={"fs-6 fw-blod ms-5"}>50</div>
              </div>
            </Row>
            <Row className="mb-1 px-3 text-right justify-content-center">
              <div className={"d-flex justify-content-between mx-3 my-1"}>
                <div>
                  <RxDotFilled color="red" size={"25px"} />{" "}
                  {intl.formatMessage({ id: "Canceled" })}
                </div>
                <div className={"fs-6 fw-blod ms-5"}>60</div>
              </div>
            </Row>
            <Row className="mb-1 px-3 text-right justify-content-center">
              <div className={"d-flex justify-content-between mx-3 my-1"}>
                <div>
                  <RxDotFilled color="grey" size={"25px"} />{" "}
                  {intl.formatMessage({ id: "Pending" })}
                </div>
                <div className={"fs-6 fw-blod ms-5"}>40</div>
              </div>
            </Row>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12} className={"my-2"}>
          <Card>
            <Card.Body className={"p-4"}>
              <Card.Title className={"fs-4 fw-blod"}>237</Card.Title>
              <div className="fs-5 mb-2">
                {" "}
                {intl.formatMessage({ id: "CurrentProjects" })}
              </div>
            </Card.Body>
            <Row className="px-3 text-right justify-content-center">
              <div className={"d-flex justify-content-between mx-3 my-1"}>
                <div className="text-primary ">
                  <RxDotFilled color="blue" size={"25px"} />{" "}
                  {intl.formatMessage({ id: "InProgress" })}
                </div>
                <div className={"fs-6 fw-blod ms-5"}>30</div>
              </div>
            </Row>

            <Row className="px-3 text-right justify-content-center">
              <div className={"d-flex justify-content-between mx-3 my-1"}>
                <div className="text-muted">
                  <RxDotFilled color="grey" size={"25px"} />
                  {intl.formatMessage({ id: "NotStarted" })}
                </div>
                <div className={"fs-6 fw-blod ms-5"}>50</div>
              </div>
            </Row>

            <Row className="px-3 text-right justify-content-center">
              <div className={"mb-5 d-flex justify-content-between mx-3 my-1"}>
                <div className="text-success">
                  <RxDotFilled color="grey" size={"25px"} />{" "}
                  {intl.formatMessage({ id: "Planned" })}
                </div>
                <div className={"fs-6 fw-blod ms-5"}>50</div>
              </div>
            </Row>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12} className={"my-2"}>
          <Card>
            <Card.Body className={"p-4"}>
              <Card.Title className={"fontSz-4 fw-blod"}>$3,290.00</Card.Title>
              <div className="fs-5 mb-2 ">
                {" "}
                {intl.formatMessage({ id: "ProjectsBudget" })}
              </div>
            </Card.Body>
            <Row className="px-3 mb-2 text-right justify-content-center">
              <div
                style={{ minHeight: "25px" }}
                className={"d-flex justify-content-between mx-3 my-1"}
              >
                <div style={{ color: "#A1A5B7", paddingRight: "8px" }}>
                  {intl.formatMessage({ id: "CurrentProjects" })}
                </div>
                <div className={"fs-6 fw-blod ms-5"} style={{ color: "blue" }}>
                  $6,570
                </div>
              </div>
            </Row>
            <Row className="px-3 mb-2 text-right justify-content-center">
              <div
                style={{ minHeight: "25px" }}
                className={"d-flex justify-content-between mx-3 my-1"}
              >
                <div style={{ color: "#A1A5B7", paddingRight: "8px" }}>
                  {intl.formatMessage({ id: "TotalSpent" })}
                </div>
                <div
                  className={"fontSz-6 fw-bold ms-5"}
                  style={{ color: "#52CD50" }}
                >
                  $6,570
                </div>
              </div>
            </Row>
            <Row className="px-3 mb-4 text-right justify-content-center">
              <div
                style={{ minHeight: "27px" }}
                className={"d-flex justify-content-between mx-3 my-1"}
              >
                <div style={{ color: "#A1A5B7", paddingRight: "8px" }}>
                  {intl.formatMessage({ id: "TotalRemaining" })}
                </div>
                <div
                  className={"fontSz-6 fw-bold ms-5"}
                  style={{ color: "#FFC700" }}
                >
                  $6,570
                </div>
              </div>
            </Row>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12} className={"my-2"}>
          <Card>
            <Card.Body className={"p-4"}>
              <Card.Title className={"fs-4 fw-blod"}>49</Card.Title>
              <div className="fs-5 text-muted ">
                {intl.formatMessage({ id: "Departments" })}
              </div>
            </Card.Body>
            <Row className="px-3 justify-content-center">
              <div className="symbol-group symbol-hover mb-3">
                <div
                  className="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Alan Warden"
                >
                  <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                    A
                  </span>
                </div>
                <div
                  className="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Alan Warden"
                >
                  <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                    A
                  </span>
                </div>
                <div
                  className="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Susan Redwood"
                >
                  <span className="symbol-label bg-danger text-inverse-primary fw-bold">
                    S
                  </span>
                </div>
                <div
                  className="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Francis Mitcham"
                >
                  <span className="symbol-label bg-success text-inverse-primary fw-bold">
                    H
                  </span>
                </div>
                <div
                  className="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Susan Redwood"
                >
                  <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                    S
                  </span>
                </div>
                <div
                  className="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Susan Redwood"
                >
                  <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                    S
                  </span>
                </div>
                <div
                  className="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Perry Matthew"
                >
                  <span className="symbol-label bg-info text-inverse-info fw-bold">
                    P
                  </span>
                </div>
                <div
                  className="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Susan Redwood"
                >
                  <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                    S
                  </span>
                </div>
                <div
                  className="symbol symbol-35px symbol-circle"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_view_users"
                ></div>
              </div>
            </Row>
            <Row className="px-3 mb-5 mt-2 justify-content-center">
              <Col md={6}>
                <div>
                  <a
                    onClick={(event) => {
                      event.preventDefault();
                      setModalShow(true);
                    }}
                    className=" btn btn-primary fs-6 mx-1 text-center w-110"
                    // data-bs-toggle="modal"
                    // data-bs-target="#Rega_modal_View_All_Departments"
                  >
                    {intl.formatMessage({ id: "AllDepartments" })}{" "}
                  </a>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <div className=" d-flex justify-content-between">
        <h2 className="my-5 fs-3 fw-blod" style={{ color: "#3F4254" }}>
          المشاريع
        </h2>
        <div className=" w-200px">
          <select
            className="form-select form-select-lg mb-3 form-select-solid"
            aria-label=".form-select-lg example"
          >
            <option selected>
              {" "}
              {intl.formatMessage({ id: "ProjectStatusClassification" })}
            </option>
            <option value="1">مكتمل </option>
            <option value="2">متأخر</option>
            <option value="3">قيدالتنفيذ </option>
            <option value="4"> لم يبدأ </option>
          </select>
        </div>
      </div>

      <div
        className="modal fade"
        id="Rega_modal_View_All_Departments"
        aria-hidden="true"
      >
        <AllDepartmentsPopup
          show={modalShow}
          handleClose={() => setModalShow(false)}
        />
      </div>
    </>
  );
};

export { HeaderCards };
