import React, { useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../../helpers";
import Swal from "sweetalert2";
import CheckBoxDropDown from "../../calender/components/CheckBoxDropDown";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
const AddAnExistingProject: React.FC<PopupProps> = ({ show, handleClose }) => {
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "AddedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };

  const intl = useIntl();
  const [projectTyp, setProjectType] = useState([]);

  const ProjectType = [
    {
      id: 1,
      name: "type 1",
    },
    {
      id: 2,
      name: "type 2",
    },
    {
      id: 3,
      name: "type 3",
    },
  ];

  return (
    // <div
    //   className="modal fade creatForm"
    //   id="Rega_modal_add_existing_project"
    //   tabIndex={-1}
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog modal-xl">
    //     <div className="modal-content rounded">
    //       <div className="modal-header pb-0 border-0 justify-content-end">
    //         <div
    //           className="btn btn-sm btn-icon btn-active-color-primary"
    //           data-bs-dismiss="modal"
    //         >
    //           <span className="svg-icon svg-icon-1">
    //             <KTSVG
    //               path="/media/icons/duotune/general/gen101_close.svg"
    //               className="svg-icon-2x"
    //             />
    //           </span>
    //         </div>
    //       </div>
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
              <h1 className="mb-3">
                {intl.formatMessage({ id: "AddAnExistingProject" })}
              </h1>
              <div className="text-muted fw-bolder fs-5">
                {intl.formatMessage({ id: "PleaseEnterTheData" })}
              </div>
            </Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body className="pb-0 mx-4">
          <div className="mb-15 mt-8">
            <div className="container">
              <div className="row g-10">
                <div className="col-4">
                  <label
                    htmlFor="taskDuration"
                    className="form-label px-2  fontSz-6"
                  >
                    {intl.formatMessage({ id: "ProjectName" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-kanban special"></i>
                      </span>
                    </div>
                    <input
                      id="taskDuration"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: "ProjectName",
                      })}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <label
                    htmlFor="taskDuration"
                    className="form-label px-2  fontSz-6"
                  >
                    {intl.formatMessage({ id: "ProjectType" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-vector-square special"></i>
                      </span>
                    </div>
                    <input
                      id="taskDuration"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: "ProjectType",
                      })}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <label
                    htmlFor="ProjectCode-Number"
                    className="form-label px-2  fontSz-6"
                  >
                    {" "}
                    {intl.formatMessage({ id: "PROJECT.TYPE" })}
                  </label>
                  <CheckBoxDropDown
                    selectedOptions={projectTyp}
                    setSelectedOptions={setProjectType}
                    options={ProjectType}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label px-2  fontSz-6">
                    {" "}
                    {intl.formatMessage({ id: "ProjectDescription" })}{" "}
                  </label>
                  <textarea
                    className="form-control form-control-solid"
                    rows={4}
                    placeholder={intl.formatMessage({
                      id: "ProjectDescription",
                    })}
                  ></textarea>
                </div>
                <div className="col-4">
                  <label
                    htmlFor="taskDuration"
                    className="form-label px-2  fontSz-6"
                  >
                    {intl.formatMessage({ id: "ProjectDuration" })}
                  </label>
                  <select
                    id="RoleName"
                    className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mb-3 mb-lg-2"
                    data-kt-select2="true"
                    data-placeholder={intl.formatMessage({
                      id: "ProjectDuration",
                    })}
                    data-dropdown-parent="#kt_menu_62775e8642438"
                    data-allow-clear="true"
                    data-select2-id="select2-data-4-vqtd"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option selected>
                      {intl.formatMessage({ id: "ProjectDuration" })}
                    </option>
                    <option value="1">مدة 1</option>
                    <option value="2">مدة 2</option>
                    <option value="3">مدة 3</option>
                  </select>
                </div>
                <div className="col-4">
                  <label
                    htmlFor="ProjectCode-Number"
                    className="form-label px-2  fontSz-6"
                  >
                    {" "}
                    {intl.formatMessage({ id: "StartDate" })}
                  </label>
                  <input
                    type="date"
                    className="form-control w-100 form-control-lg form-control-solid mb-3 mb-lg-2 bg-secondary"
                  />
                </div>
                <div className="col-4">
                  <label
                    htmlFor="ProjectCode-Number"
                    className="form-label px-2  fontSz-6"
                  >
                    {" "}
                    {intl.formatMessage({ id: "EndingDate" })}
                  </label>
                  <input
                    type="date"
                    className="form-control w-100 form-control-lg form-control-solid mb-3 mb-lg-2 bg-secondary"
                  />
                </div>
                <div className="col-4">
                  <label
                    htmlFor="ProjectCode-Number"
                    className="form-label px-2  fontSz-6"
                  >
                    {intl.formatMessage({ id: "ProjectCode-Number" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="special bi bi-bookmarks-fill"></i>
                      </span>
                    </div>
                    <input
                      id="ProjectCode-Number"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: "ProjectCode-Number",
                      })}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <label
                    htmlFor="ProjectSponsor"
                    className="form-label px-2  fontSz-6"
                  >
                    {intl.formatMessage({ id: "ProjectSponsor" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user-shield special"></i>
                      </span>
                    </div>
                    <input
                      id="ProjectSponsor"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: "ProjectSponsor",
                      })}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <label
                    htmlFor="ProjectManager"
                    className="form-label px-2  fontSz-6"
                  >
                    {intl.formatMessage({ id: "ProjectManager" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user-cog special"></i>
                      </span>
                    </div>
                    <input
                      id="ProjectManager"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: "ProjectManager",
                      })}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <label
                    htmlFor="ExecutingCompanyName"
                    className="form-label px-2  fontSz-6"
                  >
                    {intl.formatMessage({ id: "ExecutingCompanyName" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="special fas fa-building"></i>
                      </span>
                    </div>
                    <input
                      id="ExecutingCompanyName"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: "ExecutingCompanyName",
                      })}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <label
                    htmlFor="ProjectCost"
                    className="form-label px-2  fontSz-6"
                  >
                    {intl.formatMessage({ id: "ProjectCost" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-wallet special"></i>
                      </span>
                    </div>
                    <input
                      id="ProjectCost"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: "ProjectCost",
                      })}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <label
                    htmlFor="ProjectCode-Number"
                    className="form-label px-2  fontSz-6"
                  >
                    {" "}
                    {intl.formatMessage({ id: "ContractStartingDate" })}
                  </label>
                  <input
                    type="date"
                    className="form-control w-100 form-control-lg form-control-solid mb-3 mb-lg-2 bg-secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="justify-content-center pb-8 pt-3 border-top-0">
          <div className="d-flex justify-content-center ">
            <button
              className="btn btn-secondary px-15 me-5"
              // data-bs-dismiss="modal"
              onClick={handleClose}
            >
              {intl.formatMessage({ id: "Cancel" })}
            </button>
            <button
              type="button"
              // data-bs-dismiss="modal"
              className="btn btn-success mx-1 px-15 text-center"
              style={{ border: "none" }}
              onClick={() => {
                handleClose();
                showSuccessAlert();
              }}
            >
              {intl.formatMessage({ id: "Agree" })}
            </button>
          </div>
        </Modal.Footer>
      </div>
      {/* //     </div>
    //   </div>
    // </div> */}
    </Modal>
  );
};

export default AddAnExistingProject;
