import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { EditPopup } from "../../../../../partials/EditPopup";

const EditNewchange: FC = () => {
  const [modalEShow, setModalEShow] = useState<boolean>(false);

  const intl = useIntl();
  const [timeImpact, setTimeImpact] = useState(true);
  const [costImpact, setCostImpact] = useState(true);
  const [qualityImpact, setQualityImpact] = useState(true);
  const [workImpact, setWorkImpact] = useState(true);
  const [projectImpact, setProjectImpact] = useState(true);

  return (
    <>
      <div className="card card-xl-stretch mb-xl-0">
        <div className="card-header px-3 pdt-3 pb-2 mb-3">
          <h3 className="card-title align-items-start flex-column my-10 mx-5">
            <span className="card-label fs-4 mb-2 ">
              {intl.formatMessage({ id: "EditChangeRequest" })}{" "}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted my-5">
              {intl.formatMessage({ id: "PleaseEnterTheData" })}
            </span>
          </h3>
        </div>
        <div className="card-body py-3 px-3 mx-5">
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="REGA_table_widget_5_tab_1"
            >
              <h5 className=" mb-3 pb-2 px-2 fw-bolder">
                {intl.formatMessage({ id: "CHAGE.REQUEST.INFORMATION" })}
              </h5>
              <form noValidate className="form outputForm">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="changeRequest"
                            className="form-label px-2 required fontSz-6"
                          >
                            {intl.formatMessage({ id: "CHAGE.REQUEST" })} (
                            {intl.formatMessage({ id: "DesiredChange" })})
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fad fa-repeat special"></i>
                              </span>
                            </div>
                            <input
                              id="changeRequest"
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({
                                id: "CHAGE.REQUEST",
                              })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="outputStatus"
                            className="form-label px-2 required fontSz-6"
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
                            <option
                              disabled
                              selected
                              data-select2-id="select2-data-6-hquo"
                            >
                              {intl.formatMessage({ id: "PRIORITY" })}
                            </option>
                            <option value="1">عاليه </option>
                            <option value="2">متوسطه </option>
                            <option value="3">منخفضه </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="row">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="requestReason"
                            className="form-label px-2 required fontSz-6"
                          >
                            {intl.formatMessage({ id: "RequestReason" })}
                          </label>
                          <textarea
                            id="requestReason"
                            className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                            placeholder={intl.formatMessage({
                              id: "RequestReason",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <h5 className="mb-4 mt-3 p-2 fw-bolder">
                      {intl.formatMessage({ id: "CHANGE.TYPE" })}{" "}
                    </h5>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-2 pt-2 pb-3">
                          <label className="form-label px-2 required fontSz-6">
                            {intl.formatMessage({ id: "COST.IMPACT" })} ؟
                          </label>
                          <div className="bg-light d-flex  p-4 mb-4">
                            <div>
                              <input
                                className="form-check-input"
                                type="radio"
                                value="YES"
                                checked={costImpact}
                                onChange={() => setCostImpact(!costImpact)}
                              />
                              <label
                                className="form-check-label mx-2"
                                htmlFor="flexRadioDefault1"
                              >
                                {intl.formatMessage({ id: "YES" })}
                              </label>
                            </div>
                            <div className="me-5">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NO"
                                checked={!costImpact}
                                onChange={() => setCostImpact(!costImpact)}
                                id="flexRadioDefault2"
                              />
                              <label
                                className="form-check-label mx-2"
                                htmlFor="flexRadioDefault2"
                              >
                                {intl.formatMessage({ id: "NO" })}
                              </label>
                            </div>
                          </div>
                          {costImpact && (
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fas fa-wallet special"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "CostRatio",
                                })}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="mb-2 pt-2 pb-3">
                          <label className="form-label px-2 required fontSz-6">
                            {intl.formatMessage({ id: "TIME.IMPACT" })}؟
                          </label>
                          <div className="bg-light d-flex p-4 mb-4">
                            <div>
                              <input
                                className="form-check-input"
                                type="radio"
                                value="YES"
                                checked={timeImpact}
                                onChange={() => setTimeImpact(!timeImpact)}
                                id="flexRadioDefault3"
                              />
                              <label
                                className="form-check-label mx-2"
                                htmlFor="flexRadioDefault3"
                              >
                                {intl.formatMessage({ id: "YES" })}
                              </label>
                            </div>
                            <div className="me-5">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NO"
                                checked={!timeImpact}
                                onChange={() => setTimeImpact(!timeImpact)}
                                id="flexRadioDefault4"
                              />
                              <label
                                className="form-check-label mx-2"
                                htmlFor="flexRadioDefault4"
                              >
                                {intl.formatMessage({ id: "NO" })}
                              </label>
                            </div>
                          </div>
                          {timeImpact && (
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fas fa-clock special"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "TimeRatio",
                                })}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-2 pt-2 pb-3">
                          <label className="form-label px-2 required fontSz-6">
                            {intl.formatMessage({ id: "QUALITY.IMPACT" })} ؟
                          </label>
                          <div className="bg-light d-flex  p-4 mb-4">
                            <div>
                              <input
                                className="form-check-input"
                                type="radio"
                                value="YES"
                                checked={qualityImpact}
                                onChange={() =>
                                  setQualityImpact(!qualityImpact)
                                }
                              />
                              <label
                                className="form-check-label mx-2"
                                htmlFor="flexRadioDefault5"
                              >
                                {intl.formatMessage({ id: "YES" })}
                              </label>
                            </div>
                            <div className="me-5">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NO"
                                checked={!qualityImpact}
                                onChange={() =>
                                  setQualityImpact(!qualityImpact)
                                }
                                id="flexRadioDefault6"
                              />
                              <label
                                className="form-check-label mx-2"
                                htmlFor="flexRadioDefault6"
                              >
                                {intl.formatMessage({ id: "NO" })}
                              </label>
                            </div>
                          </div>
                          {qualityImpact && (
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fas fa-gem special"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="الجودة"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-2 pt-2 pb-3">
                          <label className="form-label px-2 required fontSz-6">
                            {intl.formatMessage({ id: "WORK.IMPACT" })} ؟
                          </label>
                          <div className="bg-light d-flex p-4 mb-4">
                            <div>
                              <input
                                className="form-check-input"
                                type="radio"
                                value="YES"
                                checked={workImpact}
                                onChange={() => setWorkImpact(!workImpact)}
                              />
                              <label
                                className="form-check-label mx-2"
                                htmlFor="flexRadioDefault7"
                              >
                                {intl.formatMessage({ id: "YES" })}
                              </label>
                            </div>
                            <div className="me-5">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NO"
                                checked={!workImpact}
                                onChange={() => setWorkImpact(!workImpact)}
                                id="flexRadioDefault8"
                              />
                              <label
                                className="form-check-label mx-2"
                                htmlFor="flexRadioDefault8"
                              >
                                {intl.formatMessage({ id: "NO" })}
                              </label>
                            </div>
                          </div>
                          {workImpact && (
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fas fa-briefcase special"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="نطاق العمل"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="mb-2 pt-2 pb-3">
                          <label className="form-label px-2 required fontSz-6">
                            {intl.formatMessage({ id: "PROJECT.IMPACT" })} ؟
                          </label>
                          <div className="bg-light d-flex p-4 mb-4">
                            <div>
                              <input
                                className="form-check-input"
                                type="radio"
                                value="YES"
                                checked={projectImpact}
                                onChange={() =>
                                  setProjectImpact(!projectImpact)
                                }
                              />
                              <label
                                className="form-check-label mx-2"
                                htmlFor="flexRadioDefault9"
                              >
                                {intl.formatMessage({ id: "YES" })}
                              </label>
                            </div>
                            <div className="me-5">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="NO"
                                checked={!projectImpact}
                                onChange={() =>
                                  setProjectImpact(!projectImpact)
                                }
                                id="flexRadioDefault10"
                              />
                              <label
                                className="form-check-label mx-2"
                                htmlFor="flexRadioDefault10"
                              >
                                {intl.formatMessage({ id: "NO" })}
                              </label>
                            </div>
                          </div>
                          {projectImpact && (
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="bi bi-person-bounding-box special"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" ملكية المشروع"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-2 pt-4 pb-3 ">
                          <label className="form-label px-2  fontSz-6 required">
                            {intl.formatMessage({ id: "Attachments" })}{" "}
                          </label>
                          <div className=" notice d-flex bg-light-primary rounded border-primary border border-dashed mb-1  mx-5">
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
                                  placeholder="رفع الملفات"
                                  className="dropzone-select w-100 uploadFile-style inputAreaHeight d-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-7 mx-auto mb-10">
                    <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                      <div className="d-flex justify-content-center align-items-center w-50">
                        <Link
                          to="/pmo-project-change-requests-details"
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
    </>
  );
};
export { EditNewchange };
