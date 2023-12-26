import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import HierarchyPopup from "../popup/HierarchyPopup";
import { EditPopup } from "../../../partials/EditPopup";
import { getCurrentSystemLanguage } from "../../../../partials/functions/language";
import { DeletePopup } from "../../../partials/DeletePopup";
function EditTrackRequestsTool() {
  const [modalEShow, setModalEShow] = useState<boolean>(false);
  const [modalDShow, setModalDShow] = useState<boolean>(false);
  const [modalHShow, setModalHShow] = useState<boolean>(false);

  let navigate = useNavigate();
  const intl = useIntl();
  let [showHierarichalModal, setShowHierarichalModal] =
    useState<boolean>(false);

  return (
    <Fragment>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  mt-4"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row g-5 g-xl-8">
            <div className="col-xl-12">
              <div className="card card-xl-stretch mb-xl-8 card-body p-2 ">
                <div className="card-header border-0 pt-5 mb-5">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-dark mb-3">
                      {intl.formatMessage({ id: "EditTrackRequest" })}{" "}
                    </span>
                    <span className="text-muted mt-1 fw-bold fs-7">
                      {intl.formatMessage({
                        id: "PleaseEnterTheFollowingDataToAddNewApplicationPath",
                      })}{" "}
                    </span>
                  </h3>
                </div>
                <hr />
                <form
                  className="p-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="row d-flex justify-content-around">
                    <div className="col-md-4 col-sm-10">
                      <div className="d-flex flex-column mb-8">
                        <label
                          className="fs-6 fw-bold mb-2 form-label"
                          htmlFor="name"
                        >
                          {intl.formatMessage({ id: "OrderName" })}{" "}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-cube special"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            name="target_details"
                            placeholder={intl.formatMessage({
                              id: "OrderName",
                            })}
                            id="name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-10">
                      <div className="d-flex flex-column mb-8">
                        <label className="fs-6 fw-bold mb-2" htmlFor="type">
                          {intl.formatMessage({ id: "OrderType" })}{" "}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-vector-square special"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            name="target_details"
                            id="type"
                            placeholder={intl.formatMessage({
                              id: "OrderType",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-10">
                      <div className="d-flex flex-column mb-8 ">
                        <label className="fs-6 fw-bold mb-2" htmlFor="number">
                          {intl.formatMessage({ id: "DepartmentsNumber" })}{" "}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="bi bi-layers-fill special"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            name="target_details"
                            placeholder="5"
                            id="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-4 col-sm-10">
                      <div className="d-flex flex-column mb-8">
                        <label
                          className="fs-6 fw-bold mb-2"
                          htmlFor="classNameification"
                        >
                          {intl.formatMessage({ id: "OrderClassification" })}{" "}
                        </label>

                        <select
                          className="form-select form-select-solid"
                          name="target_details"
                          placeholder={intl.formatMessage({
                            id: "OrderClassification",
                          })}
                          id="classNameification"
                        >
                          <option
                            value={intl.formatMessage({
                              id: "OrderClassification",
                            })}
                            disabled
                            selected
                          >
                            {intl.formatMessage({ id: "OrderClassification" })}{" "}
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="timeline mb-4 timeline-1 pe-5 position-relative mt-4 pt-4">
                    <div
                      className="timeline-sep bg-secondary h-100 border border-1 border-dashed"
                      style={{
                        position: "absolute",
                        top: "10px",
                        [getCurrentSystemLanguage() == "ar"
                          ? "right"
                          : "left"]: `30px`,
                      }}
                    ></div>
                    <div className="timeline-item mb-3 d-flex align-items-center ">
                      <div className="timeline-badge w-50px">
                        <span className="badge bg-success fs-2 p-3 d-flex align-items-center justify-content-center w-30px">
                          1
                        </span>{" "}
                      </div>
                      <div className="timeline-content d-flex  align-items-center text-muted font-weight-normal ms-4">
                        <div className="row pt-3 w-100 mb-4 d-flex  align-items-center justify-content-between">
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex flex-column mb-2">
                              <label className="fs-6 fw-bold mb-2 form-label">
                                {intl.formatMessage({
                                  id: "TheNameOfTheDepartmentOrEmployee",
                                })}{" "}
                              </label>

                              <div className="input-group">
                                <select
                                  className="form-control form-control-solid text-muted"
                                  name="target_details"
                                  placeholder={intl.formatMessage({
                                    id: "ChooseTheDepartmentOrTheEmployee",
                                  })}
                                  id="classNameification"
                                >
                                  <option
                                    value={intl.formatMessage({
                                      id: "ChooseTheDepartmentOrTheEmployee",
                                    })}
                                    disabled
                                    selected
                                  >
                                    {intl.formatMessage({
                                      id: "ChooseTheDepartmentOrTheEmployee",
                                    })}{" "}
                                  </option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                </select>
                                <div
                                  className="input-group-prepend"
                                  // data-bs-toggle="modal"
                                  // data-bs-target="#Rega_modal_Hierarchy"
                                  onClick={() => {
                                    navigate("#");
                                    setModalHShow(true);
                                  }}
                                >
                                  <span className="input-group-text">
                                    <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex flex-column mb-2">
                              <label
                                className="fs-6 fw-bold mb-2 form-label"
                                htmlFor="classNameification"
                              >
                                SLA
                              </label>

                              <select
                                className="form-select form-select-solid text-muted"
                                name="target_details"
                                placeholder="اسم الطلب"
                                id="classNameification"
                              >
                                <option value="SLA Name" disabled selected>
                                  SLA Name
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex fw-bolder text-primary justify-content-center align-items-center h-100 w-100">
                              5 ايام 8 ساعات 10 دقائق
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item mb-3 d-flex align-items-center">
                      <div className="timeline-badge w-50px">
                        <span className="badge bg-success fs-2 p-3">2</span>{" "}
                      </div>
                      <div className="timeline-content ms-4 d-flex align-items-center justify-content-between text-muted font-weight-normal">
                        <div className="row w-100 pt-3 mb-4 d-flex  align-items-center justify-content-between mb-4">
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex flex-column mb-2">
                              <label
                                className="fs-6 fw-bold mb-2 form-label"
                                htmlFor="classNameification"
                              >
                                {intl.formatMessage({
                                  id: "TheNameOfTheDepartmentOrEmployee",
                                })}{" "}
                              </label>

                              <div className="input-group">
                                <select
                                  className="form-control form-control-solid text-muted"
                                  name="target_details"
                                  placeholder={intl.formatMessage({
                                    id: "ChooseTheDepartmentOrTheEmployee",
                                  })}
                                  id="classNameification"
                                >
                                  <option
                                    value={intl.formatMessage({
                                      id: "ChooseTheDepartmentOrTheEmployee",
                                    })}
                                    disabled
                                    selected
                                  >
                                    {intl.formatMessage({
                                      id: "ChooseTheDepartmentOrTheEmployee",
                                    })}{" "}
                                  </option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                </select>
                                <div
                                  className="input-group-prepend"
                                  // data-bs-target="#Rega_modal_Hierarchy"
                                  // data-bs-toggle="modal"
                                  onClick={() => {
                                    navigate("#");
                                    setModalHShow(true);
                                  }}
                                >
                                  <span className="input-group-text ">
                                    <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex flex-column mb-2">
                              <label
                                className="fs-6 fw-bold mb-2 form-label"
                                htmlFor="classNameification"
                              >
                                SLA
                              </label>

                              <select
                                className="form-select form-select-solid text-muted"
                                name="target_details"
                                placeholder="اسم الطلب"
                                id="classNameification"
                              >
                                <option value="SLA Name" disabled selected>
                                  SLA Name
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex fw-bolder text-primary justify-content-center align-items-center h-100 w-100">
                              5 ايام 8 ساعات 10 دقائق
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item mb-3 d-flex align-items-center">
                      <div className="timeline-badge w-50px">
                        <span className="badge bg-success fs-2 p-3">3</span>{" "}
                      </div>
                      <div className="timeline-content ms-4 text-muted font-weight-normal d-flex align-items-center justify-content-between">
                        <div className="row mb-4 pt-3 w-100 mb-4 d-flex  align-items-center justify-content-between">
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex flex-column mb-2">
                              <label
                                className="fs-6 fw-bold mb-2 form-label"
                                htmlFor="classNameification"
                              >
                                {intl.formatMessage({
                                  id: "TheNameOfTheDepartmentOrEmployee",
                                })}{" "}
                              </label>

                              <div className="input-group">
                                <select
                                  className="form-control form-control-solid text-muted"
                                  name="target_details"
                                  placeholder={intl.formatMessage({
                                    id: "ChooseTheDepartmentOrTheEmployee",
                                  })}
                                  id="classNameification"
                                >
                                  <option
                                    value={intl.formatMessage({
                                      id: "ChooseTheDepartmentOrTheEmployee",
                                    })}
                                    disabled
                                    selected
                                  >
                                    {intl.formatMessage({
                                      id: "ChooseTheDepartmentOrTheEmployee",
                                    })}{" "}
                                  </option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                </select>
                                <div
                                  className="input-group-prepend"
                                  // data-bs-target="#Rega_modal_Hierarchy"
                                  // data-bs-toggle="modal"
                                  onClick={() => {
                                    navigate("#");
                                    setModalHShow(true);
                                  }}
                                >
                                  <span className="input-group-text ">
                                    <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex flex-column mb-2 form-label">
                              <label
                                className="fs-6 fw-bold mb-2"
                                htmlFor="classNameification"
                              >
                                SLA
                              </label>

                              <select
                                className="form-select form-select-solid text-muted"
                                name="target_details"
                                placeholder="اسم الطلب"
                                id="classNameification"
                              >
                                <option value="SLA Name" disabled selected>
                                  SLA Name
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex fw-bolder text-primary justify-content-center align-items-center h-100 w-100">
                              5 ايام 8 ساعات 10 دقائق
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item mb-3 d-flex align-items-center">
                      <div className="timeline-badge w-50px">
                        <span className="badge bg-success fs-2 p-3">4</span>{" "}
                      </div>
                      <div className="timeline-content ms-4 d-flex align-items-center justify-content-between text-muted font-weight-normal">
                        <div className="row pt-3 mb-4 w-100 mb-4 d-flex  align-items-center justify-content-between">
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex flex-column mb-8 ">
                              <label
                                className="fs-6 fw-bold mb-2 form-label"
                                htmlFor="classNameification"
                              >
                                {intl.formatMessage({
                                  id: "TheNameOfTheDepartmentOrEmployee",
                                })}{" "}
                              </label>

                              <div className="input-group">
                                <select
                                  className="form-control form-control-solid text-muted"
                                  name="target_details"
                                  placeholder={intl.formatMessage({
                                    id: "ChooseTheDepartmentOrTheEmployee",
                                  })}
                                  id="classNameification"
                                >
                                  <option
                                    value={intl.formatMessage({
                                      id: "ChooseTheDepartmentOrTheEmployee",
                                    })}
                                    disabled
                                    selected
                                  >
                                    {intl.formatMessage({
                                      id: "ChooseTheDepartmentOrTheEmployee",
                                    })}{" "}
                                  </option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                </select>
                                <div
                                  className="input-group-prepend  h-100"
                                  // data-bs-target="#Rega_modal_Hierarchy"
                                  // data-bs-toggle="modal"
                                  onClick={() => {
                                    navigate("#");
                                    setModalHShow(true);
                                  }}
                                >
                                  <span className="input-group-text ">
                                    <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex flex-column mb-8">
                              <label
                                className="fs-6 fw-bold mb-2 form-label"
                                htmlFor="classNameification"
                              >
                                SLA
                              </label>

                              <select
                                className="form-control form-control-solid text-muted"
                                name="target_details"
                                placeholder="اسم الطلب"
                                id="classNameification"
                              >
                                <option value="SLA Name" disabled selected>
                                  SLA Name
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex fw-bolder text-primary justify-content-center align-items-center h-100 w-100">
                              5 ايام 8 ساعات 10 دقائق
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item d-flex align-items-center">
                      <div className="timeline-badge w-50px">
                        <span
                          className={`badge bg-success fs-2 p-3 ${
                            getCurrentSystemLanguage() == "ar" ? "ms-4" : "me-4"
                          }`}
                        >
                          5
                        </span>{" "}
                      </div>
                      <div className="timeline-content ms-4 d-flex align-items-center justify-content-between text-muted font-weight-normal">
                        <div className="row pt-3 mb-4 w-100 mb-4 d-flex  align-items-center justify-content-between">
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex flex-column mb-8 ">
                              <label
                                className="fs-6 fw-bold mb-2 form-label"
                                htmlFor="classNameification"
                              >
                                {intl.formatMessage({
                                  id: "TheNameOfTheDepartmentOrEmployee",
                                })}{" "}
                              </label>

                              <div className="input-group">
                                <select
                                  className="form-control form-control-solid text-muted"
                                  name="target_details"
                                  placeholder={intl.formatMessage({
                                    id: "ChooseTheDepartmentOrTheEmployee",
                                  })}
                                  id="classNameification"
                                >
                                  <option
                                    value={intl.formatMessage({
                                      id: "ChooseTheDepartmentOrTheEmployee",
                                    })}
                                    disabled
                                    selected
                                  >
                                    {intl.formatMessage({
                                      id: "ChooseTheDepartmentOrTheEmployee",
                                    })}{" "}
                                  </option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                </select>
                                <div
                                  className="input-group-prepend  h-100"
                                  // data-bs-target="#Rega_modal_Hierarchy"
                                  // data-bs-toggle="modal"
                                  onClick={() => {
                                    navigate("#");
                                    setModalHShow(true);
                                  }}
                                >
                                  <span className="input-group-text ">
                                    <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex flex-column mb-8">
                              <label
                                className="fs-6 fw-bold mb-2 form-label"
                                htmlFor="classNameification"
                              >
                                SLA
                              </label>

                              <select
                                className="form-control form-control-solid text-muted"
                                name="target_details"
                                placeholder="اسم الطلب"
                                id="classNameification"
                              >
                                <option value="SLA Name" disabled selected>
                                  SLA Name
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-10">
                            <div className="d-flex fw-bolder text-primary justify-content-center align-items-center h-100 w-100">
                              5 ايام 8 ساعات 10 دقائق
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
                          to="/track-requests-tools"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HierarchyPopup
        cancelFunc={() => {
          setShowHierarichalModal(false);
        }}
        show={modalHShow}
        handleClose={() => setModalHShow(false)}
      />
      <div className="modal fade" id="Rega_modal_edit" aria-hidden="true">
        <EditPopup handleCloseEdit={setModalEShow} showEdit={modalEShow} />
      </div>
      {/* <div
        className="modal fade"
        id="Rega_modal_Hierarchy_Delete"
        aria-hidden="true"
      >
        <DeletePopup
          handleCloseDelete={() => setModalDShow(false)}
          showDelete={modalDShow}
        />
      </div> */}
    </Fragment>
  );
}

export default EditTrackRequestsTool;
