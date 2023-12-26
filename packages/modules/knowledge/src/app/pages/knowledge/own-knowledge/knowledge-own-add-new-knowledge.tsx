import React, { FC, useState } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { AddPopup } from "../../partials/AddPopup";
import CheckBoxDropDown from "../../pmo/output-review-tool/components/CheckBoxDropDown";
import { KnowledgeManagement } from "./popup/KnowledgeManagement";
import { KnowledgeOwnKnowledgeToolbar } from "./toolbar/KnowledgeOwnKnowledgeToolbar";
import { KnowledgeOwnAddKnowledgeToolbar } from "./toolbar/KnowledgeOwnAddKnowledgeToolbar";

export const KnowledgeOwnAddNewKnowledge: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const intl = useIntl();
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
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
  const colorOptions = [
    {
      id: 1,
      name: "red",
    },
    {
      id: 2,
      name: "blue",
    },
    {
      id: 3,
      name: "green",
    },
    {
      id: 4,
      name: "yellow",
    },
  ];

  return (
    <>
      <KnowledgeOwnAddKnowledgeToolbar />
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
              <div>
                <div className="card-header px-1 pb-2 mb-5 mt-5 px-2 px-3">
                  <p className="card-title align-items-start flex-column px-5 pb-5">
                    <span className="card-label fw-bolder fs-3 mb-2 ">
                      <bdi>
                        {intl.formatMessage({
                          id: "AddNewKnowledge",
                        })}
                      </bdi>
                    </span>
                    <span className="mt-1 fw-semibold fs-5 text-muted">
                      {intl.formatMessage({
                        id: "PleaseEnterTheData",
                      })}
                    </span>
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="row d-flex align-items-center my-2">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({
                          id: "KnowledgeName",
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
                          placeholder={intl.formatMessage({
                            id: "KnowledgeName",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({
                          id: "ManagementName",
                        })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-users-cog special"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="search"
                          value=""
                          placeholder={intl.formatMessage({
                            id: "ManagementName",
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
                  <div className="col-12 col-md-6 col-lg-4">
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
                <div className="row d-flex align-items-center my-2">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({
                          id: "Icons",
                        })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-icons special"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control "
                          name="search"
                          value=""
                          placeholder={intl.formatMessage({
                            id: "IconsLink",
                          })}
                        />
                        <div className="h-110 d-flex" role="button">
                          <span className="input-group-text">
                            <i className="bi bi-link fa-lg special"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="mb-2 pt-2 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({ id: "Color" })}
                      </label>

                      <div className="mx-auto mt-1  ">
                        <CheckBoxDropDown
                          selectedOptions={colors}
                          setSelectedOptions={setColors}
                          options={colorOptions}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 text-center pb-5">
                <Link
                  className="btn btn-secondary m-3 px-5 py-3"
                  style={{ width: "125px" }}
                  to="/knowledge-own-knowledge"
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
        <KnowledgeManagement handleClose={handleClose} show={show} />
      </div>
    </>
  );
};
