import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { RiFilter2Fill } from "react-icons/ri";
import { DeletePopup } from "../../../../../partials/DeletePopup";
import { SystemPagination } from "../../../../../partials/SystemPagination";
import FilterOutputsPopup from "../popup/filter-outputs-popup";
import { KTSVG } from "../../../../../../helpers";

const OutputsTable: FC = () => {
  const intl = useIntl();
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalDShow, setModalDShow] = useState<boolean>(false);

  return (
    <>
      <div className=" my-5">
        <div className="card card-xl-stretch mb-xl-8">
          <div className="card-header border-0 pt-3 pb-2 mb-2">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder fs-4 mb-1 ">
                {intl.formatMessage({ id: "Outputs" })}
              </span>
              <span className="mt-1 fw-semibold fs-6 text-muted">
                {" "}
                {intl.formatMessage({ id: "OutputsTable" })}
              </span>
            </h3>
            <div className="card-toolbar ">
              <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
                <div
                  // data-bs-toggle="modal"
                  // data-bs-target="#Rega_modal_filter-outputs"
                  onClick={(event) => {
                    event.preventDefault();
                    setModalFShow(true);
                  }}
                  className="btn btn-secondary w-bolder mx-1 text-center mw-100"
                >
                  <RiFilter2Fill size={17} />{" "}
                  {intl.formatMessage({ id: "Filtering" })}
                </div>

                <Link
                  to={"/pmo-add-new-output"}
                  className=" btn btn-primary fw-bolder  mx-1 text-center mw-100"
                >
                  {intl.formatMessage({ id: "AddNewOutput" })}
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
                        <th className="px-2 pb-3 min-w-50px max-w-350px">
                          {" "}
                          {intl.formatMessage({ id: "OutputName" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px">
                          {" "}
                          {intl.formatMessage({ id: "WorkflowStatus" })}
                        </th>
                        <th className="px-2 pb-3 min-w-100px max-w-350px">
                          {intl.formatMessage({ id: "Notes" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px">
                          {intl.formatMessage({ id: "Date" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px">
                          {intl.formatMessage({ id: "Value" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px">
                          {intl.formatMessage({ id: "Delete" })}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 4 }).map((_, idx) => (
                        <tr key={idx} className="align-middle">
                          <td className="d-flex align-items-center justify-content-center">
                            <Link to={"/pmo-project-outputs-details"}>
                              <div className="d-flex flex-column mx-3">
                                <label
                                  role="button"
                                  className="text-center text-primary fw-bolder ms-auto"
                                >
                                  الاسم الخاص بالمخرج
                                </label>
                                <span className="text-center text-muted ms-auto mt-1">
                                  اسم المرحلة
                                </span>
                              </div>
                            </Link>
                          </td>
                          <td>
                            <div className="d-inline py-2 px-3 fs-6 ">
                              حالة سير العمل
                            </div>
                          </td>
                          <td>الملاحظات المهمة للمشروع</td>
                          <td>
                            <span>25 Jun 2022</span>
                          </td>
                          <td>
                            <span>200.000 ر.س </span>
                          </td>
                          <td className="p-1 border-0">
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
                      ))}
                    </tbody>
                  </table>
                  <SystemPagination />
                </div>
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
      <FilterOutputsPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      />
    </>
  );
};

export { OutputsTable };
