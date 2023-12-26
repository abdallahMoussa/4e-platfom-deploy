import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../app/helpers";
import Swal from "sweetalert2";

const RedirectPopup: React.FC = () => {
  const intl = useIntl();

  let showAlert = () => {
    Swal.fire({
      text: "تم الارسال بنجاح",
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: "موافق",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="Rega_modal_redirect"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content rounded">
            <div className="modal-header pb-0 border-0 justify-content-end">
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span className="svg-icon svg-icon-1">
                  <KTSVG
                    path="/media/icons/duotune/general/gen106_close.svg"
                    className="svg-icon-4 me-1"
                  />
                </span>
              </div>
            </div>
            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15 mb-7">
              <div className="mb-9 text-center">
                <h1 className="mb-3">
                  {intl.formatMessage({ id: "ReportRedirect" })}
                </h1>
                <h6 className="mb-2 text-muted">
                  {intl.formatMessage({
                    id: "PleaseEnterTheFollowingData",
                  })}
                </h6>
              </div>
              <hr />
              <br />
              <br />
              <div>
                <form
                  className="d-block w-100"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="row w-100 mb-3">
                    <div className="col-6">
                      <div className="mb-2 pt-2 pb-3 ">
                        <label
                          htmlFor="category"
                          className="form-label px-2 fontSz-6"
                        >
                          {intl.formatMessage({ id: "ReportCategory" })}
                        </label>

                        <select
                          id="category"
                          className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                          data-kt-select2="true"
                          data-placeholder={intl.formatMessage({
                            id: "ReportCategory",
                          })}
                          data-dropdown-parent="#kt_menu_62775e8642438"
                          data-allow-clear="true"
                          data-select2-id="select2-data-4-vqtd"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option disabled selected>
                            {intl.formatMessage({ id: "ReportCategory" })}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-2 pt-2 pb-3 ">
                        <label
                          htmlFor="employee"
                          className="form-label px-2 fontSz-6"
                        >
                          {intl.formatMessage({
                            id: "EmployeeOfTheSameDepartment",
                          })}
                        </label>

                        <select
                          id="employee"
                          className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                          data-kt-select2="true"
                          data-placeholder={intl.formatMessage({
                            id: "EmployeeOfTheSameDepartment",
                          })}
                          data-dropdown-parent="#kt_menu_62775e8642438"
                          data-allow-clear="true"
                          data-select2-id="select2-data-4-vqtd"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option disabled selected>
                            {intl.formatMessage({
                              id: "EmployeeOfTheSameDepartment",
                            })}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 mb-3">
                    <div className="col-lg-12">
                      <label
                        htmlFor="reason"
                        className="form-label px-2 fontSz-6"
                      >
                        {intl.formatMessage({ id: "RedirectReason" })}
                      </label>

                      <textarea
                        id="reason"
                        className="form-control h-150px pt-4 form-control-lg form-control-solid mb-3 mb-lg-2"
                        placeholder={intl.formatMessage({
                          id: "RedirectReason",
                        })}
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-5 mb-5 col-12 col-lg-8 mx-auto">
                    <div className="outputCard card-diff-toolbar pt-5 w-100 mt-3 d-flex justify-content-center">
                      <div className="d-flex justify-content-center align-items-center w-50">
                        <div
                          data-bs-dismiss="modal"
                          className="btn btn-secondary mx-3 text-center w-100"
                        >
                          {intl.formatMessage({ id: "Cancel" })}
                        </div>
                        <button
                          type="button"
                          data-bs-dismiss="modal"
                          className="btn btn-success mx-3 text-center w-100"
                          style={{ border: "none" }}
                          onClick={() => {
                            showAlert();
                          }}
                        >
                          {intl.formatMessage({ id: "Send" })}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RedirectPopup;
