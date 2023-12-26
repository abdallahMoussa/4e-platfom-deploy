import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { RiFilter2Fill } from "react-icons/ri";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../partials/SystemPagination";
import { DeletePopup } from "../../../partials/DeletePopup";
import { FilterProblemsPopup } from "../popup/filter-problems-popup";
import { HiOutlineTrash } from "react-icons/hi";

const ProblemsAndChallengesTable: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalDShow, setModalDShow] = useState<boolean>(false);

  const intl = useIntl();
  const problems = [
    {
      name: "اسم المشكله",
      problemNum: 54554,
      source: "نظام فرز",
      date: "25 Jun 2022",
      owner: "علي فهد",
    },
    {
      name: "اسم المشكله",
      problemNum: 54554,
      source: "نظام فرز",
      date: "25 Jun 2022",
      owner: "علي فهد",
    },
    {
      name: "اسم المشكله",
      problemNum: 54554,
      source: "نظام فرز",
      date: "25 Jun 2022",
      owner: "علي فهد",
    },
  ];

  return (
    <div className="my-10">
      <div className="card card-xl-stretch mb-xl-8">
        <div className="card-header border-0 pt-3 pb-2 mb-2">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-4 mb-1 ">
              {intl.formatMessage({ id: "PROBLEMS" })}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted">
              {" "}
              {intl.formatMessage({ id: "PROBLEMS.TABLE" })}
            </span>
          </h3>
          <div className="card-toolbar ">
            <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
              <div
                // data-bs-toggle="modal"
                // data-bs-target="#Rega_modal_filter-problems"
                onClick={(event) => {
                  event.preventDefault();
                  setModalFShow(true);
                }}
                className="btn btn-secondary w-bolder mx-1 text-center mw-100"
              >
                <RiFilter2Fill
                  size={17}
                  // data-bs-toggle="modal"
                  // data-bs-target="#Rega_modal_filter-problems"
                />
                {intl.formatMessage({ id: "Filtering" })}
              </div>

              <Link
                to={"/pmo-add-problem-challenge"}
                className=" btn btn-primary fw-bolder  mx-1 text-center mw-100"
              >
                {intl.formatMessage({ id: "ADD.PROBLEM" })}
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
                        {intl.formatMessage({ id: "PROBLEM.NAME" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-350px">
                        {" "}
                        {intl.formatMessage({ id: "PROBLEM.SOURCE" })}
                      </th>
                      <th className="px-2 pb-3 min-w-100px max-w-350px">
                        {intl.formatMessage({ id: "PROBLEM.NUMBER" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "PROBLEM.OWNER" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "PROBLEM.DATE" })}
                      </th>
                      <th className="px-2 pb-3 min-w-50px max-w-200px">
                        {intl.formatMessage({ id: "Delete" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {problems?.map((problem, index) => (
                      <tr key={index} className="align-middle ">
                        <td className="d-flex align-items-center justify-content-center py-8">
                          <Link to={"/pmo-problem-challenge-details"}>
                            <div className="d-flex flex-column mx-3">
                              <label
                                role="button"
                                className="text-center text-primary fw-bolder ms-auto"
                              >
                                {problem?.name}
                              </label>
                            </div>
                          </Link>
                        </td>
                        <td className="text-muted ">{problem?.source}</td>
                        <td className="fw-bolder fs-5 ">
                          {problem?.problemNum}
                        </td>
                        <td className="text-muted ">{problem?.owner}</td>
                        <td className="text-muted ">{problem?.date}</td>
                        <td className="p-1 border-0">
                          <span
                            role="button"
                            className="d-flex mx-auto py-2 w-35px h-35px justify-content-center align-items-center text-muted dangerTrash"
                          >
                            <HiOutlineTrash
                              size={20}
                              // data-bs-toggle="modal"
                              // data-bs-target="#Rega_modal_Delete"
                              onClick={(event) => {
                                event.preventDefault();
                                setModalDShow(true);
                              }}
                            />
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
      <div className="modal fade" id="Rega_modal_Delete" aria-hidden="true">
        <DeletePopup
          handleCloseDelete={() => setModalDShow(false)}
          showDelete={modalDShow}
        />
      </div>
      <FilterProblemsPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      />
    </div>
  );
};

export default ProblemsAndChallengesTable;
