import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { EditPopup } from "../../../../partials/EditPopup";
import HierarchyPopup from "../popup/HierarchyPopup";
// import { getCurrentSystemLanguage } from "../../../../partials/functions/language";

function EditJobDataOverview() {
  const [modalEShow, setModalEShow] = useState<boolean>(false);

  let intl = useIntl();
  return (
    <Fragment>
      <div className="card shadow p-6 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="d-flex justify-content-between px-3 mb-7">
            <p className="fw-bolder fs-4 ">
              {" "}
              {intl.formatMessage({ id: "JobData" })}
            </p>
          </div>
          <hr />
          <div className="mt-2 mb-9 px-3">
            <div className=" mb-5 row">
              <div className="col-3 me-5">
                <p className="text-muted fs-5">
                  {" "}
                  {intl.formatMessage({ id: "JobDegree" })}
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
                    value="مسئول رقابه"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Adminstration" })}
                </p>
              </div>
              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-users-cog special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="اداره الرقابه "
                  />
                  <div className="h-110 d-flex" role="button">
                    <span
                      className="input-group-text"
                      data-bs-target="#Rega_modal_job_Hierarchy"
                      data-bs-toggle="modal"
                    >
                      <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5  ">
                  {" "}
                  {intl.formatMessage({ id: "JobCode" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-code special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="1234567"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "HiringDate" })}
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
                    value="5/9/2017"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "VacationsBalance" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-plane-departure special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="50 يوم"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "LengthOfService" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-cog special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="6 سنوات"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Promotion" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bi bi-megaphone-fill special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="من اخصائي الي اخصائي اول"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between px-3 mb-7">
            <p className="fw-bolder fs-4 ">
              {" "}
              {intl.formatMessage({ id: "JobHistory" })}
            </p>
          </div>
          <hr />
          <div className="mt-2 mb-9 px-3">
            <div className="row mb-5 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5">
                  {" "}
                  {intl.formatMessage({ id: "Job" })}
                </p>
              </div>
              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-briefcase special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="اخصائي"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Adminstration" })}
                </p>
              </div>
              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-users-cog special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="اداره الرقابه "
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "FromDate" })}
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
                    value="15/9/2017"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "ToDate" })}
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
                    value="9/9/2020"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "LengthOfService" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-cog special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="3 سنوات"
                  />
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
      <HierarchyPopup />
    </Fragment>
  );
}

export default EditJobDataOverview;
