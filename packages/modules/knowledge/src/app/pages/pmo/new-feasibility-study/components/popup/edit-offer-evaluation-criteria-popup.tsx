import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import Swal from "sweetalert2";
import { KTSVG } from "../../../../../helpers";
import { Modal } from "react-bootstrap";

type EditQuantitiesAreWorthItPopupProps = {
  data: any;
  handleEdit: (data) => void;
  show: boolean;
  handleClose: any;
};

export const EditOfferEvaluationCriteriaPopup: FC<
  EditQuantitiesAreWorthItPopupProps
> = ({ data, handleEdit, show, handleClose }) => {
  const intl = useIntl();

  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "ModifiedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-success",
      },
    });
  };

  const [inputData, setInputData] = useState<any>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveData = (e) => {
    e.preventDefault();
    handleEdit(inputData);
    handleClose();
    showSuccessAlert();
  };

  return (
    // <div className="modal-dialog modal-dialog-centered mw-1000px">
    //   <div className="modal-content">
    //     <div className="modal-header justify-content-end border-0 pb-0">
    //       <div
    //         className="btn btn-sm btn-icon btn-active-color-primary"
    //         data-bs-dismiss="modal"
    //       >
    //         <KTSVG
    //           path="/media/icons/duotune/arrows/arr061.svg"
    //           className="svg-icon-2x"
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
        {/* <div className="card-body mx-5"> */}
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
              <h2 className="flex-column align-items-center align-self-center mb-5">
                <span className="fw-bolder mb-1">
                  {intl.formatMessage({
                    id: "Edit",
                  })}{" "}
                  {intl.formatMessage({
                    id: "OfferEvaluationCriteria",
                  })}
                </span>
              </h2>
              <div className="mb-3 text-center">
                <span className="text-muted fw-lighter">
                  {intl.formatMessage({
                    id: "PleaseEnterTheData",
                  })}
                </span>
              </div>
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="pb-0 mx-4">
          <form noValidate className="form outputForm">
            <div className="row">
              <div className="col-lg-6 mb-2 pt-2 pb-3">
                <label
                  htmlFor="outputName"
                  className="form-label px-2 fontSz-6 d-flex"
                >
                  {intl.formatMessage({ id: "StandardName" })}
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bi bi-list-columns special"></i>
                    </span>
                  </div>
                  <input
                    id="outputName"
                    type="text"
                    className="form-control"
                    placeholder={intl.formatMessage({ id: "StandardName" })}
                    name="standardName"
                    value={inputData.standardName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-2 pt-2 pb-3">
                <label
                  htmlFor="outputName"
                  className="form-label px-2 fontSz-6 d-flex"
                >
                  {intl.formatMessage({ id: "TheRatio" })}
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-percent special"></i>
                    </span>
                  </div>
                  <input
                    id="outputName"
                    type="text"
                    className="form-control"
                    placeholder={intl.formatMessage({ id: "TheRatio" })}
                    name="ratio"
                    value={inputData.ratio}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="w-100 justify-content-center pb-15 pt-2 border-top-0">
          <div className="d-flex justify-content-center mt-5">
            <button
              type="reset"
              // data-bs-dismiss="modal"
              aria-hidden="true"
              onClick={handleClose}
              className="btn btn-secondary px-15 me-5"
            >
              {intl.formatMessage({ id: "Cancel" })}
            </button>
            <button
              // data-bs-dismiss="modal"
              onClick={handleSaveData}
              className="btn btn-success px-15 ms-5"
            >
              {intl.formatMessage({ id: "Agree" })}
            </button>
          </div>
        </Modal.Footer>
        {/* </div> */}
      </div>
      {/* </div>
    </div> */}
    </Modal>
  );
};
