import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
import { toAbsoluteUrl } from "../../../../helpers";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AdminstrationsBarChart from "./AdminstrationsBarChart";

const CommunicationsReport = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <Row className="justify-content-center mb-5">
      <Col lg={6} md={6} sm={12} className={"my-2"}>
        <Card>
          <Card.Body>
            <div className=" d-flex justify-content-start">
              <h4 className="text-dark mb-4">
                {intl.formatMessage({ id: "TheTotalNumberOfCommunications" })}
              </h4>
            </div>
            <div className=" d-flex justify-content-end">
              <h4 className="text-primary mb-4">
                {intl.formatMessage({ id: "AllReports" })}{" "}
                <span className="text-dark fs-3">60</span>
              </h4>
            </div>
              <div
                style={{
                  height: "50px",
                  width: "100%",
                  display: "flex",
                }}
              >
                {[
                  "#DFF6F7",
                  "#F7DFEF",
                  "#E0E5E5",
                  "#C86A73",
                  "#C8BE6A",
                  "#9AD075",
                ].map((color, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: color,
                      borderRadius: "20px",
                      height: "10px",
                      width: "25%",
                    }}
                  />
                ))}
              </div>
            <div className=" d-flex justify-content-between mb-5">
              <Row>
                <Col lg={9} md={6} sm={12} className={"my-2"}>
                  <div className="text-muted mb-4 fs-7">
                    {intl.formatMessage({ id: "Rejected" })}
                  </div>
                  <div className="text-dark fs-7">
                    10 {intl.formatMessage({ id: "Communications" })}
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className={"my-2"}>
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
              </Row>
              <Row>
                <Col lg={9} md={6} sm={12} className={"my-2"}>
                  <div className="text-muted mb-4 fs-7">
                    {intl.formatMessage({ id: "Continued" })}
                  </div>
                  <div className="text-dark fs-7">
                    10 {intl.formatMessage({ id: "Communications" })}
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className={"my-2"}>
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
              </Row>
              <Row>
                <Col lg={9} md={6} sm={12} className={"my-2"}>
                  <div className="text-muted mb-4 fs-7">
                    {intl.formatMessage({ id: "Solved" })}
                  </div>
                  <div className="text-dark fs-7">
                    10 {intl.formatMessage({ id: "Communications" })}
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className={"my-2"}>
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
              </Row>
            </div>
            <div className=" d-flex justify-content-between mb-4">
              <Row>
                <Col lg={9} md={6} sm={12} className={"my-2"}>
                  <div className="text-muted mb-4 fs-7">
                    {intl.formatMessage({ id: "Converted" })}
                  </div>
                  <div className="text-dark fs-7">
                    10 {intl.formatMessage({ id: "Communications" })}
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className={"my-2"}>
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
              </Row>
              <Row>
                <Col lg={9} md={6} sm={12} className={"my-2"}>
                  <div className="text-muted mb-4 fs-7">
                    {intl.formatMessage({ id: "Late" })}
                  </div>
                  <div className="text-dark fs-7">
                    10 {intl.formatMessage({ id: "Communications" })}
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className={"my-2"}>
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
              </Row>
              <Row>
                <Col lg={9} md={6} sm={12} className={"my-2 mb-5"}>
                  <div className="text-muted mb-4 fs-7">
                    {intl.formatMessage({ id: "Closed" })}
                  </div>
                  <div className="text-dark fs-7">
                    10 {intl.formatMessage({ id: "Communications" })}
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className={"my-2"}>
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
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={6} sm={12} className={"my-2"}>
        <Card>
          <Card.Body>
            <Link to="/management-communications-reports">
              <div className=" d-flex justify-content-start">
                <h4 className="text-dark mb-4">
                  {intl.formatMessage({
                    id: "GeneralStatisticsForDepartments",
                  })}
                </h4>
              </div>
              {/* <img className="d-block w-100 h-300px"
                 src='/media/img/CommunicationsReport.png' alt='' /> */}
              <div className="h-300px">
                <AdminstrationsBarChart />
              </div>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CommunicationsReport;
