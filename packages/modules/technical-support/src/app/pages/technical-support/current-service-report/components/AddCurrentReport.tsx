import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { AddPopup } from "../../../partials/AddPopup";
import AssetsPopup from "../popups/AssetsPopup";
import AddAttachmentTab from "./AddAttachmentTab";
import LinkToAnotherReportTab from "./LinkToAnotherReportTab";
import { SystemPagination } from "../../../../../app/pages/partials/SystemPagination";

function AddCurrentReport() {
  const [modalShow, setModalShow] = useState<boolean>(false);

  let intl = useIntl();
  let [assetsTableData, setassetsTableData] = useState([
    {
      id: 1,
      serialNumber: 12345,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
  ]);
  let [activeAttchment, setActiveAttchment] = useState(true);
  let [activeLink, setActiveLink] = useState(false);
  let activeAttchmentHandler = () => {
    setActiveAttchment(true);
    setActiveLink(false);
  };
  let activeLinkHandler = () => {
    setActiveAttchment(false);
    setActiveLink(true);
  };
  return (
    <Fragment>
      <div className="card shadow p-8 mb-7 ">
        <div className="mb-6">
          <p className="fw-bolder fs-4 text-dark mb-4">
            {" "}
            {intl.formatMessage({ id: "AddCurrentReport" })}
          </p>
          <p className="text-muted fs-7">
            {intl.formatMessage({ id: "PleaseEnterTheFollowingData" })}
          </p>
        </div>
        <hr className="mb-4" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="row mb-4">
            <div className="col-lg-6">
              <div className="mb-2 pt-2 pb-3 ">
                <label
                  htmlFor="ReportTitle"
                  className="form-label px-2 fontSz-6 "
                >
                  {intl.formatMessage({ id: "ReportTitle" })}
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-clipboard-list special"></i>
                    </span>
                  </div>
                  <input
                    id="ReportTitle"
                    type="text"
                    className="form-control"
                    placeholder={intl.formatMessage({ id: "ReportTitle" })}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-2 pt-2 pb-3">
                <label
                  htmlFor="ReportType"
                  className="form-label px-2 fontSz-6"
                >
                  {intl.formatMessage({ id: "ReportType" })}
                </label>

                <select
                  id="ReportType"
                  className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1 not-allowed"
                  data-kt-select2="true"
                  data-placeholder={intl.formatMessage({ id: "ReportType" })}
                  data-dropdown-parent="#kt_menu_62775e8642438"
                  data-allow-clear="true"
                  data-select2-id="select2-data-4-vqtd"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="1" selected>
                    {intl.formatMessage({ id: "AdministrativeCommunications" })}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-6">
              <div className="mb-2 pt-2 pb-3">
                <label
                  htmlFor="ReportSubCategory"
                  className="form-label px-2 fontSz-6"
                >
                  {intl.formatMessage({ id: "ReportSubCategory" })}
                </label>

                <select
                  id="ReportType"
                  className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1 not-allowed"
                  data-kt-select2="true"
                  data-placeholder={intl.formatMessage({
                    id: "ReportSubCategory",
                  })}
                  data-dropdown-parent="#kt_menu_62775e8642438"
                  data-allow-clear="true"
                  data-select2-id="select2-data-4-vqtd"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="1" selected>
                    {intl.formatMessage({ id: "ReportSubCategory" })}{" "}
                  </option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-2 pt-2 pb-3">
                <label htmlFor="Country" className="form-label px-2 fontSz-6">
                  {intl.formatMessage({ id: "Clause" })}
                </label>

                <div className=" row w-100 d-flex justify-content-between align-items-center">
                  <div className="col-lg-11 col-md-10 col-sm-10">
                    <select
                      id="ReportType"
                      className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                      data-kt-select2="true"
                      data-placeholder={intl.formatMessage({
                        id: "Clause",
                      })}
                      data-dropdown-parent="#kt_menu_62775e8642438"
                      data-allow-clear="true"
                      data-select2-id="select2-data-4-vqtd"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="1" selected>
                        {intl.formatMessage({ id: "Clause" })}{" "}
                      </option>
                    </select>
                  </div>
                  <div className="col-lg-1 col-md-1 col-sm-1 bg-light ">
                    <div
                      data-bs-target="#Rega_modal_assets"
                      data-bs-toggle="modal"
                      className="p-3 px-1 d-flex justify-content-center align-items-center"
                    >
                      <i className="bi bi-journal-plus text-muted fs-2 cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <p className="fw-bolder fs-4 text-dark mb-4">
              {" "}
              {intl.formatMessage({ id: "AssetsThatHaveTechnicalMalfunction" })}
            </p>
            <div className="table-responsive mb-3">
              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                <thead>
                  <tr className="fw-bolder">
                    <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                      {intl.formatMessage({ id: "م" })}
                    </th>

                    <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                      {intl.formatMessage({ id: "SerialNumber" })}
                    </th>

                    <th className="px-2 pb-3 min-w-50px  text-muted">
                      {intl.formatMessage({ id: "ItemName" })}
                    </th>
                    <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                      {intl.formatMessage({ id: "Trademark" })}{" "}
                    </th>
                    <th className="px-2 pb-3 min-w-50px  text-muted">
                      {intl.formatMessage({ id: "ItemCategory" })}{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {assetsTableData?.map((item) => {
                    let { id, serialNumber, tradeMark, category, itemName } =
                      item;
                    return (
                      <Fragment key={Math.random()}>
                        <tr>
                          <td className="text-center">{id}</td>
                          <td className="text-center">{serialNumber}</td>
                          <td className="text-center">{itemName}</td>
                          <td className="text-center">{tradeMark}</td>
                          <td className="text-center">{category}</td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
              <SystemPagination />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <textarea
                className="form-control h-450px pt-4 form-control-lg form-control-solid mb-3 mb-lg-2"
                placeholder={intl.formatMessage({
                  id: "ReportContent",
                })}
              ></textarea>
            </div>
            <div className="col-lg-5 card  shadow h-450px ">
              <div className="w-100">
                <div
                  className="pt-5 nav row  mx-auto nav-pills mb-7   background-pills d-flex justify-content-center justify-content-lg-evenly"
                  id="pills-tab"
                  role="tablist"
                  // style={{ backgroundColor: "#F5F8FA" }}
                >
                  <div
                    className="nav-item col-12 col-lg-2 w-40 navTabsPills"
                    role="presentation"
                  >
                    <button
                      className={`nav-link w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-6 fs-6  fw-bolder  border border-bottom border-white border-2 ${
                        activeAttchment ? "active" : ""
                      }`}
                      id="attachment-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#attachment"
                      type="button"
                      role="tab"
                      aria-controls="options"
                      aria-selected="true"
                      onClick={() => {
                        activeAttchmentHandler();
                      }}
                      style={{
                        backgroundColor: `${activeAttchment ? "white" : ""}`,
                        borderRadius: `${activeAttchment ? "20px" : ""}`,
                      }}
                    >
                      {intl.formatMessage({ id: "AddAttachments" })}{" "}
                    </button>
                  </div>
                  <div
                    className="nav-item col-12 col-lg-2 w-40 navTabsPills"
                    role="presentation"
                  >
                    <button
                      className={`nav-link w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-6 fs-6  fw-bolder  border border-bottom border-white border-2 ${
                        activeLink ? "active" : ""
                      }`}
                      id="link-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#link"
                      type="button"
                      role="tab"
                      aria-controls="track"
                      aria-selected="false"
                      onClick={() => {
                        activeLinkHandler();
                      }}
                      style={{
                        backgroundColor: `${activeLink ? "white" : ""}`,
                        borderRadius: `${activeLink ? "20px" : ""}`,
                      }}
                    >
                      {intl.formatMessage({ id: "LinkToAnotherReport" })}{" "}
                    </button>
                  </div>
                </div>

                <div className="tab-content px-2" id="pills-tabContent">
                  <AddAttachmentTab active={activeLink} />
                  <LinkToAnotherReportTab active={activeLink} />
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-7 d-flex justify-content-center align-items-center w-50 mx-auto">
            <Link
              to="/current-service-report"
              className="btn btn-secondary mx-1 text-center w-25"
            >
              {intl.formatMessage({ id: "Cancel" })}
            </Link>
            <div
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_add"
              onClick={() => setModalShow(true)}
              className="btn btn-success mx-1 text-center w-25"
            >
              {intl.formatMessage({ id: "Add" })}
            </div>
          </div>
        </form>
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      <AssetsPopup />
    </Fragment>
  );
}

export default AddCurrentReport;
