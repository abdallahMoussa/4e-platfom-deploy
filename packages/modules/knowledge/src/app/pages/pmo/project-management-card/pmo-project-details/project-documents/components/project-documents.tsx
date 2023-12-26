import { FC, useState } from "react";
import { RiFilter2Fill } from "react-icons/ri";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../../../partials/SystemPagination";
import { Actions } from "./actions";
import FilterDocumentsPopup from "../popup/filter-documents-popup";
import AddDocumentPopup from "../popup/add-documents-popup";

const ProjectDocuments: FC = () => {
  const intl = useIntl();
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalAShow, setModalAShow] = useState<boolean>(false);

  return (
    <>
      <div className="card card-xl-stretch mb-xl-8 my-5">
        <div className="card-header border-0 pt-5 pb-2 mb-2">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-4 mb-1 ">
              {intl.formatMessage({ id: "ProjectDocuments" })}
            </span>
          </h3>
          <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
            <div className="me-4">
              <div
                className="btn w-100 btn btn-secondary btn-flex   fw-bolder"
                // data-bs-toggle="modal"
                // data-bs-target="#Rega_modal_filter-documents"
                onClick={(event) => {
                  event.preventDefault();
                  setModalFShow(true);
                }}
              >
                <RiFilter2Fill size={17} className="me-3" />{" "}
                {intl.formatMessage({ id: "Filtering" })}
              </div>
            </div>
            <div
              className="btn btn-bg-primary btn-active-color-white text-white"
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_add-documents"
              onClick={() => {
                setModalAShow(true);
              }}
            >
              {intl.formatMessage({ id: "AddDocument" })}
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
                        {intl.formatMessage({ id: "DocumentName" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-350px">
                        {intl.formatMessage({ id: "Description" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-350px">
                        {intl.formatMessage({ id: "Attachments" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "Date" })}{" "}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "Actions" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <div className="d-flex flex-column mx-3">
                          <label
                            role="button"
                            className="text-center text-primary fw-bolder ms-auto"
                          >
                            العقد{" "}
                          </label>
                        </div>
                      </td>
                      <td>
                        <div>وصف الوثيقه</div>
                      </td>
                      <td className="badgex badge-light-danger">
                        <div className="d-inline py-2 px-4 fw-bolder fs-6 ">
                          {" "}
                          مرفق 1
                        </div>
                      </td>

                      <td>
                        <span>25 Jun 2022</span>
                      </td>

                      <td>
                        {" "}
                        <div>
                          <Actions id={1} />
                        </div>{" "}
                      </td>
                    </tr>
                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <div className="d-flex flex-column mx-3">
                          <label
                            role="button"
                            className="text-center text-primary fw-bolder ms-auto"
                          >
                            التعميد{" "}
                          </label>
                        </div>
                      </td>
                      <td>
                        <div>وصف الوثيقه</div>
                      </td>
                      <td className="badgex badge-light-danger">
                        <div className="d-inline py-2 px-4 fw-bolder fs-6 ">
                          {" "}
                          مرفق 1
                        </div>
                      </td>

                      <td>
                        <span>25 Jun 2022</span>
                      </td>

                      <td>
                        {" "}
                        <div>
                          <Actions id={1} />
                        </div>{" "}
                      </td>
                    </tr>
                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <div className="d-flex flex-column mx-3">
                          <label
                            role="button"
                            className="text-center text-primary fw-bolder ms-auto"
                          >
                            كراسة الشروط{" "}
                          </label>
                        </div>
                      </td>
                      <td>
                        <div>وصف الوثيقه</div>
                      </td>
                      <td className="badgex badge-light-danger">
                        <div className="d-inline py-2 px-4 fw-bolder fs-6 ">
                          {" "}
                          مرفق 1
                        </div>
                      </td>

                      <td>
                        <span>25 Jun 2022</span>
                      </td>

                      <td>
                        {" "}
                        <div>
                          <Actions id={1} />
                        </div>{" "}
                      </td>
                    </tr>
                    <tr className="h-60px">
                      <td className="d-flex align-items-center justify-content-center">
                        <div className="d-flex flex-column mx-3">
                          <label
                            role="button"
                            className="text-center text-primary fw-bolder ms-auto"
                          >
                            العرض المالى{" "}
                          </label>
                        </div>
                      </td>
                      <td>
                        <div>وصف الوثيقه</div>
                      </td>
                      <td className="badgex badge-light-danger">
                        <div className="d-inline py-2 px-4 fw-bolder fs-6 ">
                          {" "}
                          مرفق 1
                        </div>
                      </td>

                      <td>
                        <span>25 Jun 2022</span>
                      </td>

                      <td>
                        {" "}
                        <div>
                          <Actions id={1} />
                        </div>{" "}
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

      <FilterDocumentsPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      />
      <AddDocumentPopup
        show={modalAShow}
        handleClose={() => setModalAShow(false)}
      />
    </>
  );
};
export { ProjectDocuments };
