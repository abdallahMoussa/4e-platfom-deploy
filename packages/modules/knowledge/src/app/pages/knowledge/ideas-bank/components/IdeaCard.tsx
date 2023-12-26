import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Ideas } from "./IdeaData";
import { FaRegComments } from "react-icons/fa";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineEye } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri"
import { useIntl } from 'react-intl'
import { Link } from "react-router-dom";

const IdeaCard = () => {
    const intl = useIntl()
    return(
    <>    
    <div className="my-10">
        <div className="card card-xl-stretch mb-xl-8">
            <div className="card-body py-3">
            <Row className="gy-5">
                {Ideas?.map((idea) => {
                return (
                    <Fragment key={Math.random()}>
                    <Col md={4}>
                        <Link to="/knowledge-idea-bank-details">
                        <div className='shadow p-4'>
                        <div className='card h-100 w-100' style={{width: '336px'}}>
                        <p style={{color: '#181C32', fontSize: '14px'}} className='mb-3'>
                            {idea?.Title}
                        </p>
                        <p style={{color: '#727272', fontSize: '12px'}} className='mb-3'>
                            {idea?.Subtitle}
                        </p>
                        <div
                            style={{height: '133px', cursor: 'pointer'}}
                            className='position-relative mb-2'
                        >
                        <img
                            alt='idea image'
                            src="/media/img/book.png"
                            style={{display: 'inline-block', width: '100%', height: '133px'}}
                            className='mb-2'
                        />
                        <span
                        className='fw-bold p-2'
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            color: '#52CD50',
                            backgroundColor: '#E8FFF3',
                            width: 'fit-content',
                            borderRadius: '5px',
                        }}
                        >
                        200 {intl.formatMessage({ id: "Supporter" })}
                        </span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div
                            style={{border: '1px solid #F2F2F2', width: 'fit-content', cursor: 'pointer'}}
                            className='p-2'
                            >
                            <span className='text-gray-500'>{intl.formatMessage({ id: "Comment" })} </span>
                            <i className="fa-regular fa-comments mx-1 fs-4 fa-fw"></i>
                            <span style={{color: '#009EF7'}}>
                                20
                            </span>
                            </div>
                            <div
                            style={{border: '1px solid #F2F2F2', width: 'fit-content', cursor: 'pointer'}}
                            className='p-2 mx-3'
                            >
                            <span className='text-gray-500'>
                            {intl.formatMessage({ id: "ISupport" })} <i className="fa-regular fa-thumbs-up mx-1 fs-3 fa-fw"></i>
                            </span>
                            <span className='text-success'>20</span>
                            </div>
                            <div
                            style={{border: '1px solid #F2F2F2', width: 'fit-content', cursor: 'pointer'}}
                            className='p-2'
                            >
                            <span className='text-gray-500'>
                            {intl.formatMessage({ id: "Objection" })} <i className="fa-regular fa-thumbs-down mx-1 fs-3 fa-fw"></i>
                            </span>
                            <span className='text-danger'>20</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-start mt-3 mb-1'>
                        <div
                            style={{border: '1px solid rgb(242, 242, 242)', width: 'fit-content'}}
                            className='p-2'
                            >
                            <span style={{display: 'inline-block', color: 'rgb(161, 165, 183)'}}>
                                {intl.formatMessage({ id: "Share" })}
                            </span>
                            <i className="fa-solid fa-share mx-2 fs-3 fa-fw"></i>
                            <span style={{display: 'inline-block', color: 'rgb(161, 165, 183)'}}>
                                20
                            </span>
                        </div>
                        <div
                            style={{border: '1px solid rgb(242, 242, 242)', width: 'fit-content'}}
                            className='p-2 mx-5'
                            >
                            <span style={{display: 'inline-block', color: 'rgb(161, 165, 183)'}}>
                            {intl.formatMessage({ id: "ViewIdeas" })}
                            </span>
                            <i className="fa-regular fa-eye mx-2 fs-3 fa-fw"></i>
                            <span style={{display: 'inline-block', color: 'rgb(161, 165, 183)'}}>
                                20
                            </span>
                        </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                        <p 
                        className='mb-2 mx-1'
                        style={{color: '#A1A5B7'}}
                        >
                        {idea?.Duration}
                        </p>
                        </div>
                        </div>
                        </div>
                        </Link>
                        </Col>
                    </Fragment>
                )
                })}
            </Row>
            </div>
        </div>
    </div>
    <div className='d-flex align-items-center justify-content-center'>
        <button
        type='button'
        className='btn btn-lg '
        style={{
            color: '#181C38',
            width: '30%',
            border: '1px solid #3F7DC8',
            background: 'white',
            fontWeight: '700',
            fontSize: '16px',
        }}
        >
          {intl.formatMessage({ id: "MoreIdeas" })}
        </button>
    </div>
    </>    
    )
}

export {IdeaCard}