import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import { getCurrentSystemLanguage } from "../../../../functions/language";
import Swal from "sweetalert2";

function QuickAccess() {
  let intl = useIntl();
  let showAlert = () => {
    Swal.fire({
      text: "تمت الإضافه بنجاح",
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
      <div className="card shadow p-7 mb-5">
        <p className="fw-bolder text-black fs-4 mb-7">
          {intl.formatMessage({ id: "QuickAccess" })}
        </p>
        <hr className="mb-0" />
        <div className="row ">
          <div className="col-sm-6 col-12 pt-7">
            <div className="row g-0">
              <label
                htmlFor="Checkboxes1"
                className="col-5 position-relative bg-light-warning px-6 py-8 rounded-2 me-7 mb-7 bg-hover-warning text-hover-white"
              >
                <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                  <KTSVG
                    path="/media/icons/duotune/general/gen173_tasks.svg"
                    className="svg-icon-3"
                  />
                </span>
                <span className="text-warning fw-bold fs-6">
                  {intl.formatMessage({ id: "Tasks" })}
                </span>
                <div
                  className={`d-inline position-absolute top-0  ms-2 form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md ${
                    getCurrentSystemLanguage() == "ar" ? "left--2" : "right--2"
                  }`}
                  style={{
                    backgroundColor: "#E0DEDE",
                  }}
                >
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="Checkboxes1"
                  />
                </div>
              </label>
              <label
                htmlFor="Checkboxes2"
                className="col-5 position-relative bg-light-primary px-6 py-8 rounded-2 mb-7 bg-hover-primary text-hover-white"
              >
                <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                  <KTSVG
                    path="/media/icons/duotune/general/gen174_workspace.svg"
                    className="svg-icon-3"
                  />
                </span>
                <span className="text-primary fw-bold fs-6">
                  {intl.formatMessage({ id: "Workspace" })}
                </span>
                <div
                  className={`d-inline position-absolute top-0  ms-2 form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md ${
                    getCurrentSystemLanguage() == "ar" ? "left--2" : "right--2"
                  }`}
                  style={{
                    backgroundColor: "#E0DEDE",
                  }}
                >
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="Checkboxes2"
                  />
                </div>
              </label>
            </div>
            <div className="row g-0">
              <label
                htmlFor="Checkboxes3"
                className="col-5 position-relative bg-light-danger px-6 py-8 rounded-2 me-7 mb-7 bg-hover-danger text-hover-white"
              >
                <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                  <KTSVG
                    path="/media/icons/duotune/general/gen175_requests.svg"
                    className="svg-icon-3"
                  />
                </span>
                <span className="text-danger fw-bold fs-6 mt-2">
                  {" "}
                  {intl.formatMessage({ id: "Requests" })}
                </span>
                <div
                  className={`d-inline position-absolute top-0 ms-2 form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md ${
                    getCurrentSystemLanguage() == "ar" ? "left--2" : "right--2"
                  }`}
                  style={{
                    backgroundColor: "#E0DEDE",
                  }}
                >
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="Checkboxes3"
                  />
                </div>
              </label>
              <label
                htmlFor="Checkboxes4"
                className=" position-relative col-5 bg-light-success px-6 py-8 rounded-2 mb-7 bg-hover-success text-hover-white"
              >
                <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                  <KTSVG
                    path="/media/icons/duotune/general/gen176_email.svg"
                    className="svg-icon-3"
                  />
                </span>
                <span className="text-success fw-bold fs-6 mt-2">
                  {" "}
                  {intl.formatMessage({ id: "Email" })}
                </span>
                <div
                  className={`d-inline position-absolute top-0  ms-2 form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md ${
                    getCurrentSystemLanguage() == "ar" ? "left--2" : "right--2"
                  }`}
                  style={{
                    backgroundColor: "#E0DEDE",
                  }}
                >
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="Checkboxes4"
                  />
                </div>
              </label>
            </div>
            <div className="row g-0">
              <label
                htmlFor="Checkboxes5"
                className="position-relative col-5 bg-light-primary px-6 py-8 rounded-2 me-7 bg-hover-primary text-hover-white"
              >
                <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                  <i className="bi bi-clock-history fs-3x"></i>
                </span>
                <span className="text-primary fw-bold fs-6">
                  {intl.formatMessage({ id: "Recent" })}
                </span>
                <div
                  className={`d-inline position-absolute top-0 ms-2 form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md ${
                    getCurrentSystemLanguage() == "ar" ? "left--2" : "right--2"
                  }`}
                  style={{
                    backgroundColor: "#E0DEDE",
                  }}
                >
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="Checkboxes5"
                  />
                </div>
              </label>
              <label
                htmlFor="Checkboxes6"
                className="position-relative col-5 bg-light-warning px-6 py-8 rounded-2 bg-hover-warning text-hover-white"
              >
                <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                  <i className="bi bi-star-fill fs-3x"></i>
                </span>
                <span className="text-warning fw-bold fs-6">
                  {intl.formatMessage({ id: "MyFavourite" })}{" "}
                </span>
                <div
                  className={`d-inline position-absolute top-0 ms-2 form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md ${
                    getCurrentSystemLanguage() == "ar" ? "left--2" : "right--2"
                  }`}
                  style={{
                    backgroundColor: "#E0DEDE",
                  }}
                >
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="Checkboxes6"
                  />
                </div>
              </label>
            </div>
          </div>
          <div
            className="col-sm-6 col-12 pt-7 h-100"
            style={{
              [getCurrentSystemLanguage() == "ar"
                ? "borderRight"
                : "borderLeft"]: "2px solid #DFDFDF",
            }}
          >
            <div className="row gx-5 mb-4 d-flex align-items-center">
              <div className="col-2">
                <p className="fs-3 text-muted p-0 m-0">
                  {" "}
                  {intl.formatMessage({ id: "Link" })}
                </p>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control form-control-solid ps-3 mx-2 d-inline-block"
                  value=""
                  placeholder={intl.formatMessage({
                    id: "AddNewLink",
                  })}
                />
              </div>
              <div className="col-2 d-flex align-items-center justify-content-center">
                <span
                  className="p-4 cursor-pointer"
                  style={{ backgroundColor: "#F9F9F9" }}
                  onClick={() => {
                    showAlert();
                  }}
                >
                  <i className="fa-solid fa-plus fs-3"></i>
                </span>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table border border-2 table-row-gray-300 align-middle gs-0 gy-4">
                <thead>
                  <tr className="fw-bolder text-muted border border-2">
                    <th className="min-w-50px text-center">
                      {intl.formatMessage({ id: "ID" })}
                    </th>
                    <th className="min-w-200px text-center">
                      {intl.formatMessage({
                        id: "ItemName",
                      })}{" "}
                    </th>
                    <th className="min-w-50px text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border border-2">
                    <td className="text-center">1</td>
                    <td className="text-center text-primary fw-bolder">
                      {" "}
                      {intl.formatMessage({ id: "Tasks" })}
                    </td>
                    <td className="text-center">
                      <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
                        <input
                          className="form-check-input widget-9-check xCheckBg"
                          type="checkbox"
                          id="Checkboxes1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className=" border border-2">
                    <td className="text-center">2</td>
                    <td className="text-center text-primary fw-bolder">
                      {" "}
                      {intl.formatMessage({ id: "Workspace" })}{" "}
                    </td>
                    <td className="text-center">
                      <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
                        <input
                          className="form-check-input widget-9-check xCheckBg"
                          type="checkbox"
                          id="Checkboxes2"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className=" border border-2">
                    <td className="text-center">3</td>
                    <td className="text-center text-primary fw-bolder">
                      {" "}
                      {intl.formatMessage({ id: "Requests" })}{" "}
                    </td>
                    <td className="text-center">
                      <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
                        <input
                          className="form-check-input widget-9-check xCheckBg"
                          type="checkbox"
                          id="Checkboxes3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className=" border border-2">
                    <td className="text-center">4</td>
                    <td className="text-center text-primary fw-bolder">
                      {" "}
                      {intl.formatMessage({ id: "Email" })}{" "}
                    </td>
                    <td className="text-center">
                      <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
                        <input
                          className="form-check-input widget-9-check xCheckBg"
                          type="checkbox"
                          id="Checkboxes4"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className=" border border-2">
                    <td className="text-center">5</td>
                    <td className="text-center text-primary fw-bolder">
                      {" "}
                      {intl.formatMessage({ id: "Recent" })}{" "}
                    </td>
                    <td className="text-center">
                      <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
                        <input
                          className="form-check-input widget-9-check xCheckBg"
                          type="checkbox"
                          id="Checkboxes5"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className=" border border-2">
                    <td className="text-center">6</td>
                    <td className="text-center text-primary fw-bolder">
                      {" "}
                      {intl.formatMessage({ id: "MyFavourite" })}{" "}
                    </td>
                    <td className="text-center">
                      <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
                        <input
                          className="form-check-input widget-9-check xCheckBg"
                          type="checkbox"
                          id="Checkboxes6"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default QuickAccess;
