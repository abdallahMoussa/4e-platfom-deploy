import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useIntl } from "react-intl";

const ReportEmployeesCharts = () => {
    const intl = useIntl()

    return(
        <Fragment>
        <Row className="justify-content-center mb-5">
        <Col lg={6} md={6} sm={12} className={"my-2"}>
            <div className="mx-3">
            <div 
            className='card py-5'>
            <div className="d-flex justify-content-start text-dark fw-bolder fs-7 px-5">
            {intl.formatMessage({ id: "TheTotalNumberOfCommunications" })}
            </div>
            <div className='card-body d-flex flex-center flex-column'>
                <img className="d-block w-100 h-300px"
                 src='/media/img/CommunicationsEmloyeesCharts1.png' alt='' />
            </div>
            </div>
            </div>
        </Col>
        <Col lg={6} md={6} sm={12} className={"my-2"}>
            <div className="mx-3">
            <div 
            className='card mb-3 py-5'>
            <div className="d-flex justify-content-start text-dark fw-bolder fs-7 mb-5 px-5">
            {intl.formatMessage({ id: "GeneralStatisticsForEmployees" })}
            </div>
            <img className="d-block w-100 h-300px mt-5 mb-5"
                src='/media/img/ReportsEmployee1.png' alt='' 
            />
            </div>
            </div>
        </Col>
    </Row>

    <Row className="justify-content-center mb-4">
        <Col lg={6} md={6} sm={12} className={"my-2"}>
            <div className="mx-3">
            <div 
            className='card mb-3 py-5'>
            <div className="d-flex justify-content-start text-dark fw-bolder fs-7 px-5">
            {intl.formatMessage({ id: "GeneralStatisticsForEmployees" })}
            </div>    
            <div className="d-flex justify-content-between">
                <div style={{paddingTop:"80px"}} className="col-lg-5">
                <div className='card-body d-flex flex-center flex-column mt-5'>
                <Row className="mb-2">
                <Col lg={2} md={6} sm={12} className={"my-2"}>
                <div style={{height: "5px", width:"25px", backgroundColor:"#9AD075", marginTop:"10px", borderRadius:"10PX"}}>
                </div>
                </Col>
                <Col lg={6} md={6} sm={12} className={"my-2 "}>
                <div className="text-muted fs-7 px-3">{intl.formatMessage({ id: "Normal" })}</div>
                </Col>
                <Col lg={4} md={6} sm={12} className={"my-2 "}>
                <div className="text-muted fs-7 px-3">% 70</div>
                </Col>
                </Row>
                <Row className="mb-2">
                <Col lg={2} md={6} sm={12} className={"my-2"}>
                <div style={{height: "5px", width:"25px", backgroundColor:"#C8BE6A", marginTop:"10px", borderRadius:"10PX"}}>
                </div>
                </Col>
                <Col lg={6} md={6} sm={12} className={"my-2"}>
                <div className="text-muted fs-7 px-5">{intl.formatMessage({ id: "Danger" })}</div>
                </Col>
                <Col lg={4} md={6} sm={12} className={"my-2 "}>
                <div className="text-muted fs-7 px-3">% 20</div>
                </Col>
                </Row>
                <Row className="mb-2">
                <Col lg={2} md={6} sm={12} className={"my-2"}>
                <div style={{height: "5px", width:"25px", backgroundColor:"#C86A73", marginTop:"10px", borderRadius:"10PX"}}>
                </div>
                </Col>
                <Col lg={6} md={6} sm={12} className={"my-2"}>
                <div className="text-muted fs-7">{intl.formatMessage({ id: "VeryDanger" })}</div>
                </Col>
                <Col lg={4} md={6} sm={12} className={"my-2 "}>
                <div className="text-muted fs-7 px-3">% 10</div>
                </Col>
                </Row>
                </div>
                </div>
                <div className="col-lg-7">
                <div className='card-body d-flex flex-center flex-column'>
                <img className="d-block w-100 h-300px"
                 src='/media/img/ReportsEmployee2.png' alt='' />
                </div>
                </div>               
            </div>    
            
            </div>
            </div>
        </Col>
        <Col lg={6} md={6} sm={12} className={"my-2"}>
            <div className="mx-3">
            <div 
            className='card mb-3 py-3'>
            <div className=" d-flex justify-content-start px-5">
                <h4 className="text-dark fw-bolder">
                {intl.formatMessage({ id: "TheRateOfSpeedOfImplementationOfTheCommunication" })}  
                </h4>
            </div>
            <div className='card-body d-flex flex-center flex-column'>
                <img className="d-block w-100 h-300px"
                 src='/media/img/ReportsEmployee4.png' alt='' />
            </div>
            </div>
            </div>
        </Col>
    </Row>
    </Fragment>
    );
}

export default ReportEmployeesCharts;