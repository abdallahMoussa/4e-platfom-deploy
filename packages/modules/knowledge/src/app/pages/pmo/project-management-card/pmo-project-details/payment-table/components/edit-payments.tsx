import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { EditPopup } from "../../../../../partials/EditPopup";
import { EditOutputsPopup } from "../popup/edit-outputs-popup";
import { useIntl } from "react-intl";

const EditPayments: FC = () => {
  const [modalEShow, setModalEShow] = useState<boolean>(false);
  const [modalOShow, setModalOShow] = useState<boolean>(false);
  const intl = useIntl();

  return (
    <>
      <div className="card card-xl-stretch mb-xl-0">
        <div className="card-header px-3 pt-3 pb-2 mb-3">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fs-4  my-5  ">
              {intl.formatMessage({ id: "EditPayment" })}{" "}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted my-5">
              {intl.formatMessage({ id: "PleaseEnterTheData" })}
            </span>
          </h3>
        </div>
        <div className="card-body py-3 px-3 mx-8">
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="REGA_table_widget_5_tab_1"
            >
              <form noValidate className="form outputForm">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="riskTitle"
                            className="form-label px-2 required fontSz-6"
                          >
                            {intl.formatMessage({ id: "PaymentName" })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fas fa-cash-register special"></i>
                              </span>
                            </div>
                            <input
                              id="riskTitle"
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({
                                id: "PaymentName",
                              })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="riskDescription"
                            className="form-label px-2 required fontSz-6"
                          >
                            {intl.formatMessage({ id: "ThePayee" })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="bi bi-person-lines-fill special"></i>
                              </span>
                            </div>
                            <input
                              id="riskDescription"
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({
                                id: "ThePayee",
                              })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="owner"
                            className="form-label px-2 required fontSz-6"
                          >
                            {intl.formatMessage({ id: "Cost" })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fas fa-wallet special"></i>
                              </span>
                            </div>
                            <input
                              id="owner"
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({ id: "Cost" })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-2 pt-2 pb-3">
                              <label
                                htmlFor="riskEffect"
                                className="form-label px-2 required fontSz-6"
                              >
                                {intl.formatMessage({
                                  id: "ExpectedPaymentDate",
                                })}
                              </label>
                              <input
                                id="riskEffect"
                                type="date"
                                className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                                placeholder="تاريخ الأستحقاق المتوقع"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-2 pt-2 pb-3">
                              <label
                                htmlFor="riskNotes"
                                className="form-label px-2 required fontSz-6"
                              >
                                {intl.formatMessage({ id: "Status" })}
                              </label>
                              <select
                                id="riskNotes"
                                className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                                data-kt-select2="true"
                                data-placeholder="اختر"
                                data-dropdown-parent="#kt_menu_62775e8642438"
                                data-allow-clear="true"
                                data-select2-id="select2-data-4-vqtd"
                                tabIndex={-1}
                                aria-hidden="true"
                              >
                                <option
                                  disabled
                                  selected
                                  data-select2-id="select2-data-6-hquo"
                                >
                                  {intl.formatMessage({ id: "Status" })}
                                </option>
                                <option value="1">دفعات متبقيه </option>
                                <option value="2">دفعات مكتمله </option>
                                <option value="3">دفعات منتهيه </option>
                              </select>{" "}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="row mb-5">
                          <div className="col-lg-6">
                            <div className="mb-2 pt-2 pb-3">
                              <label
                                htmlFor="riskNotes"
                                className="form-label px-2 required fontSz-6"
                              >
                                {intl.formatMessage({ id: "Notes" })}
                              </label>
                              <textarea
                                id="riskNotes"
                                className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 h-90px"
                                placeholder={intl.formatMessage({
                                  id: "AddNotes",
                                })}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-2 pt-2 pb-3">
                              <label
                                htmlFor="managementPlan"
                                className="form-label px-2 required fontSz-6"
                              >
                                {intl.formatMessage({ id: "Description" })}
                              </label>
                              <textarea
                                id="managementPlan"
                                className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 h-90px"
                                placeholder={intl.formatMessage({
                                  id: "Description",
                                })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                    <span className="d-flex align-items-center mb-1 fs-4">
                      {intl.formatMessage({ id: "BatchOutputTable" })}{" "}
                    </span>

                    <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
                      <div
                        className="btn btn-bg-primary btn-active-color-white text-white"
                        // data-bs-toggle="modal"
                        // data-bs-target="#Rega_modal_edit_outputs"
                        onClick={() => setModalOShow(true)}
                      >
                        {" "}
                        {intl.formatMessage({
                          id: "EditAssociatedOutput",
                        })}{" "}
                      </div>
                    </div>
                  </div>
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

                  <div className="col-12 col-lg-7 mx-auto mb-10">
                    <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                      <div className="d-flex justify-content-center align-items-center w-50">
                        <Link
                          to="/pmo-project-payments-details"
                          className="btn btn-secondary mx-1 text-center w-100"
                        >
                          {intl.formatMessage({ id: "Cancel" })}
                        </Link>
                        <div
                          // data-bs-toggle="modal"
                          // data-bs-target="#Rega_modal_edit"
                          onClick={() => setModalEShow(true)}
                          className="btn btn-primary mx-1 text-center w-100"
                        >
                          {intl.formatMessage({ id: "Save" })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_edit" aria-hidden="true">
        <EditPopup handleCloseEdit={setModalEShow} showEdit={modalEShow} />
      </div>
      <EditOutputsPopup
        show={modalOShow}
        handleClose={() => setModalOShow(false)}
      />
    </>
  );
};

export { EditPayments };
