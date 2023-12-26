import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { EditPopup } from "../../../../partials/EditPopup";
// import { getCurrentSystemLanguage } from "../../../../partials/functions/language";

function EditScientificDataOverview() {
  const [modalEShow, setModalEShow] = useState<boolean>(false);

  let intl = useIntl();
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
            <div className="row mb-5 ">
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
                    value="دكتوراه"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
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
                    className="form-control"
                    name="name"
                    value="الامير سلطان"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
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
                    className="form-control"
                    name="name"
                    value="اداره الاعمال"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Date" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-calendar-alt special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="2023"
                  />
                </div>
              </div>
            </div>
            <div className="row  mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5">
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
                    value="دوره تدريبيه في اداره الاعمال "
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Attachments" })}
                </p>
              </div>

              <div className="col-8">
                <div
                  // className={`${
                  //   getCurrentSystemLanguage() == "ar" ? "ms-9" : "me-9"
                  // } position-relative w-100`}
                >
                  <div
                    // className={`d-flex align-items-center position-absolute mytop-10 ${
                    //   getCurrentSystemLanguage() == "ar" ? "right-0" : "left-0"
                    // }`}
                  >
                    <div className=" ms-1 symbol symbol-50 symbol-light mr-4">
                      <span className="symbol-label">
                        <img
                          src="/media/pmo/docIcon.png"
                          className="h-75 align-self-end rounded-circle "
                          alt=""
                        />
                      </span>
                    </div>
                    <div>
                      <span className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                        Muhammed Ali
                      </span>
                      <span className="text-muted font-weight-bold d-block">
                        19mb
                      </span>
                    </div>
                  </div>
                  <textarea className="form-control form-control-solid ps-2 w-100 d-inline-block"></textarea>
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
              // data-bs-target="#Rega_modal_edit"
              onClick={() => setModalEShow(true)}
              className="btn btn-primary mx-1 text-center w-25"
            >
              {intl.formatMessage({ id: "Save" })}
            </div>
          </div>
        </form>
      </div>
      <div className="modal fade" id="Rega_modal_edit" aria-hidden="true">
        <EditPopup handleCloseEdit={setModalEShow} showEdit={modalEShow} />
      </div>
    </Fragment>
  );
}

export default EditScientificDataOverview;
