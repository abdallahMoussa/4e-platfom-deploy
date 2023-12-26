import { FC, useState } from "react";
import { useIntl } from "react-intl";
import Swal from "sweetalert2";
import { KTSVG } from "../../../../helpers";
import { Modal } from "react-bootstrap";

export type FormInputType = {
  name: string;
  placeholder: string;
  label: string;
};

type AddItemProps = {
  title: string;
  inputs: FormInputType[];
  show: boolean;
  handleClose: any;
};

export const AddItemPopup: FC<AddItemProps> = ({
  title,
  inputs,
  show,
  handleClose,
}) => {
  const intl = useIntl();

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
        <form id="kt_modal_new_target_form" className="form" action="#">
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
                <h1 className="mb-3">{intl.formatMessage({ id: title })}</h1>
                <div className="text-muted fw-bold fs-5">
                  {intl.formatMessage({
                    id: "PleaseEnterTheData",
                  })}
                </div>
              </Modal.Title>
            </div>
          </Modal.Header>

          <Modal.Body className="pb-0 mx-4">
            {inputs.map((input, index) => (
              <div className="d-flex flex-column mb-8" key={index}>
                <label className="h5 mb-2">
                  <span>{intl.formatMessage({ id: input.label })}</span>
                </label>
                {input.label === "ListName" ? (
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="far fa-list-alt special"></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      name={input.name}
                      placeholder={intl.formatMessage({
                        id: input.placeholder,
                      })}
                    />
                  </div>
                ) : input.label === "KnowledgeName" ? (
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-list-columns special"></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      name={input.name}
                      placeholder={intl.formatMessage({
                        id: input.placeholder,
                      })}
                    />
                  </div>
                ) : (
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user-cog special"></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      name={input.name}
                      placeholder={intl.formatMessage({
                        id: input.placeholder,
                      })}
                    />
                  </div>
                )}
              </div>
            ))}
          </Modal.Body>
          {/* <div className="d-flex flex-column mb-8">
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
                     <input
                        type="file"
                        className="d-none"
                        id="add_attachment"
                     />
                  </div> */}
          <Modal.Footer className="justify-content-center pb-15 pt-3 border-top-0">
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
