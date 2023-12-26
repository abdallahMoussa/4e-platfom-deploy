import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { AddPopup } from "../../../../../partials/AddPopup";

const AddLearnedLesson: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const intl = useIntl();

  return (
    <>
      <div className="card card-xl-stretch mb-xl-0">
        <div className="card-header px-3 pdt-3 pb-2 mb-3">
          <h3 className="card-title align-items-start flex-column my-10 mx-5">
            <span className="card-label fs-4 mb-2 ">
              {" "}
              {intl.formatMessage({ id: "AddNewLessonLearned" })}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted ">
              {intl.formatMessage({ id: "PleaseEnterTheData" })}
            </span>
          </h3>
        </div>
        <div className="card-body py-3 px-3 mx-5">
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="REGA_table_widget_5_tab_1"
            >
              <form noValidate className="form outputForm">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="changeRequest"
                            className="form-label px-2 required fontSz-6"
                          >
                            {intl.formatMessage({ id: "Title" })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="bi bi-journal-bookmark special"></i>
                              </span>
                            </div>
                            <input
                              id="changeRequest"
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({
                                id: "LessonsLearnedTitle",
                              })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="outputStatus"
                            className="form-label px-2 required fontSz-6"
                          >
                            {intl.formatMessage({ id: "Class" })}
                          </label>
                          <select
                            id="outputStatus"
                            className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                            data-kt-select2="true"
                            data-placeholder="اختر"
                            data-dropdown-parent="#kt_menu_62775e8642438"
                            data-allow-clear="true"
                            data-select2-id="select2-data-4-vqtd"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <option
                              disabled
                              selected
                              data-select2-id="select2-data-6-hquo"
                            >
                              {intl.formatMessage({ id: "Class" })}
                            </option>
                            <option value="1">عاليه </option>
                            <option value="2">متوسطه </option>
                            <option value="3">منخفضه </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="row">
                        <div className="mb-2 pt-2 pb-3">
                          <label
                            htmlFor="requestReason"
                            className="form-label px-2 required fontSz-6"
                          >
                            {intl.formatMessage({
                              id: "FutureRecommendations",
                            })}
                          </label>
                          <textarea
                            id="requestReason"
                            className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                            placeholder={intl.formatMessage({
                              id: "FutureRecommendations",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-7 mx-auto mb-10">
                    <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                      <div className="d-flex justify-content-center align-items-center w-50">
                        <Link
                          to="/pmo-project-lessons-learned"
                          className="btn btn-secondary mx-1 text-center w-100"
                        >
                          {intl.formatMessage({ id: "Cancel" })}
                        </Link>
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
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
    </>
  );
};
export { AddLearnedLesson };
