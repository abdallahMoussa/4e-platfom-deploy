import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { RightToolbar } from "../partials/RightToolbar";
import { AddPopup } from "../../partials/AddPopup";
import { Link } from "react-router-dom";
import { QuillEditor } from "../../pmo/service-level-agreement-tool/components/QuillEditor";
import CheckBoxDropDown from "../../pmo/output-review-tool/components/CheckBoxDropDown";
import { KnowledgeGeneralAddKnowledgeToolbar } from "./toolbar/KnowledgeAddKnowledgeToolbar";
import { KnowledgeManagement } from "./popup/KnowledgeManagement";

export const KnowledgeAddKnowledge: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const intl = useIntl();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [participants, setParticipants] = useState([]);
  const [categories, setCategories] = useState([]);
  const categoryOptions = [
    {
      id: 1,
      name: "تصنيف1",
    },
    {
      id: 2,
      name: "تصنيف2",
    },
    {
      id: 3,
      name: "تصنيف3",
    },
    {
      id: 4,
      name: "تصنيف4",
    },
  ];

  const participantOptions = [
    {
      id: 1,
      name: "Participant 1",
    },
    {
      id: 2,
      name: "Participant 2",
    },
    {
      id: 3,
      name: "Participant 3",
    },
    {
      id: 4,
      name: "Participant 4",
    },
  ];

  return (
    <>
      <KnowledgeGeneralAddKnowledgeToolbar />
      <RightToolbar />

      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div
            className="flex-lg-row-fluid"
            data-select2-id="select2-data-129-tmo1"
          >
            <div className="card mb-5 mb-xl-8 pt-5">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 my-4">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({
                          id: "KnowledgeAddress",
                        })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-book-reader special"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="search"
                          value=""
                          placeholder={intl.formatMessage({
                            id: "KnowledgeAddress",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 my-4">
                    <label className="form-label fs-6 text-gray-700">
                      {intl.formatMessage({
                        id: "KnowledgeDescription",
                      })}
                    </label>
                    <div className="bg-light my-4">
                      {/* <QuillEditor description={"KnowledgeDescription"} /> */}
                      <textarea
                        className="form-control form-control-solid "
                        rows={5}
                        placeholder={intl.formatMessage({
                          id: "Description",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-12 my-4">
                    <label className="form-label fs-6 text-gray-700">
                      {intl.formatMessage({
                        id: "Goals",
                      })}
                    </label>
                    <div className="bg-light my-4">
                      {/* <QuillEditor description={"Goals"} /> */}
                      <textarea
                        className="form-control form-control-solid "
                        rows={5}
                        placeholder={intl.formatMessage({
                          id: "Goals",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-12 my-4">
                    <label className="form-label fs-6 text-gray-700">
                      {intl.formatMessage({
                        id: "EvidenceAndLegislation",
                      })}
                    </label>
                    <div className="bg-light my-4">
                      {/* <QuillEditor description={"EvidenceAndLegislation"} /> */}
                      <textarea
                        className="form-control form-control-solid "
                        rows={5}
                        placeholder={intl.formatMessage({
                          id: "EvidenceAndLegislation",
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="row d-flex align-items-center my-2">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({
                          id: "KnowledgeAddress",
                        })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-map-marker-alt special"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="search"
                          value=""
                          placeholder={intl.formatMessage({
                            id: "KnowledgeAddress",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({
                          id: "ParticipantEntity",
                        })}
                      </label>

                      <div className="mx-auto mt-1  ">
                        <CheckBoxDropDown
                          selectedOptions={participants}
                          setSelectedOptions={setParticipants}
                          options={participantOptions}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({
                          id: "ParticipantsWork",
                        })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-users special"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="search"
                          value=""
                          placeholder={intl.formatMessage({
                            id: "ParticipantsWork",
                          })}
                        />
                        <div className="h-110 d-flex" role="button">
                          <span
                            className="input-group-text"
                            onClick={handleShow}
                          >
                            <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({ id: "Category" })}
                      </label>

                      <div className="mx-auto mt-1  ">
                        <CheckBoxDropDown
                          selectedOptions={categories}
                          setSelectedOptions={setCategories}
                          options={categoryOptions}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 my-5">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({ id: "Attachments" })}
                      </label>
                      <label
                        className="d-flex align-items-center bg-primary bg-opacity-10 p-4 rounded-2 border-dashed border-1 border-primary"
                        htmlFor="uploadKnowledgeFile"
                        role="button"
                      >
                        <div>
                          <i className="bi bi-file-earmark-arrow-up-fill fa-3x text-primary opacity-75"></i>
                        </div>
                        <div className="mx-4">
                          <p className="text-primary fw-bolder mb-2">
                            {intl.formatMessage({
                              id: "FastDownloadFile",
                            })}
                          </p>
                          <p>
                            {intl.formatMessage({
                              id: "DragAndDropOrChooseFilesFromComputer",
                            })}
                          </p>
                        </div>
                      </label>
                      <input type="file" hidden id="uploadKnowledgeFile" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 text-center pb-5">
                <Link
                  className="btn btn-secondary m-3 px-5 py-3"
                  style={{ width: "125px" }}
                  to="/knowledge-general-knowledge/list"
                >
                  {intl.formatMessage({
                    id: "Cancel",
                  })}
                </Link>

                <button
                  className="btn btn-success m-3 px-5 py-3"
                  style={{ width: "125px" }}
                  // data-bs-toggle="modal"
                  // data-bs-target="#Rega_modal_add"
                  onClick={() => setModalShow(true)}
                >
                  {intl.formatMessage({
                    id: "Add",
                  })}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      <div
        className="modal fade"
        // id="rega_modal_knwoledge_management"
        aria-hidden="true"
      >
        <KnowledgeManagement handleClose={handleClose} show={show}/>
      </div>
    </>
  );
};
