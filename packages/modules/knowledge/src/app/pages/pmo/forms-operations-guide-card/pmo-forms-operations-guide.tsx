import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { PmoFormsOperationsGuideToolbar } from "./toolbar/PmoFormsOperationsGuideToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import { RatingItems } from "../../partials/RatingItems";
import { DeletePopup } from "../../partials/DeletePopup";
import { Link } from "react-router-dom";
import FilterFormsOperationPopup from "./popup/FilterFormsOperationPopup";
import { AddItemPopup, FormInputType } from "./popup/AddItemPopup";
import { SystemPagination } from "../../partials/SystemPagination";
import { KTSVG } from "../../../helpers";

type TableDataTypes = {
  id: Number;
  name: string;
  owner: string;
  review?: Number;
  date: string;
};
type Table2DataTypes = {
  id: Number;
  name: string;
  owner: string;
  status: string;
  review?: Number;
  date: string;
};

type TableHeadersTypes = {
  name: string;
  className: string;
};

const PmoFormsOperationsGuide: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalDShow, setModalDShow] = useState<boolean>(false);
  const [modalAShow, setModalAShow] = useState<boolean>(false);

  const intl = useIntl();

  const [activeButton, setActiveButton] = useState("FormsAndOperationsGuide");

  const formsOperationsGuideHeader: TableHeadersTypes[] = [
    {
      name: "ListName",
      className: "ps-4 min-w-150px",
    },
    {
      name: "ListOwner",
      className: "min-w-150px",
    },
    {
      name: "Review",
      className: "min-w-150px",
    },
    {
      name: "ItsDate",
      className: "min-w-150px",
    },
    {
      name: "Delete",
      className: "min-w-50px",
    },
  ];
  const formsOperationsGuideData: TableDataTypes[] = [
    {
      id: 1,
      name: "اسم النموذج ",
      owner: "اسم المالك",
      review: 3,
      date: "22 مايو 2023",
    },
    {
      id: 2,
      name: "اسم النموذج ",
      owner: "اسم المالك",
      review: 3,
      date: "22 مايو 2023",
    },
    {
      id: 3,
      name: "اسم النموذج ",
      owner: "اسم المالك",
      review: 3,
      date: "22 مايو 2023",
    },
    {
      id: 4,
      name: "اسم النموذج ",
      owner: "اسم المالك",

      review: 3,
      date: "22 مايو 2023",
    },
    {
      id: 5,
      name: "اسم النموذج ",
      owner: "اسم المالك",

      review: 3,
      date: "22 مايو 2023",
    },
  ];

  const GeneralKnowledgeHeader: TableHeadersTypes[] = [
    {
      name: "KnowledgeName",
      className: "ps-4 min-w-150px",
    },
    {
      name: "DocumentOwner",
      className: "min-w-150px",
    },
    {
      name: "ListStatus",
      className: "min-w-150px",
    },
    {
      name: "ItsDate",
      className: "min-w-150px",
    },
    {
      name: "Delete",
      className: "min-w-50px",
    },
  ];
  const GeneralKnowledgeData: Table2DataTypes[] = [
    {
      id: 1,
      name: "اسم المعرفه",
      owner: "اسم المالك",
      status: "حاله المرفق",
      date: "22 مايو 2023",
    },
    {
      id: 2,
      name: "اسم المعرفه",
      owner: "اسم المالك",
      status: "حاله المرفق",
      date: "22 مايو 2023",
    },
    {
      id: 3,
      name: "اسم المعرفه",
      owner: "اسم المالك",
      status: "حاله المرفق",
      date: "22 مايو 2023",
    },
    {
      id: 4,
      name: "اسم المعرفه",
      owner: "اسم المالك",
      status: "حاله المرفق",
      date: "22 مايو 2023",
    },
    {
      id: 5,
      name: "اسم المعرفه",
      owner: "اسم المالك",
      status: "حاله المرفق",
      date: "22 مايو 2023",
    },
  ];

  const [data, setData] = useState<TableDataTypes[]>(formsOperationsGuideData);
  const [headers, setHeaders] = useState<TableHeadersTypes[]>(
    formsOperationsGuideHeader
  );

  const handleButtonClick = (data, headers, activeButton) => {
    setData(data);
    setHeaders(headers);
    setActiveButton(activeButton);
  };

  const AddAttachmentInputs: FormInputType[] = [
    {
      label:
        activeButton == "FormsAndOperationsGuide"
          ? "ListName"
          : "KnowledgeName",
      name: "name",
      placeholder:
        activeButton == "FormsAndOperationsGuide"
          ? intl.formatMessage({ id: "AddListName" })
          : intl.formatMessage({ id: "AddKnowledgeName" }),
    },
    {
      label: "DocumentOwner",
      name: "owner_document",
      placeholder: intl.formatMessage({ id: "AddOwnerName" }),
    },
    // {
    //    label: "AttachmentStatus",
    //    name: "attachment_status",
    //    placeholder: intl.formatMessage({ id: "AddAttachmentStatus" }),
    // },
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <PmoFormsOperationsGuideToolbar activeButton={activeButton} />
          <RightToolbar />
        </div>
        <div>
          <a
            onClick={(event) => {
              event.preventDefault();
              setModalAShow(true);
            }}
            className="btn btn-bg-white btn-active-color-primary"
            // data-bs-toggle="modal"
            // data-bs-target="#AddNewApp"
          >
            {intl.formatMessage({
              id:
                activeButton == "FormsAndOperationsGuide"
                  ? "AddList"
                  : "AddKnowledge",
            })}
          </a>
          <div
            className="modal fade"
            id="AddNewApp"
            tabIndex={-1}
            aria-hidden="true"
          >
            <AddItemPopup
              inputs={AddAttachmentInputs}
              title={
                activeButton == "FormsAndOperationsGuide"
                  ? "AddNewList"
                  : "AddNewKnowledge"
              }
              show={modalAShow}
              handleClose={() => setModalAShow(false)}
            />
          </div>
        </div>
      </div>

      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div
            className="flex-lg-row-fluid"
            data-select2-id="select2-data-129-tmo1"
          >
            <div className="card mb-5 mb-xl-8">
              <div className="d-flex justify-content-center py-5">
                <button
                  className={`btn bg-transparent border-0 mx-3 btn-active-color-primary ${
                    activeButton === "FormsAndOperationsGuide" ? "active" : ""
                  } border border-bottom border-white border-2 border-active-primary rounded-0`}
                  onClick={() =>
                    handleButtonClick(
                      formsOperationsGuideData,
                      formsOperationsGuideHeader,
                      "FormsAndOperationsGuide"
                    )
                  }
                >
                  {intl.formatMessage({
                    id: "FormsAndOperationsGuide",
                  })}
                </button>
                <button
                  className={`btn bg-transparent border-0 mx-3 btn-active-color-primary ${
                    activeButton === "GeneralKnowledge" ? "active" : ""
                  } border border-bottom border-white border-2 border-active-primary rounded-0`}
                  onClick={() =>
                    handleButtonClick(
                      GeneralKnowledgeData,
                      GeneralKnowledgeHeader,
                      "GeneralKnowledge"
                    )
                  }
                >
                  {intl.formatMessage({
                    id: "GeneralKnowledge",
                  })}
                </button>
              </div>

              <div className="d-flex align-items-center justify-content-between w-100 pt-5">
                <div className="card-body py-3">
                  <div className="position-relative w-md-400px ms-md-0">
                    <p className="card-title align-items-start flex-column px-5 pb-5">
                      <span className="card-label fw-bolder fs-3 mb-2 ">
                        <bdi>
                          {activeButton == "FormsAndOperationsGuide"
                            ? intl.formatMessage({
                                id: "FormsAndOperationsGuide",
                              })
                            : intl.formatMessage({
                                id: "GeneralKnowledge",
                              })}
                        </bdi>
                      </span>
                      <span className="mt-1 fw-semibold fs-5 text-muted d-block">
                        {activeButton == "FormsAndOperationsGuide"
                          ? intl.formatMessage({
                              id: "FormsAndOperationsGuideTable",
                            })
                          : intl.formatMessage({
                              id: "GeneralKnowledgeTable",
                            })}
                      </span>
                    </p>
                  </div>
                </div>
                {activeButton == "FormsAndOperationsGuide" && (
                  <div className="me-4">
                    <button
                      className="btn btn-secondary w-bolder mx-5 text-center mw-100"
                      //  data-bs-toggle="modal"
                      //  data-bs-target="#rega_modal_filter_forms_operations"
                      onClick={(event) => {
                        event.preventDefault();
                        setModalFShow(true);
                      }}
                    >
                      <span className="svg-icon svg-icon-5 svg-icon-gray-500 m-0">
                        <KTSVG
                          path="/media/icons/duotune/general/gen100_filter.svg"
                          className="svg-icon-1x"
                        />
                      </span>
                      {intl.formatMessage({ id: "Filtering" })}
                    </button>
                  </div>
                )}
              </div>
              <div className="card-body py-3">
                <div className="table-responsive">
                  <table
                    className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
                    id="REGA-WS-caseList"
                  >
                    <thead>
                      <tr className="fw-bolder text-muted">
                        {headers.map((item, index) => (
                          <th key={index} className={item.className}>
                            {intl.formatMessage({
                              id: item.name,
                            })}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr key={`${item.id}`}>
                          <td>
                            <div
                              className={`d-flex ${
                                activeButton != "FormsAndOperationsGuide"
                                  ? ""
                                  : ""
                              }`}
                            >
                              <div className="ms-5">
                                <Link
                                  to={{
                                    pathname:
                                      "/pmo-forms-operations-guide/attachments",
                                  }}
                                >
                                  <i className="fa-solid fa-folder text-warning fa-lg me-3"></i>
                                  {item.name}
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>{item.owner}</td>
                          {item?.review && (
                            <td>{RatingItems(item?.review as number)}</td>
                          )}
                          <td>{item.date}</td>
                          <td>
                            <span className="text-gray-800 fw-bolder d-block fs-6">
                              <button
                                className="border-0 bg-transparent"
                                //   data-bs-toggle="modal"
                                //   data-bs-target="#Rega_modal_Delete"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setModalDShow(true);
                                }}
                              >
                                <span className="svg-icon svg-icon-3 mx-2 text-muted text-hover-danger fa-2x">
                                  <KTSVG
                                    path="/media/icons/duotune/general/gen088.svg"
                                    className="svg-icon-2x"
                                  />
                                </span>
                              </button>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
      <div
        className="modal fade"
        id="rega_modal_filter_forms_operations"
        aria-hidden="true"
      >
        <FilterFormsOperationPopup
          show={modalFShow}
          handleClose={() => setModalFShow(false)}
        />
      </div>
    </>
  );
};

export { PmoFormsOperationsGuide };
