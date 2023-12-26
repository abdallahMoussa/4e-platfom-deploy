import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { EditPopup } from "../../../../../app/pages/partials/EditPopup";

function EditingSolutionToTechnicalSupportReports() {
  let intl = useIntl();
  const [showEdit, setshowEdit] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="card shadow p-8 mb-7 ">
        <div className="mb-6">
          <p className="fw-bolder fs-4 text-dark mb-4">
            {" "}
            {intl.formatMessage({ id: "EditingSolution" })}
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
                <label htmlFor="SolutionTitle" className="form-label px-2  ">
                  {intl.formatMessage({ id: "SolutionTitle" })}
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="far fa-lightbulb special"></i>
                    </span>
                  </div>
                  <input
                    id="SolutionTitle"
                    type="text"
                    className="form-control"
                    placeholder={intl.formatMessage({ id: "SolutionTitle" })}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-2 pt-2 pb-3 ">
                <label
                  htmlFor="SolutionDescription"
                  className="form-label px-2  "
                >
                  {intl.formatMessage({ id: "SolutionDescription" })}
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-info-circle special"></i>
                    </span>
                  </div>
                  <input
                    id="SolutionDescription"
                    type="text"
                    className="form-control"
                    placeholder={intl.formatMessage({
                      id: "SolutionDescription",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-6">
              <div className="mb-2 pt-2 pb-3 ">
                <label
                  htmlFor="MainClassification"
                  className="form-label px-2  "
                >
                  {intl.formatMessage({ id: "MainClassification" })}
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bi bi-diagram-3 special"></i>
                    </span>
                  </div>
                  <input
                    id="MainClassification"
                    type="text"
                    className="form-control"
                    placeholder={intl.formatMessage({
                      id: "MainClassification",
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-2 pt-2 pb-3">
                <label
                  htmlFor="SubCategory"
                  className="form-label px-2 fontSz-6"
                >
                  {intl.formatMessage({ id: "SubCategory" })}
                </label>

                <select
                  id="SubCategory"
                  className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                  data-kt-select2="true"
                  data-placeholder={intl.formatMessage({
                    id: "SubCategory",
                  })}
                  data-dropdown-parent="#kt_menu_62775e8642438"
                  data-allow-clear="true"
                  data-select2-id="select2-data-4-vqtd"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="1" selected>
                    {intl.formatMessage({ id: "SubCategory" })}{" "}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-6">
              <div className="mb-2 pt-2 pb-3">
                <label
                  htmlFor="Attachments"
                  className="form-label px-2 fontSz-6"
                >
                  {intl.formatMessage({ id: "Attachments" })}
                </label>
                <div className=" notice d-flex bg-light-primary rounded border-primary border border-dashed mb-1">
                  <label
                    htmlFor="outputAttachment"
                    className="form-label px-2  fontSz-6 dropzone-select   w-100 uploadFile-style inputAreaHeight"
                  >
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <img
                          src="/media/pmo/uploadFile.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-8">
                        <p className="text-primary fw-bolder my-1">
                          {" "}
                          {intl.formatMessage({ id: "QuickFileUploader" })}
                        </p>
                        <p>
                          {intl.formatMessage({
                            id: "DragAndDropOrChooseFilesFromComputer",
                          })}
                        </p>
                      </div>
                    </div>
                  </label>
                  <div
                    className="dropzone dropzone-queue mb-2"
                    id="kt_dropzonejs_example_3"
                  >
                    <div className="dropzone-panel mb-lg-0 mb-2">
                      <input
                        multiple
                        type="file"
                        accept="image/*"
                        id="outputAttachment"
                        name="attachments"
                        placeholder={intl.formatMessage({ id: "FileUpload" })}
                        className="dropzone-select w-100 uploadFile-style inputAreaHeight d-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-7 d-flex justify-content-center align-items-center w-50 mx-auto">
            <Link
              to="/technical-reports-solutions"
              className="btn btn-secondary mx-1 text-center w-25"
            >
              {intl.formatMessage({ id: "Cancel" })}
            </Link>
            <div
               onClick={() => setshowEdit(true)}
              className="btn btn-primary mx-1 text-center w-25"
            >
              {intl.formatMessage({ id: "Save" })}
            </div>
          </div>
        </form>
      </div>
      <div className="modal fade" id="Rega_modal_edit" aria-hidden="true">
        <EditPopup handleCloseEdit={() => setshowEdit(false)}
        showEdit={showEdit}/>
      </div>
    </Fragment>
  );
}

export default EditingSolutionToTechnicalSupportReports;
