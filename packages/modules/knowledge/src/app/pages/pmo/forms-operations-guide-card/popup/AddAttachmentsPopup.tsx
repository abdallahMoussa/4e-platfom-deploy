import { FC, useState, ChangeEvent } from "react";
import { useIntl } from "react-intl";
import Swal from "sweetalert2";
import { KTSVG } from "../../../../helpers";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
export type WorkParticipantType = {
  id: number;
  name: string;
};

export const AddAttachmentsPopup: FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const [workParticipantsInput, SetWorkParticipantsInput] = useState({
    name: "",
  });
  const [workParticipants, setWorkParticipants] = useState<
    WorkParticipantType[]
  >([
    {
      id: 1,
      name: "محمد حسين",
    },
  ]);

  const handleAddParticipant = () => {
    if (!workParticipantsInput.name) {
      return;
    }
    setWorkParticipants([
      ...workParticipants,
      { id: workParticipants.length, name: workParticipantsInput.name },
    ]);
    SetWorkParticipantsInput({ name: "" });
  };

  const handleWorkParticipantsChange = (e: ChangeEvent<HTMLInputElement>) => {
    SetWorkParticipantsInput({ name: e.target.value });
  };

  const handleDeleteParticipant = (workParticipantID) => {
    setWorkParticipants(
      workParticipants.filter(
        (participant: WorkParticipantType) =>
          participant.id !== workParticipantID
      )
    );
  };

  let showSuccessAlert = () => {
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

  return (
    // <div className="modal-dialog modal-dialog-centered mw-650px">
    //   <div className="modal-content rounded">
    //     <div className="modal-header pb-0 border-0 justify-content-end">
    //       <div
    //         className="btn btn-sm btn-icon btn-active-color-primary"
    //         data-bs-dismiss="modal"
    //       >
    //         <span className="svg-icon svg-icon-1">
    //           <KTSVG
    //             path="/media/icons/duotune/general/gen101_close.svg"
    //             className="svg-icon-2x"
    //           />
    //         </span>
    //       </div>
    //     </div>
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
              <div className="mb-6 text-center pb-5">
                <h1 className="mb-3">
                  {intl.formatMessage({ id: "AddAttachment" })}
                </h1>
                <div className="text-muted fw-bold fs-5">
                  {intl.formatMessage({
                    id: "PleaseEnterTheData",
                  })}
                </div>
              </div>
            </Modal.Title>
          </div>
        </Modal.Header>

        <form id="kt_modal_new_target_form" className="form" action="#">
          <Modal.Body className="pb-0 mx-4">
            <div className="d-flex flex-column mb-10">
              <label className="h5 mb-2">
                <span>{intl.formatMessage({ id: "DocumentName" })}</span>
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-paperclip special"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  name="document_name"
                  placeholder={intl.formatMessage({
                    id: "AddFileName",
                  })}
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-8">
              <label className="h5 mb-2">
                <span>{intl.formatMessage({ id: "DocumentOwner" })}</span>
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user-cog special"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  name="owner_document"
                  placeholder={intl.formatMessage({
                    id: "AddOwnerName",
                  })}
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-8">
              <label className="h5 mb-2">
                <span>{intl.formatMessage({ id: "WorkParticipants" })}</span>
              </label>
              <div className="input-group">
                <input
                  onChange={handleWorkParticipantsChange}
                  type="text"
                  name="name"
                  value={workParticipantsInput.name}
                  id="workParticipants"
                  className="form-control form-control-lg form-control-solid  rounded"
                  placeholder={intl.formatMessage({
                    id: "AddParticipantsNames",
                  })}
                />
                <button
                  className="btn btn-success text-hover-light rounded"
                  type="button"
                  id="addParticipant"
                  onClick={handleAddParticipant}
                >
                  <i className="fas fa-plus fa-fw"></i>
                </button>
              </div>
              {workParticipants.length ? (
                <div className="mt-2 px-3 py-2 d-flex flex-column">
                  {workParticipants.map((participant) => (
                    <div
                      key={participant.id}
                      className="d-flex justify-content-between w-100 pb-2 mb-1"
                    >
                      <span>{participant.name}</span>
                      <span
                        role="button"
                        onClick={() => handleDeleteParticipant(participant.id)}
                      >
                        <i className="fas fa-times-circle fa-fw text-danger fa-lg"></i>
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="d-flex flex-column mb-8">
              <label className="h5 mb-2">
                <span>{intl.formatMessage({ id: "AttachmentStatus" })}</span>
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-file-upload special"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  name="attachment_status"
                  placeholder={intl.formatMessage({
                    id: "AddAttachmentStatus",
                  })}
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-8">
              <label
                className="border border-secondary border-2 py-4 px-3 rounded d-flex justify-content-between align-items-center cursor-pointer align-items-center"
                htmlFor="add_attachment"
              >
                <p className="mb-0">
                  {intl.formatMessage({ id: "AddToDocument" })}
                </p>
                <p className="mb-0">
                  <a href="#" className="text-muted mx-3">
                    <i className="fa-sharp fa-solid fa-link fa-xl"></i>
                  </a>
                  <a href="#" className="text-muted mx-3">
                    <i className="fa-solid fa-film fa-xl"></i>
                  </a>
                  <a href="#" className="text-muted mx-3">
                    <i className="fa-solid fa-image fa-xl"></i>
                  </a>
                  <a href="#" className="text-muted mx-3">
                    <i className="fa-solid fa-file fa-xl"></i>
                  </a>
                </p>
              </label>
              <input type="file" className="d-none" id="add_attachment" />
            </div>
          </Modal.Body>

          <Modal.Footer className="justify-content-center pb-5 pt-3 border-top-0">
            <div className="text-center">
              <button
                type="reset"
                className="btn btn-light me-3"
                // data-bs-dismiss="modal"
                onClick={handleClose}
              >
                {intl.formatMessage({ id: "Cancel" })}
              </button>
              <button
                type="submit"
                className="btn btn-success"
                // data-bs-dismiss="modal"
                onClick={(event) => {
                  event.preventDefault();
                  handleClose();
                  showSuccessAlert();
                }}
              >
                <span className="indicator-label">
                  {intl.formatMessage({ id: "Add" })}
                </span>
                <span className="indicator-progress">
                  {intl.formatMessage({ id: "PleaseWait" })}
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
              </button>
            </div>
          </Modal.Footer>
        </form>
      </div>
      {/* //   </div>
    // </div> */}
    </Modal>
  );
};
