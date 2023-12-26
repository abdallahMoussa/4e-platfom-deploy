import { FC, useState } from "react";
import { useIntl } from "react-intl";
import  CheckBoxDropDown  from "../../../pmo/output-review-tool/components/CheckBoxDropDown";
import { KTSVG } from "../../../../helpers";

const FilterCommunicationsEmployees: FC = () => {
  const intl = useIntl();
  const [committeeNumber, setCommitteeNumber] = useState([]);
  const [committeeName, setCommitteeName] = useState([]);
  const [committeeTyp, setCommitteeType] = useState([]);
  const [committeeDuration, setCommitteeDuration] = useState([]);
  const [outputNum, setOutputNum] = useState([]);
  const [meetingNum, setMeetingNum] = useState([]);
  const [value, setValue] = useState<number>(0);

  const optionsOne = [
    {
      id: 1,
      name: "كل الموظفين",
    },
    {
      id: 2,
      name: "محمود علي محمد",
    },
    {
      id: 3,
      name: "محمود علي محمد",
    },
  ];

  const optionsTwo = [
    {
      id: 1,
      name: "كل البلاغات",
    },
    {
      id: 2,
      name: "مغلقه",
    },
    {
      id: 3,
      name: "ساريه",
    },
  ];

  return (
    <div className='modal-dialog modal-dialog-centered mw-1000px'>
        <div className='modal-content'>
          <div className="modal-header pb-0 border-0 justify-content-end">
            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
              <span className="svg-icon svg-icon-1">
                <KTSVG
                  path="/media/icons/duotune/general/gen101_close.svg"
                  className="svg-icon-2x"
                />
              </span>
            </div>
          </div>
          <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15 mb-7">
            <div className="text-center fw-bolder  pb-13 border-bottom border-gray-300">
              <h1 className="mb-3">
                {intl.formatMessage({ id: "FILTERING.DATA" })}
              </h1>
              <div className="text-muted fw-bolder fs-5">
                {intl.formatMessage({ id: "CHOOSE.FILTERING.DATA" })}
              </div>
            </div>

            <div className="mb-15 mt-15">
              <div className="container">
                <div className="row g-10 mb-5">
                  <div className="col-4">
                    <p className="text-mute"> {intl.formatMessage({ id: "EmployeeName" })}</p>
                    <CheckBoxDropDown selectedOptions={committeeNumber} setSelectedOptions={setCommitteeNumber} options={optionsOne}/>
                  </div>
                  <div className="col-4">
                    <p className="text-mute"> {intl.formatMessage({ id: "Status" })}</p>
                    <CheckBoxDropDown selectedOptions={committeeName} setSelectedOptions={setCommitteeName} options={optionsTwo}/>
                  </div>
                  <div className="col-4">
                    <p className="text-mute"> {intl.formatMessage({ id: "AllCommunication" })}</p>
                    <input type="range" className="form-range form-control-lg form-control-solid mb-3 mb-lg-2" min="0" max="100" id="customRange2" />
                  </div>
                </div>
                <div className="row g-10 mt-5  mb-5">
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
                        placeholder={intl.formatMessage({ id: "DateLastMeeting" })}
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
                    placeholder={intl.formatMessage({ id: "DateLastMeeting" })}
                />
                </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center ">
              <button className="btn btn-secondary px-15 me-5" data-bs-dismiss="modal">
                {intl.formatMessage({ id: "Cancel" })}
              </button>
              <button className="btn btn-success px-15 ms-5" data-bs-dismiss="modal">
                {intl.formatMessage({ id: "Agree" })}
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FilterCommunicationsEmployees ;
