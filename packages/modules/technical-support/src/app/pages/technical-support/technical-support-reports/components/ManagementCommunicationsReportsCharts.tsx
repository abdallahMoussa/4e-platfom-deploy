import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
import { toAbsoluteUrl } from "../../../../helpers";
import { Link } from "react-router-dom";
import ReportsBarChart from "./ReportsBarChart";
import TotalCircularReports from "./TotalCircularReports";
const ManagementCommunicationsReportsCharts = () => {
  const intl = useIntl();

  return (
    <Row className="justify-content-center mb-4">
      <Col lg={6} md={6} sm={12} className={"my-2"}>
        <div className="mx-3">
          <div className="card mb-3 py-5">
            <div className="row">
              <div className="col-sm-5 col-12">
                <div className="card-body d-flex flex-center flex-column mt-5">
                  <Row className="mb-2">
                    <Col lg={2} md={6} sm={12} className={"my-2"}>
                      <div
                        style={{
                          height: "5px",
                          width: "25px",
                          backgroundColor: "#9AD075",
                          marginTop: "10px",
                          borderRadius: "10PX",
                        }}
                      ></div>
                    </Col>
                    <Col lg={10} md={6} sm={12} className={"my-2 "}>
                      <div className="text-muted fs-7 px-3">
                        {intl.formatMessage({ id: "CommunicationsSolved" })}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col lg={2} md={6} sm={12} className={"my-2"}>
                      <div
                        style={{
                          height: "5px",
                          width: "25px",
                          backgroundColor: "#C8BE6A",
                          marginTop: "10px",
                          borderRadius: "10PX",
                        }}
                      ></div>
                    </Col>
                    <Col lg={10} md={6} sm={12} className={"my-2"}>
                      <div className="text-muted fs-7 px-5">
                        {intl.formatMessage({ id: "CommunicationsContinued" })}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col lg={2} md={6} sm={12} className={"my-2"}>
                      <div
                        style={{
                          height: "5px",
                          width: "25px",
                          backgroundColor: "#C86A73",
                          marginTop: "10px",
                          borderRadius: "10PX",
                        }}
                      ></div>
                    </Col>
                    <Col lg={10} md={6} sm={12} className={"my-2"}>
                      <div className="text-muted fs-7 px-3">
                        {intl.formatMessage({ id: "CommunicationsRejected" })}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col lg={2} md={6} sm={12} className={"my-2"}>
                      <div
                        style={{
                          height: "5px",
                          width: "25px",
                          backgroundColor: "#E0E5E5",
                          marginTop: "10px",
                          borderRadius: "10PX",
                        }}
                      ></div>
                    </Col>
                    <Col lg={10} md={6} sm={12} className={"my-2"}>
                      <div className="text-muted fs-7 px-5">
                        {intl.formatMessage({ id: "CommunicationsClosed" })}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col lg={2} md={6} sm={12} className={"my-2"}>
                      <div
                        style={{
                          height: "5px",
                          width: "25px",
                          backgroundColor: "#F7DFEF",
                          marginTop: "10px",
                          borderRadius: "10PX",
                        }}
                      ></div>
                    </Col>
                    <Col lg={10} md={6} sm={12} className={"my-2"}>
                      <div className="text-muted fs-7 px-5">
                        {intl.formatMessage({ id: "CommunicationsLate" })}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col lg={2} md={6} sm={12} className={"my-2"}>
                      <div
                        style={{
                          height: "5px",
                          width: "25px",
                          backgroundColor: "#DFF6F7",
                          marginTop: "10px",
                          borderRadius: "10PX",
                        }}
                      ></div>
                    </Col>
                    <Col lg={10} md={6} sm={12} className={"my-2"}>
                      <div className="text-muted fs-7 px-5">
                        {intl.formatMessage({ id: "CommunicationsConverted" })}
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="col-sm-7 col-12 mb-5">
                <div className="card-body d-flex flex-center flex-column">
                  {/* <img className="d-block w-100 h-300px"
                 src='/media/img/ManagementCommunicationsReports2.png' alt='' /> */}
                  <TotalCircularReports />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={6} md={6} sm={12} className={"my-2"}>
        <div className="mx-3">
          <div className="card mb-3 py-3">
            <div className=" d-flex justify-content-start px-5">
              <h4 className="text-primary">
                {intl.formatMessage({ id: "TheTotalNumberOfCommunications" })} :{" "}
                <span className="text-primary fs-3">123</span>
              </h4>
            </div>
            <div className="card-body d-flex flex-center flex-column h-400px">
              <ReportsBarChart />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ManagementCommunicationsReportsCharts;
