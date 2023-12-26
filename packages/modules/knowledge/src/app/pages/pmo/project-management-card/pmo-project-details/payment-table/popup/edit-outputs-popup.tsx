/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { Modal } from "react-bootstrap";
import { useIntl } from "react-intl";
import Swal from "sweetalert2";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
const EditOutputsPopup: FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const counter = [1, 2, 3];
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "ModifiedSuccessfully" }),
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
    // <div
    //   className="modal fade creatForm"
    //   id="Rega_modal_edit_outputs"
    //   tabIndex={-1}
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog modal-dialog-centered modal-xl">
    //     <div className="modal-content rounded">
    //       <div className="modal-header pb-0 border-0 justify-content-end">
    //         <div
    //           className="btn btn-sm btn-icon btn-active-color-primary"
    //           data-bs-dismiss="modal"
    //         >
    //           <span className="svg-icon svg-icon-1">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //             >
    //               <rect
    //                 opacity="0.5"
    //                 x="6"
    //                 y="17.3137"
    //                 width="16"
    //                 height="2"
    //                 rx="1"
    //                 transform="rotate(-45 6 17.3137)"
    //                 fill="currentColor"
    //               />
    //               <rect
    //                 x="7.41422"
    //                 y="6"
    //                 width="16"
    //                 height="2"
    //                 rx="1"
    //                 transform="rotate(45 7.41422 6)"
    //                 fill="currentColor"
    //               />
    //             </svg>
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
              <div className="text-center">
                <h1 className="mb-3">
                  {intl.formatMessage({ id: "EditOutputs" })}
                </h1>
                <div className="text-muted fw-bolder fs-5">
                  {intl.formatMessage({ id: "PleaseEnterTheData" })}
                </div>
              </div>
            </Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body className="pb-0 mx-4">
          <div className="mb-15 mt-10">
            <table className="table table-bordered border-1">
              <thead>
                <tr className="table-active text-center border">
                  <th scope="col">#</th>
                  <th scope="col">
                    {intl.formatMessage({ id: "OUTPUT.NAME" })}
                  </th>
                  <th scope="col">{intl.formatMessage({ id: "QUANTITY" })}</th>
                  <th scope="col">{intl.formatMessage({ id: "Value" })}</th>
                  <th scope="col">{intl.formatMessage({ id: "Progress" })}</th>
                </tr>
              </thead>
              <tbody>
                {counter.map((_, id: any) => (
                  <tr key={id} className="border text-center">
                    <td className="">
                      <div className="form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md d-flex align-items-center ">
                        <input
                          className="form-check-input widget-9-check xCheckBg"
                          type="checkbox"
                          id="Checkme1"
                        />
                      </div>
                    </td>
                    <td>المتطلبات الفنيه للمشروع</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <input
                          id="stageName"
                          type="text"
                          className="form-control form-control form-control-solid w-150px"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <input
                          id="stageName"
                          type="text"
                          className="form-control form-control form-control-solid w-150px"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <input
                          id="stageName"
                          type="text"
                          className="form-control form-control form-control-solid w-150px"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              className="btn btn-primary px-15 ms-5"
              // data-bs-dismiss="modal"
              onClick={() => {
                handleClose();
                showSuccessAlert();
              }}
            >
              {intl.formatMessage({ id: "Save" })}
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

export { EditOutputsPopup };
