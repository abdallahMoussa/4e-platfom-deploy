import React, { Fragment, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { Actions } from "../components/Actions";
import { HierararchyActions } from "../components/HierararchyActions";
import { DeletePopup } from "../../../partials/DeletePopup";
import { KTSVG } from "../../../../helpers";
import { getCurrentSystemLanguage } from "../../../../partials/functions/language";
import { EmployeeHierarchyPopup } from "../../../partials/EmployeeHierarchyPopup";
import { Modal } from "react-bootstrap";

interface Iprop {
  cancelFunc: any;
  show?: any;
  handleClose?: any;
}
const HierarchyPopup: React.FC<Iprop> = ({ cancelFunc, show, handleClose }) => {
  let [tableData, setTableData] = useState([
    {
      id: 1,
      name: "احمد مجمد عبدالله خالد",
      jobPosition: "مدير اداره",
      img: "/media/avatars/300-3.jpg",
      level: "المستوي الاول",
    },
    {
      id: 2,
      name: "احمد مجمد عبدالله خالد",
      jobPosition: "مدير الدعم الفني",
      img: "/media/avatars/300-3.jpg",
      level: "المستوي الثاني",
    },
    {
      id: 3,
      name: "احمد مجمد عبدالله خالد",
      jobPosition: "عضو الدعم الفني",
      img: "/media/avatars/300-3.jpg",
      level: "المستوي الثالث",
    },
  ]);
  const intl = useIntl();

  const [modalHShow, setModalHShow] = useState<boolean>(false);

  let navigate = useNavigate();
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
        // id="Rega_modal_Hierarchy"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <Modal
          centered
          show={show}
          onHide={handleClose}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <div className="card mx-12">
            <Modal.Header
              className="border-bottom-0"
              closeButton
              style={{
                alignItems: intl.locale == "ar" ? "flex-start" : "center",
                flexDirection: intl.locale == "en" ? "column-reverse" : "row",
              }}
            >
              <div className="card-header mt-10 d-flex justify-content-center w-100 px-4 border-bottom-0">
                <Modal.Title></Modal.Title>
              </div>
            </Modal.Header>

            <div className="mb-9 text-center">
              <h1 className="mb-3">
                {" "}
                {intl.formatMessage({ id: "OrganizationalChart" })}
              </h1>
              <h6 className="mb-2 text-muted">
                {intl.formatMessage({
                  id: "YouCanSeeTheDepartmentsAndDivisionsOfTheAuthority",
                })}{" "}
              </h6>
            </div>
            <hr />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="w-150px d-flex justify-content-center align-items-center">
                <select
                  className="form-select form-select-lg mb-3 form-select-solid"
                  aria-label=".form-select-lg example"
                >
                  <option selected> نوع الكيان</option>
                  <option value="1">اداره </option>
                  <option value="2">لجنه</option>
                  <option value="3">موظف</option>
                </select>
              </div>
            </div>
            <br />
            <div className="d-flex flex-column">
              <form
                className="d-flex"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="row h-100 w-100">
                  <div className="col-md-5">
                    <div
                      className={`h-100 border  ${
                        getCurrentSystemLanguage() == "ar"
                          ? "border-start-1 border-end-0"
                          : "border-end-1 border-start-0"
                      }  border-bottom-0  border-top-0 border-secondary`}
                    >
                      <div className="tree_main mb-5">
                        <ul id="tree1" className="tree list-unstyled">
                          <p
                            className="bg-light fs-5 py-4 mb-7"
                            onClick={() => {
                              setShowHierarchy1((prevState) => {
                                return !prevState;
                              });
                            }}
                          >
                            {" "}
                            <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                            <a className="basic-item" href="#" role="button">
                              {intl.formatMessage({
                                id: "RealEstateOperations",
                              })}{" "}
                            </a>
                          </p>
                          {showHierarchy1 && (
                            <li className="basic-branch branch">
                              <ul className="list-unstyled">
                                <li className="branch mb-3">
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
                                <li className="branch">
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
                            className="bg-light fs-5 py-4 mb-7"
                            onClick={() => {
                              setShowHierarchy2((prevState) => {
                                return !prevState;
                              });
                            }}
                          >
                            {" "}
                            <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                            <a className="basic-item" href="#" role="button">
                              {intl.formatMessage({
                                id: "OrganizingAndRecordingInKind",
                              })}{" "}
                            </a>
                          </p>
                          {showHierarchy2 && (
                            <li className="basic-branch branch">
                              <ul className="list-unstyled">
                                <li className="branch mb-3">
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
                                <li className="branch mb-3">
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
                                <li className="branch mb-3">
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
                            className="bg-light fs-5 py-4 mb-7"
                            onClick={() => {
                              setShowHierarchy3((prevState) => {
                                return !prevState;
                              });
                            }}
                          >
                            {" "}
                            <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                            <a className="basic-item" href="#" role="button">
                              {intl.formatMessage({
                                id: "StrategyAndBusinessDevelopment",
                              })}{" "}
                            </a>
                          </p>
                          {showHierarchy3 && (
                            <li className="basic-branch branch">
                              <ul className="list-unstyled">
                                <li className="branch mb-3">
                                  <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                    <input
                                      className="form-check-input widget-9-check xCheckBg"
                                      type="checkbox"
                                      id="I1"
                                      onClick={() => {
                                        setShowNestedHierarchy2((prevState) => {
                                          return !prevState;
                                        });
                                      }}
                                    />
                                  </div>
                                  <label htmlFor="I1" className="mb-3">
                                    {intl.formatMessage({
                                      id: "StrategicPlanning",
                                    })}{" "}
                                  </label>
                                  {showNestedHierarchy2 && (
                                    <ul
                                      id="tree1"
                                      className="tree list-unstyled"
                                    >
                                      <li className="branch mb-3">
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
                                      <li className="branch mb-3">
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
                                      <li className="branch">
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
                                  )}
                                </li>
                                <li className="branch mb-3">
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
                                <li className="branch mb-3">
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
                                <li className="branch mb-3">
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
                                <li className="branch">
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
                            className="bg-light fs-5 py-4 mb-7"
                            onClick={() => {
                              setShowHierarchy4((prevState) => {
                                return !prevState;
                              });
                            }}
                          >
                            {" "}
                            <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                            <a className="basic-item" href="#" role="button">
                              {intl.formatMessage({
                                id: "SharedServices",
                              })}{" "}
                            </a>
                          </p>
                          {showHierarchy4 && (
                            <li className="basic-branch branch">
                              <ul className="list-unstyled">
                                <li className="branch mb-3">
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
                                <li className="branch mb-3">
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
                                <li className="branch mb-3">
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
                                <li className="branch mb-3">
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
                                <li className="branch mb-3">
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
                  <div className="col-md-7">
                    <div className="h-50 pt-0 p-4 pt-0  ">
                      <p className="fw-bolder fs-4 mb-3">
                        {intl.formatMessage({
                          id: "StrategyAndBusinessDevelopment/StrategicPlanning",
                        })}{" "}
                      </p>
                      <div className="d-flex flex-column mb-6">
                        <label
                          className="fs-6 fw-bold mb-2"
                          htmlFor="classNameification"
                        >
                          {intl.formatMessage({ id: "TeamName" })}{" "}
                        </label>

                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="special fas fa-users"></i>
                            </span>
                          </div>
                          <select
                            className="form-control form-control-solid text-muted"
                            name="target_details"
                            placeholder={intl.formatMessage({
                              id: "EnterTheTeamName",
                            })}
                            id="classNameification"
                          >
                            <option
                              value={intl.formatMessage({
                                id: "EnterTheTeamName",
                              })}
                              disabled
                              selected
                            >
                              {intl.formatMessage({
                                id: "EnterTheTeamName",
                              })}{" "}
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </div>
                      </div>

                      <p className="fw-bolder fs-4 mb-3 text-primary">
                        {intl.formatMessage({
                          id: "TechnicalSupportTeamData",
                        })}{" "}
                      </p>
                      <div className="d-flex flex-column mb-6">
                        <label className="fs-6 fw-bold mb-2" htmlFor="name">
                          {intl.formatMessage({ id: "EmployeeName" })}{" "}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-user-cog special"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "EmployeeName",
                            })}
                          />
                          <div className="h-110 d-flex" role="button">
                            <span
                              className="input-group-text"
                              // data-bs-target="#Rega_modal_viewEmployee_hierarchy"
                              // data-bs-toggle="modal"
                              onClick={() => {
                                handleClose();
                                setModalHShow(true);
                              }}
                            >
                              <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-column mb-6">
                        <label className="fs-6 fw-bold mb-2" htmlFor="level">
                          {intl.formatMessage({ id: "EscalationLevel" })}{" "}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="special fas fa-layer-group"></i>
                            </span>
                          </div>
                          <select
                            className="form-control form-control-solid text-muted"
                            name="target_details"
                            placeholder={intl.formatMessage({
                              id: "EscalationLevel",
                            })}
                            id="level"
                          >
                            <option
                              value={intl.formatMessage({
                                id: "EscalationLevel",
                              })}
                              disabled
                              selected
                            >
                              {intl.formatMessage({
                                id: "EscalationLevel",
                              })}{" "}
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </div>
                      </div>

                      <div className="table-responsive">
                        <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                          <thead>
                            <tr className="fw-bolder text-muted">
                              <th className="min-w-100px text-center">ID</th>
                              <th className="min-w-150px text-center">
                                {intl.formatMessage({ id: "EmployeesData" })}{" "}
                              </th>
                              <th className="min-w-100px text-center">
                                {intl.formatMessage({
                                  id: "EscalationLevel",
                                })}{" "}
                              </th>
                              <th className="min-w-100px text-center">
                                {intl.formatMessage({ id: "Options" })}{" "}
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {tableData?.map((item) => {
                              let { name, id, img, level, jobPosition } = item;
                              return (
                                <Fragment key={Math.random()}>
                                  <tr>
                                    <td className="text-center"> {id}</td>
                                    <td className="text-center">
                                      <div className="d-flex align-items-center">
                                        <div className=" ms-1 symbol symbol-50 symbol-light mr-4">
                                          <span className="symbol-label">
                                            <img
                                              src={img}
                                              className="h-75 align-self-end rounded-circle "
                                              alt=""
                                            />
                                          </span>
                                        </div>
                                        <div>
                                          <span className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                                            {name}
                                          </span>
                                          <span className="text-muted font-weight-bold d-block">
                                            {jobPosition}
                                          </span>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="text-center">{level}</td>
                                    <td className="text-center">
                                      <HierararchyActions
                                        id={id}
                                        cancelFunc={() => {
                                          cancelFunc();
                                        }}
                                      />
                                    </td>
                                  </tr>
                                </Fragment>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* </div> */}
          </div>
        </Modal>
      </div>

      <div className="modal fade" aria-hidden="true">
        <EmployeeHierarchyPopup
          show={modalHShow}
          handleClose={() => setModalHShow(false)}
        />
      </div>
    </Fragment>
  );
};

export default HierarchyPopup;
