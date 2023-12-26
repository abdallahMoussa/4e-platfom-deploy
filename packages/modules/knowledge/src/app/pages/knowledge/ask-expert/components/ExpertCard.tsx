import React, { Fragment } from "react";
import {Row, Col } from "react-bootstrap";
import { useIntl } from 'react-intl'
import { experts } from "./ExpertData";
import { Link } from "react-router-dom";
import { SystemPagination } from '../../../partials/SystemPagination';

const ExpertCard = () => {
    const intl = useIntl()
    return(
        <Fragment>
          <Row className="gy-5">
            {experts?.map((expert) => {
              return (
                <Fragment key={Math.random()}>
                  <Col md={4}>
                  <div className="mx-3 ">
                  <div 
                  className='card mb-3 py-5'>
                    <div className='card-header border-0 pt-5 d-flex align-items-center justify-content-center mt-5 '>
                        <img 
                        src="/media/avatars/300-3.jpg"
                        style={{display: 'block', height: '122px', width: '122px', borderRadius: '50%'}}
                        />
                    </div>

                    <div className='card-body d-flex flex-center flex-column'>
                        <p style={{fontSize: '16px', fontWeight: '700'}} className='text-center'>
                        {expert?.expertName}
                        </p>
                        <p style={{color: '#A1A5B7', fontWeight: '400'}} className='text-center'>{expert?.specialization}</p>
                        <p style={{color: '#181C32', fontSize: '14px', fontWeight: '400'}} className='mb-5 text-center'>
                        {expert?.orgName}
                        </p>
                        <Link to="/knowledge-profile-expert" >
                        <button
                        className='btn btn-primary mx-1 text-center mb-5 mt-5'
                        >
                          {intl.formatMessage({ id: "Viewprofile" })}{' '}
                        </button>
                        </Link>
                    </div>
                    </div>
                  </div>
                  </Col>
                </Fragment>
              )
            })}
          </Row>
          <SystemPagination />
      </Fragment>
)
}

export {ExpertCard}