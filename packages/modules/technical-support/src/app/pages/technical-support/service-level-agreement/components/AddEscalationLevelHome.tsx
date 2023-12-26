import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../partials/SystemPagination";
import { EscalationLevelActions } from "./EscalationLevelActions";
import AddEscalationLevelPopup from "../popups/AddEscalationLevelPopup";
import { useNavigate } from "react-router";

function AddEscalationLevelHome() {
  let intl = useIntl();
  const [modalShow, setModalShow] = useState<boolean>(false);
  let navigate = useNavigate();
  let [tableData, setTableDate] = useState([
    {
      id: 1,
      level: "المستوي الاول",
      name: "محمد ابراهيم عمر",
      job: "مدير اداره",
      period: "30 دقيقه 1 ساعه 20 يوم",
    },
    {
      id: 2,
      level: "المستوي الاول",
      name: "محمد ابراهيم عمر",
      job: "مدير اداره",
      period: "30 دقيقه 1 ساعه 20 يوم",
    },
    {
      id: 3,
      level: "المستوي الاول",
      name: "محمد ابراهيم عمر",
      job: "مدير اداره",
      period: "30 دقيقه 1 ساعه 20 يوم",
    },
  ]);

  return (
    <Fragment>
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
                <div className="card-header px-1 pb-2 mb-5 mt-5 px-2 px-3 d-flex align-items-center justify-content-between">
                  <p className="card-title align-items-start flex-column px-5 pb-5">
                    <span className="card-label fw-bolder fs-3 mb-2 ">
                      <bdi>
                        {intl.formatMessage({
                          id: "AddEsclationLevel",
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
                  <button
                    className="btn btn-success h-50 px-5 mx-5"
                    style={{ width: "200px" }}
                    onClick={() => setModalShow(true)}
                  >
                    {intl.formatMessage({
                      id: "AddNewLevel",
                    })}
                  </button>
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="card-body">
                  <div className="w-250px d-flex align-items-center justify-content-between">
                    <div className="w-100px">
                      <div className="form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md d-flex align-items-center">
                        <input
                          className="form-check-input widget-9-check xCheckBg mx-2"
                          type="checkbox"
                          name="escalation"
                          id="escalation"
                        />
                        <label
                          className="form-label px-2  fs-6 text-gray-700 m-0"
                          htmlFor="escalation"
                        >
                          {intl.formatMessage({
                            id: "Escalation",
                          })}
                        </label>
                      </div>
                    </div>
                    <div className="w-100px">
                      <div className="form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md d-flex align-items-center">
                        <input
                          className="form-check-input widget-9-check xCheckBg mx-2"
                          type="checkbox"
                          name="remainder"
                          id="remainder"
                        />
                        <label
                          className="form-label px-2  fs-6 text-gray-700 m-0"
                          htmlFor="remainder"
                        >
                          {intl.formatMessage({
                            id: "Reminder",
                          })}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive mt-8">
                    <table
                      className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
                      id="REGA-WS-caseList"
                    >
                      <thead>
                        <tr className="fw-bolder text-muted">
                          <th className="ps-4 min-w-150px text-center">
                            {intl.formatMessage({ id: "Index" })}
                          </th>
                          <th className="min-w-150px text-center">
                            {intl.formatMessage({ id: "Level" })}
                          </th>
                          <th className="min-w-150px text-center">
                            {intl.formatMessage({ id: "Responsible" })}
                          </th>
                          <th className="min-w-150px text-center">
                            {intl.formatMessage({ id: "Duration" })}
                          </th>
                          <th className="min-w-150px text-center">
                            {intl.formatMessage({ id: "Procedures" })}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData?.map((item) => {
                          let { id, job, level, name, period } = item;
                          return (
                            <Fragment>
                              <tr>
                                <td className="text-center border-end border-bottom fw-bolder text-dark">
                                  {id}
                                </td>
                                <td className="text-center border-end border-bottom fw-bolder text-dark">
                                  {level}
                                </td>
                                <td className="text-center border-end border-bottom fw-bolder text-dark">
                                  <p>{name}</p>
                                  <p>{job}</p>
                                </td>
                                <td className="text-center border-end border-bottom fw-bolder text-dark">
                                  {period}
                                </td>
                                <td className="text-center border-end border-bottom fw-bolder text-dark">
                                  <EscalationLevelActions id={+id} />
                                </td>
                              </tr>
                            </Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <SystemPagination />
                  <br />
                  <div className="mt-8 mb-5 col-12 col-lg-7 mx-auto">
                    <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                      <div className="d-flex justify-content-center align-items-center w-50">
                        <button
                          type="submit"
                          className="btn btn-primary mx-1 text-center w-75"
                          onClick={() => {
                            navigate("/addNewTechnicalAgreement");
                            localStorage.setItem("levelAdded", "added");
                          }}
                        >
                          {intl.formatMessage({ id: "SaveAndAddEscalation" })}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AddEscalationLevelPopup
        handleClose={() => {
          setModalShow(false);
        }}
        show={modalShow}
      />
    </Fragment>
  );
}

export default AddEscalationLevelHome;
