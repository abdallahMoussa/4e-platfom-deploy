import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { AddPopup } from "../../../partials/AddPopup";

const AddNewChangeReqest: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const intl = useIntl();

  return (
    <div className="card card-xl-stretch mb-xl-0">
      <div className="card-header px-3 pt-3 pb-2 mb-3">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fs-4 my-5 ">
            {intl.formatMessage({ id: "ADD.NEW.CHANGE" })}
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
            <p className="fw-bolder fs-6 my-5">
              {intl.formatMessage({ id: "CHAGE.REQUEST.INFORMATION" })}
            </p>
            <form noValidate className="form outputForm">
              <div className="row">
                <div className="col-lg-6 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="outputName"
                    className="form-label px-2 fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "CHAGE.REQUEST" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fad fa-repeat special"></i>
                      </span>
                    </div>
                    <input
                      id="outputName"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({ id: "CHAGE.REQUEST" })}
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="stageName"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "ORDER.NUM" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-hashtag special"></i>
                      </span>
                    </div>
                    <input
                      id="stageName"
                      type="number"
                      className="form-control"
                      placeholder={intl.formatMessage({ id: "ORDER.NUM" })}
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="outputStatus"
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
                      {intl.formatMessage({ id: "PRIORITY" })}
                    </option>
                    <option value="1">
                      {intl.formatMessage({ id: "BIG" })}
                    </option>
                    <option value="2">
                      {intl.formatMessage({ id: "MEDIUM" })}
                    </option>
                    <option value="3">
                      {intl.formatMessage({ id: "LOW" })}
                    </option>
                  </select>
                </div>
                <div className="col-lg-6 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="outputDate"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "DATE.ORDER" })}
                  </label>
                  <input
                    id="outputDate"
                    type="date"
                    className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                    placeholder={intl.formatMessage({ id: "DATE.ORDER" })}
                  />
                </div>
                <div className="col-lg-6 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="notes"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "ORDER.REASON" })}
                  </label>
                  <textarea
                    id="notes"
                    className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                    placeholder={intl.formatMessage({ id: "ORDER.REASON" })}
                  />
                </div>
              </div>
              <p className="fw-bolder fs-6 my-5">
                {intl.formatMessage({ id: "CHANGE.TYPE" })}
              </p>
              <div className="row g-5">
                <div className="col-lg-4 mb-2 pt-2 pb-3 mt-5">
                  <label
                    htmlFor="notes"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "COST.IMPACT" })}
                  </label>
                  <div className="d-flex p-3 filed_background">
                    <div className="form-check form-check-success form-check-sm form-check-custom mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="cost"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {intl.formatMessage({ id: "YES" })}
                      </label>
                    </div>
                    <div className="form-check form-check-success form-check-sm form-check-custom">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="cost"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {intl.formatMessage({ id: "NO" })}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-2 pt-2 pb-3 mt-5">
                  <label
                    htmlFor="notes"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "TIME.IMPACT" })}
                  </label>
                  <div className="d-flex p-3 filed_background">
                    <div className="form-check form-check-success form-check-sm form-check-custom mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="time"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {intl.formatMessage({ id: "YES" })}
                      </label>
                    </div>
                    <div className="form-check form-check-success form-check-sm form-check-custom">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="time"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {intl.formatMessage({ id: "NO" })}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-2 pt-2 pb-3 mt-5">
                  <label
                    htmlFor="notes"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "QUALITY.IMPACT" })}
                  </label>
                  <div className="d-flex p-3 filed_background">
                    <div className="form-check form-check-success form-check-sm form-check-custom mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="quality"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {intl.formatMessage({ id: "YES" })}
                      </label>
                    </div>
                    <div className="form-check form-check-success form-check-sm form-check-custom">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="quality"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {intl.formatMessage({ id: "NO" })}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-2 pt-2 pb-3 mt-5">
                  <label
                    htmlFor="notes"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "WORK.IMPACT" })}
                  </label>
                  <div className="d-flex p-3 filed_background">
                    <div className="form-check form-check-success form-check-sm form-check-custom mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="work"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {intl.formatMessage({ id: "YES" })}
                      </label>
                    </div>
                    <div className="form-check form-check-success form-check-sm form-check-custom">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="work"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {intl.formatMessage({ id: "NO" })}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-2 pt-2 pb-3 mt-5">
                  <label
                    htmlFor="notes"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "PROJECT.IMPACT" })}
                  </label>
                  <div className="d-flex p-3 filed_background">
                    <div className="form-check form-check-success form-check-sm form-check-custom mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="project"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {intl.formatMessage({ id: "YES" })}
                      </label>
                    </div>
                    <div className="form-check form-check-success form-check-sm form-check-custom">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="project"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        {intl.formatMessage({ id: "NO" })}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-2 pt-4 pb-3 ">
                  <label className="form-label px-2  fontSz-6 required">
                    {intl.formatMessage({ id: "ATTACHMENTS" })}
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
                          placeholder={intl.formatMessage({ id: "FileUpload" })}
                          className="dropzone-select w-100 uploadFile-style inputAreaHeight d-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-7 mx-auto mb-10">
                <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center w-50">
                    <Link
                      to={"/pmo-change-requests"}
                      className="btn btn-secondary mx-1 text-center w-100"
                    >
                      {intl.formatMessage({ id: "CANCEL" })}
                    </Link>
                    <div
                      className="btn btn-success mx-1 text-center w-100"
                      // data-bs-toggle="modal"
                      // data-bs-target="#Rega_modal_add"
                      onClick={() => setModalShow(true)}
                    >
                      {intl.formatMessage({ id: "ADD" })}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
    </div>
  );
};

export { AddNewChangeReqest };
