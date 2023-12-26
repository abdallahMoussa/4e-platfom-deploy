import { FC, useState } from "react";
import { RiFilter2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import FilterRisksPopup from "../popup/filter-risks-popup";
import { DeletePopup } from "../../../../../partials/DeletePopup";
import { SystemPagination } from "../../../../../partials/SystemPagination";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../../helpers";
import { Actions } from "./actions";

const RisksTable: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalDShow, setModalDShow] = useState<boolean>(false);

  const intl = useIntl();
  return (
    <>
      <div className="card card-xl-stretch mb-xl-8 my-5">
        <div className="card-header border-0 pt-3 pb-2 mb-2">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-4 mb-1 ">
              {intl.formatMessage({ id: "Risks" })}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted">
              {intl.formatMessage({ id: "RisksTable" })}
            </span>
          </h3>
          <div className="card-toolbar outputCard card-diff-toolbar">
            <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
              <div
                className="btn btn-secondary mx-1 text-center mw-100"
                // data-bs-toggle="modal"
                // data-bs-target="#Rega_modal_filter-risks"
                onClick={(event) => {
                  event.preventDefault();
                  setModalFShow(true);
                }}
              >
                <RiFilter2Fill size={17} />{" "}
                {intl.formatMessage({ id: "Filtering" })}
              </div>
              <Link
                to={"/pmo-project-add-risk"}
                className="btn btn-primary mx-1 text-center mw-100"
              >
                {intl.formatMessage({ id: "AddRisk" })}
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
                        {intl.formatMessage({ id: "RiskAddress" })}
                      </th>
                      <th className="px-2 pb-3 min-w-100px max-w-350px">
                        {intl.formatMessage({ id: "AppointmentTo" })}
                      </th>
                      <th className="px-2 pb-3 min-w-100px max-w-350px">
                        {intl.formatMessage({ id: "Status" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-350px">
                        {" "}
                        {intl.formatMessage({ id: "RiskRange" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "Effect" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "PROBLEM.DATE" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "Actions" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <tr key={index} className="h-60px">
                        <td className="d-flex align-items-center justify-content-center">
                          <Link to={"/pmo-project-risks-details"}>
                            <div className="d-flex align-items-end">
                              <label
                                role="button"
                                className="text-center fw-bolder ms-auto"
                              >
                                عدم تعاون الجهات
                              </label>
                            </div>
                          </Link>
                        </td>
                        <td>
                          <div className="d-inline py-2 px-3 fs-6 ">المدير</div>
                        </td>
                        <td className="badgex badge-light-danger">
                          <div className="d-inline py-2 px-4 fw-bolder fs-6 badgex badge-light-danger">
                            مغلقه
                          </div>
                        </td>
                        <td className="">
                          <span>منخفض</span>
                        </td>
                        <td className="">
                          <span>منخفض</span>
                        </td>
                        <td className="">
                          <span>25 Jun 2022</span>
                        </td>
                        <td>
                          {" "}
                          <div>
                            <Actions id={1} />
                          </div>{" "}
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
      <FilterRisksPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      />
      {/* <div className="modal fade" id="Rega_modal_Delete" aria-hidden="true">
        <DeletePopup
          handleCloseDelete={() => setModalDShow(false)}
          showDelete={modalDShow}
        />
      </div> */}
    </>
  );
};

export { RisksTable };
