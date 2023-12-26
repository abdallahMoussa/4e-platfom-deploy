import React, { Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../helpers";
import CheckBoxDropDown from "../../../../pmo/output-review-tool/components/CheckBoxDropDown";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
const FilterProjectsPopup: React.FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const [projectName, setProjectName] = useState([]);
  const [status, setStatus] = useState([]);
  const [Progress, setProgress] = useState([]);

  const optionsOne = [
    {
      id: 1,
      name: "10%",
    },
    {
      id: 2,
      name: "20%",
    },
    {
      id: 3,
      name: "30%",
    },
    {
      id: 4,
      name: "40%",
    },
  ];
  const optionsTwo = [
    {
      id: 1,
      name: "ProjectName 1",
    },
    {
      id: 2,
      name: "ProjectName 2",
    },
    {
      id: 3,
      name: "ProjectName 3",
    },
    {
      id: 4,
      name: "ProjectName 4",
    },
  ];

  const optionsThree = [
    {
      id: 1,
      name: "مكتمل",
    },
    {
      id: 2,
      name: "متأخر",
    },
    {
      id: 3,
      name: "قيد التنفيذ",
    },
    {
      id: 4,
      name: " لم يبدأ بعد",
    },
  ];

  return (
    <Fragment>
      {/* <div className="modal-dialog modal-dialog-centered mw-1000px">
        <div className="modal-content">
          <div className="modal-header justify-content-end border-0 pb-0">
            <div
              className="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
              <KTSVG
                path="/media/icons/duotune/arrows/arr061.svg"
                className="svg-icon-1"
              />
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
                <h3 className="card-title flex-column align-items-center">
                  <span className="card-label fw-bolder fs-3 mb-2 ">
                    تصفية البيانات
                  </span>
                  <span className="mt-1 fw-semibold fs-5 text-muted">
                    من فضلك أدخل البيانات الآتية:
                  </span>
                </h3>
              </Modal.Title>
            </div>
          </Modal.Header>

          <Modal.Body className="pb-0 mx-4">
            <div className="row">
              <div className="col-6">
                <div className="mb-2 pt-2 pb-3 ">
                  <label className="form-label px-2  fs-6 text-gray-700">
                    {intl.formatMessage({ id: "ProjectName" })}
                  </label>
                  <div className="mx-auto mt-1  ">
                    <CheckBoxDropDown
                      selectedOptions={projectName}
                      setSelectedOptions={setProjectName}
                      options={optionsTwo}
                    />
                  </div>
                </div>
                <div className="mb-2 pt-2 pb-3 ">
                  <label className="form-label px-2  fs-6 text-gray-700">
                    {intl.formatMessage({ id: "Progress" })}
                  </label>

                  <div className="mx-auto mt-1  ">
                    <CheckBoxDropDown
                      selectedOptions={Progress}
                      setSelectedOptions={setProgress}
                      options={optionsOne}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2 pt-2 pb-3 ">
                  <label className="form-label px-2  fs-6 text-gray-700">
                    {intl.formatMessage({ id: "Status" })}
                  </label>

                  <div className="mx-auto mt-1  ">
                    <CheckBoxDropDown
                      selectedOptions={status}
                      setSelectedOptions={setStatus}
                      options={optionsThree}
                    />
                  </div>
                </div>

                <div className="mb-2 pt-2 pb-3">
                  <label className="form-label px-2  fs-6 text-gray-700">
                    {intl.formatMessage({ id: "StartDate" })}
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="justify-content-center pb-5 pt-3 border-top-0">
            <div className="mt-5 mb-5 col-12 col-lg-7 mx-auto">
              <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center w-50">
                  <div
                    // data-bs-dismiss="modal"
                    onClick={handleClose}
                    className="btn btn-secondary mx-1 text-center w-100"
                  >
                    إلغاء
                  </div>
                  <button
                    type="button"
                    // data-bs-dismiss="modal"
                    onClick={() => {
                      handleClose();
                    }}
                    className="btn btn-success mx-1 text-center w-100"
                    style={{ border: "none" }}
                  >
                    موافق
                  </button>
                </div>
              </div>
            </div>
          </Modal.Footer>
          {/* </div> */}
        </div>
        {/* //   </div>
      // </div> */}
      </Modal>
    </Fragment>
  );
};

export default FilterProjectsPopup;
