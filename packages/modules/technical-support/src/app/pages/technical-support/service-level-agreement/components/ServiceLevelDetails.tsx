import { FC } from "react";
import { useIntl } from "react-intl";

const ServiceLevelDetails: FC = () => {
  const intl = useIntl();

  return (
    <>
      <div className=" my-5">
        <div className="card card-xl-stretch mb-xl-0">
          <div className="card-header px-3 pt-3 pb-2  d-flex bg-light  border-secondary border-0 border-top-1 border-bottom-1 border-dashed   mx-7 mt-10 mb-5 ">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder fs-4 mb-2 ">
                {intl.formatMessage({ id: "AgreementData" })}
              </span>
              <span className="mt-1 fw-semibold fs-6 text-muted">
                {intl.formatMessage({ id: "CurrentAgreementData" })}
              </span>
            </h3>
          </div>
          <div className="card-body py-3 px-3">
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="REGA_table_widget_5_tab_1"
              >
                <div className="mx-4">
                  <div className="row mb-5 mt-1 mx-1 rounded border-secondary shadow-sm gy-5">
                    <div className="col-4">
                      <span className="text-primary">
                        {intl.formatMessage({ id: "SLAName" })} :{" "}
                      </span>
                      <span className="text-muted fw-bolder">
                        اسم SLA     
                      </span>
                    </div>
                    <div className="col-4">
                      <span className="text-primary">
                        {intl.formatMessage({ id: "OrderImplementationTime" })} :{" "}
                      </span>
                      <span className="text-muted fw-bolder">
                        5 أبام 8 ساعات 10 دقائق
                      </span>
                    </div>
                    <div className="col-4">
                      <span className="text-primary">
                        {intl.formatMessage({ id: "ResponseTime" })} :{" "}
                      </span>
                      <span className="text-muted fw-bolder">
                        5 أبام 8 ساعات 10 دقائق
                      </span>
                    </div>
                    <div className="col-12 my-5">
                      <span className="text-primary">
                        {intl.formatMessage({ id: "Description" })} :{" "}
                      </span>
                      <span className="text-muted fw-bolder">
                      وصف الاتفاقية  وصف الاتفاقية وصف الاتفاقية وصف الاتفاقية وصف الاتفاقية وصف الاتفاقية وصف الاتفاقية
                      </span>
                    </div>
                  </div>
                  <div className="row mb-5 mt-10 mx-1 px-3 rounded border-secondary gy-5">
                    <div className="col-3 bg-gray-100 p-3 border-gray-100 rounded-right">
                      <span className="text-gray-500 fw-bolder">
                        {intl.formatMessage({ id: "AdminstrationName" })}
                      </span>
                    </div>
                    <div className="col-3 bg-gray-100 p-3 border-gray-100">
                      <span className="text-gray-500 fw-bolder">
                        {intl.formatMessage({ id: "RequestName" })}
                      </span>
                    </div>
                    <div className="col-3 bg-gray-100 p-3 border-gray-100">
                      <span className="text-gray-500 fw-bolder">
                        {intl.formatMessage({ id: "OrderType" })}
                      </span>
                    </div>
                    <div className="col-3 bg-gray-100 p-3 border-gray-100 rounded-left">
                      <span className="text-gray-500 fw-bolder">
                        {intl.formatMessage({ id: "Status" })} ({intl.formatMessage({ id: "PriorityDegree" })})
                      </span>
                    </div>
                    <div className="col-3">
                      <span className="text-primary fw-bolder">
                        اداره المشاريع
                      </span>
                    </div>
                    <div className="col-3 ">
                      <span className="text-gray-600 fw-bolder">
                        اسم الطلب
                      </span>
                    </div>
                    <div className="col-3 ">
                      <span className="text-gray-600 fw-bolder">
                        نوع الطلب
                      </span>
                    </div>
                    <div className="col-3">
                      <span className="text-success fw-bolder">
                        عالي الاهمية
                      </span>
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

export default ServiceLevelDetails;
