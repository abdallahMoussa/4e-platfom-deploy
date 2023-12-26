/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from "react";
import { useIntl } from "react-intl";
import CheckBoxDropDown from "../../../pmo/output-review-tool/components/CheckBoxDropDown";
import { KTSVG } from "../../../../helpers";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
const FilterChangesPopup: FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const [projectName, setProjectName] = useState([]);
  const [projectTyp, setProjectType] = useState([]);
  const [outputName, setOutputName] = useState([]);

  const optionsOne = [
    {
      id: 1,
      name: "Output 1",
    },
    {
      id: 2,
      name: "Output 2",
    },
    {
      id: 3,
      name: "Output 3",
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
  ];

  const optionsThree = [
    {
      id: 1,
      name: "Project Type 1",
    },
    {
      id: 2,
      name: "Project Type 2",
    },
    {
      id: 3,
      name: "Project Type 3",
    },
  ];

  return (
    // <div className="modal fade creatForm" id="Rega_modal_filter-changes" tabIndex={-1} aria-hidden="true">
    //   <div className="modal-dialog modal-xl">
    //     <div className="modal-content rounded">
    //       <div className="modal-header pb-0 border-0 justify-content-end">
    //         <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
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
                {intl.formatMessage({ id: "FILTERING.DATA" })}
              </h1>
              <div className="text-muted fw-bolder fs-5">
                {intl.formatMessage({ id: "CHOOSE.FILTERING.DATA" })}
              </div>
            </Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body className="pb-0 mx-4">
          <div className="mb-15 mt-10">
            <div className="container">
              <div className="row g-10">
                <div className="col-6">
                  <p className="text-mute">
                    {" "}
                    {intl.formatMessage({ id: "ProjectName" })}
                  </p>
                  <CheckBoxDropDown
                    selectedOptions={projectName}
                    setSelectedOptions={setProjectName}
                    options={optionsTwo}
                  />
                </div>
                <div className="col-6">
                  <p className="text-mute">
                    {" "}
                    {intl.formatMessage({ id: "ORDERS.NUMBER" })}
                  </p>
                  <CheckBoxDropDown
                    selectedOptions={projectTyp}
                    setSelectedOptions={setProjectType}
                    options={optionsThree}
                  />
                </div>
              </div>
              <div className="row g-10 my-3">
                <div className="col-6">
                  <p className="text-mute">
                    {intl.formatMessage({ id: "PRIORITY" })}
                  </p>
                  <CheckBoxDropDown
                    selectedOptions={outputName}
                    setSelectedOptions={setOutputName}
                    options={optionsOne}
                  />
                </div>
                <div className="col-6">
                  <p className="text-mute">
                    {" "}
                    {intl.formatMessage({ id: "Date" })}
                  </p>
                  <input
                    type="date"
                    className="form-control w-100 form-control-lg form-control-solid mb-3 mb-lg-2 bg-secondary"
                  />
                </div>
              </div>
            </div>
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
              className="btn btn-success px-15 ms-5"
              // data-bs-dismiss="modal"
              onClick={handleClose}
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

export { FilterChangesPopup };
