import React from 'react'
import { AllDepartmentsPopup } from '../../project-management-card/pmo-project-management/popup/all-departments-popup'
import { Card, Col, Row } from "react-bootstrap";
import { RxDotFilled } from "react-icons/rx";

import { useIntl } from "react-intl";
import StackChart from './StackChart';

const ProblemsSummary = () => {
  const intl = useIntl()

  return (
    <Row className="justify-content-center">
      <Col lg={3} md={6} sm={12} className={"my-2"}>
        <Card style={{height:"300px"}}>
          <Card.Body className=" d-flex justify-content-center flex-column align-items-center g-5 py-10">
            <div className="symbol symbol-75px py-5 mt-5">
              <span className={'symbol-label bg-light-warning'}>
                <span className={'svg-icon svg-icon-4x svg-icon-warning'}>
                  <i className="fad fa-exclamation-triangle fs-3x"></i>
                </span>
              </span>
              <span className="top-icon">
                <i className="bi bi-tools"></i>
              </span>
          </div>
          <p className='text-muted my-5'>{intl.formatMessage({ id: "TOTAL_RISK"})}</p>
          <div className="d-inline py-2 px-4  my-1 fw-bolder fs-6 badgex border-radius-rounded badge-secondary text-dark">43</div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={6} sm={12} className={"my-2"}>
        <Card>
        <StackChart/>
        </Card>
      </Col>
      <Col lg={3} md={6} sm={12} className={"my-2"}>
        <Card style={{height:"300px"}}>
          <Card.Body className=" d-flex justify-content-center flex-column align-items-center g-5 py-10">
            <div className="symbol symbol-75px py-5 mt-5">
              <span className={'symbol-label bg-light-danger'}>
                <span className={'svg-icon svg-icon-4x svg-icon-danger'}>
                  <i className="fad fa-radiation fs-3x"></i>
                </span>
              </span>
              <span className="top-icon">
                <i className="bi bi-tools"></i>
              </span>
          </div>
          <p className='text-muted my-5'>{intl.formatMessage({ id: "MOST_RISKY_PROJECT"})}</p>
          <div className="d-inline py-2 px-4  my-1 fw-bolder fs-6 badgex border-radius-rounded badge-secondary text-dark">15</div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default ProblemsSummary