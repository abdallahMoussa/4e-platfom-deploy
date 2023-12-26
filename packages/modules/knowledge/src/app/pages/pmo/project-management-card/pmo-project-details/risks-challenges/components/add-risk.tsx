import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { AddPopup } from "../../../../../partials/AddPopup";
import { useIntl } from "react-intl";
import { EmployeeHierarchyPopup } from "../../../../../partials/EmployeeHierarchyPopup";

const AddRisk: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const intl = useIntl();
  const [modalHShow, setModalHShow] = useState<boolean>(false);

  return (
    <>
      <div className="card card-xl-stretch mb-xl-0">
        <div className="card-header px-3 pt-3 pb-2 mb-3">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fs-4  my-5  ">
              {intl.formatMessage({ id: "AddNewRisk" })}
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
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label
                      htmlFor="outputName"
                      className="form-label px-2 fontSz-6 required"
                    >
                      {intl.formatMessage({ id: "RiskAddress" })}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-map-marker-alt special"></i>
                        </span>
                      </div>
                      <input
                        id="outputName"
                        type="text"
                        className="form-control"
                        placeholder={intl.formatMessage({ id: "RiskAddress" })}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label
                      htmlFor="stageName"
                      className="form-label px-2  fontSz-6 required"
                    >
                      {intl.formatMessage({ id: "RiskDescription" })}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-info-circle special"></i>
                        </span>
                      </div>
                      <input
                        id="stageName"
                        type="text"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: "RiskDescription",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label
                      htmlFor="stageName"
                      className="form-label px-2  fontSz-6 required"
                    >
                      {intl.formatMessage({ id: "Owner" })}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user-cog special"></i>
                        </span>
                      </div>
                      <input
                        id="stageName"
                        type="text"
                        className="form-control"
                        placeholder={intl.formatMessage({ id: "Owner" })}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label
                      htmlFor="stageName"
                      className="form-label px-2  fontSz-6"
                    >
                      {intl.formatMessage({ id: "AppointmentTo" })}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user-circle special"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="search"
                        value=""
                        placeholder={intl.formatMessage({
                          id: "AppointmentTo",
                        })}
                        // role="button"
                        // readOnly={true}
                      />
                      <div className="h-110 d-flex" role="button">
                        <span
                          className="input-group-text"
                          // data-bs-target="#rega_modal_employee-hierarchy"
                          // data-bs-toggle="modal"
                          onClick={() => setModalHShow(true)}
                        >
                          <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label
                      htmlFor="outputDate"
                      className="form-label px-2  fontSz-6 required"
                    >
                      {intl.formatMessage({ id: "PROBLEM.DATE" })}
                    </label>
                    <input
                      id="outputDate"
                      type="date"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                      placeholder={intl.formatMessage({ id: "PROBLEM.DATE" })}
                    />
                  </div>
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label className="form-label fs-6 fw-bold required">
                      {intl.formatMessage({ id: "Status" })}
                    </label>
                    <select
                      className="form-select form-select-solid fw-bolder"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-allow-clear="true"
                      data-kt-user-table-filter="role"
                      data-hide-search="true"
                    >
                      <option value="">
                        {intl.formatMessage({ id: "Status" })}
                      </option>
                      <option value="low">low</option>
                      <option value="high">high</option>
                      <option value="medium">medium</option>
                    </select>
                  </div>
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label className="form-label fs-6 fw-bold required">
                      {intl.formatMessage({ id: "RiskRange" })}
                    </label>
                    <select
                      className="form-select form-select-solid fw-bolder"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-allow-clear="true"
                      data-kt-user-table-filter="role"
                      data-hide-search="true"
                    >
                      <option value="">
                        {intl.formatMessage({ id: "RiskRange" })}
                      </option>
                      <option value="low">low</option>
                      <option value="high">high</option>
                      <option value="medium">medium</option>
                    </select>
                  </div>
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label className="form-label fs-6 fw-bold">
                      {intl.formatMessage({ id: "Source" })}
                    </label>
                    <select
                      className="form-select form-select-solid fw-bolder"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-allow-clear="true"
                      data-kt-user-table-filter="role"
                      data-hide-search="true"
                    >
                      <option value="">
                        {intl.formatMessage({ id: "Source" })}
                      </option>
                      <option value="low">low</option>
                      <option value="high">high</option>
                      <option value="medium">medium</option>
                    </select>
                  </div>
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label className="form-label fs-6 fw-bold required">
                      {intl.formatMessage({ id: "PRIORITY" })}
                    </label>
                    <select
                      className="form-select form-select-solid fw-bolder"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-allow-clear="true"
                      data-kt-user-table-filter="role"
                      data-hide-search="true"
                    >
                      <option value="">
                        {intl.formatMessage({ id: "PRIORITY" })}
                      </option>
                      <option value="low">low</option>
                      <option value="high">high</option>
                      <option value="medium">medium</option>
                    </select>
                  </div>
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label className="form-label fs-6 fw-bold required">
                      {intl.formatMessage({
                        id: "ThePossibilityOfRisksOccurring",
                      })}
                    </label>
                    <select
                      className="form-select form-select-solid fw-bolder"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-allow-clear="true"
                      data-kt-user-table-filter="role"
                      data-hide-search="true"
                    >
                      <option value="">
                        {intl.formatMessage({
                          id: "ThePossibilityOfRisksOccurring",
                        })}
                      </option>
                      <option value="low">low</option>
                      <option value="high">high</option>
                      <option value="medium">medium</option>
                    </select>
                  </div>
                  <div className="col-lg-4 mb-2 pt-2 pb-3">
                    <label
                      htmlFor="outputName"
                      className="form-label px-2 fontSz-6 required"
                    >
                      {intl.formatMessage({ id: "RiskEffect" })}
                    </label>
                    <select
                      className="form-select form-select-solid fw-bolder"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-allow-clear="true"
                      data-kt-user-table-filter="role"
                      data-hide-search="true"
                    >
                      <option value="">
                        {intl.formatMessage({
                          id: "RiskEffect",
                        })}
                      </option>
                      <option value="low">low</option>
                      <option value="high">high</option>
                      <option value="medium">medium</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-2 pt-2 pb-3">
                    <label
                      htmlFor="notes"
                      className="form-label px-2  fontSz-6 required"
                    >
                      {intl.formatMessage({ id: "Notes" })}
                    </label>
                    <textarea
                      id="notes"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                      placeholder={intl.formatMessage({ id: "Notes" })}
                    />
                  </div>
                  <div className="col-lg-6 mb-2 pt-2 pb-3">
                    <label
                      htmlFor="notes"
                      className="form-label px-2  fontSz-6 required"
                    >
                      {intl.formatMessage({ id: "PlanToReduceTheEffect" })}
                    </label>
                    <textarea
                      id="notes"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                      placeholder={intl.formatMessage({
                        id: "PlanToReduceTheEffect",
                      })}
                    />
                  </div>
                  <div className="col-lg-6 mb-2 pt-2 pb-3">
                    <label
                      htmlFor="notes"
                      className="form-label px-2  fontSz-6 required"
                    >
                      {intl.formatMessage({ id: "RiskFacePlan" })}
                    </label>
                    <textarea
                      id="notes"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                      placeholder={intl.formatMessage({ id: "RiskFacePlan" })}
                    />
                  </div>

                  <div className="col-12 col-lg-7 mx-auto my-10">
                    <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                      <div className="d-flex justify-content-center align-items-center w-50">
                        <Link
                          to="/pmo-project-risks-challenges"
                          className="btn btn-secondary mx-1 text-center w-100"
                        >
                          {intl.formatMessage({ id: "Cancel" })}
                        </Link>
                        <div
                          // data-bs-toggle="modal"
                          // data-bs-target="#Rega_modal_add"
                          onClick={() => setModalShow(true)}
                          className="btn btn-success mx-1 text-center w-100"
                        >
                          {intl.formatMessage({ id: "Add" })}
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
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      <div
        className="modal fade"
        id="rega_modal_employee-hierarchy"
        aria-hidden="true"
      >
        <EmployeeHierarchyPopup
          show={modalHShow}
          handleClose={() => setModalHShow(false)}
        />
      </div>
    </>
  );
};

export { AddRisk };
