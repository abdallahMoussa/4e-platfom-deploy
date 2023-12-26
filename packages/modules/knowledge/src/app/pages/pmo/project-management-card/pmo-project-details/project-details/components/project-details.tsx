import { FC } from "react";
import { useIntl } from "react-intl";
import { getCurrentSystemLanguage } from '../../../../../../partials/functions/language'
import { Accordion } from "react-bootstrap";
import AddProjectDomainPopup from "../popup/add-project-domain-popup";
import { KTSVG } from "../../../../../../helpers";


const ProjectDetails: FC = () => {
    const intl = useIntl();

    return (
      <>

       
                        <div className="card card-xl-stretch mb-xl-8 my-5 ">
                            <div className="card-body py-3 px-3 mx-8">
                                <div className="row">
                                        
                                        <div className='d-flex my-5  justify-content-between'>
                                        <div className="card shadow  p-3 mb-5 bg-white rounded h-150px d-flex align-items-center justify-content-center ms-3" style={{width:"15%"}}>
                                                <div className="text-primary text-center fs-1 fw-bolder">20</div>
                                                <div className={`text-muted fw-bolder text-center ${getCurrentSystemLanguage() == 'ar' ? 'mt-3' : ''}`}> {intl.formatMessage({ id: 'NumberOfProjectTasks' })} </div>
                                            </div>
                                            <div className="card shadow p-3 mb-5 bg-white rounded  h-150px d-flex align-items-center justify-content-center ms-3" style={{width:"15%"}}>
                                                <div className="text-primary text-center fs-1 fw-bolder">14</div>
                                                <div className={`text-muted fw-bolder text-center ${getCurrentSystemLanguage() == 'ar' ? 'mt-3' : ''}`}>{intl.formatMessage({ id: 'NumberOfProjectApprovals' })}</div>
                                            </div>
                                            <div className="card shadow p-3 mb-5 bg-white rounded  h-150px d-flex align-items-center justify-content-center ms-3" style={{width:"15%"}}>
                                                <div className="text-danger text-center fs-1 fw-bolder ">2</div>
                                                <div className={`text-muted fw-bolder text-center ${getCurrentSystemLanguage() == 'ar' ? 'mt-3' : ''}`}>{intl.formatMessage({ id: 'NumberOfProjectRisks' })}  </div>
                                            </div>
                                           
                                            <div className="card shadow p-3 mb-5 bg-white rounded h-150px d-flex align-items-center justify-content-center ms-3" style={{width:"15%"}}>
                                                <div className="text-primary text-center fs-1 fw-bolder">7</div>
                                                <div className={`text-muted fw-bolder text-center ${getCurrentSystemLanguage() == 'ar' ? 'mt-3' : ''}`}>{intl.formatMessage({ id: 'NumberOfChangeRequests' })}   </div>
                                            </div>
                                            <div className="card shadow p-3 mb-5 bg-white rounded  h-150px d-flex align-items-center justify-content-center ms-3" style={{width:"15%"}} >
                                                <div className="text-primary text-center fs-1 fw-bolder">14</div>
                                                <div className={`text-muted fw-bolder text-center ${getCurrentSystemLanguage() == 'ar' ? 'mt-3' : ''}`}>{intl.formatMessage({ id: 'NumberOfProjectOutputs' })}  </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-2  pb-3">
                                        <table className="table table-rounded border table-row-gray-200 align-middle gs-0 gy-4 text-center">
                                            <thead>
                                                <tr className="text-dark fw-bold fs-6 bg-light">
                                                    <th className="px-2 pb-3 min-w-50px max-w-200px">{intl.formatMessage({ id: 'ProjectOwner' })}</th>
                                                    <th className="px-2 pb-3 min-w-50px max-w-200px">{intl.formatMessage({ id: 'ProjectManager' })}</th>
                                                    <th className="px-2 pb-3 min-w-50px max-w-350px">{intl.formatMessage({ id: 'ProjectValue' })}</th>
                                                    <th className="px-2 pb-3 min-w-50px max-w-350px">{intl.formatMessage({ id: 'DurationOfTheProject' })}</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-muted'>
                                                <tr className='h-60px'>
                                                    <td className='text-primary'> عبدالله محمد</td>
                                                    <td className='text-primary'>عبدالله محمد</td>
                                                    <td> 800.561.000</td>
                                                    <td> 20 شهر</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mb-7 radius rounded-2">

          <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="d-flex justify-content-between">
            
            <div className="fw-bolder text-primary">{intl.formatMessage({ id: 'ProjectItems' })} </div>
            <div
             className=" flex-grow-1 text-success mx-2"  
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Rega_modal-add-project-domain"
                > <i className="fa-regular fa-plus text-success mx-2"></i>{intl.formatMessage({ id: 'Add' })}</div>
            </Accordion.Header>

              <Accordion.Body>
                  <p className=' mb-5 mx-2'>
                  1– المساهمة في زيادة الدخل القومي الخاص بالمشروع الاستثماري
                  </p>
                  <p className=' mb-5 mx-2'>
                  2– توفير فرص العمل                  </p>
                  <p className='mb-5 mx-2'>
                  3– تحقيق السيولة والتدفقات النقدية
                  </p>
                  <p className=' mb-5 mx-2'>
                  4– المساهمة في التنمية سواء الإقليمية أو المجتمعية
                  </p>
                  <p className=' mb-5 mx-2'>5– المحافظة على البيئة الطبيعية والاجتماعية
                  </p>
                  <p className=' mb-5 mx-2'>
                  6– تحقيق أقصى الأرباح المادية من خلال المشروع
                  </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
</div>
<div className="mb-7 radius rounded-2">

          <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="d-flex justify-content-between">
            
            <div className="fw-bolder text-primary">{intl.formatMessage({ id: 'ProjectScope' })} </div>
            <div className=" flex-grow-1 text-primary mx-2"> 
            <span className="svg-icon svg-icon-3 mx-1">
              <KTSVG path="/media/icons/duotune/general/gen087.svg" />
            </span>            {intl.formatMessage({ id: 'Edit' })}</div>
            </Accordion.Header>

              <Accordion.Body>
                  <p className=' mb-5 mx-2'>
                  1– المساهمة في زيادة الدخل القومي الخاص بالمشروع الاستثماري
                  </p>
                  <p className=' mb-5 mx-2'>
                  2– توفير فرص العمل                  </p>
                  <p className='mb-5 mx-2'>
                  3– تحقيق السيولة والتدفقات النقدية
                  </p>
                  <p className=' mb-5 mx-2'>
                  4– المساهمة في التنمية سواء الإقليمية أو المجتمعية
                  </p>
                  <p className=' mb-5 mx-2'>5– المحافظة على البيئة الطبيعية والاجتماعية
                  </p>
                  <p className=' mb-5 mx-2'>
                  6– تحقيق أقصى الأرباح المادية من خلال المشروع
                  </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>

          <div className="mb-7 radius rounded-2">
          <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="d-flex justify-content-between align-items-center">
            
            <div className="fw-bolder text-primary">{intl.formatMessage({ id: 'ProjectSpecifications' })}  </div>
            <div
             className=" flex-grow-1 text-success mx-2"  
             role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Rega_modal-add-project-domain"
                > 

<i className="fa-regular fa-plus text-success mx-2"></i>{intl.formatMessage({ id: 'Add' })}</div>            </Accordion.Header>

              <Accordion.Body>
                  <p className=' mb-5 mx-2'>
                  1– المساهمة في زيادة الدخل القومي الخاص بالمشروع الاستثماري
                  </p>
                  <p className=' mb-5 mx-2'>
                  2– توفير فرص العمل                  </p>
                  <p className='mb-5 mx-2'>
                  3– تحقيق السيولة والتدفقات النقدية
                  </p>
                  <p className=' mb-5 mx-2'>
                  4– المساهمة في التنمية سواء الإقليمية أو المجتمعية
                  </p>
                  <p className=' mb-5 mx-2'>5– المحافظة على البيئة الطبيعية والاجتماعية
                  </p>
                  <p className=' mb-5 mx-2'>
                  6– تحقيق أقصى الأرباح المادية من خلال المشروع
                  </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>

          <div className="mb-7 radius rounded-2">
          <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="d-flex justify-content-between">
            
            <div className="fw-bolder text-primary">{intl.formatMessage({ id: 'ProjectSpecifications' })}  </div>
            <div className=" flex-grow-1 text-primary mx-2">
            <span className="svg-icon svg-icon-3 mx-1">
              <KTSVG path="/media/icons/duotune/general/gen087.svg" />
            </span>                 {intl.formatMessage({ id: 'Edit' })}</div>
            </Accordion.Header>

              <Accordion.Body>
                  <p className=' mb-5 mx-2'>
                  1– المساهمة في زيادة الدخل القومي الخاص بالمشروع الاستثماري
                  </p>
                  <p className=' mb-5 mx-2'>
                  2– توفير فرص العمل                  </p>
                  <p className='mb-5 mx-2'>
                  3– تحقيق السيولة والتدفقات النقدية
                  </p>
                  <p className=' mb-5 mx-2'>
                  4– المساهمة في التنمية سواء الإقليمية أو المجتمعية
                  </p>
                  <p className=' mb-5 mx-2'>5– المحافظة على البيئة الطبيعية والاجتماعية
                  </p>
                  <p className=' mb-5 mx-2'>
                  6– تحقيق أقصى الأرباح المادية من خلال المشروع
                  </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
</div>
                                   
                            
                                </div>
                            </div>
        <AddProjectDomainPopup />
      </>

    );
};
export {ProjectDetails};