import { FC, useState } from "react";
import { useIntl } from "react-intl";
import CheckBoxDropDown from "../../../pmo/output-review-tool/components/CheckBoxDropDown";
import { KTSVG } from "../../../../helpers";
import Modal from "react-bootstrap/Modal";

type PopupProps = {
  show?: any;
  handleClose?: any;
};
const FilterCommunicationsReport: FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const [committeeNumber, setCommitteeNumber] = useState([]);
  const [committeeName, setCommitteeName] = useState([]);
  const [committeeTyp, setCommitteeType] = useState([]);
  const [committeeDuration, setCommitteeDuration] = useState([]);
  const [outputNum, setOutputNum] = useState([]);
  const [meetingNum, setMeetingNum] = useState([]);

  const optionsOne = [
    {
      id: 1,
      name: "1",
    },
    {
      id: 2,
      name: "2",
    },
    {
      id: 3,
      name: "3",
    },
  ];

  const optionsThree = [
    {
      id: 1,
      name: "committeeType 1",
    },
    {
      id: 2,
      name: "committeeType 2",
    },
    {
      id: 3,
      name: "committeeType 3",
    },
  ];

  return (
    <div className="modal-dialog modal-dialog-centered mw-1000px">
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <div className="card">
          <div className="mx-5"></div>
          <Modal.Header
            closeButton
            style={{
              alignItems: intl.locale == "ar" ? "flex-start" : "center",
              flexDirection: intl.locale == "en" ? "column-reverse" : "row",
            }}
          >
            <div className="card-header w-100 px-1 d-flex justify-content-center pb-2  border-bottom-0 mt-10">
              <Modal.Title>
                <div className="text-center fw-bolder  pb-5 ">
                  <h1 className="mb-3">
                    {intl.formatMessage({ id: "FILTERING.DATA" })}
                  </h1>
                  <div className="text-muted fw-bolder fs-5">
                    {intl.formatMessage({ id: "CHOOSE.FILTERING.DATA" })}
                  </div>
                </div>
              </Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-15 mt-15">
              <div className="container">
                <div className="row g-10 mb-5">
                  <div className="col-4">
                    <p className="text-mute">
                      {" "}
                      {intl.formatMessage({ id: "ReportTitle" })}
                    </p>
                    <CheckBoxDropDown
                      selectedOptions={committeeNumber}
                      setSelectedOptions={setCommitteeNumber}
                      options={optionsOne}
                    />
                  </div>
                  <div className="col-4">
                    <p className="text-mute">
                      {" "}
                      {intl.formatMessage({ id: "ReportType" })}
                    </p>
                    <CheckBoxDropDown
                      selectedOptions={committeeName}
                      setSelectedOptions={setCommitteeName}
                      options={optionsOne}
                    />
                  </div>
                  <div className="col-4">
                    <p className="text-mute">
                      {" "}
                      {intl.formatMessage({ id: "ReportCategory" })}
                    </p>
                    <CheckBoxDropDown
                      selectedOptions={committeeTyp}
                      setSelectedOptions={setCommitteeType}
                      options={optionsOne}
                    />
                  </div>
                </div>
                <div className="row g-10 mt-5 mb-5">
                  <div className="col-4">
                    <p className="text-mute">
                      {" "}
                      {intl.formatMessage({ id: "CommunicationPriority" })}
                    </p>
                    <CheckBoxDropDown
                      selectedOptions={committeeDuration}
                      setSelectedOptions={setCommitteeDuration}
                      options={optionsOne}
                    />
                  </div>
                  <div className="col-4">
                    <p className="text-mute">
                      {" "}
                      {intl.formatMessage({ id: "Status" })}
                    </p>
                    <CheckBoxDropDown
                      selectedOptions={outputNum}
                      setSelectedOptions={setOutputNum}
                      options={optionsOne}
                    />
                  </div>
                  <div className="col-4">
                    <p className="text-mute">
                      {" "}
                      {intl.formatMessage({ id: "EmployeeName" })}
                    </p>
                    <CheckBoxDropDown
                      selectedOptions={meetingNum}
                      setSelectedOptions={setMeetingNum}
                      options={optionsOne}
                    />
                  </div>
                </div>
                <div className="row g-10 mt-5  mb-5">
                  <div className="col-4">
                    <p className="text-mute">
                      {" "}
                      {intl.formatMessage({ id: "Requester" })}
                    </p>
                    <CheckBoxDropDown
                      selectedOptions={meetingNum}
                      setSelectedOptions={setMeetingNum}
                      options={optionsOne}
                    />
                  </div>
                  <div className="col-4">
                    <label
                      htmlFor="outputDate"
                      className="form-label px-2  fontSz-6 "
                    >
                      {intl.formatMessage({ id: "DurationOF" })}
                    </label>
                    <input
                      id="outputDate"
                      type="date"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                      placeholder={intl.formatMessage({
                        id: "DateLastMeeting",
                      })}
                    />
                  </div>
                  <div className="col-4">
                    <label
                      htmlFor="outputDate"
                      className="form-label px-2  fontSz-6 "
                    >
                      {intl.formatMessage({ id: "DurationTo" })}
                    </label>
                    <input
                      id="outputDate"
                      type="date"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                      placeholder={intl.formatMessage({
                        id: "DateLastMeeting",
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-content-center py-2">
            <div className="d-flex justify-content-center ">
              <button
                className="btn btn-secondary px-15 me-5"
                onClick={handleClose}
              >
                {intl.formatMessage({ id: "Cancel" })}
              </button>
              <button
                className="btn btn-success px-15 ms-5"
                onClick={() => {
                  handleClose();
                }}
              >
                {intl.formatMessage({ id: "Agree" })}
              </button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default FilterCommunicationsReport;
