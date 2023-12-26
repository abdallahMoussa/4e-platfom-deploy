import React, { Fragment } from "react";
import { useIntl } from "react-intl";

function CurrentServiceReport() {
  let intl = useIntl();
  return (
    <Fragment>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  mt-4"
      >
        <div className="content flex-row-fluid " id="kt_content">
          <div className="row">
            <div className="col-3">
              <div className="card  shadow h-550px pt-5 pb-5">
                <h5 className="me-3 pt-2 h-30px px-4 mb-5">
                  {intl.formatMessage({ id: "MainClassification" })}{" "}
                </h5>
                <div className="d-flex flex-column mb-7 ">
                  <div className="mb-4 h-30px w-100 item">
                    <div className=" cursor-pointer text-muted bg-white border-0 d-inline-block w-100 h-100">
                      <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                        <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                        <div>
                          <span className="fw-bolder fs-7">التطبيقات -</span>
                          <span className="fw-bolder fs-7 me-2">
                            Applications
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 h-30px w-100 item">
                    <div className=" cursor-pointer text-muted bg-white border-0 d-inline-block w-100 h-100">
                      <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                        <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                        <div>
                          <span className="fw-bolder fs-7">
                            البريد الالكتروني-
                          </span>
                          <span className="fw-bolder fs-7 me-2">Email</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 h-30px w-100 item">
                    <div className=" cursor-pointer text-muted bg-white border-0 d-inline-block w-100 h-100">
                      <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                        <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                        <div>
                          <span className="fw-bolder fs-7">
                            الاجهزه وملحقاتها-
                          </span>
                          <span className="fw-bolder fs-7 me-2">Hardware</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 h-30px w-100 item">
                    <div className=" cursor-pointer text-muted bg-white border-0 d-inline-block w-100 h-100">
                      <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                        <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                        <div>
                          <span className="fw-bolder fs-7">
                            الانترنت والشبكات-
                          </span>
                          <span className="fw-bolder fs-7 me-2">
                            Network & Internet
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 h-30px w-100 item">
                    <div className=" cursor-pointer text-muted bg-white border-0 d-inline-block w-100 h-100">
                      <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                        <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                        <div>
                          <span className="fw-bolder fs-7">البرامج-</span>
                          <span className="fw-bolder fs-7 me-2">Softwares</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 h-30px w-100 item">
                    <div className=" cursor-pointer text-muted bg-white border-0 d-inline-block w-100 h-100">
                      <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                        <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                        <div>
                          <span className="fw-bolder fs-7">الهاتف-</span>
                          <span className="fw-bolder fs-7 me-2">Telephony</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 h-30px w-100 item">
                    <div className=" cursor-pointer text-muted bg-white border-0 d-inline-block w-100 h-100">
                      <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                        <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                        <div>
                          <span className="fw-bolder fs-7">مركز البيانات-</span>
                          <span className="fw-bolder fs-7 me-2">
                            Data center
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 h-30px w-100 item">
                    <div className=" cursor-pointer text-muted bg-white border-0 d-inline-block w-100 h-100">
                      <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                        <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                        <div>
                          <span className="fw-bolder fs-7 me-2">
                            Usermangmment
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 h-30px w-100 item">
                    <div className=" cursor-pointer text-muted bg-white border-0 d-inline-block w-100 h-100">
                      <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                        <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                        <div>
                          <span className="fw-bolder fs-7 me-2">
                            المعهد العقاري
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 h-30px w-100 item">
                    <div className=" cursor-pointer text-muted bg-white border-0 d-inline-block w-100 h-100">
                      <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                        <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                        <div>
                          <span className="fw-bolder fs-7 me-2">
                            طلبات مكتب الرئيس التنفيذي
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="card mb-5 mb-xl-10 shadow pb-5">
                <div className="card-body pt-5 pb-0">
                  <h5 className="me-3 pt-2 h-30px px-4 mb-5">
                    {intl.formatMessage({ id: "SubCategory" })}{" "}
                  </h5>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">
                      {intl.formatMessage({
                        id: "AdministrativeCommunications",
                      })}{" "}
                      AC system{" "}
                    </p>
                    <p className="px-2 mb-0  pb-2 fw-bolder text-muted">
                      This template is used when an application issue is occured
                    </p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">
                      مشكله تطبيقات نظام الموارد المؤسسيه/ Application issue
                    </p>
                    <p className="px-2 mb-0  pb-2 fw-bolder text-muted">
                      This template is used when an application crashes /hangs
                      frequently
                    </p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">Database</p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">نظام تمام EPM</p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">نظام الارشفه Archiving</p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder ">Database</p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">نظام تمام EPM</p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">البوابه الذاتيه SelfService</p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">الانظمه system</p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">البوابه الداخليه</p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">المؤشرات العقاريه</p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">الملكيه</p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">
                      موقع الهيئه العامه للعقار الخارجي
                    </p>
                  </div>
                  <div className="px-4 py-4  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-black-50 fs-5 fw-bolder">نظام الاداء المؤسسي</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CurrentServiceReport;
