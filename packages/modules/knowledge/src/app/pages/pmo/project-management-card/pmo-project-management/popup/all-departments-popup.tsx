/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../helpers";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
const AllDepartmentsPopup: FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();

  return (
    // <div className="modal-dialog modal-dialog-centered mw-650px ">
    //   <div className="modal-content">
    //     <div className="modal-header pb-0 border-0 justify-content-end">
    //       <div
    //         className="btn btn-sm btn-icon btn-active-color-primary"
    //         data-bs-dismiss="modal"
    //       >
    //         <KTSVG
    //           path="/media/icons/duotune/arrows/arr061.svg"
    //           className="svg-icon-1"
    //         />
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
              <h1 className="mb-3">
                {intl.formatMessage({ id: "AllDepartments" })}
              </h1>

              <div className="text-muted fw-bold fs-5">
                {intl.formatMessage({ id: "ViewAllDepartments" })}
              </div>
            </Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body className="pb-0 mx-4">
          <div className="mb-10">
            <div className="mh-300px scroll-y me-n7 pe-7">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed"
                  key={idx}
                >
                  <div className="d-flex align-items-center">
                    <div className="ms-5">
                      <a
                        href="#"
                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                      >
                        {intl.formatMessage({ id: "DepartmentName" })}
                      </a>
                      <div className="fw-bold text-muted">اسم القطاع الاول</div>
                      <div className="fw-bold text-muted">
                        اسم القطاع الثاني{" "}
                      </div>
                    </div>
                  </div>

                  <div className="ms-2 w-100px">
                    <div className="fs-6 fw-bold mb-2">45.555.622 </div>
                    <div className="text-muted"> 5 مشاريع</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
      </div>
      {/* //   </div>
    // </div> */}
    </Modal>
  );
};

export { AllDepartmentsPopup };
