import React from "react";
import { SystemPagination } from "../../../partials/SystemPagination";
import { useIntl } from "react-intl";
import { SystemFilter1 } from "../../../partials/SystemFilter1";
import { RiFilter2Fill } from "react-icons/ri";
import { FilterOutputDataPopup } from "../popup/filter-outputs-popup";

const OutputReviewTable = () => {
  const intl = useIntl();
  const projectsNumbers = [1, 2, 3];
  return (
    <div className=" mt-5">
      <div className="card card-xl-stretch  mb-xl-8">
        <div className="card-header border-0 pt-3 pb-2 mb-2">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-4 mb-1 ">
              {intl.formatMessage({ id: "Outputs" })}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted">
              {intl.formatMessage({ id: "OUTPUTS.TABLE" })}
            </span>
          </h3>
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
                      <th className="px-2 pb-3 min-w-100px">
                        {intl.formatMessage({ id: "OUTPUT.NAME" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px">
                        {intl.formatMessage({ id: "STAGE.NAME" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px">
                        {intl.formatMessage({ id: "PROJECT.TYPE" })}
                      </th>
                      <th className="px-2 pb-3 min-w-110px">
                        {intl.formatMessage({
                          id: "Notes",
                        })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-110px">
                        {" "}
                        {intl.formatMessage({ id: "Date" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px">
                        {intl.formatMessage({ id: "ATTACHMENTS" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px">
                        {intl.formatMessage({ id: "QUANTITY" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectsNumbers?.map((count) => (
                      <tr key={count}>
                        <td>
                          <div className="d-flex align-items-center flex-column justify-content-center">
                            <label className="text-center ms-auto fw-bolder text-primary">
                              الاسم الخاص بالمخرج
                            </label>
                            <label className="text-center ms-auto text-muted border-0">
                              اسم المرحله
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="py-2 px-3 fs-6 ">اسم المرحله</div>
                        </td>
                        <td>التصنيف</td>
                        <td>
                          <span>الملاحظان المهمة بالمشروع</span>
                        </td>
                        <td>
                          <span>25 Jun 2022</span>
                        </td>
                        <td>
                          <div className="d-flex">
                            <img
                              src="/media/pmo/docIcon.png"
                              className="w-40px h-40px"
                              alt="pdf"
                            />
                            <div className="d-flex flex-column mx-2 mb-3 align-items-start">
                              <p>المتطلبات الفنية للمشروع</p>
                              <p className="mb-0 text-muted">منذ يومين</p>
                            </div>
                          </div>
                        </td>
                        <td>الكمية</td>
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
  );
};

export default OutputReviewTable;
