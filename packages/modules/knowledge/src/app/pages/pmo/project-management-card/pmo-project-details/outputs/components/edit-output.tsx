import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { EditPopup } from "../../../../../partials/EditPopup";

const EditOutput: FC = () => {
  const intl = useIntl();
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
      <div className=" my-5">
        <div className="card card-xl-stretch mb-xl-0">
          <div className="card-header px-3 pt-3 pb-2 mb-3">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fs-4 my-5 ">
                {intl.formatMessage({ id: "EditTheOutput" })}
              </span>
              <span className="mt-1 fw-semibold fs-6 text-muted my-5">
                {intl.formatMessage({ id: "PleaseEnterTheFollowingData" })}
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
                    <div className="col-lg-6">
                      <div className="d-flex flex-column">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="outputName"
                            className="form-label px-2 fontSz-6 required"
                          >
                            {intl.formatMessage({ id: "OUTPUT.NAME" })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="bi bi-window special"></i>
                              </span>
                            </div>
                            <input
                              id="outputName"
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({
                                id: "OutputName",
                              })}
                            />
                          </div>
                        </div>

                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="stageName"
                            className="form-label px-2  fontSz-6 required"
                          >
                            {intl.formatMessage({ id: "STAGE.NAME" })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="bi bi-postage special"></i>
                              </span>
                            </div>
                            <input
                              id="stageName"
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({
                                id: "StageName",
                              })}
                            />
                          </div>
                        </div>

                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="notes"
                            className="form-label px-2  fontSz-6 required"
                          >
                            {intl.formatMessage({ id: "Notes" })}
                          </label>
                          <textarea
                            id="notes"
                            className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                            placeholder={intl.formatMessage({ id: "AddNotes" })}
                          />
                        </div>

                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="priority"
                            className="form-label px-2  fontSz-6 required"
                          >
                            {intl.formatMessage({ id: "PRIORITY" })}
                          </label>
                          <select
                            id="outputStatus"
                            className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                            data-kt-select2="true"
                            data-placeholder="اختر"
                            data-dropdown-parent="#kt_menu_62775e8642438"
                            data-allow-clear="true"
                            data-select2-id="select2-data-4-vqtd"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <option disabled selected>
                              {intl.formatMessage({ id: "OUTPUT.PRIORITY" })}
                            </option>
                          </select>
                        </div>

                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="priority"
                            className="form-label px-2  fontSz-6 "
                          >
                            {intl.formatMessage({ id: "CompletionRate" })}
                          </label>
                          <select
                            id="outputStatus"
                            className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                            data-kt-select2="true"
                            data-placeholder="اختر"
                            data-dropdown-parent="#kt_menu_62775e8642438"
                            data-allow-clear="true"
                            data-select2-id="select2-data-4-vqtd"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <option disabled selected>
                              {intl.formatMessage({ id: "CompletionRate" })}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex flex-column">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="outputDate"
                            className="form-label px-2  fontSz-6 required"
                          >
                            {intl.formatMessage({ id: "Date" })}
                          </label>
                          <input
                            id="outputDate"
                            type="date"
                            className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                            placeholder="التاريخ"
                          />
                        </div>

                        <div className="mb-2 pb-3">
                          <label
                            htmlFor="outputStatus"
                            className="form-label px-2  fontSz-6 required"
                          >
                            {intl.formatMessage({ id: "WorkflowStatus" })}
                          </label>
                          <select
                            id="outputStatus"
                            className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible"
                            data-kt-select2="true"
                            data-placeholder="اختر"
                            data-dropdown-parent="#kt_menu_62775e8642438"
                            data-allow-clear="true"
                            data-select2-id="select2-data-4-vqtd"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <option disabled selected>
                              {intl.formatMessage({ id: "Status" })}
                            </option>
                            <option value="1">
                              {intl.formatMessage({ id: "ApprovalDone" })}
                            </option>
                            <option value="1">
                              {intl.formatMessage({ id: "InWaiting" })}
                            </option>
                            <option value="1">
                              {intl.formatMessage({ id: "UnderProcessing" })}
                            </option>
                            <option value="1">
                              {intl.formatMessage({ id: "Rejected" })}
                            </option>
                          </select>
                        </div>

                        <div className="mb-2 pt-1 pb-3">
                          <label className="form-label px-2  fontSz-6 required">
                            {intl.formatMessage({ id: "Attachments" })}{" "}
                          </label>
                          <div className=" notice d-flex bg-light-primary rounded border-primary border border-dashed mb-1 mx-5">
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
                                    {intl.formatMessage({
                                      id: "QuickFileUploader",
                                    })}
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
                                  placeholder={intl.formatMessage({
                                    id: "FileUpload",
                                  })}
                                  className="dropzone-select w-100 uploadFile-style inputAreaHeight d-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-2 pt-3 pb-3">
                          <label
                            htmlFor="Quantity"
                            className="form-label px-2  fontSz-6 "
                          >
                            {intl.formatMessage({ id: "QUANTITY" })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fas fa-boxes special"></i>
                              </span>
                            </div>
                            <input
                              id="Quantity"
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({
                                id: "QUANTITY",
                              })}
                            />
                          </div>
                        </div>

                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="value"
                            className="form-label px-2  fontSz-6 "
                          >
                            {intl.formatMessage({ id: "Value" })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="bi bi-gem special"></i>
                              </span>
                            </div>
                            <input
                              id="value"
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({ id: "Value" })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 mx-auto mb-10">
                      <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                        <div className="d-flex justify-content-center align-items-center w-50">
                          <Link
                            to="/pmo-project-outputs-details"
                            className="btn btn-secondary mx-1 text-center w-100"
                          >
                            {intl.formatMessage({ id: "Cancel" })}
                          </Link>
                          <div
                            onClick={() => setShowEdit(true)}
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
      </div>
      <div className="modal fade" aria-hidden="true">
        <EditPopup showEdit={showEdit} handleCloseEdit={() => setShowEdit(false)} />
      </div>
    </>
  );
};

export { EditOutput };
