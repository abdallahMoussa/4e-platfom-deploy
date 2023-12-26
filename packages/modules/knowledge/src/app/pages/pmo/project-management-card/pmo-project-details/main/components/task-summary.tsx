import { FC } from "react"
import { useIntl } from "react-intl"

const TaskSummary: FC = () => {

    const intl = useIntl()

  return (
    <>
    <div className="col-md-6 ">
                <div>
                <div className=" my-5">
                    <div className="card card-xl-stretch h-350px py-3">
                        <div className="card-header d-flex align-items-center px-0 border-0 pb-2 mb-4 mx-5">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bolder fs-4 mb-1  mx-0">{intl.formatMessage({ id: "TasksSummary" })}</span>
                                <span className="mt-1 fw-semibold fs-6 text-muted">{intl.formatMessage({ id: "TotalOverdueTasks" })}   24</span>
                            </h3>
                                    <a className='mb-0 btn btn-light'>{intl.formatMessage({ id: "ViewTasks" })} </a>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 mb-2 '>
                                <div className="mx-6 ">
                                    <div className='d-flex justify-content-between mb-5 '>
                                        <p className='mb-0 text-primary fw-blod'>{intl.formatMessage({ id: "InProgress" })} </p>
                                        <p className='mb-0 fw-blod '>30</p>
                                    </div>
                                    <div className='d-flex justify-content-between mb-5'>
                                        <p className='mb-0 text-success'>{intl.formatMessage({ id: "Complete" })}</p>
                                        <p className='mb-0 fw-blod'>30</p>
                                    </div>
                                    <div className='d-flex justify-content-between mb-5'>
                                        <p className='mb-0 text-danger'>{intl.formatMessage({ id: "Overdue" })}</p>
                                        <p className='mb-0 fw-blod'>25</p>
                                    </div>
                                    <div className='d-flex justify-content-between mb-5'>
                                        <p className='mb-0 text-muted'> {intl.formatMessage({ id: "NotStarted" })} </p>
                                        <p className='mb-0 fw-blod'>25</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 d-flex justify-content-center align-items-center mb-2'>
                                <div className='text-center'>
                                    <h1 className='fw-bolder mb-5 '>110</h1>
                                    <h4 className='text-muted fw-bloder'> {intl.formatMessage({ id: "CurrentProjects" })}</h4>
                                </div>
                            </div>
                            <div className="col-11 notice d-flex bg-light-primary rounded border-primary border border-dashed my-5 mx-7">
                                <div>
                                <p className='mb-2 my-5 '><span className='text-primary'>لوريم إيبسوم(Lorem Ipsum) </span>هو ببساطة نص شكلي (بمعنى أن الغاية هى الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </>
        )
    }
    
    export { TaskSummary }