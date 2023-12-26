import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import Swal from "sweetalert2";
import { KTSVG } from "../../../../../../helpers";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
function EditTaskClassificationPopup<PopupProps>({ show, handleClose }) {
  const intl = useIntl();
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };
  let showFilterAlert = () => {
    Swal.fire({
      text: "تمت الاضافه بنجاح",
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: "موافق",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  return (
    <Fragment>
      {/* <div
        className="modal fade"
        id="Rega_modal_edit_task_classification"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content rounded">
            <div className="modal-header pb-0 border-0 justify-content-end">
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span className="svg-icon svg-icon-1">
                  <KTSVG
                    path="/media/icons/duotune/general/gen106_close.svg"
                    className="svg-icon-4 me-1"
                  />
                </span>
              </div>
            </div> */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="card">
          <Modal.Header
            closeButton
            // className="flex-column-reverse"
            style={{
              alignItems: intl.locale == "ar" ? "flex-start" : "center",
              flexDirection: intl.locale == "en" ? "column-reverse" : "row",
            }}
            className="pb-0 border-bottom-0"
            // className="align-items-start"
          >
            <div className="card-header mt-10 d-flex justify-content-center w-100 px-4 border-bottom-0">
              <Modal.Title id="contained-modal-title-vcenter">
                <div className="mb-9 text-center">
                  <h1 className="mb-3">
                    {" "}
                    {intl.formatMessage({
                      id: "TaskClassification",
                    })}
                  </h1>
                  <h6 className="mb-2 text-muted">
                    {" "}
                    {intl.formatMessage({
                      id: "PleaseChooseDataClassification",
                    })}
                  </h6>
                </div>
              </Modal.Title>
            </div>
          </Modal.Header>
          {/* <hr />
          <br />
          <br /> */}

          <div className="d-flex flex-column">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Modal.Body className="pb-5 mx-4">
                <div className="row h-100 w-100 mb-6">
                  <div className="col-md-12">
                    <div className="h-75 border border-end-0 border-start-1  border-bottom-0  border-top-0 border-secondary">
                      <div className="tree_main mb-5">
                        <ul id="tree1" className="tree list-unstyled">
                          <div className="mb-2 pt-2 pb-3 pe-4">
                            <div className=" d-inline  me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                              <input
                                className="form-check-input widget-9-check xCheckBg"
                                type="checkbox"
                                id="Checkboxes11"
                                name="Checkboxes11"
                                checked={
                                  checkedItems["Checkboxes11"] ? true : false
                                }
                                onClick={(e) => {
                                  handleCheckboxChange(e);
                                }}
                              />
                            </div>
                            <label
                              htmlFor="Checkboxes11"
                              className="fs-2 fw-bolder"
                            >
                              {" "}
                              {intl.formatMessage({
                                id: "MainClassification",
                              })}{" "}
                            </label>
                          </div>
                          {checkedItems["Checkboxes11"] && (
                            <li className="basic-branch branch">
                              <ul className="list-unstyled">
                                <li className="branch mb-3">
                                  <div className="mb-2 pt-2 pb-3 pe-4 d-flex align-items-center">
                                    <div className=" d-inline-block  me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        id="Checkboxes2"
                                        name="Checkboxes2"
                                        checked={
                                          checkedItems["Checkboxes2"]
                                            ? true
                                            : false
                                        }
                                        onClick={(e) => {
                                          handleCheckboxChange(e);
                                        }}
                                      />
                                    </div>
                                    <label
                                      htmlFor="Checkboxes2"
                                      className="fs-4 fw-bolder text-muted"
                                    >
                                      {" "}
                                      {intl.formatMessage({
                                        id: "SubCategory1",
                                      })}{" "}
                                    </label>
                                    <div
                                      className="d-inline-block bg-primary  ms-4 me-4"
                                      style={{
                                        width: "30px",
                                        height: "20px",
                                      }}
                                    >
                                      <p
                                        style={{ visibility: "hidden" }}
                                        className="d-inline-block"
                                      >
                                        hidden{" "}
                                      </p>
                                    </div>
                                    <div className="d-inline-block mx-4">
                                      {intl.formatMessage({
                                        id: "ChangeColor",
                                      })}{" "}
                                    </div>
                                  </div>
                                  {checkedItems["Checkboxes2"] && (
                                    <li className="basic-branch branch">
                                      <ul className="list-unstyled">
                                        <li className="branch mb-3">
                                          <div className="mb-2 pt-2 pb-3 pe-4 d-flex align-items-center">
                                            <div className=" d-inline-block  me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                              <input
                                                className="form-check-input widget-9-check xCheckBg"
                                                type="checkbox"
                                                id="Checkboxes3"
                                                name="Checkboxes3"
                                                onClick={(e) => {
                                                  handleCheckboxChange(e);
                                                }}
                                                checked={
                                                  checkedItems["Checkboxes3"]
                                                    ? true
                                                    : false
                                                }
                                              />
                                            </div>
                                            <label
                                              htmlFor="Checkboxes3"
                                              className="fs-4 fw-bolder text-muted"
                                            >
                                              {" "}
                                              {intl.formatMessage({
                                                id: "SubCategory2",
                                              })}{" "}
                                            </label>
                                            <div
                                              className="d-inline-block bg-warning  ms-4 me-4"
                                              style={{
                                                width: "30px",
                                                height: "20px",
                                              }}
                                            >
                                              <p
                                                style={{
                                                  visibility: "hidden",
                                                }}
                                                className="d-inline-block"
                                              >
                                                hidden{" "}
                                              </p>
                                            </div>
                                            <div className="d-inline-block mx-4">
                                              {intl.formatMessage({
                                                id: "ChangeColor",
                                              })}{" "}
                                            </div>
                                          </div>
                                          {checkedItems["Checkboxes3"] && (
                                            <li className="basic-branch branch">
                                              <ul className="list-unstyled">
                                                <li className="branch mb-3">
                                                  <div className="mb-2 pt-2 pb-3 pe-4 d-flex align-items-center">
                                                    <div className=" d-inline-block  me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                                      <input
                                                        className="form-check-input widget-9-check xCheckBg"
                                                        type="checkbox"
                                                        id="Checkboxes4"
                                                        name="Checkboxes4"
                                                        checked={
                                                          checkedItems[
                                                            "Checkboxes4"
                                                          ]
                                                            ? true
                                                            : false
                                                        }
                                                        onClick={(e) => {
                                                          handleCheckboxChange(
                                                            e
                                                          );
                                                        }}
                                                      />
                                                    </div>
                                                    <label
                                                      htmlFor="Checkboxes4"
                                                      className="fs-4 fw-bolder text-muted"
                                                    >
                                                      {" "}
                                                      {intl.formatMessage({
                                                        id: "SubCategory3",
                                                      })}{" "}
                                                    </label>
                                                    <div
                                                      className="d-inline-block bg-success  ms-4 me-4"
                                                      style={{
                                                        width: "30px",
                                                        height: "20px",
                                                      }}
                                                    >
                                                      <p
                                                        style={{
                                                          visibility: "hidden",
                                                        }}
                                                        className="d-inline-block"
                                                      >
                                                        hidden{" "}
                                                      </p>
                                                    </div>
                                                    <div className="d-inline-block mx-4">
                                                      {intl.formatMessage({
                                                        id: "ChangeColor",
                                                      })}{" "}
                                                    </div>
                                                  </div>
                                                  {checkedItems[
                                                    "Checkboxes4"
                                                  ] && (
                                                    <li className="basic-branch branch">
                                                      <ul className="list-unstyled">
                                                        <li className="branch mb-3">
                                                          <div className="mb-2 pt-2 pb-3 pe-4 d-flex align-items-center">
                                                            <div className=" d-inline-block  me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                                              <input
                                                                className="form-check-input widget-9-check xCheckBg"
                                                                type="checkbox"
                                                                id="Checkboxes5"
                                                                name="Checkboxes5"
                                                                checked={
                                                                  checkedItems[
                                                                    "Checkboxes5"
                                                                  ]
                                                                    ? true
                                                                    : false
                                                                }
                                                                onClick={(
                                                                  e
                                                                ) => {
                                                                  handleCheckboxChange(
                                                                    e
                                                                  );
                                                                }}
                                                              />
                                                            </div>
                                                            <label
                                                              htmlFor="Checkboxes5"
                                                              className="fs-4 fw-bolder text-muted"
                                                            >
                                                              {" "}
                                                              {intl.formatMessage(
                                                                {
                                                                  id: "SubCategory4",
                                                                }
                                                              )}{" "}
                                                            </label>
                                                            <div
                                                              className="d-inline-block bg-danger  ms-4 me-4"
                                                              style={{
                                                                width: "30px",
                                                                height: "20px",
                                                              }}
                                                            >
                                                              <p
                                                                style={{
                                                                  visibility:
                                                                    "hidden",
                                                                }}
                                                                className="d-inline-block"
                                                              >
                                                                hidden{" "}
                                                              </p>
                                                            </div>
                                                            <div className="d-inline-block mx-4">
                                                              {intl.formatMessage(
                                                                {
                                                                  id: "ChangeColor",
                                                                }
                                                              )}{" "}
                                                            </div>
                                                          </div>
                                                          {checkedItems[
                                                            "Checkboxes5"
                                                          ] && (
                                                            <li className="basic-branch branch">
                                                              <ul className="list-unstyled">
                                                                <li className="branch mb-3">
                                                                  <div className="mb-2 pt-2 pb-3 pe-4 d-flex align-items-center">
                                                                    <div className=" d-inline-block  me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                                                      <input
                                                                        className="form-check-input widget-9-check xCheckBg"
                                                                        type="checkbox"
                                                                        id="Checkboxes6"
                                                                        name="Checkboxes6"
                                                                        checked={
                                                                          checkedItems[
                                                                            "Checkboxes6"
                                                                          ]
                                                                            ? true
                                                                            : false
                                                                        }
                                                                        onClick={(
                                                                          e
                                                                        ) =>
                                                                          handleCheckboxChange(
                                                                            e
                                                                          )
                                                                        }
                                                                      />
                                                                    </div>
                                                                    <label
                                                                      htmlFor="Checkboxes6"
                                                                      className="fs-4 fw-bolder text-muted"
                                                                    >
                                                                      {" "}
                                                                      {intl.formatMessage(
                                                                        {
                                                                          id: "SubCategory5",
                                                                        }
                                                                      )}
                                                                    </label>
                                                                    <div
                                                                      className="d-inline-block bg-primary  ms-4 me-4"
                                                                      style={{
                                                                        width:
                                                                          "30px",
                                                                        height:
                                                                          "20px",
                                                                      }}
                                                                    >
                                                                      <p
                                                                        style={{
                                                                          visibility:
                                                                            "hidden",
                                                                        }}
                                                                        className="d-inline-block"
                                                                      >
                                                                        hidden{" "}
                                                                      </p>
                                                                    </div>
                                                                    <div className="d-inline-block mx-4">
                                                                      {intl.formatMessage(
                                                                        {
                                                                          id: "ChangeColor",
                                                                        }
                                                                      )}
                                                                    </div>
                                                                  </div>
                                                                  {checkedItems[
                                                                    "Checkboxes6"
                                                                  ] && (
                                                                    <li className="basic-branch branch">
                                                                      <ul className="list-unstyled">
                                                                        <li className="branch mb-3">
                                                                          <div className="mb-2 pt-2 pb-3 pe-4 d-flex align-items-center">
                                                                            <div className=" d-inline-block  me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                                                              <input
                                                                                className="form-check-input widget-9-check xCheckBg"
                                                                                type="checkbox"
                                                                                id="Checkboxes7"
                                                                              />
                                                                            </div>
                                                                            <label
                                                                              htmlFor="Checkboxes7"
                                                                              className="fs-4 fw-bolder text-muted"
                                                                            >
                                                                              {" "}
                                                                              {intl.formatMessage(
                                                                                {
                                                                                  id: "SubCategory6",
                                                                                }
                                                                              )}
                                                                            </label>
                                                                            <div
                                                                              className="d-inline-block bg-primary  ms-4 me-4"
                                                                              style={{
                                                                                width:
                                                                                  "30px",
                                                                                height:
                                                                                  "20px",
                                                                              }}
                                                                            >
                                                                              <p
                                                                                style={{
                                                                                  visibility:
                                                                                    "hidden",
                                                                                }}
                                                                                className="d-inline-block"
                                                                              >
                                                                                hidden{" "}
                                                                              </p>
                                                                            </div>
                                                                            <div className="d-inline-block mx-4">
                                                                              {intl.formatMessage(
                                                                                {
                                                                                  id: "ChangeColor",
                                                                                }
                                                                              )}
                                                                            </div>
                                                                          </div>
                                                                        </li>
                                                                      </ul>
                                                                    </li>
                                                                  )}
                                                                </li>
                                                              </ul>
                                                            </li>
                                                          )}
                                                        </li>
                                                      </ul>
                                                    </li>
                                                  )}
                                                </li>
                                              </ul>
                                            </li>
                                          )}
                                        </li>
                                      </ul>
                                    </li>
                                  )}
                                </li>
                              </ul>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer className="justify-content-center pb-10 pt-3 border-top-0">
                <div className="d-flex justify-content-center ">
                  <button
                    className="btn btn-secondary px-15 me-5"
                    // data-bs-dismiss="modal"
                    onClick={handleClose}
                  >
                    {intl.formatMessage({ id: "Cancel" })}
                  </button>
                  <button
                    className="btn btn-success px-15 ms-5"
                    // data-bs-dismiss="modal"
                    onClick={() => {
                      handleClose();
                      showFilterAlert();
                    }}
                  >
                    {intl.formatMessage({ id: "Add" })}
                  </button>
                </div>
              </Modal.Footer>
            </form>
          </div>
        </div>
        {/* </div>
        </div>
      </div> */}
      </Modal>
    </Fragment>
  );
}

export default EditTaskClassificationPopup;
