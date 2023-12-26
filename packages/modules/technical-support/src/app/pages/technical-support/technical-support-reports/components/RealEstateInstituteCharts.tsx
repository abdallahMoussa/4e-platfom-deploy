import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useIntl } from "react-intl";

const RealEstateInstituteCharts = () => {
    const intl = useIntl()

    return(
        <Fragment>
        <Row className="justify-content-center mb-5">
        <Col lg={6} md={6} sm={12} className={"my-2"}>
            <div className="mx-3">
            <div 
            className='card py-5'>
            <div className="d-flex justify-content-start text-dark fw-bolder fs-7 px-5">
            {intl.formatMessage({ id: "AllCommunication" })}
            </div>
            <div className='card-body d-flex flex-center flex-column'>
                <img className="d-block w-100 h-300px"
                 src='/media/img/RealEstateInstituteCharts1.png' alt='' />
            </div>
            </div>
            </div>
        </Col>
        <Col lg={6} md={6} sm={12} className={"my-2"}>
            <div className="mx-3">
            <div 
            className='card py-5'>
            <div style={{paddingBottom:"50px"}} className='d-flex justify-content-between p-5 mb-4'>
            <div className="text-dark fw-bolder fs-7 mb-3 px-5">
            {intl.formatMessage({ id: "GeneralStats" })}
            </div>
            <div className="text-muted fw-bolder fs-7 mx-3">
                 {intl.formatMessage({ id: "AllCommunication" })}
                 :
                 {" "}
                 <span className="text-dark fw-bolder fs-7">150</span>
            </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="col-lg-4">
                <img className="d-block w-100 h-300px"
                src='/media/img/RealEstateInstituteCharts2.png' alt='' 
                />
                </div>
                <div className="col-lg-4">
                <div className="text-center text-primary fw-bolder mb-5">
                {intl.formatMessage({ id: "CommunicationsStatus" })}
                </div>
                <p className="text-center text-muted fw-bolder mb-5">
                    {intl.formatMessage({ id: "Solved" })}</p>
                <p className="text-center text-muted fw-bolder mb-5">
                    {intl.formatMessage({ id: "Continued" })}</p>
                <p className="text-center text-muted fw-bolder mb-5">
                    {intl.formatMessage({ id: "Rejected" })}</p>
                <p className="text-center text-muted fw-bolder mb-5">
                    {intl.formatMessage({ id: "Closed" })}</p>
                <p className="text-center text-muted fw-bolder mb-5">
                    {intl.formatMessage({ id: "Late" })}</p>
                <p className="text-center text-muted fw-bolder mb-5">
                    {intl.formatMessage({ id: "Converted" })}</p>
                </div>
                <div className="col-lg-4">
                <div className="text-center text-primary fw-bolder mb-5">
                {intl.formatMessage({ id: "AllCommunication" })}
                </div>
                <p className="text-center text-dark fw-bolder mb-5">10</p>
                <p className="text-center text-dark fw-bolder mb-5">10</p>
                <p className="text-center text-dark fw-bolder mb-5">10</p>
                <p className="text-center text-dark fw-bolder mb-5">10</p>
                <p className="text-center text-dark fw-bolder mb-5">10</p>
                <p className="text-center text-dark fw-bolder mb-4">10</p>
                </div>
            </div>  
            </div>
            </div>
        </Col>
    </Row>
    </Fragment>
    );
}

export default RealEstateInstituteCharts;