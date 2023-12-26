import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
import {toAbsoluteUrl} from '../../../../helpers'
import { Link } from "react-router-dom";
import RealEstateCircularGuage from "./RealEstateCircularGuage";
import ContractsCircularGauge from "./ContactsCircularGuage";
import InvestigatingCircularGuage from "./InvestigatingCircularGuage";
// import ReactSpeedometer from "react-d3-speedometer"

const CommunicationsReportChart = () => {
    const intl = useIntl()

    return(
        <Row className="justify-content-center mb-4">
        <Col lg={4} md={6} sm={12} className={"my-2"}>
            <div className="mx-3">
            <div 
            className='card mb-3 py-5'>
            <div className="d-flex justify-content-start text-dark fs-5 mb-3 px-3">
            {intl.formatMessage({ id: "MoreManagementWithReports" })}
            </div>
            <div className='card-body d-flex flex-center flex-column'>
                {/* <img className="d-block w-100 h-300px"
                 src='/media/img/CommunicationsReportChar2.png' alt='' /> */}
                 <RealEstateCircularGuage/>
            </div>
            </div>
            </div>
        </Col>
        <Col lg={4} md={6} sm={12} className={"my-2"}>
            <div className="mx-3">
            <div 
            className='card mb-3 py-5'>
            <div className="d-flex justify-content-start text-dark fs-5 mb-3 px-3">
            {intl.formatMessage({ id: "MediumManagementCommunications" })}
            </div>
            <div className='card-body d-flex flex-center flex-column'>
                {/* <img className="d-block w-100 h-300px"
                 src='/media/img/CommunicationsReportChar1.png' alt='' /> */}
                 <ContractsCircularGauge/>
            </div>
            </div>
            </div>
        </Col>
        <Col lg={4} md={6} sm={12} className={"my-2"}>
             <div className="mx-3">
            <div 
            className='card mb-3 py-5'>
            <div className="d-flex justify-content-start text-dark fs-5 mb-3 px-3">
            {intl.formatMessage({ id: "FewerManagementWithReports" })}
            </div>
            <div className='card-body d-flex flex-center flex-column'>
                {/* <img className="d-block w-100 h-300px"
                 src='/media/img/CommunicationsReportChar3.png' alt='' /> */}
                 <InvestigatingCircularGuage/>
            </div>
            </div>
            </div>
        </Col>
    </Row>
    );
}

export default CommunicationsReportChart;