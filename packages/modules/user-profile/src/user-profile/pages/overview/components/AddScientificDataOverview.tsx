import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { AddPopup } from "../../../../partials/AddPopup";

function AddScientificDataOverview() {
  let intl = useIntl();
  const [modalShow, setModalShow] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="card shadow p-6 ">
        <div className="d-flex justify-content-between px-3 mb-7">
          <p className="fw-bolder fs-4 ">
            {" "}
            {intl.formatMessage({ id: "ScientificDataAndExperiences" })}
          </p>
        </div>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mt-2 mb-9 px-3">
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({
                    id: "TypeOfQualification/Certificate",
                  })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bi bi-mortarboard-fill special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder={intl.formatMessage({
                      id: "TypeOfQualification/Certificate",
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "University/Location" })}
                </p>
              </div>
              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-university special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-solid ps-2 d-inline-block"
                    name="name"
                    placeholder={intl.formatMessage({
                      id: "University/Location",
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Specialization" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-star special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-solid ps-2 d-inline-block"
                    name="name"
                    placeholder={intl.formatMessage({ id: "Specialization" })}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Date" })}
                </p>
              </div>

              <div className="col-8">
                <input
                  type="date"
                  className="form-control form-control-solid ps-2 d-inline-block"
                  name="name"
                  placeholder={intl.formatMessage({ id: "Date" })}
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "PracticalExperiences" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bi bi-person-lines-fill special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder={intl.formatMessage({
                      id: "PracticalExperiences",
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="mb-2 pt-4 pb-3 row ">
              <div className="col-3 me-5">
                <label className="form-label px-2 text-muted fs-5  d-inline-block">
                  {intl.formatMessage({ id: "Attachments" })}{" "}
                </label>
              </div>

              <div className="col-8">
                <div className="w-100 d-flex bg-light-primary rounded border-primary border border-dashed mb-1 ">
                  <label
                    htmlFor="outputAttachment"
                    className="form-label px-2  fontSz-6 dropzone-select  uploadFile-style inputAreaHeight"
                  >
                    <div className="row align-items-center">
                      <div className="col-md-1 mx-2">
                        <img
                          src="/media/pmo/uploadFile.png"
                          className="d-inline-block h-75"
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
                        placeholder="رفع الملفات"
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
              to="/user-profile/overview"
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
    </Fragment>
  );
}

export default AddScientificDataOverview;
