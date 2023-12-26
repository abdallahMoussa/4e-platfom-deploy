import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import PaymentRequestPopup from "../popup/payment-request-popup";

const PaymentsDetails: FC = () => {
  const intl = useIntl();
  const [modalPShow, setModalPShow] = useState<boolean>(false);

  return (
    <>
      <div className=" my-5">
        <div className="card card-xl-stretch mb-xl-0">
          <div className="card-header px-3 pt-3 pb-2  d-flex bg-light  border-secondary border-0 border-top-1 border-bottom-1 border-dashed   mx-7 mt-10 mb-5 ">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder fs-4 mb-2 ">
                {" "}
                {intl.formatMessage({ id: "PaymentsData" })}{" "}
              </span>
              <span className="mt-1 fw-semibold fs-6 text-muted">
                {intl.formatMessage({ id: "CurrentPaymentData" })}{" "}
              </span>
            </h3>
            <div className="card-toolbar">
              <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end mb-5">
                <Link
                  to={"/pmo-project-edit-payments"}
                  className="btn btn-secondary mx-1 me-3 mw-100 text-center"
                >
                  {intl.formatMessage({ id: "EditPayment" })}{" "}
                </Link>
                <div
                  className="btn btn-bg-success btn-active-color-white text-white"
                  // data-bs-toggle="modal"
                  // data-bs-target="#Rega_modal-payment-request"
                  onClick={(event) => {
                    event.preventDefault();
                    setModalPShow(true);
                  }}
                >
                  {intl.formatMessage({ id: "PaymentRequest" })}
                </div>
              </div>
            </div>
          </div>
          <div className="card-body py-3 px-3">
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="REGA_table_widget_5_tab_1"
              >
                <div className="mx-5">
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6">
                      {intl.formatMessage({ id: "PaymentName" })} :
                    </p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-primary fw-bold">
                      الدفعة الأولى
                    </p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6">
                      {" "}
                      {intl.formatMessage({ id: "ThePayee" })}:
                    </p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">
                      {" "}
                      مدير الادارة
                    </p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6">
                      {intl.formatMessage({ id: "Status" })} :{" "}
                    </p>
                    <p className=" mx-2 px-2 mb-5  pb-2  fw-bolder fs-7 badgex badge-light-danger">
                      دفعات متبقية
                    </p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6">
                      {intl.formatMessage({ id: "ExpectedPaymentDate" })} :{" "}
                    </p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">
                      25 Jun 2022
                    </p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6">
                      {intl.formatMessage({ id: "Cost" })} :{" "}
                    </p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">
                      1000000 ريال
                    </p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6">
                      {intl.formatMessage({ id: "Notes" })}:
                    </p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">
                      الملاحظات المهمة للمشروع, الملاحظات المهمة للمشروع,
                      الملاحظات المهمة للمشروع,
                    </p>
                  </div>
                  <div className="d-flex mb-10 pt-2  pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6">
                      {" "}
                      {intl.formatMessage({ id: "Description" })} :
                    </p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold">
                      وصف الدفعات, وصف الدفعات, وصف الدفعات, وصف الدفعات, وصف
                      الدفعات,
                    </p>
                  </div>
                  <h3>{intl.formatMessage({ id: "PaymentOutputTable" })}</h3>
                  <div className="table-responsive my-10">
                    <table className="table table-rounded border  table-row-gray-200 align-middle gs-0 gy-4 text-center">
                      <thead>
                        <tr className="fw-bold bg-light">
                          <th className="px-2 pb-3 min-w-50px max-w-200px">
                            {" "}
                            م
                          </th>
                          <th className="px-2 pb-3 min-w-50px max-w-350px">
                            {" "}
                            {intl.formatMessage({ id: "PaymentName" })}{" "}
                          </th>
                          <th className="px-2 pb-3 min-w-50px max-w-350px">
                            {" "}
                            {intl.formatMessage({ id: "Quantity" })}{" "}
                          </th>
                          <th className="px-2 pb-3 min-w-50px max-w-200px">
                            {intl.formatMessage({ id: "Value" })}{" "}
                          </th>
                          <th className="px-2 pb-3 min-w-50px max-w-200px">
                            {intl.formatMessage({ id: "Progress" })}{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="h-60px border-end border-bottom">
                          <td> 1 </td>
                          <td className="d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column mx-3">
                              <label className="text-center fw-bolder ms-auto">
                                المتطلبات الفنية للمشروع{" "}
                              </label>
                              <span className="text-center text-muted  mt-1">
                                {" "}
                                منذ يومين
                              </span>
                            </div>
                          </td>

                          <td> 50</td>
                          <td> 200.000 ر.س</td>
                          <td> 40%</td>
                        </tr>
                        <tr className="h-60px border-end border-bottom">
                          <td> 2 </td>
                          <td className="d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column mx-3">
                              <label className="text-center fw-bolder ms-auto">
                                المتطلبات الفنية للمشروع{" "}
                              </label>
                              <span className="text-center text-muted  mt-1">
                                {" "}
                                منذ يومين
                              </span>
                            </div>
                          </td>

                          <td> -</td>
                          <td> 200.000 ر.س</td>
                          <td> 80%</td>
                        </tr>
                        <tr className='h-60px border-end border-bottom"'>
                          <td> 3 </td>
                          <td className="d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column mx-3">
                              <label className="text-center fw-bolder ms-auto">
                                المتطلبات الفنية للمشروع{" "}
                              </label>
                              <span className="text-center text-muted mt-1">
                                {" "}
                                منذ يومين
                              </span>
                            </div>
                          </td>

                          <td> 10</td>
                          <td> 200.000 ر.س</td>
                          <td> 20%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentRequestPopup
        show={modalPShow}
        handleClose={() => setModalPShow(false)}
      />
    </>
  );
};

export { PaymentsDetails };
