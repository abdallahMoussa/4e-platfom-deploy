import { FC } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

const ChangeRequestsDetails: FC = () => {
  const intl = useIntl();

  return (
    <>
      <div className=" my-5">
        <div className="card card-xl-stretch mb-xl-0">
          <div className="card-header px-3 pt-3 pb-2  d-flex bg-light  border-secondary border-0 border-top-1 border-bottom-1 border-dashed   mx-7 mt-10 mb-5 ">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder fs-4 mb-2 "> {intl.formatMessage({ id: "ChangeRequestsData" })}</span>
              <span className="mt-1 fw-semibold fs-6 text-muted">{intl.formatMessage({ id: "CurrentChangeRequestData" })} </span>
            </h3>
            <div className="card-toolbar">
              <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end mb-5">
                <Link to={"/pmo-project-edit-change-request"} className="btn btn-secondary mx-1 me-3 mw-100 text-center">
                {intl.formatMessage({ id: "EditChange" })}                </Link>
                <Link to={"/pmo-project-add-change-request"} className="btn btn-primary mx-1 me-3 mw-100 text-center">
                {intl.formatMessage({ id: "AddChange" })}                 </Link>
              </div>
            </div>
          </div>
          <div className="card-body py-3 px-3">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="REGA_table_widget_5_tab_1">
                <div className="mx-5">
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id: "ChangeRequests" })} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-primary fw-bold">عنوان طلب التغيير</p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id: "ORDER.NUM" })} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold"> 1   </p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id: "PRIORITY" })} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold"> منخفضة</p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id: "RequestDate" })}:</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">25 Jun 2022</p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6">{intl.formatMessage({ id: "CHAGE.REQUEST" })}  :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">التأثير على التكلفة, التأثير على نطاق العمل, التأثير على الجودة</p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id: "RequestReason" })} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">السبب الاساسى لطلب التغيير, السبب الاساسى لطلب التغيير, السبب الاساسى لطلب التغيير,</p>
                  </div>
                 

                  <div className="d-flex mb-10 pt-2  pb-3 align-items-center">
                    <div className="row w-100 flex-grow-1">
                      <div className="col-lg-1 my-2 my-lg-0 d-flex align-items-center">
                        <div className="fontSz-6">{intl.formatMessage({ id: "Attachments" })}:</div>
                      </div>
                      <div className="col-lg-11 d-flex align-items-center">
                        <div className="row w-100 flex-grow-1">
                          <div className="col-lg-4 px-1">
                            <div className="d-flex align-items-center  my-3 my-lg-0">
                              <img src="/media/pmo/pdfIcon.png" className="w-40px h-40px" alt="pdf" />
                              <div className="d-flex flex-column mx-3">
                                <label className="text-center  fontSz-6 ms-auto">المتطلبات الفنية للمشروع</label>
                                <span className="text-muted fw-bold fontSz-7">منذ يومين</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 px-1">
                            <div className="d-flex align-items-center my-3 my-lg-0">
                              <img src="/media/pmo/docIcon.png" className="w-40px h-40px" alt="pdf" />
                              <div className="d-flex flex-column mx-3">
                                <label className="text-center  fontSz-6 ms-auto">إنشاء تصميم مبدئ للمشروع</label>
                                <span className="text-muted fw-bold fontSz-7">منذ يوم</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 px-1">
                            <div className="d-flex align-items-center my-3 my-lg-0">
                              <img src="/media/pmo/pdfIcon.png" className="w-40px h-40px" alt="pdf" />
                              <div className="d-flex flex-column mx-3">
                                <label className="text-center  fontSz-6 ms-auto">المتطلبات الفنية للمشروع</label>
                                <span className="text-muted fw-bold fontSz-7">منذ ثلاث ايام</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ChangeRequestsDetails };
