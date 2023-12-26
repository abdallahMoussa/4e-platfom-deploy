import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { AddPopup } from "../../../../../partials/AddPopup";
import TaskClassificationPopup from "../popup/TaskClassificationPopup";
import AddReliabilityPopup from "../popup/AddReliabilityPopup";
import { getCurrentSystemLanguage } from "../../../../../../partials/functions/language";

const AddTask: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const intl = useIntl();
  let navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
  };
  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);
  return (
    <>
      <div className=" my-5">
        <div className="card card-xl-stretch mb-xl-0">
          <div className="card-header px-3 pt-3 pb-2 mb-3">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fs-4 my-5 ">
                {" "}
                {intl.formatMessage({ id: "AddNewTask" })}
              </span>
              <span className="mt-1 fw-semibold fs-6 text-muted my-5">
                {intl.formatMessage({ id: "PleaseEnterTheFollowingData" })}{" "}
              </span>
            </h3>
          </div>
          <div className="card-body py-3 px-3 mx-8">
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="REGA_table_widget_5_tab_1"
              >
                <form
                  noValidate
                  className="form outputForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-2 pt-2 pb-3 ">
                        <label
                          htmlFor="taskName"
                          className="form-label px-2 fontSz-6 required"
                        >
                          {intl.formatMessage({ id: "TaskName" })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="far fa-list-alt special"></i>
                            </span>
                          </div>
                          <input
                            id="taskName"
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({ id: "TaskName" })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          htmlFor="taskDuration"
                          className="form-label px-2  fontSz-6 required"
                        >
                          {intl.formatMessage({ id: "TaskDuration" })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-stopwatch-20 special"></i>
                            </span>
                          </div>
                          <input
                            id="taskDuration"
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "TaskDuration",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          htmlFor="startDate"
                          className="form-label px-2  fontSz-6 required"
                        >
                          {intl.formatMessage({ id: "Startdate" })}
                        </label>
                        <input
                          id="startDate"
                          type="date"
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                          placeholder={intl.formatMessage({ id: "Startdate" })}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          htmlFor="endDate"
                          className="form-label px-2  fontSz-6 required"
                        >
                          {intl.formatMessage({ id: "Enddate" })}
                        </label>
                        <input
                          id="endDate"
                          type="date"
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                          placeholder={intl.formatMessage({ id: "Enddate" })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-2 pt-2 pb-3 position-relative">
                        <div
                          className=" bg-primary"
                          style={{
                            width: "4px",
                            position: "absolute",
                            [getCurrentSystemLanguage() == "ar"
                              ? "right"
                              : "left"]: "0px",
                            top: "36px",
                            height: "42px",
                          }}
                        ></div>
                        <label
                          htmlFor="taskClassification"
                          className="form-label px-2  fontSz-6 required"
                        >
                          {intl.formatMessage({ id: "TaskClassification" })}
                        </label>
                        <input
                          id="taskClassification"
                          type="text"
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                          placeholder={intl.formatMessage({
                            id: "TaskClassification",
                          })}
                        />
                        <i
                          className="bi bi-journal-plus cursor-pointer fs-2 text-muted"
                          style={{
                            position: "absolute",
                            top: "50%",
                            [getCurrentSystemLanguage() == "ar"
                              ? "left"
                              : "right"]: "15px",
                          }}
                          data-bs-target="#Rega_modal_task_classification"
                          data-bs-toggle="modal"
                        ></i>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          htmlFor="completionRate"
                          className="form-label px-2  fontSz-6 required"
                        >
                          {intl.formatMessage({ id: "CompletionRate" })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-percent special"></i>
                            </span>
                          </div>
                          <input
                            id="completionRate"
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "CompletionRate",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-2 pt-2 pb-3 pe-4">
                        <div className=" d-inline  me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                          <input
                            className="form-check-input widget-9-check xCheckBg"
                            type="checkbox"
                            id="Checkboxes1"
                          />
                        </div>
                        <label htmlFor="Checkboxes1">
                          {" "}
                          {intl.formatMessage({ id: "Milestone" })}
                        </label>
                      </div>
                      <div className="mb-5 pt-2 pb-3 pe-4">
                        <div className=" d-inline me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                          <input
                            className="form-check-input widget-9-check xCheckBg"
                            type="checkbox"
                            id="Checkboxes2"
                            name="Checkboxes2"
                            data-bs-target="#Rega_modal_add_reliability"
                            data-bs-toggle="modal"
                            // data-bs-dismiss="modal"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                        </div>
                        <label htmlFor="Checkboxes2">
                          {" "}
                          {intl.formatMessage({ id: "Reliability" })} ؟
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-2 pt-2 pb-3">
                        <label
                          htmlFor="completionRate"
                          className="form-label px-2  fontSz-6 required"
                        >
                          {intl.formatMessage({ id: "Cost" })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-wallet special"></i>
                            </span>
                          </div>
                          <input
                            id="Cost"
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({ id: "Cost" })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button
                      className="btn btn-secondary px-15 me-5"
                      onClick={() => {
                        navigate("/pmo-project-tasks");
                      }}
                    >
                      {intl.formatMessage({ id: "Cancel" })}
                    </button>
                    <button
                      // data-bs-target="#Rega_modal_add"
                      // data-bs-toggle="modal"
                      onClick={() => setModalShow(true)}
                      className="btn btn-success px-15 ms-5"
                    >
                      {intl.formatMessage({ id: "Add" })}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      <TaskClassificationPopup />
      {isChecked ? (
        <div className={`modal fade `} id="Rega_modal_add_reliability">
          <AddReliabilityPopup />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export { AddTask };
