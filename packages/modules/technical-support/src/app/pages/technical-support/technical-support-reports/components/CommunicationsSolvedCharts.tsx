import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
import {toAbsoluteUrl} from '../../../../helpers'
import { Link } from "react-router-dom";
const CommunicationsSolvedCharts = () => {
    const intl = useIntl()

    return(
        <Row className="justify-content-center mb-4">
            <div className="mx-3">
            <div 
            className='card mb-3 py-5'>
            <div className="d-flex justify-content-start text-dark fs-5 mb-3 px-3">
            <i className="fa-regular fa-calendar fs-3 mx-2"></i>
            {intl.formatMessage({ id: "TheDateOfTheLastUpdate" })}
            {" "}
             : 
            {" "}
            <span className="fs-6 fw-semibold">Des 2023 15</span>
            </div>
            <div className='card-body d-flex flex-center flex-column'>
                <img className="d-block w-100 h-300px"
                style={{paddingLeft:"50px"}}
                 src='/media/img/CommunicationsSolvedCharts1.png' alt='' />
            </div>
            </div>
            </div>
    </Row>
    );
}

export default CommunicationsSolvedCharts;