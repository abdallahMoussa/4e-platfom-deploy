import React, {FC} from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useIntl } from 'react-intl'
import StackChart from './StackChart'


const GeneralApprovalCards: FC = () => {
  const intl = useIntl()
  return (
    <>

                
                  
                    

         <Row className="justify-content-center mb-4">
            <Col lg={3} md={6} sm={12} className={"my-2"}>
         
                <Card style={{height:"300px"}}>
              
                   <div className="card-body d-flex flex-center flex-column p-5 my-10">
    <div className="symbol symbol-75px mb-2">
        <span className="symbol-label bg-light-success">
            <span className="svg-icon svg-icon-4x svg-icon-success">
                <i className="fad fa-check-double fs-3x"></i></span></span>
                <span className="top-icon"><i className="bi bi-tools"></i></span>
                </div>
                <div className="fw-bold text-gray-400 my-6">   {intl.formatMessage({ id: "TotalNumberOfApprovals" })}   </div>
                <h1 className='d-inline py-2 px-3 fw-bolder badgex badge-light text-black'>15</h1>

                </div>
                </Card> 
            </Col>


            <Col lg={6} md={6} sm={12} className={"my-2"}>
                <Card className="px-3">
                <StackChart/>
                </Card>

            </Col>


            <Col lg={3} md={6} sm={12} className={"my-2"}>
           <Card style={{height:"300px"}}>
              
                   <div className="card-body d-flex flex-center flex-column p-5 my-10">
    <div className="symbol symbol-75px mb-2">
        <span className="symbol-label bg-light-success">
            <span className="svg-icon svg-icon-4x svg-icon-success">
                <i className="fad fa-check-double fs-3x"></i></span></span>
                <span className="top-icon"><i className="bi bi-tools"></i></span>
                </div>
                <div className="fw-bold text-gray-400 my-6">  {intl.formatMessage({ id: "MostDepartmentsRequestingApprovals" })}    </div>
                <h1 className='d-inline py-2 px-3 fw-bolder badgex badge-light text-black'>15</h1>

                </div>
                </Card> 
            </Col>
           </Row>
    </>
  )
}

export { GeneralApprovalCards }
