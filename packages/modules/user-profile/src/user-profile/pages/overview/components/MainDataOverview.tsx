import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
// import { getCurrentSystemLanguage } from "../../../../partials/functions/language";

function MainDataOverview() {
  let intl = useIntl();
  return (
    <Fragment>
      <div className="card shadow p-6 mb-7 ">
        <div className="d-flex justify-content-between px-3 mb-3">
          <p className="fw-bolder fs-4 ">
            {" "}
            {intl.formatMessage({ id: "BasicInformation" })}
          </p>
          <div className="btn btn-sm  btn-primary text-white">
            <Link to="/user-profile/overview/edit-basic-info">
              <i className="fa-regular fa-pen-to-square"></i>
              <span className="text-white">
                {" "}
                {intl.formatMessage({ id: "Edit" })}
              </span>
            </Link>
          </div>
        </div>
        <hr />
        <div className="mt-2 px-3">
          <div className="row mb-4 d-flex align-items-center">
            <div className="col-3 me-5">
              <p className="text-muted fs-5">
                {" "}
                {intl.formatMessage({ id: "PersonalPicture" })}
              </p>
            </div>

            <div className="col-7">
              <img
                src="/media/avatars/300-3.jpg"
                className="d-inline-block border-radius-10 h-110px w-120px"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "FullName" })}
              </p>
            </div>

            <div className="col-7">
              <div className="text-black fw-bolder d-flex text-end">
                محمد علي محمد
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "Email" })}
              </p>
            </div>

            <div className="col-7">
              <p className="text-black fw-bolder">mahmoud_Ali@gmail.com</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "Gender" })}
              </p>
            </div>

            <div className="col-7">
              <p className="text-black fw-bolder">ذكر</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "Phone" })}
              </p>
            </div>

            <div className="col-7">
              <div className="row">
                <div className="col-2  p-0 me-2">
                  <div className="text-black fw-bolder h-100 p-0 ">
                    +996123457545
                  </div>
                </div>
                <div className="col-2 col-md-3 col-sm-4">
                  <span className="w-60 badgex badge-light-success d-flex align-items-center justify-content-center">
                    {intl.formatMessage({ id: "Verified" })}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "Nationality" })}
              </p>
            </div>

            <div className="col-7">
              <p className="text-black fw-bolder">سعودي</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "MaritalStatus" })}
              </p>
            </div>
            <div className="col-7">
              <p className="text-black fw-bolder">متزوج</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "DateOfBirth" })}
              </p>
            </div>

            <div className="col-7">
              <p className="text-black fw-bolder">19-10-1999</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "Address" })}
              </p>
            </div>

            <div className="col-7">
              <p className="text-black fw-bolder">
                2929, ريحانه بنت زيد, حى العارض{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainDataOverview;
