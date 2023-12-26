import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { ClosePopup } from "../../../../partials/ClosePopup";
import { AddPopup } from "../../../../partials/AddPopup";
import { RightToolbar } from "../../../partials/RightToolbar";
import { NewFeasibilityStudySidebar } from "./sidebar/new-feasibility-study-sidebar";
import {
  NewFeasibilityStudyToolbar,
  NewFeasibilityStudyToolbarLinkType,
} from "../../toolbar/NewFeasibilityStudyToolbar";

export const ProjectFeasibility: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const intl = useIntl();
  const [getIsDone, setIsDone] = useState<Boolean>(false);

  const handelIsDone = () => {
    setIsDone(true);
    setModalShow(true);
  };

  return (
    <>
      <NewFeasibilityStudyToolbar
        isNewFeasibilityStudy={false}
        type={NewFeasibilityStudyToolbarLinkType.ProjectBrochure}
        title="ProjectFeasibility"
      />
      <RightToolbar />
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="d-flex flex-column flex-lg-row">
            <NewFeasibilityStudySidebar card_number={"2"} page_size={804} />
            <div className="w-100 w-lg-850px w-sm-100 me-lg-5">
              <div className="card card-xl-stretch mb-xl-0">
                <div className="card-header border-1 pt-3 pb-2 d-flex flex-stack flex-wrap">
                  <h3 className="card-title align-items-start d-flex flex-column">
                    <h2 className="text-dark mb-2 fs-3 mt-3">
                      {intl.formatMessage({ id: "ProjectFeasibility" })}
                    </h2>
                    <span className="text-muted fs-7">
                      {intl.formatMessage({
                        id: "AddressesAndDatesRelatedToTheProject",
                      })}
                    </span>
                  </h3>
                  <button
                    type="button"
                    className="btn btn-primary text-center h-50 mt-auto mb-auto"
                  >
                    {intl.formatMessage({ id: "FeasibilityStudyPrint" })}
                  </button>
                </div>
                <div className="card-body py-3 px-3 mx-8">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="REGA_table_widget_5_tab_1"
                    >
                      <form noValidate className="form outputForm">
                        <div className="row">
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "PurchaseStageRequired",
                              })}
                            </label>
                            <select
                              id="outputName"
                              className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                              data-kt-select2="true"
                              data-placeholder="اختر"
                              data-dropdown-parent="#kt_menu_62775e8642438"
                              data-allow-clear="true"
                              data-select2-id="select2-data-4-vqtd"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option selected>
                                {intl.formatMessage({ id: "Yes" })}
                              </option>
                              <option selected>
                                {intl.formatMessage({ id: "No" })}
                              </option>
                            </select>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "TotalCost" })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fas fa-wallet special"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "TotalCost",
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "LinkToTheStrategicPillars",
                              })}
                            </label>
                            <select
                              id="outputName"
                              className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                              data-kt-select2="true"
                              data-placeholder="اختر"
                              data-dropdown-parent="#kt_menu_62775e8642438"
                              data-allow-clear="true"
                              data-select2-id="select2-data-4-vqtd"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option selected>1</option>
                              <option selected>2 </option>
                            </select>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "ChiefAppointees" })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fas fa-users-cog special"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "ChiefAppointees",
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "WorkArea" })}
                            </label>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "WorkArea",
                              })}
                            />
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "ProblemOpportunities",
                              })}
                            </label>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "ProblemOpportunities",
                              })}
                            />
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "TheMainOutputs" })}
                            </label>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "TheMainOutputs",
                              })}
                            />
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "BenefitsAndImpact" })}
                            </label>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "BenefitsAndImpact",
                              })}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-12 mx-auto mb-10">
                          <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                            <div className="d-flex justify-content-center align-items-center w-50">
                              <div
                                onClick={() => handelIsDone()}
                                className="btn btn-success mx-1 text-center w-100"
                                // data-bs-toggle="modal"
                                // data-bs-target="#Rega_modal_add"
                              >
                                {intl.formatMessage({ id: "Save" })}
                              </div>
                              <Link
                                to={
                                  "/pmo-new-feasibility-study/project-information"
                                }
                                className="btn btn-secondary mx-1 text-center w-100" /* data-bs-toggle="modal" data-bs-target="#Rega_modal_Delete" */
                              >
                                {intl.formatMessage({ id: "ThePrevious" })}
                              </Link>
                              <Link
                                to={
                                  "/pmo-new-feasibility-study/project-details"
                                }
                                className="btn btn-primary mx-1 text-center w-100"
                              >
                                {intl.formatMessage({ id: "Next" })}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="modal fade" id="Rega_modal_close" aria-hidden="true">
        <ClosePopup />
      </div> */}
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
    </>
  );
};
