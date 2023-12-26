import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import DelegationPopup from "../popup/DelegationPopup";
import { SystemPagination } from "../../../../partials/SystemPagination";
function Delegation() {
  const [modalDShow, setModalDShow] = useState<boolean>(false);

  let intl = useIntl();
  let [switchState, setSwitchState] = useState(false);
  let handleChange = () => {
    setSwitchState((prevState) => {
      return !prevState;
    });
  };
  return (
    <Fragment>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  mt-4 "
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row g-5 g-xl-8">
            <div className="col-xl-12">
              <div className="card card-xl-stretch mb-xl-8 card-body p-9 ">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="text-dark fs-3 mb-4 fw-bolder">
                    {intl.formatMessage({ id: "DataOfDelegates" })}
                  </p>
                  <button
                    // data-bs-target="#Rega_modal_delegation"
                    // data-bs-toggle="modal"
                    onClick={() => {
                      setModalDShow(true);
                    }}
                    className="btn btn-success px-6 ms-5 "
                  >
                    {intl.formatMessage({ id: "AddingDelegation" })}
                  </button>
                </div>
                <hr className="mb-7 mt-7" />
                <div className="w-100 mb-3 mt-4 px-6 card pt-6 shadow border border-2 border-bottom-4">
                  <div className="d-flex justify-content-end">
                    <span className="badgex badge-light-success min-w-50px min-h-30px d-flex align-items-center justify-content-center">
                      {intl.formatMessage({ id: "Continue" })}
                    </span>
                  </div>
                  <Link
                    to="/user-profile/delegation/details"
                    className=" d-flex justify-content-between mb-9"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="/media/avatars/300-3.jpg"
                        className="d-block mx-2"
                        style={{
                          height: "100px",
                          width: "120px",
                          borderRadius: "10px",
                        }}
                        alt="profile img"
                      />
                      <div className="mx-3 text-gray-700">
                        <p className="mb-3 fw-bolder text-primary fw-bold fs-4">
                          عبد الرحمن محمد
                        </p>
                        <p className="mb-3 text-muted fs-5 ">
                          موظف تسويق -اداره المبيعات
                        </p>
                        <div className="mb-3 text-muted">
                          <i className="fa-regular fa-envelope d-inline-block  fs-3"></i>
                          <span className="d-inline-block ms-4">
                            Abdelrahman_Moh@gmail.com
                          </span>
                        </div>
                        <div className="mb-3 text-muted">
                          <i
                            className="fa-solid fa-phone fs-3"
                            style={{ transform: "rotate(270deg)" }}
                          ></i>
                          <span className="d-inline-block ms-4">
                            +996543256543
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <p className="text-primary fs-3 mb-4 fw-bolder">
                    {intl.formatMessage({ id: "ThePowersOfTheDelegate" })}
                  </p>
                  <div className="mb-9">
                    <span className="d-inline-block  fs-5">
                      {" "}
                      {intl.formatMessage({
                        id: "TheFirstValidity",
                      })}
                    </span>
                    <span
                      className="d-inline-block  fs-5"
                      style={{ marginRight: "20px" }}
                    >
                      {intl.formatMessage({
                        id: "TheSecondValidity",
                      })}
                    </span>
                  </div>
                  <div className="card shadow p-3 mb-7">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted fs-4 min-w-100px d-inline-block ms-1">
                          {intl.formatMessage({
                            id: "DelegationDate",
                          })}{" "}
                          :
                        </span>
                        <span className="min-w-20px d-inline-block text-muted fw-bolder">
                          {intl.formatMessage({
                            id: "From",
                          })}
                        </span>
                        <span className="text-primary min-w-50px d-inline-block ms-3 fw-bolder">
                          {" "}
                          17/5/2023{" "}
                        </span>
                        <span className="min-w-30px d-inline-block ms-3 text-muted fw-bolder">
                          {intl.formatMessage({
                            id: "To",
                          })}
                        </span>
                        <span className="text-primary min-w-50px fw-bolder">
                          {" "}
                          17/6/2023{" "}
                        </span>
                      </div>
                      <Switch
                        onChange={(e) => {
                          handleChange();
                        }}
                        checked={switchState}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-100 mb-3 mt-4 px-6 card pt-6 shadow border border-2 border-bottom-4">
                  <div className="d-flex justify-content-end">
                    <span className="badgex badge-light-success min-w-50px min-h-30px d-flex align-items-center justify-content-center">
                      {intl.formatMessage({ id: "Continue" })}
                    </span>
                  </div>
                  <Link
                    to="/user-profile/delegation/details"
                    className=" d-flex justify-content-between mb-9"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="/media/avatars/300-3.jpg"
                        className="d-block mx-2"
                        style={{
                          height: "100px",
                          width: "120px",
                          borderRadius: "10px",
                        }}
                        alt="profile img"
                      />
                      <div className="mx-3 text-gray-700">
                        <p className="mb-3 fw-bolder text-primary fw-bold fs-4">
                          عبد الرحمن محمد
                        </p>
                        <p className="mb-3 text-muted fs-5 ">
                          موظف تسويق -اداره المبيعات
                        </p>
                        <div className="mb-3 text-muted">
                          <i className="fa-regular fa-envelope d-inline-block  fs-3"></i>
                          <span className="d-inline-block ms-4">
                            Abdelrahman_Moh@gmail.com
                          </span>
                        </div>
                        <div className="mb-3 text-muted">
                          <i
                            className="fa-solid fa-phone fs-3"
                            style={{ transform: "rotate(270deg)" }}
                          ></i>
                          <span className="d-inline-block ms-4">
                            +996543256543
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <p className="text-primary fs-3 mb-4 fw-bolder">
                    {intl.formatMessage({ id: "ThePowersOfTheDelegate" })}
                  </p>
                  <div className="mb-9">
                    <span className="d-inline-block  fs-5">
                      {" "}
                      {intl.formatMessage({
                        id: "TheFirstValidity",
                      })}
                    </span>
                    <span
                      className="d-inline-block  fs-5"
                      style={{ marginRight: "20px" }}
                    >
                      {intl.formatMessage({
                        id: "TheSecondValidity",
                      })}
                    </span>
                  </div>
                  <div className="card shadow p-3 mb-7">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="text-muted fs-4 min-w-100px d-inline-block ms-1">
                          {intl.formatMessage({
                            id: "DelegationDate",
                          })}{" "}
                          :
                        </span>
                        <span className="min-w-20px d-inline-block text-muted fw-bolder">
                          {intl.formatMessage({
                            id: "From",
                          })}
                        </span>
                        <span className="text-primary min-w-50px d-inline-block ms-3 fw-bolder">
                          {" "}
                          17/5/2023{" "}
                        </span>
                        <span className="min-w-30px d-inline-block ms-3 text-muted fw-bolder">
                          {intl.formatMessage({
                            id: "To",
                          })}
                        </span>
                        <span className="text-primary min-w-50px fw-bolder">
                          {" "}
                          17/6/2023{" "}
                        </span>
                      </div>
                      <Switch
                        onChange={(e) => {
                          handleChange();
                        }}
                        checked={switchState}
                      />
                    </div>
                  </div>
                </div>
                <SystemPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DelegationPopup
        show={modalDShow}
        handleClose={() => setModalDShow(false)}
      />
    </Fragment>
  );
}

export default Delegation;
