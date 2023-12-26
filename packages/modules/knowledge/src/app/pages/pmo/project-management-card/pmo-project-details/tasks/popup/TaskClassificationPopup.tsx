import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import Swal from "sweetalert2";
import { KTSVG } from "../../../../../../helpers";

function TaskClassificationPopup() {
  const intl = useIntl();
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
  // let [showHierarchy1, setShowHierarchy1] = useState<boolean>(false);
  // let [showHierarchy2, setShowHierarchy2] = useState<boolean>(false);
  // let [showHierarchy3, setShowHierarchy3] = useState<boolean>(false);
  // let [showHierarchy4, setShowHierarchy4] = useState<boolean>(false);
  // let [showHierarchy5, setShowHierarchy5] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };
  return (
    <Fragment>
      <div
        className="modal fade"
        id="Rega_modal_task_classification"
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
            </div>
            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15 mb-7">
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
              <hr />
              <br />
              <br />
              <div className="d-flex flex-column">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
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
                                                            visibility:
                                                              "hidden",
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
                  <div className="d-flex justify-content-center ">
                    <button
                      className="btn btn-secondary px-15 me-5"
                      data-bs-dismiss="modal"
                    >
                      {intl.formatMessage({ id: "Cancel" })}
                    </button>
                    <button
                      data-bs-dismiss="modal"
                      onClick={() => {
                        showFilterAlert();
                      }}
                      className="btn btn-success px-15 ms-5"
                    >
                      {intl.formatMessage({ id: "Add" })}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TaskClassificationPopup;
