import React, { Fragment, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { DeletePopup } from "../../../../partials/DeletePopup";
import { KTSVG } from "../../../../helpers";
import { getCurrentSystemLanguage } from "../../../../functions/language";

const HierarchyPopup = () => {
  const [modalDShow, setModalDShow] = useState<boolean>(false);

  const intl = useIntl();
  let [showHierarchy1, setShowHierarchy1] = useState<boolean>(false);
  let [showHierarchy2, setShowHierarchy2] = useState<boolean>(false);
  let [showHierarchy3, setShowHierarchy3] = useState<boolean>(false);
  let [showHierarchy4, setShowHierarchy4] = useState<boolean>(false);
  let [showNestedHierarchy2, setShowNestedHierarchy2] =
    useState<boolean>(false);
  let [show1FromNested, setShow1FromNested] = useState<boolean>(true);
  let [show2FromNested, setShow2FromNested] = useState<boolean>(true);
  let [show3FromNested, setShow3FromNested] = useState<boolean>(true);
  let show1 = () => {
    setShow1FromNested(true);
    setShow2FromNested(false);
    setShow3FromNested(false);
  };
  let show2 = () => {
    setShow1FromNested(false);
    setShow2FromNested(true);
    setShow3FromNested(false);
  };
  let show3 = () => {
    setShow1FromNested(false);
    setShow2FromNested(false);
    setShow3FromNested(true);
  };
  return (
    <Fragment>
      <div
        className="modal fade"
        id="Rega_modal_job_Hierarchy"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content rounded">
            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15 mb-7">
              <div className="mb-3 pt-3 d-flex align-items-center justify-content-between">
                <div className="w-75">
                  <p className="mb-1 fw-bolder">
                    {" "}
                    {intl.formatMessage({ id: "OrganizationalChart" })}
                  </p>
                  <p className="mb-2 text-muted fw-bolder">
                    {intl.formatMessage({
                      id: "YouCanSeeTheDepartmentsAndDivisionsOfTheAuthority",
                    })}{" "}
                  </p>
                </div>
                <div className="w-25 d-flex align-items-center justify-content-end">
                  <span className=" cursor-pointer mx-3 badgex badge-light-success d-flex align-items-center justify-content-between">
                    <i className="fa-solid fa-plus fs-4"></i>
                  </span>
                  <span className="mx-3 cursor-pointer badgex badge-light-warning d-flex align-items-center justify-content-between">
                    <i className="fa-regular fa-pen-to-square fs-4"></i>{" "}
                  </span>
                  <span
                    className="mx-3 badgex cursor-pointer badge-light-danger d-flex align-items-center justify-content-between"
                    onClick={(event) => {
                      event.preventDefault();
                      setModalDShow(true);
                    }}
                  >
                    <i className="fa-solid fa-trash fs-4"></i>
                  </span>
                </div>
              </div>
              <hr />
              <br />
              <div className="d-flex flex-column">
                <form
                  className="d-flex"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="row h-100 w-100">
                    <div className="col-md-12">
                      <div className="h-75 ">
                        <div className="tree_main mb-5">
                          <ul id="tree1" className="tree list-unstyled">
                            <p
                              className="d-flex align-items-center"
                              onClick={() => {
                                setShowHierarchy1((prevState) => {
                                  return !prevState;
                                });
                              }}
                            >
                              {" "}
                              {showHierarchy1 ? (
                                <i className="fa-solid fa-chevron-down fs-3 text-danger"></i>
                              ) : getCurrentSystemLanguage() == "ar" ? (
                                <i className="fa-solid fa-chevron-left text-black fs-3"></i>
                              ) : (
                                <i className="fa-solid fa-chevron-right text-black fs-3"></i>
                              )}
                              <i className="bi bi-diagram-3-fill mx-3 fs-1 text-black"></i>
                              <span
                                className="basic-item fw-bolder"
                                role="button"
                              >
                                {intl.formatMessage({
                                  id: "RealEstateOperations",
                                })}{" "}
                              </span>
                            </p>
                            {showHierarchy1 && (
                              <li className="basic-branch branch">
                                <ul className="list-unstyled">
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}{" "}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="Checkboxes1"
                                      />
                                    </div>
                                    <label htmlFor="Checkboxes1">
                                      {intl.formatMessage({
                                        id: "DigitalRealEstate",
                                      })}{" "}
                                    </label>
                                  </li>
                                  <li className="branch d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="Checkboxes2"
                                      />
                                    </div>
                                    <label htmlFor="Checkboxes2">
                                      {intl.formatMessage({
                                        id: "Processes",
                                      })}{" "}
                                    </label>
                                  </li>
                                </ul>
                              </li>
                            )}
                          </ul>
                        </div>
                        <div className="tree_main mb-5">
                          <ul id="tree1" className="tree list-unstyled">
                            <p
                              className="d-flex align-items-center"
                              onClick={() => {
                                setShowHierarchy2((prevState) => {
                                  return !prevState;
                                });
                              }}
                            >
                              {" "}
                              {showHierarchy2 ? (
                                <i className="fa-solid fa-chevron-down fs-3 text-danger"></i>
                              ) : getCurrentSystemLanguage() == "ar" ? (
                                <i className="fa-solid fa-chevron-left text-black fs-3"></i>
                              ) : (
                                <i className="fa-solid fa-chevron-right text-black fs-3"></i>
                              )}
                              <i className="bi bi-diagram-3-fill mx-3 fs-1 text-black"></i>{" "}
                              <span
                                className="basic-item fw-bolder"
                                role="button"
                              >
                                {intl.formatMessage({
                                  id: "OrganizingAndRecordingInKind",
                                })}{" "}
                              </span>
                            </p>
                            {showHierarchy2 && (
                              <li className="basic-branch branch">
                                <ul className="list-unstyled">
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}{" "}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="1"
                                      />
                                    </div>
                                    <label htmlFor="1">
                                      {intl.formatMessage({
                                        id: "CommitteeManagement",
                                      })}
                                    </label>{" "}
                                  </li>
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}{" "}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="2"
                                      />
                                    </div>
                                    <label htmlFor="2">
                                      {intl.formatMessage({
                                        id: "SpecimenRegistration",
                                      })}
                                    </label>{" "}
                                  </li>
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="3"
                                      />
                                    </div>
                                    <label htmlFor="3">
                                      {intl.formatMessage({
                                        id: "OrganizationAndLegalAffairs",
                                      })}{" "}
                                    </label>
                                  </li>
                                </ul>
                              </li>
                            )}
                          </ul>
                        </div>
                        <div className="tree_main mb-5">
                          <ul id="tree1" className="tree list-unstyled">
                            <p
                              className="d-flex align-items-center"
                              onClick={() => {
                                setShowHierarchy3((prevState) => {
                                  return !prevState;
                                });
                              }}
                            >
                              {" "}
                              {showHierarchy3 ? (
                                <i className="fa-solid fa-chevron-down fs-3 text-danger"></i>
                              ) : getCurrentSystemLanguage() == "ar" ? (
                                <i className="fa-solid fa-chevron-left text-black fs-3"></i>
                              ) : (
                                <i className="fa-solid fa-chevron-right text-black fs-3"></i>
                              )}
                              <i className="bi bi-diagram-3-fill mx-3 fs-1 text-black"></i>{" "}
                              <span
                                className="basic-item fw-bolder"
                                role="button"
                              >
                                {intl.formatMessage({
                                  id: "StrategyAndBusinessDevelopment",
                                })}{" "}
                              </span>
                            </p>
                            {showHierarchy3 && (
                              <li className="basic-branch branch">
                                <ul className="list-unstyled">
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="I1"
                                        onClick={() => {
                                          setShowNestedHierarchy2(
                                            (prevState) => {
                                              return !prevState;
                                            }
                                          );
                                        }}
                                      />
                                    </div>
                                    <label htmlFor="I1">
                                      {intl.formatMessage({
                                        id: "StrategicPlanning",
                                      })}{" "}
                                    </label>
                                    {/* {showNestedHierarchy2 && (
                                      <ul
                                        id="tree1"
                                        className="tree list-unstyled"
                                      >
                                        <li className="branch mb-3 d-flex align-items-center">
                                        <i className="fa-solid fa-chevron-left text-primary fs-4"></i>

                                          <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                            <input
                                              className="form-check-input widget-9-check xCheckBg"
                                              type="checkbox"
                                              id="a"
                                              checked={show1FromNested}
                                              onChange={() => {
                                                show1();
                                              }}
                                            />
                                          </div>
                                          <label htmlFor="a">
                                            {intl.formatMessage({
                                              id: "TheStrategy",
                                            })}{" "}
                                          </label>
                                        </li>
                                        <li className="branch mb-3 d-flex align-items-center">
                                        <i className="fa-solid fa-chevron-left text-primary fs-4"></i>

                                          <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                            <input
                                              className="form-check-input widget-9-check xCheckBg"
                                              type="checkbox"
                                              id="b"
                                              checked={show2FromNested}
                                              onChange={() => {
                                                show2();
                                              }}
                                            />
                                          </div>
                                          <label htmlFor="b">
                                            {intl.formatMessage({
                                              id: "InstitutionalPerformance",
                                            })}{" "}
                                          </label>
                                        </li>
                                        <li className="branch d-flex align-items-center">
                                        <i className="fa-solid fa-chevron-left text-primary fs-4"></i>

                                          <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                            <input
                                              className="form-check-input widget-9-check xCheckBg"
                                              type="checkbox"
                                              id="c"
                                              checked={show3FromNested}
                                              onChange={() => {
                                                show3();
                                              }}
                                            />
                                          </div>
                                          <label htmlFor="c">
                                            {intl.formatMessage({
                                              id: "ProjectManagementOffice",
                                            })}{" "}
                                          </label>
                                        </li>
                                      </ul>
                                    )} */}
                                  </li>
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}{" "}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="I2"
                                      />
                                    </div>
                                    <label htmlFor="I2">
                                      {intl.formatMessage({
                                        id: "BusinessDevelopment",
                                      })}
                                    </label>{" "}
                                  </li>
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}{" "}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="I3"
                                      />
                                    </div>
                                    <label htmlFor="I3">
                                      {intl.formatMessage({
                                        id: "InstitutionalExcellence",
                                      })}
                                    </label>{" "}
                                  </li>
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="I4"
                                      />
                                    </div>
                                    <label htmlFor="I4">
                                      {intl.formatMessage({
                                        id: "CorporateAndInternationalCooperation",
                                      })}{" "}
                                    </label>
                                  </li>
                                  <li className="branch d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="I5"
                                      />
                                    </div>
                                    <label htmlFor="I5">
                                      {intl.formatMessage({
                                        id: "ResearchAndStudies",
                                      })}{" "}
                                    </label>
                                  </li>
                                </ul>
                              </li>
                            )}
                          </ul>
                        </div>
                        <div className="tree_main mb-5">
                          <ul id="tree1" className="tree list-unstyled">
                            <p
                              className="d-flex align-items-center"
                              onClick={() => {
                                setShowHierarchy4((prevState) => {
                                  return !prevState;
                                });
                              }}
                            >
                              {" "}
                              {showHierarchy4 ? (
                                <i className="fa-solid fa-chevron-down fs-3 text-danger"></i>
                              ) : getCurrentSystemLanguage() == "ar" ? (
                                <i className="fa-solid fa-chevron-left text-black fs-3"></i>
                              ) : (
                                <i className="fa-solid fa-chevron-right text-black fs-3"></i>
                              )}
                              <i className="bi bi-diagram-3-fill mx-3 fs-1 text-black"></i>{" "}
                              <span
                                className="basic-item fw-bolder"
                                role="button"
                              >
                                {intl.formatMessage({
                                  id: "SharedServices",
                                })}{" "}
                              </span>
                            </p>
                            {showHierarchy4 && (
                              <li className="basic-branch branch">
                                <ul className="list-unstyled">
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="I"
                                      />
                                    </div>
                                    <label htmlFor="I">
                                      {intl.formatMessage({
                                        id: "DocumentsAndArchivesCenter",
                                      })}{" "}
                                    </label>
                                  </li>
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}{" "}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="II"
                                      />
                                    </div>
                                    <label htmlFor="II">
                                      {intl.formatMessage({
                                        id: "HumanCapital",
                                      })}
                                    </label>{" "}
                                  </li>
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}{" "}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="III"
                                      />
                                    </div>
                                    <label htmlFor="III">
                                      {intl.formatMessage({
                                        id: "FinancialAffairs",
                                      })}
                                    </label>{" "}
                                  </li>
                                  <li className="branch mb-3 align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="IIII"
                                      />
                                    </div>
                                    <label htmlFor="IIII">
                                      {intl.formatMessage({
                                        id: "AdministrativeAffairs",
                                      })}{" "}
                                    </label>
                                  </li>
                                  <li className="branch mb-3 d-flex align-items-center">
                                    {getCurrentSystemLanguage() == "ar" ? (
                                      <i className="fa-solid fa-chevron-left text-primary fs-4"></i>
                                    ) : (
                                      <i className="fa-solid fa-chevron-right text-primary fs-4"></i>
                                    )}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="IIIII"
                                      />
                                    </div>
                                    <label htmlFor="IIIII">
                                      {intl.formatMessage({
                                        id: "ProcurementAndContracts",
                                      })}{" "}
                                    </label>
                                  </li>
                                </ul>
                              </li>
                            )}
                          </ul>
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
      <div className="modal fade" id="Rega_modal_Delete" aria-hidden="true">
        <DeletePopup
          handleCloseDelete={() => setModalDShow(false)}
          showDelete={modalDShow}
        />
      </div>
    </Fragment>
  );
};

export default HierarchyPopup;
