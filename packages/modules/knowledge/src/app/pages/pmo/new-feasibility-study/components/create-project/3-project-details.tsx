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
import { EmployeeHierarchyPopup } from "../../../../partials/EmployeeHierarchyPopup";
import { ManagementHierarchyPopup } from "../../../../partials/ManagementHierarchyPopup";

export const ProjectDetails: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalMShow, setModalMShow] = useState<boolean>(false);
  const [modalHShow, setModalHShow] = useState<boolean>(false);

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
        title="ProjectDetails"
      />
      <RightToolbar />
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="d-flex flex-column flex-lg-row">
            <NewFeasibilityStudySidebar card_number={"3"} page_size={622} />
            <div className="w-100 w-lg-850px w-sm-100 me-lg-5">
              <div className="card card-xl-stretch mb-xl-0">
                <div className="card-header border-1 pt-3 pb-2">
                  <h3 className="card-title align-items-start flex-column">
                    <h2 className="text-dark mb-2 fs-3 mt-3">
                      {intl.formatMessage({ id: "ProjectDetails" })}
                    </h2>
                    <span className="text-muted fs-7">
                      {intl.formatMessage({
                        id: "ProjectFeasibilityInformation",
                      })}
                    </span>
                  </h3>
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
                              {intl.formatMessage({ id: "CompetitionName" })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fab fa-connectdevelop special"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "CompetitionName",
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "sector/department" })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fas fa-vector-square special"></i>
                                </span>
                              </div>
                              <input
                                type="select"
                                className="form-control"
                                name="search"
                                value=""
                                placeholder={intl.formatMessage({
                                  id: "Choose",
                                })}
                                role="button"
                                readOnly={true}
                              />
                              <div className="h-110 d-flex" role="button">
                                <span
                                  className="input-group-text"
                                  // data-bs-target="#rega_modal_manager-hierarchy"
                                  // data-bs-toggle="modal"
                                  onClick={() => setModalMShow(true)}
                                >
                                  <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "TheOwnerOfTheInitiative/project",
                              })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fas fa-user-cog special"></i>
                                </span>
                              </div>
                              <input
                                type="select"
                                className="form-control"
                                name="search"
                                value=""
                                placeholder={intl.formatMessage({
                                  id: "Choose",
                                })}
                                role="button"
                                readOnly={true}
                              />
                              <div className="h-110 d-flex" role="button">
                                <span
                                  className="input-group-text"
                                  // data-bs-target="#rega_modal_employee-hierarchy"
                                  // data-bs-toggle="modal"
                                  onClick={() => setModalHShow(true)}
                                >
                                  <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "DurationOfTheProject",
                              })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="special fas fa-stopwatch-20"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="number"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "DurationOfTheProject",
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "EstimatedValue" })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="special bi bi-calendar-week"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "EstimatedValue",
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
                                id: "TheNameOfTheTechnicalBody",
                              })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="special fas fa-wrench"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "TheNameOfTheTechnicalBody",
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "ThePurposeOfTheCompetition",
                              })}
                            </label>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "ThePurposeOfTheCompetition",
                              })}
                            />
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2  fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "DoSamplesNeedToBeDelivered",
                              })}
                            </label>
                            <div className="d-flex p-3 filed_background">
                              <div className="form-check form-check-success form-check-sm form-check-custom mx-3">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="cost"
                                  id="exampleRadios1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios1"
                                >
                                  {intl.formatMessage({ id: "YES" })}
                                </label>
                              </div>
                              <div className="form-check form-check-success form-check-sm form-check-custom">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="cost"
                                  id="exampleRadios1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios1"
                                >
                                  {intl.formatMessage({ id: "NO" })}
                                </label>
                              </div>
                            </div>
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
                                  "/pmo-new-feasibility-study/project-feasibility"
                                }
                                className="btn btn-secondary mx-1 text-center w-100" /* data-bs-toggle="modal" data-bs-target="#Rega_modal_Delete" */
                              >
                                {intl.formatMessage({ id: "ThePrevious" })}
                              </Link>
                              <Link
                                to={
                                  "/pmo-new-feasibility-study/addresses-and-appointments"
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
      <div
        className="modal fade"
        id="rega_modal_employee-hierarchy"
        aria-hidden="true"
      >
        <EmployeeHierarchyPopup
          show={modalHShow}
          handleClose={() => setModalHShow(false)}
        />
      </div>
      <div
        className="modal fade"
        id="rega_modal_manager-hierarchy"
        aria-hidden="true"
      >
        <ManagementHierarchyPopup
          show={modalMShow}
          handleClose={() => setModalMShow(false)}
        />
      </div>
    </>
  );
};
