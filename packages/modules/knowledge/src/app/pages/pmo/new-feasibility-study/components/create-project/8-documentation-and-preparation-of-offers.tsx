import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { KTSVG } from "../../../../../helpers";
import { ClosePopup } from "../../../../partials/ClosePopup";
import { AddPopup } from "../../../../partials/AddPopup";
import { RightToolbar } from "../../../partials/RightToolbar";
import { NewFeasibilityStudyPopup } from "../popup/new-feasibility-study-popup";
import { NewFeasibilityStudySidebar } from "./sidebar/new-feasibility-study-sidebar";
import {
  NewFeasibilityStudyToolbar,
  NewFeasibilityStudyToolbarLinkType,
} from "../../toolbar/NewFeasibilityStudyToolbar";

export const DocumentationAndPreparationOfOffers: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalCShow, setModalCShow] = useState<boolean>(false);

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
        title="DocumentationAndPreparationOfOffers"
      />
      <RightToolbar />
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="d-flex flex-column flex-lg-row">
            <NewFeasibilityStudySidebar card_number={"8"} page_size={800} />
            <div className="w-100 w-lg-850px w-sm-100 me-lg-5">
              <div className="card card-xl-stretch mb-xl-0">
                <div className="card-header border-1 pt-3 pb-2 d-flex flex-stack flex-wrap">
                  <h3 className="card-title align-items-start d-flex flex-column">
                    <h2 className="text-dark mb-2 fs-3 mt-3">
                      {intl.formatMessage({
                        id: "DocumentationAndPreparationOfOffers",
                      })}
                    </h2>
                    <span className="text-muted fs-7">
                      {intl.formatMessage({
                        id: "GeneralProvisionsDocumentsAndPreparationOfOffers",
                      })}
                    </span>
                  </h3>
                  <div
                    className="mt-auto mb-auto"
                    // data-bs-toggle="modal"
                    // data-bs-target="#rega_modal_new_feasibility_study_popup"
                    onClick={() => setModalFShow(true)}
                  >
                    <span className="svg-icon svg-icon-2">
                      <KTSVG
                        path="/media/icons/duotune/general/gen171_info.svg"
                        className="text-muted"
                      />
                    </span>
                  </div>
                </div>
                <div className="card-body py-3 px-3 mx-8">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="REGA_table_widget_5_tab_1"
                    >
                      <form noValidate className="form outputForm">
                        <div className="row">
                          <h2 className="text-primary mb-3 fs-3 mt-3">
                            {intl.formatMessage({ id: "GeneralProvisions" })}
                          </h2>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "DefinitionOfTheEntity",
                              })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="bi bi-person-bounding-box special"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "DefinitionOfTheEntity",
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2  fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "TheCompetitionIsDivisible",
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
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "CompetitiveSegmentationMechanism",
                              })}
                            </label>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "CompetitiveSegmentationMechanism",
                              })}
                            />
                          </div>
                          <h2 className="text-primary mb-3 fs-3 mt-3">
                            {intl.formatMessage({ id: "PreparePresentations" })}
                          </h2>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "AlternativeEmail" })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fa-regular fa-envelope special"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "AlternativeEmail",
                                })}
                              />
                            </div>
                          </div>
                          <h2 className="text-primary mb-3 fs-3 mt-3">
                            {intl.formatMessage({
                              id: "PresentationDocuments",
                            })}
                          </h2>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "ListOfTechnicalDocuments",
                              })}
                            </label>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "ListOfTechnicalDocuments",
                              })}
                            />
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({
                                id: "ListOfFinancialDocuments",
                              })}
                            </label>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "ListOfFinancialDocuments",
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
                                  "/pmo-new-feasibility-study/general-provisions"
                                }
                                className="btn btn-secondary mx-1 text-center w-100" /* data-bs-toggle="modal" data-bs-target="#Rega_modal_Delete" */
                              >
                                {intl.formatMessage({ id: "ThePrevious" })}
                              </Link>
                              <Link
                                to={
                                  "/pmo-new-feasibility-study/offer-evaluation-criteria"
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
      <div className="modal fade" id="Rega_modal_close" aria-hidden="true">
        <ClosePopup
          show={modalCShow}
          handleClose={() => setModalCShow(false)}
        />
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      <div
        className="modal fade"
        id="rega_modal_new_feasibility_study_popup"
        aria-hidden="true"
      >
        <NewFeasibilityStudyPopup
          show={modalFShow}
          handleClose={() => setModalFShow(false)}
        />
      </div>
    </>
  );
};
