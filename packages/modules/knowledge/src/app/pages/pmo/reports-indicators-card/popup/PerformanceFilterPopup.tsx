import React, { Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../helpers";
import CheckBoxDropDown from "../components/CheckBoxDropDown";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
const PerformanceFilterPopup: React.FC<PopupProps> = ({
  show,
  handleClose,
}) => {
  const intl = useIntl();
  const [sectorName, setSectorName] = useState([]);
  const [projectManager, setProjectManager] = useState([]);
  const [finanacialYear, setFinanacialYear] = useState([]);

  const optionsOne = [
    {
      id: 1,
      name: "القطاع المالي ",
    },
    {
      id: 2,
      name: "القطاع الاداري",
    },
    {
      id: 3,
      name: "القطاع التجاري ",
    },
    {
      id: 4,
      name: "السنه المالي ",
    },
    {
      id: 5,
      name: "السنه الاداري ",
    },
  ];
  const optionsTwo = [
    {
      id: 1,
      name: "عبد الله محمد",
    },
    {
      id: 2,
      name: "عبد الله محمد",
    },
    {
      id: 3,
      name: "عبد الله محمد",
    },
    {
      id: 4,
      name: "عبد الله محمد",
    },
    {
      id: 5,
      name: "عبد الله محمد",
    },
  ];

  const optionsThree = [
    {
      id: 1,
      name: "السنه الاولي ",
    },
    {
      id: 2,
      name: "السنه الثانيه ",
    },
    {
      id: 3,
      name: "السنه الثالثه",
    },
    {
      id: 4,
      name: "السنه الاولي ",
    },
    {
      id: 5,
      name: "السنه الثانيه ",
    },
  ];

  return (
    <Fragment>
      {/* <div
        className="modal fade"
        id="Rega_modal_filter_performance"
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
            </div> */}
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
                  {intl.formatMessage({ id: "DataFiltering" })}
                </h1>
                <h6 className="mb-2 text-muted">
                  {intl.formatMessage({
                    id: "PleaseChooseDataClassification",
                  })}
                </h6>
              </Modal.Title>
            </div>
          </Modal.Header>
          {/* <hr />
              <br />
              <br /> */}

          <div>
            <form
              className="d-block w-100"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Modal.Body className="pb-0 mx-4">
                <div className="row w-100 mb-8">
                  <div className="col-4">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({ id: "Sector" })}
                      </label>
                      <div className="mx-auto mt-1  ">
                        <CheckBoxDropDown
                          selectedOptions={sectorName}
                          setSelectedOptions={setSectorName}
                          options={optionsOne}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({ id: "ProjectManager" })}
                      </label>
                      <div className="mx-auto mt-1  ">
                        <CheckBoxDropDown
                          selectedOptions={projectManager}
                          setSelectedOptions={setProjectManager}
                          options={optionsTwo}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({ id: "FinancialYear" })}
                      </label>
                      <div className="mx-auto mt-1  ">
                        <CheckBoxDropDown
                          selectedOptions={finanacialYear}
                          setSelectedOptions={setFinanacialYear}
                          options={optionsThree}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer className="justify-content-center pb-5 pt-3 border-top-0">
                <div className="mt-5 mb-5 col-12 col-lg-8 mx-auto">
                  <div className="outputCard card-diff-toolbar pt-5 w-100 mt-3 d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center w-50">
                      <div
                        // data-bs-dismiss="modal"
                        onClick={handleClose}
                        className="btn btn-secondary mx-3 text-center w-100"
                      >
                        {intl.formatMessage({ id: "Cancel" })}
                      </div>
                      <button
                        type="button"
                        // data-bs-dismiss="modal"
                        onClick={handleClose}
                        className="btn btn-success mx-3 text-center w-100"
                        style={{ border: "none" }}
                      >
                        {intl.formatMessage({ id: "Agree" })}
                      </button>
                    </div>
                  </div>
                </div>
              </Modal.Footer>
            </form>
          </div>
        </div>
        {/* </div>
        </div>
      </div> */}
      </Modal>
    </Fragment>
  );
};

export default PerformanceFilterPopup;
