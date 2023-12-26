import React, { Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../helpers";
import CheckBoxDropDown from "../../../pmo/output-review-tool/components/CheckBoxDropDown";
import Modal from "react-bootstrap/Modal";

type PopupProps = {
  show?: any;
  handleClose?: any;
};
const EN_LANG = "en";

const AdvancedSearch: React.FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const [categories, setCategories] = useState([]);
  const [documentOwners, setDocumentOwners] = useState([]);

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

  const documentOwnerOptions = [
    {
      id: 1,
      name: "مالك1",
    },
    {
      id: 2,
      name: "مالك2",
    },
    {
      id: 3,
      name: "مالك3",
    },
    {
      id: 4,
      name: "مالك4",
    },
  ];

  let selectedLang = localStorage.getItem("i18nConfig");
  try {
    selectedLang = JSON.parse(selectedLang).selectedLang;
  } catch (err) {
    console.log("Can't get selectedLang from localStorage");
  }

  return (
    <>
      <div className="modal-dialog modal-dialog-centered mw-1000px">
        <Modal
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <div className="card">
            <Modal.Header
              closeButton
              style={{
                alignItems: intl.locale == "ar" ? "flex-start" : "center",
                flexDirection: intl.locale == "en" ? "column-reverse" : "row",
              }}
            >
              <div className="card-header w-100 px-1 d-flex justify-content-center pb-2  border-bottom-0 mt-10">
                <Modal.Title>
                  <h3 className="card-title flex-column align-items-center">
                    <span className="card-label fw-bolder fs-3 mb-2 ">
                      {intl.formatMessage({
                        id: "AdvancedSearch",
                      })}
                    </span>
                    <span className="mt-1 fw-semibold fs-5 text-muted">
                      {intl.formatMessage({
                        id: "PleaseEnterTheData",
                      })}
                    </span>
                  </h3>
                </Modal.Title>
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className="row my-2">
                <div className="col-12 position-relative ms-md-0">
                  <label
                    htmlFor="advanced_search"
                    className="position-absolute top-50 end-50 ms-6 user-select-auto"
                    style={{
                      cursor: "text",
                      transform:
                        selectedLang === EN_LANG
                          ? "translate(72%, -50%)"
                          : "translate(57%, -50%)",
                    }}
                  >
                    <span className="svg-icon svg-icon-3 svg-icon-gray-500 mx-2">
                      <KTSVG path="/media/icons/duotune/general/gen065.svg" />
                    </span>
                    <span className="fw-bolder text-muted">
                      {intl.formatMessage({
                        id: "Search",
                      })}
                    </span>
                  </label>
                  <input
                    id="advanced_search"
                    type="text"
                    className="form-control form-control-solid ps-10 text-center"
                    name="search"
                    value=""
                  />
                </div>
              </div>

              <div className="row my-2">
                <div className="col-6 col-md-4">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "Address" })}
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
                          id: "Address",
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-2 pt-2 pb-3 ">
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
                <div className="col-6 col-md-4">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "ReleaseNumber" })}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="bi bi-hash special"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: "ReleaseNumber",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-2">
                <div className="col-6 col-md-4">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "Type" })}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="bi bi-blockquote-right special"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: "Type",
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "EntityName" })} (
                      {intl.formatMessage({ id: "DocumentOwner" })})
                    </label>

                    <div className="mx-auto mt-1  ">
                      <CheckBoxDropDown
                        selectedOptions={documentOwners}
                        setSelectedOptions={setDocumentOwners}
                        options={documentOwnerOptions}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "ReleaseDate" })}
                    </label>

                    <input
                      type="date"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                      placeholder={intl.formatMessage({
                        id: "ReleaseDate",
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className="row my-2">
                <div className="col-12">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "Tags" })}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-tags special"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: "Tags",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-center py-2">
              <div className="mt-5 mb-5 col-12 col-lg-7 mx-auto">
                <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center w-50">
                    <div
                      onClick={handleClose}
                      className="btn btn-secondary mx-1 text-center w-100"
                    >
                      {intl.formatMessage({ id: "Cancel" })}
                    </div>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="btn btn-success mx-1 text-center w-100"
                      style={{ border: "none" }}
                    >
                      {intl.formatMessage({ id: "Agree" })}
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AdvancedSearch;
