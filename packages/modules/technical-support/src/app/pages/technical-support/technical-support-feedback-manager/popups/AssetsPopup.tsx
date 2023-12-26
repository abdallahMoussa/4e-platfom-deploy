import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../app/helpers";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";

type PopupProps = {
  show?: any;
  handleClose?: any;
};
const AssetsPopup: React.FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();

  let showAlert = () => {
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
  let [assetsTableData, setassetsTableData] = useState([
    {
      id: 1,
      serialNumber: 12345,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
    {
      id: 2,
      serialNumber: 42365,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
    {
      id: 3,
      serialNumber: 16545,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
    {
      id: 4,
      serialNumber: 12367,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
    {
      id: 5,
      serialNumber: 11145,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
    {
      id: 6,
      serialNumber: 17765,
      itemName: "اسم العنصر",
      tradeMark: "العلامه التجاريه",
      category: "فئه العنصر",
    },
  ]);
  return (
    <Fragment>
      <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15 mb-7">
        <Modal
          size="lg"
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
                  <div className="mb-9 text-center">
                    <h1 className="mb-3">
                      {intl.formatMessage({
                        id: "AssetsThatHaveTechnicalMalfunction",
                      })}
                    </h1>
                    <h6 className="mb-2 text-muted">
                      {intl.formatMessage({
                        id: "PleaseSelectAssets",
                      })}
                    </h6>
                  </div>
                </Modal.Title>
              </div>
            </Modal.Header>
            <form
              className="d-block w-100"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Modal.Body>
                <div className="table-responsive mb-3">
                  <table className="table  align-middle gs-0 gy-4 text-center">
                    <thead className="mb-3 border-bottom-15">
                      <tr className="fw-bolder bg-white ">
                        <th className="px-2 pb-3 min-w-50px max-w-150px fs-5 text-center text-dark fw-bolder">
                          {intl.formatMessage({ id: "SerialNumber" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-150px  fs-5 text-center text-dark fw-bolder">
                          {intl.formatMessage({ id: "ItemName" })}
                        </th>

                        <th className="px-2 pb-3 min-w-50px max-w-150px fs-5 text-center  text-dark fw-bolder">
                          {intl.formatMessage({ id: "Trademark" })}{" "}
                        </th>

                        <th className="px-2 pb-3 min-w-50px max-w-150px fs-5 text-center text-dark fw-bolder">
                          {intl.formatMessage({ id: "ItemCategory" })}{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="mt-3">
                      {assetsTableData?.map((item) => {
                        let {
                          id,
                          serialNumber,
                          tradeMark,
                          category,
                          itemName,
                        } = item;

                        return (
                          <Fragment key={Math.random()}>
                            <tr className="align-middle bg-light border-bottom-15">
                              <td>
                                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                  <div className="d-flex mx-4  form-check form-check-custom form-check-success form-check-solid">
                                    <input
                                      className="form-check-input  form-check-success"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault"
                                    />
                                  </div>
                                  <div className="text-muted ">
                                    {serialNumber}
                                  </div>
                                </div>
                              </td>
                              <td className="text-center text-muted ">
                                {itemName}
                              </td>
                              <td className="text-center text-muted ">
                                {tradeMark}
                              </td>
                              <td className="text-center text-muted ">
                                {category}
                              </td>
                            </tr>
                          </Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Modal.Body>
              <Modal.Footer className="justify-content-center py-2">
                <div className="mt-5 mb-5 col-12 col-lg-8 mx-auto">
                  <div className="outputCard card-diff-toolbar pt-5 w-100 mt-3 d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center w-50">
                      <div
                        onClick={handleClose}
                        className="btn btn-secondary mx-3 text-center w-100"
                      >
                        {intl.formatMessage({ id: "Cancel" })}
                      </div>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        className="btn btn-success mx-3 text-center w-100 border-0"
                        onClick={() => {
                          handleClose();
                          showAlert();
                        }}
                      >
                        {intl.formatMessage({ id: "Add" })}
                      </button>
                    </div>
                  </div>
                </div>
              </Modal.Footer>
            </form>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};

export default AssetsPopup;
