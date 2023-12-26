import { FC } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../helpers";
import { Modal, Row } from "react-bootstrap";
import Swal from "sweetalert2";

type PopupProps = {
  show: boolean;
  handleClose: any;
};

export const TurnOnPopup: FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "TurnedOnSuccessfully" }),
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
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
        closeButton
        style={{
          alignItems: intl.locale == "ar" ? "flex-start" : "center",
          flexDirection: intl.locale == "en" ? "column-reverse" : "row",
        }}
        className="pb-0 border-bottom-0"
      >
        <div className="card-header mt-10 d-flex justify-content-center w-100 px-4 border-bottom-0">
          <Row className="justify-content-center mt-5 mb-20">
            <div className="text-center">
              <h3> {intl.formatMessage({ id: "ConfirmTurnOn" })}</h3>
            </div>
          </Row>
        </div>
      </Modal.Header>
      <Modal.Body className="pb-0">
        <Row className="justify-content-center mb-5">
          <div className="text-center">
            <h5>{intl.formatMessage({ id: "AreYouSureToTurnOnThisItem" })}</h5>
          </div>
        </Row>
      </Modal.Body>
      <div className="row">
        <div className="col-12 col-lg-7 mx-auto mb-20 mt-5">
          <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
            <Modal.Footer className="w-100 justify-content-center pb-0 pt-2 border-top-0">
              <div className="d-flex justify-content-center align-items-center w-100">
                <button
                  type="reset"
                  className="btn btn-secondary me-3 w-100"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  {intl.formatMessage({ id: "Cancel" })}
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    handleClose();
                    showSuccessAlert();
                  }}
                  className="btn btn-success me-5 w-100 "
                >
                  <span className="indicator-label">
                    {intl.formatMessage({ id: "TurnOn" })}
                  </span>
                  <span className="indicator-progress">
                    {intl.formatMessage({ id: "TurnOn" })}
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>{" "}
                  </span>
                </button>
              </div>
            </Modal.Footer>
          </div>
        </div>
      </div>
    </Modal>
  );
};
