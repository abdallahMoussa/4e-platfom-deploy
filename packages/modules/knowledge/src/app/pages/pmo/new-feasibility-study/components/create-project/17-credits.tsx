import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { ClosePopup } from "../../../../partials/ClosePopup";
import { AddPopup } from "../../../../partials/AddPopup";
import { RightToolbar } from "../../../partials/RightToolbar";
import { NewFeasibilityStudyPopup } from "../popup/new-feasibility-study-popup";
import { NewFeasibilityStudySidebar } from "./sidebar/new-feasibility-study-sidebar";
import {
  NewFeasibilityStudyToolbar,
  NewFeasibilityStudyToolbarLinkType,
} from "../../toolbar/NewFeasibilityStudyToolbar";
import SpecifyRequest from "../../../../committees/committee-approval/popup/committee-specify-request";

export const Credits: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalSShow, setModalSShow] = useState<boolean>(false);
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
        title="Credits"
      />
      <RightToolbar />
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="d-flex flex-column flex-lg-row">
            <NewFeasibilityStudySidebar card_number={"17"} page_size={308} />
            <div className="w-100 w-lg-850px w-sm-100 me-lg-5">
              <div className="card card-xl-stretch mb-xl-0">
                <div className="card-header border-1 pt-3 pb-2 d-flex flex-stack flex-wrap">
                  <h3 className="card-title align-items-start d-flex flex-column">
                    <h2 className="text-dark mb-2 fs-3 mt-3">
                      {intl.formatMessage({ id: "Credits" })}
                    </h2>
                    <span className="text-muted fs-7">
                      {intl.formatMessage({
                        id: "ApprovalsOfManagersAndOwners",
                      })}
                    </span>
                  </h3>
                  <button
                    type="button"
                    className="btn btn-primary text-center h-50 mt-auto mb-auto"
                  >
                    {intl.formatMessage({ id: "PrintConditionsBrochure" })}
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
                              {intl.formatMessage({ id: "ProjectManager" })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fas fa-user-cog special"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "ProjectManager",
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputStatus"
                              className="form-label px-2  fontSz-6"
                            >
                              {intl.formatMessage({ id: "Signature" })}
                            </label>
                            <select
                              id="outputStatus"
                              className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                              data-kt-select2="true"
                              data-placeholder={intl.formatMessage({
                                id: "Signature",
                              })}
                              data-dropdown-parent="#kt_menu_62775e8642438"
                              data-allow-clear="true"
                              data-select2-id="select2-data-4-vqtd"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option disabled selected>
                                {intl.formatMessage({ id: "Signature" })}
                              </option>
                              <option value="1">
                                {intl.formatMessage({ id: "BIG" })}
                              </option>
                              <option value="2">
                                {intl.formatMessage({ id: "MEDIUM" })}
                              </option>
                              <option value="3">
                                {intl.formatMessage({ id: "LOW" })}
                              </option>
                            </select>
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
                                  <i className="fas fa-user-shield special"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "TheOwnerOfTheInitiative/project",
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputStatus"
                              className="form-label px-2  fontSz-6"
                            >
                              {intl.formatMessage({ id: "Signature" })}
                            </label>
                            <select
                              id="outputStatus"
                              className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                              data-kt-select2="true"
                              data-placeholder={intl.formatMessage({
                                id: "Signature",
                              })}
                              data-dropdown-parent="#kt_menu_62775e8642438"
                              data-allow-clear="true"
                              data-select2-id="select2-data-4-vqtd"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option disabled selected>
                                {intl.formatMessage({ id: "Signature" })}
                              </option>
                              <option value="1">
                                {intl.formatMessage({ id: "BIG" })}
                              </option>
                              <option value="2">
                                {intl.formatMessage({ id: "MEDIUM" })}
                              </option>
                              <option value="3">
                                {intl.formatMessage({ id: "LOW" })}
                              </option>
                            </select>
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
                                to={"/pmo-new-feasibility-study/accessories"}
                                className="btn btn-secondary mx-1 text-center w-100" /* data-bs-toggle="modal" data-bs-target="#Rega_modal_Delete" */
                              >
                                {intl.formatMessage({ id: "ThePrevious" })}
                              </Link>
                              <Link
                                to={"#"}
                                // data-bs-toggle="modal"
                                // data-bs-target="#rega_modal_specifyTheRequestPath"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setModalSShow(true);
                                }}
                                className="btn btn-primary mx-1 text-center w-100"
                              >
                                {intl.formatMessage({ id: "Submit" })}
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
      <div
        className="modal fade"
        id="rega_modal_specifyTheRequestPath"
        aria-hidden="true"
      >
        <SpecifyRequest
          show={modalSShow}
          handleClose={() => setModalSShow(false)}
        />
      </div>
    </>
  );
};
