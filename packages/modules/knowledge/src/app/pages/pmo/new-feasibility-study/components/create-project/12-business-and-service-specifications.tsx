import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { KTSVG } from "../../../../../helpers";
import { AddPopup } from "../../../../partials/AddPopup";
import { ClosePopup } from "../../../../partials/ClosePopup";
import { RightToolbar } from "../../../partials/RightToolbar";
import { NewFeasibilityStudyPopup } from "../popup/new-feasibility-study-popup";
import { NewFeasibilityStudySidebar } from "./sidebar/new-feasibility-study-sidebar";
import { QuillEditor } from "../../../../pmo/service-level-agreement-tool/components/QuillEditor";
import {
  NewFeasibilityStudyToolbar,
  NewFeasibilityStudyToolbarLinkType,
} from "../../toolbar/NewFeasibilityStudyToolbar";

export const BusinessAndServiceSpecifications: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);
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
        title="BusinessAndServiceSpecifications"
      />
      <RightToolbar />
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="d-flex flex-column flex-lg-row">
            <NewFeasibilityStudySidebar card_number={"12"} page_size={1055} />
            <div className="w-100 w-lg-850px w-sm-100 me-lg-5">
              <div className="card card-xl-stretch mb-xl-0">
                <div className="card-header border-1 pt-3 pb-2 d-flex flex-stack flex-wrap">
                  <h3 className="card-title align-items-start d-flex flex-column">
                    <h2 className="text-dark mb-2 fs-3 mt-3">
                      {intl.formatMessage({
                        id: "BusinessAndServiceSpecifications",
                      })}
                    </h2>
                    <span className="text-muted fs-7">
                      {intl.formatMessage({
                        id: "ConditionsForTheImplementationOfServices",
                      })}
                    </span>
                  </h3>
                  <div className="mt-auto mb-auto">
                    <span
                      className="svg-icon svg-icon-2"
                      // data-bs-toggle="modal"
                      // data-bs-target="#rega_modal_filter_projects"
                      onClick={() => setModalFShow(true)}
                    >
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
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "ProjectConditions" })}
                            </label>
                            <form
                              id="kt_forms_widget_1_form"
                              className="ql-quil ql-quil-plain pb-3"
                            >
                              <div className="bg-light my-2">
                                {/* <QuillEditor description={'ProjectConditions'} /> */}
                                <textarea
                                  className="form-control form-control-solid "
                                  rows={5}
                                  placeholder={intl.formatMessage({
                                    id: "ProjectConditions",
                                  })}
                                />
                              </div>
                            </form>
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <div className="d-flex flex-stack flex-wrap">
                              <label
                                htmlFor="notes"
                                className="form-label px-2 fontSz-6"
                              >
                                {intl.formatMessage({ id: "SupplierTerms" })}
                              </label>
                              <div className="me-3 mb-3">
                                <span
                                  className="svg-icon svg-icon-2"
                                  // data-bs-toggle="modal"
                                  // data-bs-target="#rega_modal_filter_projects"
                                  onClick={() => setModalFShow(true)}
                                >
                                  <KTSVG
                                    path="/media/icons/duotune/general/gen171_info.svg"
                                    className="text-muted"
                                  />
                                </span>
                              </div>
                            </div>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "SupplierTerms",
                              })}
                            />
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <div className="d-flex flex-stack flex-wrap">
                              <label
                                htmlFor="notes"
                                className="form-label px-2 fontSz-6"
                              >
                                {intl.formatMessage({
                                  id: "EquipmentConditions",
                                })}
                              </label>
                              <div className="me-3 mb-3">
                                <span
                                  className="svg-icon svg-icon-2"
                                  // data-bs-toggle="modal"
                                  // data-bs-target="#rega_modal_filter_projects"
                                  onClick={() => setModalFShow(true)}
                                >
                                  <KTSVG
                                    path="/media/icons/duotune/general/gen171_info.svg"
                                    className="text-muted"
                                  />
                                </span>
                              </div>
                            </div>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "EquipmentConditions",
                              })}
                            />
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <div className="d-flex flex-stack flex-wrap">
                              <label
                                htmlFor="notes"
                                className="form-label px-2 fontSz-6"
                              >
                                {intl.formatMessage({
                                  id: "QualitySpecification",
                                })}
                              </label>
                              <div className="me-3 mb-3">
                                <span
                                  className="svg-icon svg-icon-2"
                                  // data-bs-toggle="modal"
                                  // data-bs-target="#rega_modal_filter_projects"
                                  onClick={() => setModalFShow(true)}
                                >
                                  <KTSVG
                                    path="/media/icons/duotune/general/gen171_info.svg"
                                    className="text-muted"
                                  />
                                </span>
                              </div>
                            </div>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "QualitySpecification",
                              })}
                            />
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <div className="d-flex flex-stack flex-wrap">
                              <label
                                htmlFor="notes"
                                className="form-label px-2 fontSz-6"
                              >
                                {intl.formatMessage({
                                  id: "SafetySpecifications",
                                })}
                              </label>
                              <div className="me-3 mb-3">
                                <span
                                  className="svg-icon svg-icon-2"
                                  // data-bs-toggle="modal"
                                  // data-bs-target="#rega_modal_filter_projects"
                                  onClick={() => setModalFShow(true)}
                                >
                                  <KTSVG
                                    path="/media/icons/duotune/general/gen171_info.svg"
                                    className="text-muted"
                                  />
                                </span>
                              </div>
                            </div>
                            <textarea
                              id="notes"
                              className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                              placeholder={intl.formatMessage({
                                id: "SafetySpecifications",
                              })}
                            />
                          </div>
                          <div className="col-lg-12 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="notes"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "SpecialConditions" })}
                            </label>
                            <form
                              id="kt_forms_widget_1_form"
                              className="ql-quil ql-quil-plain pb-3"
                            >
                              <div className="bg-light my-2">
                                {/* <QuillEditor
                                  description={"SpecialConditions"}
                                /> */}
                                <textarea
                                  className="form-control form-control-solid "
                                  rows={5}
                                  placeholder={intl.formatMessage({
                                    id: "SpecialConditions",
                                  })}
                                />
                              </div>
                            </form>
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
                                  "/pmo-new-feasibility-study/business-and-services"
                                }
                                className="btn btn-secondary mx-1 text-center w-100" /* data-bs-toggle="modal" data-bs-target="#Rega_modal_Delete" */
                              >
                                {intl.formatMessage({ id: "ThePrevious" })}
                              </Link>
                              <Link
                                to={
                                  "/pmo-new-feasibility-study/team-specification"
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
        id="rega_modal_filter_projects"
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
