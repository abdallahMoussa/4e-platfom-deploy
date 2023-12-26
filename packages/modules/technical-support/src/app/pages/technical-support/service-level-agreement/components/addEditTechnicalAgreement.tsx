import React, { FC, useState } from "react";
import { RightToolbar } from "../../partials/RightToolbar";
import { useIntl } from "react-intl";
import { QuillEditor } from "./QuillEditor";
import { useLocation, useNavigate } from "react-router";
import { AddPopup } from "../../../partials/AddPopup";
import { EditPopup } from "../../../partials/EditPopup";
import { AddEditServiceLevelAgreementToolbar } from "../toolbar/AddEditServiceLevelAgreementToolbar";
import { Link } from "react-router-dom";
import CheckBoxDropDown from "../../../partials/CheckBoxDropDown";

const EN_LANG = "en";

export const AddEditTechnicalAgreement: FC<any> = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [showEdit, setshowEdit] = useState<boolean>(false);

  const intl = useIntl();
  const [statusNames, setStatusNames] = useState([]);
  const location = useLocation();
  let navigate = useNavigate();
  let isEditPage = location.pathname.includes("edit");

  const options = [
    {
      name: "شديد الاهمة",
      id: 1,
    },
    {
      name: "عاجل",
      id: 2,
    },
    {
      name: "عادي",
      id: 3,
    },
    {
      name: "ملخص",
      id: 4,
    },
  ];

  let selectedLang = localStorage.getItem("i18nConfig") || ""; 
  try {
    selectedLang = JSON.parse(selectedLang).selectedLang;
  } catch (err) {
    console.log("Can't get selectedLang from localStorage");
  }

  return (
    <>
      <AddEditServiceLevelAgreementToolbar isEditPage={isEditPage} />
      <RightToolbar />

      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div
            className="flex-lg-row-fluid"
            data-select2-id="select2-data-129-tmo1"
          >
            <div className="card mb-5 mb-xl-8 pt-5">
              <div>
                <div className="card-header px-1 pb-2 mb-5 mt-5 px-2 px-3">
                  <p className="card-title align-items-start flex-column px-5 pb-5">
                    <span className="card-label fw-bolder fs-3 mb-2 ">
                      <bdi>
                        {!isEditPage
                          ? intl.formatMessage({
                              id: "AddNewAgreement",
                            })
                          : intl.formatMessage({
                              id: "EditAgreement",
                            })}
                      </bdi>
                    </span>
                    <span className="mt-1 fw-semibold fs-5 text-muted">
                      {intl.formatMessage({
                        id: "PleaseEnterTheData",
                      })}
                      :
                    </span>
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        SLA Name
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-file-signature special"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="search"
                          value=""
                          placeholder={intl.formatMessage({
                            id: "TypeYourSearchHere",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-lg-flex justify-content-center">
                    <div className="mb-2 pt-2 pb-3 w-300px">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        <bdi>
                          <span className="text-muted">
                            {selectedLang != EN_LANG && ` (Fulfilled Time) `}
                          </span>
                          {intl.formatMessage({
                            id: "ServiceImplementationPeriod",
                          })}
                        </bdi>
                      </label>
                      <div className="d-flex justify-content-between w-50">
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            value="0"
                            className="form-control form-control-solid text-center"
                            style={{ width: "50px" }}
                          />
                          <span className="d-inline-block ms-2 me-4">
                            {intl.formatMessage({
                              id: "Days",
                            })}
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            value="0"
                            className="form-control form-control-solid text-center"
                            style={{ width: "50px" }}
                          />
                          <span className="d-inline-block ms-2 me-4">
                            {intl.formatMessage({
                              id: "Hours",
                            })}
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            value="0"
                            className="form-control 
                                          form-control-solid text-center"
                            style={{ width: "50px" }}
                          />
                          <span className="d-inline-block ms-2 me-4">
                            {intl.formatMessage({
                              id: "Minutes",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        <bdi>
                          <span className="text-muted">
                            {selectedLang != EN_LANG && ` (Response Time) `}
                          </span>
                          {intl.formatMessage({
                            id: "ResponseTime",
                          })}
                        </bdi>
                      </label>
                      <div className="d-flex justify-content-between w-50">
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            value="0"
                            className="form-control form-control-solid text-center"
                            style={{ width: "50px" }}
                          />
                          <span className="d-inline-block ms-2 me-4">
                            {intl.formatMessage({
                              id: "Days",
                            })}
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            value="0"
                            className="form-control form-control-solid text-center"
                            style={{ width: "50px" }}
                          />
                          <span className="d-inline-block ms-2 me-4">
                            {intl.formatMessage({
                              id: "Hours",
                            })}
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            value="0"
                            className="form-control 
                                          form-control-solid  text-center"
                            style={{ width: "50px" }}
                          />
                          <span className="d-inline-block ms-4">
                            {intl.formatMessage({
                              id: "Minutes",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {!isEditPage && (
                    <>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="mb-2 pt-2 pb-3">
                          <label className="form-label px-2  fs-6 text-gray-700">
                            <bdi>
                              {" "}
                              {intl.formatMessage({
                                id: "Status",
                              })}
                            </bdi>
                          </label>
                          <CheckBoxDropDown
                            selectedOptions={statusNames}
                            setSelectedOptions={setStatusNames}
                            options={options}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-8 col-lg-8 d-lg-flex px-5">
                        <div className="mb-2 pt-2 pb-3 w-100">
                          <label className="form-label px-2  fs-6 text-gray-700 invisible">
                            AddEscalationLevel
                          </label>
                        <div className="d-flex align-items-center">
                        <button
                            className="btn btn-success w-40 mx-2"
                            onClick={() => {
                              navigate("/add-escalation-level");
                            }}
                          >
                            <bdi>
                              {intl.formatMessage({
                                id: "AddEscalationLevel",
                              })}
                            </bdi>
                          </button>
                          {localStorage.getItem("levelAdded") == "added" ? (
                            <>
                              {" "}
                              <span className="text-success">
                                {intl.formatMessage({
                                  id: "EsclationLevelAddedSuccessfully",
                                })}
                                <i className="fa-solid fa-check mx-2"></i>
                              </span>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <label className="form-label px-2  fs-6 text-gray-700 mx-5">
                {intl.formatMessage({
                  id: "Description",
                })}
              </label>
              <div className="my-4 mx-8">
                {/* <QuillEditor description={"Description"} /> */}
                <textarea
                  className="form-control form-control-solid "
                  rows={5}
                  placeholder={intl.formatMessage({
                    id: "Description",
                  })}
                />
              </div>
              <div className="p-3 text-center pb-5">
                <Link
                  onClick={() => {
                    localStorage.setItem("levelAdded", "not added");
                  }}
                  className="btn btn-secondary m-3 px-5 py-3"
                  style={{ width: "125px" }}
                  to={
                    isEditPage
                      ? "/technical-support-service-level-agreement-details-sla"
                      : "/technical-support-service-level-agreement-details"
                  }
                >
                  {intl.formatMessage({
                    id: "Cancel",
                  })}
                </Link>
                {isEditPage ? (
                  <button
                    className="btn btn-primary m-3 px-5 py-3"
                    style={{ width: "125px" }}
                    onClick={(event) => {
                      event.preventDefault();
                      setshowEdit(true);
                    }}
                  >
                    {intl.formatMessage({
                      id: "Edit",
                    })}
                  </button>
                ) : (
                  <button
                    className="btn btn-success m-3 px-5 py-3"
                    style={{ width: "125px" }}
                    // data-bs-toggle="modal"
                    // data-bs-target="#Rega_modal_add"
                    onClick={() => setModalShow(true)}
                  >
                    {intl.formatMessage({
                      id: "Add",
                    })}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      <div className="modal fade" aria-hidden="true">
        <EditPopup
          handleCloseEdit={() => setshowEdit(false)}
          showEdit={showEdit}
        />
      </div>
    </>
  );
};
