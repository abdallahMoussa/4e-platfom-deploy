import { FC } from "react";
import { useIntl } from "react-intl";

const ClosingItems: FC = () => {
  const intl = useIntl();

  return (
    <>
      <div className="col-lg-6 col-md-6 col-12">
        <div className="card card-xl-stretch mb-xl-0">
          <div className="card-header border-0 pt-3 pb-2 mb-2">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder fs-4 mb-2 ">  {intl.formatMessage({ id: 'ProjectClosingItems' })}  </span>
              <span className="mt-1 fw-semibold fs-6 text-muted">{intl.formatMessage({ id: 'ProjectItemsList' })}   </span>
            </h3>
          </div>
          <div className="card-body py-3 px-3">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="REGA_table_widget_5_tab_1">
                <div className="d-flex justify-content-between align-items-center mb-7">
                  <div className="d-flex align-items-center mx-5 ">
                  <i className="fas fa-check fa-lg text-success"></i>
                    <div className="d-flex flex-column mx-3 ">
                      <p className="mb-0 fw-bolder mb-3  text-primary"> حالة المخرجات بالمشروع </p>
                      <p className="mb-0 fw-bolder text-gray-600">
                        الإجمالي :<span className="text-muted fw-bolder"> 10 مخرجات </span>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-column align-items-end mx-3">
                    <p className="mb-0 fw-bolder fs-5  text-muted"> 10 مخرجات </p>
                    <p className="mb-0 fs-7 text-success"> تم الانتهاء </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-7">
                  <div className="d-flex align-items-center mx-5 ">
                  <i className="fas fa-times fa-lg text-danger"></i>
                    <div className="d-flex flex-column mx-3 ">
                      <p className="mb-0 fw-bolder mb-3 text-primary ">  حالة المعالم الرئيسية  </p>
                      <p className="mb-0 fw-bolder text-gray-600">
                        الإجمالي :<span className="text-muted fw-bolder"> 23 معلم رئيسي  </span>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-column mx-3 align-items-end">
                    <p className="mb-0 fw-bolder fs-5  text-muted">18 معلم</p>
                    <p className="mb-0 fs-7 text-danger"> باقي : 5 معالم  </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-7">
                  <div className="d-flex align-items-center mx-5 ">
                  <i className="fas fa-check fa-lg text-success"></i>
                    <div className="d-flex flex-column mx-3 ">
                      <p className="mb-0 fw-bolder mb-3  text-primary"> المخاطر الخاصة بالمشروع   </p>
                      <p className="mb-0 fw-bolder text-gray-600">
                        الإجمالي :<span className="text-muted fw-bolder">  9 مخاطر </span>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-column align-items-end mx-3">
                    <p className="mb-0 fw-bolder fs-5  text-muted">  9 مغلق </p>
                    <p className="mb-0 fs-7 text-success"> تم الانتهاء </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-7">
                  <div className="d-flex align-items-center mx-5 ">
                  <i className="fas fa-times fa-lg text-danger"></i>
                    <div className="d-flex flex-column mx-3 ">
                      <p className="mb-0 fw-bolder mb-3  text-primary">  التحديات و المشكلات  </p>
                      <p className="mb-0 fw-bolder text-gray-600">
                        الإجمالي :<span className="text-muted fw-bolder"> 10 تحديات  </span>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-column mx-3 align-items-end">
                    <p className="mb-0 fw-bolder fs-5  text-muted">  7 مغلق </p>
                    <p className="mb-0 fs-7 text-danger"> باقي : 3 فعال  </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-7">
                  <div className="d-flex align-items-center mx-5 ">
                  <i className="fas fa-check fa-lg text-success"></i>
                    <div className="d-flex flex-column mx-3 ">
                      <p className="mb-0 fw-bolder mb-3  text-primary"> الدروس المستفادة   </p>
                      <p className="mb-0 fw-bolder text-muted ">
                       بيانات الدروس المستفادة 
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-column mx-3 align-items-end">
                    <p className="mb-0 fw-bolder fs-5  text-muted">  25 -09-2023  </p>
                    <p className="mb-0 fs-7 text-success"> تم الانتهاء </p>
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

export { ClosingItems };
