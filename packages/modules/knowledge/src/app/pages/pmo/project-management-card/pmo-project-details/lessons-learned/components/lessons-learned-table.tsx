import { FC, useState } from "react";
import { RiFilter2Fill } from "react-icons/ri";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { SystemPagination } from "../../../../../partials/SystemPagination";
import { DeletePopup } from "../../../../../partials/DeletePopup";
import FilterLessonsLearnedPopup from "../popup/filter-lessons-learned-popup";
import { KTSVG } from "../../../../../../helpers";

const LessonsLearnedTable: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalDShow, setModalDShow] = useState<boolean>(false);
  const intl = useIntl();

  return (
    <>
      <div className="card card-xl-stretch mb-xl-8 my-5">
        <div className="card-header border-0 pt-3 pb-2 mb-2">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-4 mb-1 ">
              {" "}
              {intl.formatMessage({ id: "LessonsLearned" })}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted">
              {intl.formatMessage({ id: "LessonsLearnedTable" })}{" "}
            </span>
          </h3>
          <div className="card-toolbar outputCard card-diff-toolbar">
            <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
              <div
                className="btn btn-secondary mx-1 text-center mw-100"
                // data-bs-toggle="modal"
                // data-bs-target="#rega_modal_filter_lessons-learned"
                onClick={(event) => {
                  event.preventDefault();
                  setModalFShow(true);
                }}
              >
                <RiFilter2Fill size={17} />{" "}
                {intl.formatMessage({ id: "Filtering" })}
              </div>
              <Link
                to={"/pmo-project-add-lesson-learned"}
                className="btn btn-primary mx-1 text-center mw-100"
              >
                {intl.formatMessage({ id: "AddNewLesson" })}
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body py-3">
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="REGA_table_widget_5_tab_1"
            >
              <div className="table-responsive">
                <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {" "}
                        {intl.formatMessage({ id: "LessonsLearnedTitle" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-350px">
                        {intl.formatMessage({ id: "Class" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-350px">
                        {intl.formatMessage({ id: "FutureRecommendations" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "Delete" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <Link to={"/pmo-project-lessons-learned-details"}>
                          <div className="d-flex flex-column mx-3">
                            <label
                              role="button"
                              className="text-center text-primary fw-bolder ms-auto"
                            >
                              العنوان الاساسى للدروس المستفادة{" "}
                            </label>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="d-inline py-2 px-3 fs-6 ">
                          {" "}
                          العمليات (1)
                        </div>
                      </td>
                      <td>
                        <div className="d-inline py-2 px-4  fs-6 ">
                          السبب الأساسى لوجود توصيات مستقبلية
                        </div>
                      </td>

                      <td className="p-1 d-flex justify-content-center align-items-center border-0">
                        <span
                          role="button"
                          // data-bs-toggle="modal"
                          // data-bs-target="#Rega_modal_Delete"
                          onClick={(event) => {
                            event.preventDefault();
                            setModalDShow(true);
                          }}
                          className="d-flex mx-auto py-2 w-35px h-35px justify-content-center align-items-center text-muted "
                        >
                          <span className="svg-icon svg-icon-3 mx-2">
                            <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                          </span>
                        </span>
                      </td>
                    </tr>

                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <Link to={"/pmo-project-lessons-learned-details"}>
                          <div className="d-flex flex-column mx-3">
                            <label
                              role="button"
                              className="text-center text-primary fw-bolder ms-auto"
                            >
                              العنوان الاساسى للدروس المستفادة{" "}
                            </label>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="d-inline py-2 px-3 fs-6 ">
                          {" "}
                          العمليات (2)
                        </div>
                      </td>
                      <td>
                        <div className="d-inline py-2 px-4  fs-6 ">
                          السبب الأساسى لوجود توصيات مستقبلية
                        </div>
                      </td>

                      <td className="p-1 d-flex justify-content-center align-items-center border-0">
                        <span
                          role="button"
                          // data-bs-toggle="modal"
                          // data-bs-target="#Rega_modal_Delete"
                          onClick={(event) => {
                            event.preventDefault();
                            setModalDShow(true);
                          }}
                          className="d-flex mx-auto py-2 w-35px h-35px justify-content-center align-items-center text-muted "
                        >
                          <span className="svg-icon svg-icon-3 mx-2">
                            <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                          </span>
                        </span>{" "}
                      </td>
                    </tr>

                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <Link to={"/pmo-project-lessons-learned-details"}>
                          <div className="d-flex flex-column mx-3">
                            <label
                              role="button"
                              className="text-center text-primary fw-bolder ms-auto"
                            >
                              العنوان الاساسى للدروس المستفادة{" "}
                            </label>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="d-inline py-2 px-3 fs-6 ">
                          {" "}
                          العمليات (1)
                        </div>
                      </td>
                      <td>
                        <div className="d-inline py-2 px-4  fs-6 ">
                          السبب الأساسى لوجود توصيات مستقبلية
                        </div>
                      </td>

                      <td className="p-1 d-flex justify-content-center align-items-center border-0">
                        <span
                          role="button"
                          // data-bs-toggle="modal"
                          // data-bs-target="#Rega_modal_Delete"
                          onClick={(event) => {
                            event.preventDefault();
                            setModalDShow(true);
                          }}
                          className="d-flex mx-auto py-2 w-35px h-35px justify-content-center align-items-center text-muted "
                        >
                          <span className="svg-icon svg-icon-3 mx-2">
                            <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                          </span>
                        </span>
                      </td>
                    </tr>

                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <Link to={"/pmo-project-lessons-learned-details"}>
                          <div className="d-flex flex-column mx-3">
                            <label
                              role="button"
                              className="text-center text-primary fw-bolder ms-auto"
                            >
                              العنوان الاساسى للدروس المستفادة{" "}
                            </label>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="d-inline py-2 px-3 fs-6 ">
                          {" "}
                          العمليات (2)
                        </div>
                      </td>
                      <td>
                        <div className="d-inline py-2 px-4  fs-6 ">
                          السبب الأساسى لوجود توصيات مستقبلية
                        </div>
                      </td>

                      <td className="p-1 d-flex justify-content-center align-items-center border-0">
                        <span
                          role="button"
                          // data-bs-toggle="modal"
                          // data-bs-target="#Rega_modal_Delete"
                          onClick={(event) => {
                            event.preventDefault();
                            setModalDShow(true);
                          }}
                          className="d-flex mx-auto py-2 w-35px h-35px justify-content-center align-items-center text-muted "
                        >
                          <span className="svg-icon svg-icon-3 mx-2">
                            <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <SystemPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_Delete" aria-hidden="true">
        <DeletePopup
          handleCloseDelete={() => setModalDShow(false)}
          showDelete={modalDShow}
        />
      </div>
      <FilterLessonsLearnedPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      />
    </>
  );
};
export { LessonsLearnedTable };
