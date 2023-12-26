﻿/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from "react";
import { useIntl } from "react-intl";
// import  CheckBoxDropDown  from "../../../pmo/output-review-tool/components/CheckBoxDropDown";
// import { KTSVG } from "../../../../helpers";

const FilterPermissionsPopup: FC = () => {
  const intl = useIntl();
  const [projectName, setProjectName] = useState([]);
  const [projectTyp, setProjectType] = useState([]);
  
  const optionsTwo = [
    {
      id: 1,
      name: "1ادارة المستخدمين",
    },
    {
      id: 2,
      name: "ادارة المشاريع",
    },
    {
      id: 3,
      name: "ادارة المجموعات",
    },
  ];

  const optionsThree = [
    {
      id: 1,
      name: "المدير",
    },
    {
      id: 2,
      name: "المطور",
    },
    {
      id: 3,
      name: "المدعم",
    },
  ];

  return (
    <div className="modal fade creatForm" id="Rega_modal_filter-permissions" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content rounded">
          <div className="modal-header pb-0 border-0 justify-content-end">
            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
              <span className="svg-icon svg-icon-1">
                {/* <KTSVG
                  path="/media/icons/duotune/general/gen101_close.svg"
                  className="svg-icon-2x"
                /> */}
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
                <div className="row g-10">
                  <div className="col-4">
                    <p className="text-mute"> {intl.formatMessage({ id: "PermissionName" })}</p>
                    {/* <CheckBoxDropDown selectedOptions={projectName} setSelectedOptions={setProjectName} options={optionsTwo}/> */}
                  </div>
                  <div className="col-4">
                    <p className="text-mute"> {intl.formatMessage({ id: "ThePermissionAssignedTo" })}</p>
                    {/* <CheckBoxDropDown selectedOptions={projectTyp} setSelectedOptions={setProjectType} options={optionsThree}/> */}
                  </div>
                  <div className="col-4">
                      <p className="text-mute"> {intl.formatMessage({ id: "CreationDate" })}</p>
                      <input type="date" className="form-control w-100 form-control-lg form-control-solid mb-3 mb-lg-2 bg-secondary"/>
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
    </div>
  );
};

export { FilterPermissionsPopup };
