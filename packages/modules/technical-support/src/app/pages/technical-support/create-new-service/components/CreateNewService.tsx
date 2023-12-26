import { FC, Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { OrgActions } from "./org-actions";
import { AddPopup } from "../../../partials/AddPopup";
import { TableActions } from "./TableActions";
import { DeletePopup } from "../../../../../app/pages/partials/DeletePopup";
import AddClausePopup from "../popup/AddClause";
import { getCurrentSystemLanguage } from "../../../../../app/partials/functions/language";
import { SystemPagination } from "../../../../../app/pages/partials/SystemPagination";
import { useNavigate } from "react-router";
import { EmployeeHierarchyPopup } from "../../../../../app/pages/partials/EmployeeHierarchyPopup";
import AddItemPopup from "../popup/AddItemPopup";
import AddBasicClassificationPopup from "../popup/AddBasicClassificationPopup";
import { MainClassificationActions } from "./main-classification-actions";
import { SubClassification1Actions } from "./sub-classification1-actions";
import { SubClassification2Actions } from "./sub-classification2-actions";
import { SubClassification3Actions } from "./sub-classification3-actions";

const CreateNewService: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalHShow, setModalHShow] = useState<boolean>(false);

  const [AddBasicClassificationShow, setAddBasicClassificationShow] = useState<boolean>(false);

  // const [AddBasicClassificationShow, setAddBasicClassificationShow] = useState<boolean>(false);
  const intl = useIntl();
  let navigate = useNavigate();
  let [showHierarichalModal, setShowHierarichalModal] =
    useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (changeEvent: any) => {
    setSelectedOption(changeEvent);
  };

  let [tableData, setTableData] = useState([
    {
      id: 1,
      name: "احمد مجمد عبدالله خالد",
      jobPosition: "مدير اداره",
      img: "/media/avatars/300-3.jpg",
      power: "مدير اداره",
    },
    {
      id: 2,
      name: "احمد مجمد عبدالله خالد",
      jobPosition: "مدير الدعم الفني",
      img: "/media/avatars/300-3.jpg",
      power: "مدير الدعم الفني",
    },
    {
      id: 3,
      name: "احمد مجمد عبدالله خالد",
      jobPosition: "عضو الدعم الفني",
      img: "/media/avatars/300-3.jpg",
      power: "عضو الدعم الفني",
    },
  ]);

  let [showHierarchy1, setShowHierarchy1] = useState<boolean>(false);
  let [showHierarchy2, setShowHierarchy2] = useState<boolean>(false);
  let [showHierarchy3, setShowHierarchy3] = useState<boolean>(false);
  let [showHierarchy4, setShowHierarchy4] = useState<boolean>(false);

  return (
    <>
      <div className="card card-xl-stretch mb-xl-0">
        <div className="card-header px-3 pt-3 pb-2 mb-3  d-flex justify-content-between">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fs-4 my-5 ">
              {" "}
              {intl.formatMessage({ id: "CreateNewService" })}{" "}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted my-5">
              {intl.formatMessage({ id: "PleaseEnterTheFollowingData" })}{" "}
            </span>
          </h3>
        </div>
        <div className="card-body py-3 px-3">
          <div className="tab-content">
            <div className="row h-100 w-100">
              <div className="col-md-6">
                <div
                  className={`h-100 border   border-bottom-0  border-top-0 border-secondary ${
                    getCurrentSystemLanguage() == "ar"
                      ? "border-end-0 border-start-1"
                      : "border-end-1 border-start-0"
                  }`}
                >
                  <div className="mx-2 mb-7 d-flex justify-content-between align-items-center ">
                    <p className="fw-bolder fs-4  text-primary px-4">
                      {intl.formatMessage({
                        id: "ServiceClassification",
                      })}{" "}
                    </p>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setAddBasicClassificationShow(true)}
                    >
                      +
                    </button>
                  </div>
 
                  <div className="tree_main mb-5 ">
                    <ul id="tree1" className="  tree tree3 list-unstyled">
                      <div
                        className="bg-light fs-5 mx-2 mb-7 d-flex justify-content-between align-items-center"
                        onClick={() => {
                          setShowHierarchy1((prevState) => {
                            return !prevState;
                          });
                        }}
                      >
                        <div>
                          {" "}
                          <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                          <a className="basic-item" role="button">
                            {intl.formatMessage({
                              id: "MainClassification",
                            })}{" "}
                          </a>
                        </div>
                        <MainClassificationActions id={1} />
                      </div>
                      {showHierarchy1 && (
                        <li className=" branch">
                          <ul className="list-unstyled ">
                            <li className="branch fs-5 mb-7  ">
                              <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3  ">
                                {intl.formatMessage({
                                  id: "ServiceCatalog",
                                })}{" "}
                                <SubClassification1Actions id={2} />
                              </label>

                              <ul>
                                <li className="branch fs-5 mb-10">
                                  <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center ">
                                    {intl.formatMessage({
                                      id: "Subcategory",
                                    })}{" "}
                                    <SubClassification2Actions id={3} />
                                  </label>

                                  <ul>
                                    <li className="branch fs-5 mb-10">
                                      <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3">
                                        {intl.formatMessage({
                                          id: "SubItem",
                                        })}{" "}
                                        <SubClassification3Actions id={4} />
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="tree_main mb-5 ">
                    <ul id="tree1" className="  tree tree3 list-unstyled">
                      <div
                        className="bg-light fs-5 mx-2 mb-7 d-flex justify-content-between align-items-center"
                        onClick={() => {
                          setShowHierarchy2((prevState) => {
                            return !prevState;
                          });
                        }}
                      >
                        <div>
                          {" "}
                          <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                          <a className="basic-item" role="button">
                            {intl.formatMessage({
                              id: "MainClassification",
                            })}{" "}
                          </a>
                        </div>
                        <MainClassificationActions id={5} />
                      </div>
                      {showHierarchy2 && (
                        <li className=" branch">
                          <ul className="list-unstyled ">
                            <li className="branch fs-5 mb-7  ">
                              <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3  ">
                                {intl.formatMessage({
                                  id: "ServiceCatalog",
                                })}{" "}
                                <SubClassification1Actions id={6} />
                              </label>

                              <ul>
                                <li className="branch fs-5 mb-10">
                                  <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center ">
                                    {intl.formatMessage({
                                      id: "Subcategory",
                                    })}{" "}
                                    <SubClassification2Actions id={7} />
                                  </label>

                                  <ul>
                                    <li className="branch fs-5 mb-10">
                                      <label className=" bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3">
                                        {intl.formatMessage({
                                          id: "SubItem",
                                        })}{" "}
                                        <SubClassification3Actions id={8} />
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="h-50 pt-0 p-4 pt-0  ">
                  <p className="fw-bolder fs-4 mb-3">
                    {intl.formatMessage({ id: "MainClassification" })} /{" "}
                    {intl.formatMessage({ id: "Category" })} /{" "}
                    {intl.formatMessage({ id: "SubCategory" })}{" "}
                  </p>

                  <div className="d-flex flex-column mb-6 mt-5">
                    <label className="fs-6 fw-bold mb-2" htmlFor="level">
                      {intl.formatMessage({ id: "ServiceType" })}{" "}
                    </label>
                    <select
                      id="domain"
                      className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                      data-kt-select2="true"
                      data-placeholder={intl.formatMessage({
                        id: "ServiceType",
                      })}
                      data-dropdown-parent="#kt_menu_62775e8642438"
                      data-allow-clear="true"
                      data-select2-id="select2-data-4-vqtd"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option>{intl.formatMessage({ id: "All" })}</option>
                      <option>
                        {intl.formatMessage({ id: "ServiceReqest" })}
                      </option>
                      <option>
                        {intl.formatMessage({ id: "ReportAService" })}
                      </option>
                    </select>
                  </div>

                  <div className="d-flex flex-column mb-6">
                    <label
                      className="fs-6 fw-bold mb-5"
                      htmlFor="classNameification"
                    >
                      {intl.formatMessage({ id: "TeamName" })}{" "}
                    </label>

                    <div className="position-relative w-100 ">
                      <input
                        type="search"
                        name="searchForProject"
                        className="input input-group searchBoxDesign search_input"
                        id="searchForProject"
                        placeholder={intl.formatMessage({
                          id: "EnterTeamName",
                        })}
                      />
                      <i className="fa-solid fa-light fa-magnifying-glass my-magnify fs-3 text-muted fa-fw position-absolute"></i>
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
                          onClick={() => setModalHShow(true)}
                        >
                          <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column mb-6">
                    <label className="fs-6 fw-bold mb-2" htmlFor="level">
                      {intl.formatMessage({ id: "Power" })}{" "}
                    </label>
                    <select
                      id="domain"
                      className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                      data-kt-select2="true"
                      data-placeholder={intl.formatMessage({ id: "Power" })}
                      data-dropdown-parent="#kt_menu_62775e8642438"
                      data-allow-clear="true"
                      data-select2-id="select2-data-4-vqtd"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option disabled selected>
                        {intl.formatMessage({ id: "Power" })}
                      </option>
                    </select>
                  </div>
                  {/* <div className="d-flex justify-content-end w-100 mb-5">
                    <div className="btn btn-success btn-shadow-hover font-weight-bold mr-2 ">
                      <i className="bi bi-plus-lg fs-3"></i>
                      <span className="mx-1">
                        {intl.formatMessage({ id: "AddNewEmployee" })}
                      </span>
                    </div>
                  </div> */}
                  <div className="table-responsive mt-3 mb-5">
                    <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                      <thead>
                        <tr className="fw-bolder text-muted">
                          <th className="min-w-100px text-center">ID</th>
                          <th className="min-w-150px text-center">
                            {intl.formatMessage({ id: "EmployeesData" })}{" "}
                          </th>
                          <th className="min-w-100px text-center">
                            {intl.formatMessage({
                              id: "Power",
                            })}{" "}
                          </th>
                          <th className="min-w-100px text-center">
                            {intl.formatMessage({ id: "Options" })}{" "}
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {tableData?.map((item) => {
                          let { name, id, img, jobPosition, power } = item;
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
                                <td className="text-center">{power}</td>
                                <td className="text-center">
                                  <TableActions id={id} />
                                </td>
                              </tr>
                            </Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                    <SystemPagination />
                  </div>
                  <br />
                  <p className="fw-bolder fs-4 my-5 text-primary ">
                    {intl.formatMessage({
                      id: "RequesterData",
                    })}{" "}
                  </p>

                  {/* //radio buttons */}

                  <div className="col-12">
                    <div className="d-flex p-3 filed_background mb-3">
                      <div className="form-check form-check-success form-check-sm form-check-custom mx-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          checked={selectedOption === "option1"}
                          name="options"
                          value="option1"
                          id="option1"
                          onChange={(e) => handleOptionChange(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="option1">
                          {intl.formatMessage({ id: "All" })}
                        </label>
                      </div>
                      <div className="form-check form-check-success form-check-sm form-check-custom">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="options"
                          checked={selectedOption === "option2"}
                          value="option2"
                          id="option2"
                          onChange={(e) => handleOptionChange(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="option2">
                          {intl.formatMessage({ id: "Specify" })}
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <div className="d-flex justify-content-end w-100 mb-5">
                    <div
                      data-bs-target="#rega_modal_add_clause"
                      data-bs-toggle="modal"
                      className="btn btn-success btn-shadow-hover font-weight-bold mr-2 "
                    >
                      <i className="bi bi-plus-lg fs-3"></i>
                      <span className="mx-1">
                        {intl.formatMessage({ id: "Add" })}
                      </span>
                    </div>
                  </div> */}
                  {selectedOption === "option2" && (
                    <>
                      <div className="d-flex flex-column mb-6">
                        <label className="fs-6 fw-bold mb-3" htmlFor="name">
                          {intl.formatMessage({
                            id: "AdminstrationOrEmployeeName",
                          })}{" "}
                        </label>

                        <div className="input-group">
                          <input
                            className="form-control form-control-solid"
                            placeholder={intl.formatMessage({
                              id: "AdminstrationOrEmployeeName",
                            })}
                          />
                          <div
                            className="input-group-prepend  h-100 d-flex"
                            role="button"
                          >
                            <span className="input-group-text">
                              <i className="bi bi-plus-lg text-muted"></i>
                            </span>
                            <span
                              className="input-group-text"
                              // data-bs-target="#Rega_modal_viewEmployee_hierarchy"
                              // data-bs-toggle="modal"
                              onClick={() => setModalHShow(true)}
                            >
                              <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive mt-3">
                        <table className="table table-rounded border  table-row-gray-200 align-middle gs-0 gy-4 text-center">
                          <thead>
                            <tr className="fw-bold bg-light">
                              <th className="min-w-100px text-center  border-end border-bottom">
                                ID
                              </th>
                              <th className="min-w-150px text-center  border-end border-bottom">
                                {intl.formatMessage({
                                  id: "AdminstrationOrEmployeeData",
                                })}{" "}
                              </th>

                              <th className="min-w-100px text-center border-end border-bottom">
                                {intl.formatMessage({ id: "Options" })}{" "}
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {tableData?.map((item) => {
                              let { name, id, img, jobPosition } = item;
                              return (
                                <Fragment key={Math.random()}>
                                  <tr>
                                    <td className="text-center border-end border-bottom ">
                                      {" "}
                                      {id}
                                    </td>
                                    <td className="text-center border-end border-bottom">
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

                                    <td className="text-center border-end border-bottom">
                                      <TableActions id={1} />
                                    </td>
                                  </tr>
                                </Fragment>
                              );
                            })}
                          </tbody>
                        </table>
                        <SystemPagination />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-7">
              <div className=" d-inline ms-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                <input
                  className="form-check-input widget-9-check xCheckBg fs-3"
                  type="checkbox"
                  id="Checkboxes1"
                />
              </div>
              <label
                htmlFor="Checkboxes1"
                className={`fw-bolder text-dark d-inline-block fs-6 ${
                  intl.locale == "en" ? "mx-3" : ""
                }`}
              >
                {intl.formatMessage({
                  id: "DoesThisServiceRequireAnApprovalRequest",
                })}{" "}
              </label>
            </div>
            <div className="col-12 col-lg-7 mx-auto my-10">
              <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center w-50">
                  <div
                    className="btn btn-secondary mx-1 text-center w-100"
                    onClick={() => {
                      navigate("/technical-support-workspace");
                    }}
                  >
                    {intl.formatMessage({ id: "Cancel" })}
                  </div>
                  <div
                    // data-bs-toggle="modal"
                    // data-bs-target="#Rega_modal_add"
                    onClick={() => setModalShow(true)}
                    className="btn btn-success mx-1 text-center w-100"
                  >
                    {intl.formatMessage({ id: "Add" })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>

      <div
        className="modal fade"
        id="Rega_modal_viewEmployee_hierarchy"
        aria-hidden="true"
      >
        <EmployeeHierarchyPopup
          show={modalHShow}
          handleClose={() => setModalHShow(false)}
        />
      </div>

      <AddClausePopup />

      <AddItemPopup />

      <AddBasicClassificationPopup   
        show={AddBasicClassificationShow}
        handleClose={() => setAddBasicClassificationShow(false)}/>
    </>
  );
};

export default CreateNewService;
