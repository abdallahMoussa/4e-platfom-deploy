import React from 'react'
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const ProblemDetails = () => {
  const intl = useIntl();

  return (
    <>
      <div className=" my-5">
        <div className="card card-xl-stretch mb-xl-0">
          <div className="card-header px-3 pt-3 pb-2  d-flex bg-light  border-secondary border-0 border-top-1 border-bottom-1 border-dashed   mx-7 mt-10 mb-5 ">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder fs-4 mb-2 ">{intl.formatMessage({ id: "PROBLEM.DATA"})}</span>
              <span className="mt-1 fw-semibold fs-6 text-muted">{intl.formatMessage({ id: "CURRENT.PROBLEM.DATA"})}</span>
            </h3>
            <div className="card-toolbar">
              <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end mb-5">
                <Link to={"/pmo-edit-problem-challenge"} className="btn btn-primary mx-1 me-3 mw-100 text-center">
                  {intl.formatMessage({ id: "EDIT.PROBLEM"})}
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body py-3 px-3">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="REGA_table_widget_5_tab_1">
                <div className="mx-5">
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6">{intl.formatMessage({ id : "PROBLEM.ADDRESS"})} : </p>
                    <p className="px-2 mb-5 fs-6 pb-2 fw-bolder">عدم تعاون الجهات مالكه البيانات</p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id : "PROBLEM.DESCRIPTION"})} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">وصف المشكله</p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id : "PROBLEM.OWNER"})} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">اسم المالك</p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id : "PROBLEM.SOURCE"})} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">نظام فرز</p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id : "PROBLEM.DATE"})} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">25 Jun 2022</p>
                  </div>
                  <div className="d-flex pt-2  align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id : "PROJECTS.NUM"})} :</p>
                    <p className="px-2 mb-5 fs-4 pb-2 fw-bolder">15</p>
                  </div>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع,</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع,</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع,</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع,</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع,</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع,</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProblemDetails