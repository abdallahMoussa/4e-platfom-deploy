import { FC, useState } from "react";
import { RiFilter2Fill } from "react-icons/ri";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { SystemPagination } from "../../../../../partials/SystemPagination";
import { Actions } from "./actions";
import FilterPaymentsPopup from "../popup/filter-Payments-popup";
import PaymentRequestPopup from "../popup/payment-request-popup";

const PaymentsTable: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalPShow, setModalPShow] = useState<boolean>(false);

  const intl = useIntl();

  return (
    <>
      <div className="card card-xl-stretch mb-xl-8 my-5">
        <div className="card-header border-0 pt-5 pb-2 mb-2">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-4 mb-1 ">
              {intl.formatMessage({ id: "Payments" })}
            </span>
            <span className="mt-1 fw-semibold fs-6  text-muted">
              لوريم ايبسوم دولار سيت
            </span>
          </h3>
          <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
            <div className="me-4">
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

            <div className="me-4">
              <div
                className="btn w-100 btn btn-secondary btn-flex   fw-bolder"
                // data-bs-toggle="modal"
                // data-bs-target="#Rega_modal_filter-payments"
                onClick={(event) => {
                  event.preventDefault();
                  setModalFShow(true);
                }}
              >
                <RiFilter2Fill size={17} className="me-3" />{" "}
                {intl.formatMessage({ id: "Filtering" })}
              </div>
            </div>
            <Link
              to="/pmo-project-add-payments"
              className="btn btn-bg-primary btn-active-color-white text-white"
            >
              {intl.formatMessage({ id: "AddNewPayment" })}
            </Link>
          </div>
        </div>
        <div className="card-body py-3">
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="REGA_table_widget_5_tab_1"
            >
              <div className="table-responsive">
                <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {" "}
                        {intl.formatMessage({ id: "PaymentName" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-350px">
                        {intl.formatMessage({ id: "Description" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-350px">
                        {intl.formatMessage({ id: "Status" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "ExpectedPaymentDate" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "Outputs" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "Actions" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <Link to={"/pmo-project-payments-details"}>
                          <div className="d-flex flex-column mx-3">
                            <label
                              role="button"
                              className="text-center text-primary fw-bolder ms-auto"
                            >
                              الدفعة الاولى{" "}
                            </label>
                            <span className="text-center text-muted ms-auto mt-1">
                              {" "}
                              100000 ريال
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div>الوصف المهم للمشروع</div>
                      </td>
                      <td className="badgex badge-light-danger">
                        <div className="d-inline py-2 px-4 fw-bolder fs-6 badgex badge-light-danger">
                          دفعات متبقية
                        </div>
                      </td>

                      <td>
                        <span>25 Jun 2022</span>
                      </td>
                      <td>
                        <div>10</div>
                      </td>
                      <td>
                        {" "}
                        <div>
                          <Actions id={1} />
                        </div>{" "}
                      </td>
                    </tr>

                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <Link to={"/pmo-project-payments-details"}>
                          <div className="d-flex flex-column mx-3">
                            <label
                              role="button"
                              className="text-center text-primary fw-bolder ms-auto"
                            >
                              الدفعة الثانية{" "}
                            </label>
                            <span className="text-center text-muted ms-auto mt-1">
                              {" "}
                              100000 ريال
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div>الوصف المهم للمشروع</div>
                      </td>
                      <td className="badgex badge-light-danger">
                        <div className="d-inline py-2 px-4 fw-bolder fs-6 badgex badge-light-danger">
                          دفعات متبقية
                        </div>
                      </td>

                      <td>
                        <span>25 Jun 2022</span>
                      </td>
                      <td>
                        <div>10</div>
                      </td>
                      <td>
                        <Actions id={2} />
                      </td>
                    </tr>

                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <Link to={"/pmo-project-payments-details"}>
                          <div className="d-flex flex-column mx-3">
                            <label
                              role="button"
                              className="text-center text-primary fw-bolder ms-auto"
                            >
                              الدفعة الثالثة{" "}
                            </label>
                            <span className="text-center text-muted ms-auto mt-1">
                              {" "}
                              100000 ريال
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div>الوصف المهم للمشروع</div>
                      </td>
                      <td className="badgex badge-light-danger">
                        <div className="d-inline py-2 px-4 fw-bolder fs-6 badgex badge-light-danger">
                          دفعات متبقية
                        </div>
                      </td>

                      <td>
                        <span>25 Jun 2022</span>
                      </td>
                      <td>
                        <div>10</div>
                      </td>
                      <td>
                        <Actions id={3} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <SystemPagination />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FilterPaymentsPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      />
      <PaymentRequestPopup
        show={modalPShow}
        handleClose={() => setModalPShow(false)}
      />
    </>
  );
};
export { PaymentsTable };
