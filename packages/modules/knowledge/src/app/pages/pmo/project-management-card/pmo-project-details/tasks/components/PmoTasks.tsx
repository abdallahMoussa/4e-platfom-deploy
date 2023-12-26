import React, { Fragment, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { useReducer } from "react";
import { useIntl } from "react-intl";
import { RiFilter2Fill } from "react-icons/ri";
import { Actions } from "./Actions";
import { SystemPagination } from "../../../../../partials/SystemPagination";
import FilterPopup from "../popup/FilterPopup";
import { getCurrentSystemLanguage } from "../../../../../../partials/functions/language";
import { ExportDropDown } from "../../../../../partials/ExportDropDown";

interface State {
  [key: number]: boolean;
}
type Action = { type: "toggle"; id: number };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "toggle":
      return { ...state, [action.id]: !state[action.id] };
    default:
      throw new Error();
  }
}

const initialState = {};
function PmoTasks() {
  const [modalFShow, setModalFShow] = useState<boolean>(false);

  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  let [projectTasksData, setProjectTasksData] = useState([
    {
      id: "1",
      duration: "50 يوم",
      taskName: "اسم المهمه",
      startDate: "25 Jun 2022",
      endDate: "14 Dec 2023",
      completionRate: "100%",
      cost: "50,000ر.س",
    },
    {
      id: "1.1",
      duration: "10 يوم",
      taskName: "الاسم الفرعي",
      startDate: "25 Jun 2022",
      endDate: "14 Dec 2023",
      completionRate: "70%",
      cost: "50,000ر.س",
    },
    {
      id: "2",
      duration: "50 يوم",
      taskName: "اسم المهمه",
      startDate: "25 Jun 2022",
      endDate: "14 Dec 2023",
      completionRate: "80%",
      cost: "50,000ر.س",
    },
    {
      id: "2.1",
      duration: "10 يوم",
      taskName: "الاسم الفرعي",
      startDate: "25 Jun 2022",
      endDate: "14 Dec 2023",
      completionRate: "70%",
      cost: "50,000ر.س",
    },
    {
      id: "2.1",
      duration: "10 يوم",
      taskName: "الاسم الفرعي",
      startDate: "25 Jun 2022",
      endDate: "14 Dec 2023",
      completionRate: "70%",
      cost: "50,000ر.س",
    },
    {
      id: "3",
      duration: "50 يوم",
      taskName: "اسم المهمه",
      startDate: "25 Jun 2022",
      endDate: "14 Dec 2023",
      completionRate: "50%",
      cost: "50,000ر.س",
    },
    {
      id: "3.1",
      duration: "50 يوم",
      taskName: "اسم المهمه",
      startDate: "25 Jun 2022",
      endDate: "14 Dec 2023",
      completionRate: "50%",
      cost: "50,000ر.س",
    },
  ]);
  let [staffTasksData, setstaffTasksData] = useState([
    {
      id: "1",
      duration: "50 يوم",
      info: "",
      task: "التفتيش علي العقارات",
      Date: "14 Dec 2023",
      completionRate: "100%",
      cost: "50,000ر.س",
    },
  ]);
  const intl = useIntl();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggle = (id: number) => {
    dispatch({ type: "toggle", id });
  };
  return (
    <Fragment>
      <div className="detailsCard my-5">
        <div className="card card-xl-stretch mb-xl-8">
          <div className="card-header border-0 pt-5 pb-2 mb-2">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bold fs-4 mb-1 projectTitleColor">
                {intl.formatMessage({ id: "Tasks" })}
              </span>
              <span className="mt-1 fw-semibold fs-6 projectMutedColor text-muted">
                {intl.formatMessage({ id: "TasksTable" })}
              </span>
            </h3>
            <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
              <div className="me-4">
                <div
                  className="btn w-100 btn-custom text-white btn-flex fw-bolder "
                  style={{ backgroundColor: "#A1A5B7" }}
                >
                  <BsCloudArrowUpFill size={17} className="me-3 text-white" />{" "}
                  {intl.formatMessage({ id: "InsertPlan" })}
                </div>
              </div>

              <div className="me-4">
                <div
                  className="btn w-100 btn-custom text-white btn-flex   fw-bolder"
                  // data-bs-toggle="modal"
                  style={{ backgroundColor: "#A1A5B7" }}
                  // data-bs-target="#Rega_modal_filter"
                  onClick={(event) => {
                    event.preventDefault();
                    setModalFShow(true);
                  }}
                >
                  <RiFilter2Fill size={17} className="me-3 text-white" />{" "}
                  {intl.formatMessage({ id: "Filtering" })}
                </div>
              </div>
              <Link
                to="/pmo-project-add-task"
                className="btn btn-bg-primary btn-active-color-white text-white"
              >
                {intl.formatMessage({ id: "AddNewTask" })}
              </Link>
            </div>
          </div>
          <div className="card-body py-3">
            <div className="mb-8 mt-3 pe-5 d-flex w-100 justify-content-between">
              <div className="d-flex">
                <button
                  className={`btn rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-4 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                    searchParams.get("tabName") == "project" ||
                    location.search == ""
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    searchParams.set("tabName", "project");
                    setSearchParams(searchParams);
                  }}
                >
                  {" "}
                  {intl.formatMessage({ id: "ProjectTasks" })}
                </button>
                <button
                  className={` btn rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-4 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                    searchParams.get("tabName") == "staff" ? " active" : ""
                  }`}
                  onClick={() => {
                    searchParams.set("tabName", "staff");
                    setSearchParams(searchParams);
                  }}
                >
                  {" "}
                  {intl.formatMessage({ id: "StaffTasks" })}
                </button>
              </div>
              <div className="d-flex ">
                <div className=" d-inline-block  me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="Checkboxes1"
                  />
                </div>
                <label htmlFor="Checkboxes1">BaseLine</label>
              </div>
            </div>

            {searchParams.get("tabName") == "project" ||
            location.search == "" ? (
              <div
                className={`tab-pane fade  ${
                  searchParams.get("tabName") == "project" ||
                  location.search == ""
                    ? "show"
                    : ""
                }`}
                id="kt_tab_project_tasks"
              >
                <div className="table-responsive mb-3">
                  <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                    <thead>
                      <tr className="fw-bolder projectSecColor">
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted"></th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          ID
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "Duration" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "TaskName" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "StartDate" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "EndDate" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "CompletionRate" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "Cost" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "Options" })}{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="align-middle">
                        <td>
                          <div onClick={() => handleToggle(0)} role="button">
                            {state[0] ? (
                              <IoIosArrowDown
                                size={22}
                                className="text-muted"
                              />
                            ) : getCurrentSystemLanguage() == "ar" ? (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                              />
                            ) : (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                                style={{ transform: "scale(-1)" }}
                              />
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="fw-bold fs-5">1</div>
                        </td>
                        <td>
                          <div>50 يوم</div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="bullet bullet-vertical h-35px bg-primary ms-3 me-0"></div>
                            <div className="text-primary fw-bold">
                              اسم المهمه
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fs-6 projectTitleColor">
                            25 Jun 2022
                          </div>
                        </td>
                        <td className="">
                          <div className="fs-6 projectTitleColor">
                            14 Dec 2023
                          </div>
                        </td>
                        <td className=" fw-bold text-success">100%</td>
                        <td className="fw-bolder">50,000ر.س</td>
                        <td className="p-1 border-0">
                          <Actions id={1} />
                        </td>
                      </tr>

                      <tr className="align-middle">
                        <td>
                          <div onClick={() => handleToggle(1)} role="button">
                            {state[1] ? (
                              <IoIosArrowDown
                                size={22}
                                className="text-muted"
                              />
                            ) : getCurrentSystemLanguage() == "ar" ? (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                              />
                            ) : (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                                style={{ transform: "scale(-1)" }}
                              />
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="fw-bold fs-5">2</div>
                        </td>
                        <td>
                          <div>{intl.formatMessage({ id: "50Day" })}</div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="bullet bullet-vertical h-35px bg-primary ms-3 me-0"></div>
                            <div className="text-primary fw-bold">
                              اسم المهمه{" "}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fs-6 projectTitleColor">
                            25 Jun 2022
                          </div>
                        </td>
                        <td className="">
                          <div className="fs-6 projectTitleColor">
                            14 Dec 2023
                          </div>
                        </td>
                        <td className="text-warning fw-bold">80%</td>
                        <td className="fw-bolder">50,000ر.س</td>
                        <td className="p-1 border-0">
                          <Actions id={1} />
                        </td>
                      </tr>
                      {/* {state[1] ? (
                    <>
                      <tr className="align-middle">
                        <td></td>
                        <td>
                          <div className="fw-bold fs-5">2.1</div>
                        </td>
                        <td>
                          <div>10 يوم</div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="projectSecColor fw-bold me-3">
                              الاسم الفرعى
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fs-6 projectTitleColor">
                            25 Jun 2022
                          </div>
                        </td>
                        <td className="">
                          <div className="fs-6 projectTitleColor">
                            14 Dec 2023
                          </div>
                        </td>
                        <td className="text-warning fw-bold">70%</td>
                        <td className="fw-bolder">50,000ر.س</td>
                        <td className="p-1 border-0">
                          <Actions id={2} />
                        </td>
                      </tr>
                      <tr className="align-middle">
                        <td></td>
                        <td>
                          <div className="fw-bold fs-5">2.2</div>
                        </td>
                        <td>
                          <div>20 يوم</div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="projectSecColor fw-bold me-3">
                              الاسم الفرعى
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fs-6 projectTitleColor">
                            25 Jun 2022
                          </div>
                        </td>
                        <td className="">
                          <div className="fs-6 projectTitleColor">
                            14 Dec 2023
                          </div>
                        </td>
                        <td className="text-danger fw-bold">50%</td>
                        <td className="fw-bolder">50,000ر.س</td>
                        <td className="p-1 border-0">
                          <Actions id={2} />
                        </td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )} */}

                      <tr className="align-middle">
                        <td>
                          <div onClick={() => handleToggle(2)} role="button">
                            {state[2] ? (
                              <IoIosArrowDown
                                size={22}
                                className="text-muted"
                              />
                            ) : getCurrentSystemLanguage() == "ar" ? (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                              />
                            ) : (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                                style={{ transform: "scale(-1)" }}
                              />
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="fw-bold fs-5">3</div>
                        </td>
                        <td>
                          <div>50 يوم</div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="bullet bullet-vertical h-35px bg-primary ms-3 me-0"></div>
                            <div className="text-primary fw-bold">
                              اسم المهمه{" "}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fs-6 projectTitleColor">
                            25 Jun 2022
                          </div>
                        </td>
                        <td className="">
                          <div className="fs-6 projectTitleColor">
                            14 Dec 2023
                          </div>
                        </td>
                        <td className="text-danger fw-bold">50%</td>
                        <td className="fw-bolder">50,000ر.س</td>
                        <td className="p-1 border-0">
                          <Actions id={2} />
                        </td>
                      </tr>
                      {state[2] ? (
                        <>
                          <tr className="align-middle">
                            <td></td>
                            <td>
                              <div className="fw-bold fs-5">4</div>
                            </td>
                            <td>
                              <div>50 يوم</div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <div className="projectSecColor fw-bold me-3 text-muted">
                                  الاسم الفرعي{" "}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="fs-6 projectTitleColor">
                                25 Jun 2022
                              </div>
                            </td>
                            <td className="">
                              <div className="fs-6 projectTitleColor">
                                14 Dec 2023
                              </div>
                            </td>
                            <td className="text-danger fw-bold">50%</td>
                            <td className="fw-bolder">50,000ر.س</td>
                            <td className="p-1 border-0">
                              <span
                                role="button"
                                className="d-flex mx-auto py-2 w-35px h-35px justify-content-center align-items-center projectSecColor dangerTrash"
                              >
                                <Actions id={3} />
                              </span>
                            </td>
                          </tr>
                          <tr className="align-middle">
                            <td></td>
                            <td>
                              <div className="fw-bold fs-5">5</div>
                            </td>
                            <td>
                              <div>50 يوم</div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <div className="projectSecColor fw-bold me-3 text-muted">
                                  الاسم الفرعي{" "}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="fs-6 projectTitleColor">
                                25 Jun 2022
                              </div>
                            </td>
                            <td className="">
                              <div className="fs-6 projectTitleColor">
                                14 Dec 2023
                              </div>
                            </td>
                            <td className="text-danger fw-bold">50%</td>
                            <td className="fw-bolder">50,000ر.س</td>
                            <td className="p-1 border-0">
                              <span
                                role="button"
                                className="d-flex mx-auto py-2 w-35px h-35px justify-content-center align-items-center projectSecColor dangerTrash"
                              >
                                <Actions id={3} />
                              </span>
                            </td>
                          </tr>
                        </>
                      ) : (
                        <></>
                      )}
                      <tr className="align-middle">
                        <td>
                          <div onClick={() => handleToggle(3)} role="button">
                            {state[3] ? (
                              <IoIosArrowDown
                                size={22}
                                className="text-muted"
                              />
                            ) : getCurrentSystemLanguage() == "ar" ? (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                              />
                            ) : (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                                style={{ transform: "scale(-1)" }}
                              />
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="fw-bold fs-5">6</div>
                        </td>
                        <td>
                          <div>50 يوم</div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="bullet bullet-vertical h-35px bg-primary ms-3 me-0"></div>
                            <div className="text-primary fw-bold">
                              اسم المهمه{" "}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fs-6 projectTitleColor">
                            25 Jun 2022
                          </div>
                        </td>
                        <td className="">
                          <div className="fs-6 projectTitleColor">
                            14 Dec 2023
                          </div>
                        </td>
                        <td className="text-danger fw-bold">50%</td>
                        <td className="fw-bolder">50,000ر.س</td>
                        <td className="p-1 border-0">
                          <Actions id={2} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                  <Link to="#" className="text-decoration-underline p-3">
                    {intl.formatMessage({ id: "ViewAllData" })}
                  </Link>
                  <ExportDropDown />
                </div>

                <SystemPagination />
              </div>
            ) : searchParams.get("tabName") == "staff" ? (
              <div
                className={`tab-pane fade  ${
                  searchParams.get("tabName") == "staff" ? "show " : ""
                }`}
                id="kt_tab_staff_tasks"
              >
                <div className="table-responsive mb-3">
                  <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                    <thead>
                      <tr className="fw-bolder projectSecColor">
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted"></th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          ID
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "EmployeeInformation" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "TheTask" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "TheDate" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "Duration" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "TheStatus" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "Options" })}{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="align-middle">
                        <td>
                          <div onClick={() => handleToggle(0)} role="button">
                            {state[0] ? (
                              <IoIosArrowDown
                                size={22}
                                className="text-muted"
                              />
                            ) : getCurrentSystemLanguage() == "ar" ? (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                              />
                            ) : (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                                style={{ transform: "scale(-1)" }}
                              />
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="fw-bold fs-5">1</div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src="/media/avatars/woman.jpg"
                              className="d-block h-75 w-50px rounded-circle "
                              alt=""
                            />
                            <div>
                              <Link
                                to="/pmo-project-tasks/details/1"
                                className="text-dark-75 mb-4 font-weight-bolder text-hover-primary  font-size-lg"
                              >
                                ايمي حداد
                              </Link>
                              <span className="text-muted font-weight-bold d-block">
                                مسئول رقابة
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex  justify-content-center align-items-center position-relative">
                            <div className=" fw-bold d-flex align-items-center justify-content-center">
                              التفتيش
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fs-6 projectTitleColor">
                            14 Dec 2023
                          </div>
                        </td>
                        <td className="">
                          <div className="fs-6 projectTitleColor">3 ايام</div>
                        </td>
                        <td className=" fw-bold text-success">مكتمله</td>
                        <td className="p-1 border-0">
                          <Actions id={1} />
                        </td>
                      </tr>
                      {state[0] ? (
                        <>
                          <tr className="align-middle">
                            <td></td>
                            <td>
                              <div className="fw-bold fs-5">2</div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <img
                                  src="/media/avatars/300-3.jpg"
                                  className="d-block h-75 w-50px rounded-circle "
                                  alt=""
                                />
                                <div>
                                  <Link
                                    to="/pmo-project-tasks/details/2"
                                    className="text-dark-75 mb-4 font-weight-bolder text-hover-primary  font-size-lg"
                                  >
                                    احمد علي
                                  </Link>
                                  <span className="text-muted font-weight-bold d-block">
                                    مراقب عقار-اداره العقارات
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center position-relative">
                                <div className=" fw-bold d-flex align-items-center justify-content-center">
                                  التفتيش علي العقارات
                                </div>
                              </div>
                            </td>

                            <td className="">
                              <div className="fs-6 projectTitleColor">
                                14 Dec 2023
                              </div>
                            </td>
                            <td className="">
                              <div className="fs-6 projectTitleColor">
                                3 ايام{" "}
                              </div>
                            </td>
                            <td className="text-success fw-bold">مكتمله </td>
                            <td className="p-1 border-0">
                              <Actions id={1} />
                            </td>
                          </tr>
                        </>
                      ) : (
                        <></>
                      )}

                      <tr className="align-middle">
                        <td>
                          <div onClick={() => handleToggle(1)} role="button">
                            {state[1] ? (
                              <IoIosArrowDown
                                size={22}
                                className="text-muted"
                              />
                            ) : getCurrentSystemLanguage() == "ar" ? (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                              />
                            ) : (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                                style={{ transform: "scale(-1)" }}
                              />
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="fw-bold fs-5">3</div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src="/media/avatars/300-3.jpg"
                              className="d-block h-75 w-50px rounded-circle "
                              alt=""
                            />
                            <div>
                              <Link
                                to="/pmo-project-tasks/details/3"
                                className="text-dark-75 mb-4 font-weight-bolder text-hover-primary  font-size-lg"
                              >
                                احمد علي{" "}
                              </Link>
                              <span className="text-muted font-weight-bold d-block">
                                مراقب عقار-اداره العقارات
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center position-relative">
                            <div className=" fw-bold d-flex align-items-center justify-content-center">
                              المرور علي العقار 5
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fs-6 projectTitleColor">
                            14 Dec 2023
                          </div>
                        </td>
                        <td className="">
                          <div className="fs-6 projectTitleColor">5 ايام</div>
                        </td>
                        <td className="text-success fw-bold">مكتمله</td>
                        <td className="p-1 border-0">
                          <Actions id={1} />
                        </td>
                      </tr>
                      {/* {state[1] ? (
                        <>
                          <tr className="align-middle">
                            <td></td>
                            <td>
                              <div className="fw-bold fs-5">2.1</div>
                            </td>
                            <td>
                              <div>
                                {" "}
                                <Link to="/pmo-project-tasks/details/1">
                                  بيانات الموظف
                                </Link>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <div className="projectSecColor fw-bold me-3">
                                  الاسم الفرعى
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="fs-6 projectTitleColor">
                                25 Jun 2022
                              </div>
                            </td>
                            <td className="">
                              <div className="fs-6 projectTitleColor">
                                14 Dec 2023
                              </div>
                            </td>
                            <td className="text-warning fw-bold">70%</td>
                            <td className="fw-bolder">50,000ر.س</td>
                            <td className="p-1 border-0">
                              <Actions id={2} />
                            </td>
                          </tr>
                          <tr className="align-middle">
                            <td></td>
                            <td>
                              <div className="fw-bold fs-5">2.2</div>
                            </td>
                            <td>
                              <div>20 يوم</div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <div className="projectSecColor fw-bold me-3 text-muted">
                                  الاسم الفرعى
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="fs-6 projectTitleColor">
                                25 Jun 2022
                              </div>
                            </td>
                            <td className="">
                              <div className="fs-6 projectTitleColor">
                                14 Dec 2023
                              </div>
                            </td>
                            <td className="text-danger fw-bold">50%</td>
                            <td className="fw-bolder">50,000ر.س</td>
                            <td className="p-1 border-0">
                              <Actions id={2} />
                            </td>
                          </tr>
                        </>
                      ) : (
                        <></>
                      )} */}

                      <tr className="align-middle">
                        <td>
                          <div onClick={() => handleToggle(3)} role="button">
                            {state[3] ? (
                              <IoIosArrowDown
                                size={22}
                                className="text-muted"
                              />
                            ) : getCurrentSystemLanguage() == "ar" ? (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                              />
                            ) : (
                              <IoIosArrowBack
                                size={22}
                                className="text-muted"
                                style={{ transform: "scale(-1)" }}
                              />
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="fw-bold fs-5">4</div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src="/media/avatars/woman.jpg"
                              className="d-block h-75 w-50px rounded-circle "
                              alt=""
                            />
                            <div>
                              <Link
                                to="/pmo-project-tasks/details/3"
                                className="text-dark-75 mb-4 font-weight-bolder text-hover-primary  font-size-lg"
                              >
                                ايمي حداد
                              </Link>
                              <span className="text-muted font-weight-bold d-block">
                                مسئول رقابه
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="position-relative   d-flex justify-content-center align-items-center">
                            <div className=" fw-bold d-flex justify-content-center align-items-center">
                              المرور على الهيئة
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="fs-6 projectTitleColor">
                            14 Dec 2023
                          </div>
                        </td>
                        <td className="">
                          <div className="fs-6 projectTitleColor">7 ايام</div>
                        </td>
                        <td className="text-danger fw-bold">غير مكتمله</td>
                        <td className="p-1 border-0">
                          <Actions id={2} />
                        </td>
                      </tr>
                      {state[2] ? (
                        <>
                          <tr className="align-middle">
                            <td></td>
                            <td>
                              <div className="fw-bold fs-5">5</div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <img
                                  src="/media/avatars/woman.jpg"
                                  className="d-block h-75 w-50px rounded-circle "
                                  alt=""
                                />
                                <div>
                                  <Link
                                    to="/pmo-project-tasks/details/1"
                                    className="text-dark-75 mb-4 font-weight-bolder text-hover-primary  font-size-lg"
                                  >
                                    ايمي حداد
                                  </Link>
                                  <span className="text-muted font-weight-bold d-block">
                                    {intl.formatMessage({
                                      id: "ControlOfficerControlDepartment",
                                    })}{" "}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div> 5 ايام</div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <div className="projectSecColor fw-bold me-3 text-muted">
                                  الاسم الفرعي
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="fs-6 projectTitleColor">
                                25 Jun 2022
                              </div>
                            </td>
                            <td className="">
                              <div className="fs-6 projectTitleColor">
                                14 Dec 2023
                              </div>
                            </td>
                            <td className="text-danger fw-bold">50%</td>
                            <td className="fw-bolder">50,000ر.س</td>
                            <td className="p-1 border-0">
                              <span
                                role="button"
                                className="d-flex mx-auto py-2 w-35px h-35px justify-content-center align-items-center projectSecColor dangerTrash"
                              >
                                <Actions id={3} />
                              </span>
                            </td>
                          </tr>
                        </>
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                  <Link to="#" className="text-decoration-underline p-3">
                    {intl.formatMessage({ id: "ViewAllData" })}
                  </Link>
                  <ExportDropDown />
                </div>

                <SystemPagination />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <FilterPopup show={modalFShow} handleClose={() => setModalFShow(false)} />
    </Fragment>
  );
}

export default PmoTasks;
