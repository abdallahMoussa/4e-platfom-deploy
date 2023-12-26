import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useIntl } from "react-intl";

const CommunicationsEmloyeesCharts = () => {
  const intl = useIntl();

  return (
    <Fragment>
      <Row className="justify-content-center mb-5">
        <Col lg={6} md={6} sm={12} className={"my-2"}>
          <div className="mx-3">
            <div className="card mb-3 py-5">
              <div className="d-flex justify-content-start text-dark fw-bolder fs-7 mb-3 px-5">
                {intl.formatMessage({ id: "TheTotalNumberOfCommunications" })}
              </div>
              <div className="card-body d-flex flex-center flex-column">
                <img
                  className="d-block w-100 h-300px"
                  src="/media/img/CommunicationsEmloyeesCharts1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className={"my-2"}>
          <div className="mx-3">
            <div className="card mb-3 py-5">
              <div className="d-flex justify-content-start text-dark fw-bolder fs-7 px-5">
                {intl.formatMessage({ id: "AllEmployees" })}
              </div>
              <img
                className="d-block w-100 h-300px mb-4"
                src="/media/img/CommunicationsEmloyeesCharts2.png"
                alt=""
              />
              <div className="d-flex justify-content-between mt-5">
                <div className="text-muted fw-bolder fs-7 mb-4 px-5">
                  {intl.formatMessage({ id: "AllCommunication" })}:{" "}
                  <span className="text-muted fs-7">1000</span>
                </div>
                <div className="text-muted fw-bolder fs-7 mb-3 px-5">
                  {intl.formatMessage({
                    id: "TheTotalNumberOfEmployeesReceivingTheReport",
                  })}
                  : <span className="text-muted fs-7">5</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col lg={6} md={6} sm={12} className={"my-2"}>
          <div className="mx-3">
            <div className="card mb-3 py-5">
              <div
                style={{ paddingBottom: "50px" }}
                className="d-flex justify-content-between mb-4"
              >
                <div className="text-dark fw-bolder fs-7 mb-3 px-5">
                  {intl.formatMessage({ id: "MostEmployeesSolveComplaints" })}
                </div>
                <div className="badgex badge-light-success fs-7 mx-3">
                  {intl.formatMessage({ id: "HighEffectiveness" })}
                </div>
              </div>
              <div className="d-flex gap-1 mx-5 mb-4">
                <img
                  src="/media/avatars/300-3.jpg"
                  style={{ display: "block", height: "70px", width: "70px" }}
                />
                <div className="d-flex justify-content-center flex-column w-100 pe-5">
                  <div className="d-flex justify-content-between">
                    <div
                      className="mb-4"
                      style={{ fontWeight: "700", fontSize: "14px" }}
                    >
                      محمود علي محمد
                    </div>
                    <div className="text-muted fw-bolder fs-5 mb-3 px-5">
                      % 90
                    </div>
                  </div>
                  <div
                    style={{
                      width: "98%",
                      height: "15px",
                      background:
                        "linear-gradient(to left, #009ef7 90%, #a1a5b7 10%)",
                      margin: "0 auto",
                      borderRadius: "20px",
                    }}
                  ></div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className={"my-2"}>
          <div className="mx-3">
            <div className="card mb-3 py-5">
              <div
                style={{ paddingBottom: "50px" }}
                className="d-flex justify-content-between mb-4"
              >
                <div className="text-dark fw-bolder fs-5 mb-3 px-5">
                  {intl.formatMessage({ id: "LessEmployeesSolveComplaints" })}
                </div>
                <div className="badgex badge-light-danger fs-5 mx-3">
                  {intl.formatMessage({ id: "LowEffectiveness" })}
                </div>
              </div>
              <div className="d-flex gap-1 mx-5 mb-4">
                <img
                  src="/media/avatars/300-3.jpg"
                  style={{ display: "block", height: "70px", width: "70px" }}
                />
                <div className="d-flex justify-content-center flex-column w-100 pe-5">
                  <div className="d-flex justify-content-between">
                    <div
                      className="mb-4"
                      style={{ fontWeight: "700", fontSize: "14px" }}
                    >
                      محمود علي محمد
                    </div>
                    <div className="text-muted fw-bolder fs-5 mb-3 px-5">
                      % 90
                    </div>
                  </div>
                  <div
                    style={{
                      width: "98%",
                      height: "15px",
                      background:
                        "linear-gradient(to right, #a1a5b7 90%, #F32D2D 10%)",
                      margin: "0 auto",
                      borderRadius: "20px",
                    }}
                  ></div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CommunicationsEmloyeesCharts;
