import React, { Fragment, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { EditPopup } from "../../../../partials/EditPopup";
// import { getCurrentSystemLanguage } from "../../../../partials/functions/language";

function EditBasicInfoOverview() {
  const [modalEShow, setModalEShow] = useState<boolean>(false);

  let intl = useIntl();
  let inputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<any>("");

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  }

  function handleCancel() {
    setImagePreview("");
  }

  return (
    <Fragment>
      <div className="card shadow p-6 ">
        <div className="d-flex justify-content-between px-3 mb-7">
          <p className="fw-bolder fs-4 ">
            {" "}
            {intl.formatMessage({ id: "BasicInformation" })}
          </p>
        </div>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mt-2 mb-9 px-3">
            <div className="row mb-7 d-flex align-items-center">
              <div className="col-3 me-5">
                <p className="text-muted fs-5">
                  {" "}
                  {intl.formatMessage({ id: "PersonalPicture" })}
                </p>
              </div>

              <div className="col-7">
                <div className="position-relative basic-img-container">
                  <img
                    src={`${
                      imagePreview ? imagePreview : "/media/avatars/300-3.jpg"
                    }`}
                    className="d-inline-block myrounded-10 w-100 h-100"
                  />
                  <div
                    onClick={() => {
                      handleCancel();
                    }}
                    className="d-flex cursor-pointer w-30px h-30px bg-white close-img align-items-center justify-content-center"
                  >
                    <i className="bi bi-x fs-3"></i>
                  </div>
                  <div
                    onClick={() => {
                      inputRef?.current?.click();
                    }}
                    className="d-flex edit-img cursor-pointer bg-white w-30px h-30px align-items-center justify-content-center"
                  >
                    <i className="fa-solid fa-pen-to-square fs-3"></i>{" "}
                    <input
                      ref={inputRef}
                      style={{ display: "none" }}
                      type="file"
                      name="avatar"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleImageChange}
                      multiple
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "FullName" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="محمد علي محمد"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Email" })}
                </p>
              </div>
              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="far fa-envelope special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="mahmoud_Ali@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "IDNumber" })}
                </p>
              </div>
              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="far fa-id-card special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="1234567"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Gender" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-venus-mars special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="ذكر"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-5 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Phone" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group ">
                  <div className="input-group-prepend">
                    <span className="input-group-text">966+</span>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="+96654685467"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5">
                  {" "}
                  {intl.formatMessage({ id: "Nationality" })}
                </p>
              </div>
              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bi bi-globe special"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="سعودي"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "MaritalStatus" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="special fas fa-ring"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="متزوج"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3 ">
              <div className="col-3 me-5">
                <p className="text-muted fs-5">
                  {" "}
                  {intl.formatMessage({ id: "DateOfBirth" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="special fas fa-calendar-week"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="19-10-1999"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3 me-5">
                <p className="text-muted fs-5 ">
                  {" "}
                  {intl.formatMessage({ id: "Address" })}
                </p>
              </div>

              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="special fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value="2929, ريحانه بنت زيد, حى العارض"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-7 d-flex justify-content-center align-items-center w-50 mx-auto">
            <Link
              to="/user-profile/overview"
              className="btn btn-secondary mx-1 text-center w-25"
            >
              {intl.formatMessage({ id: "Cancel" })}
            </Link>
            <div
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_edit"
              onClick={() => setModalEShow(true)}
              className="btn btn-primary mx-1 text-center w-25"
            >
              {intl.formatMessage({ id: "Save" })}
            </div>
          </div>
        </form>
      </div>
      <div className="modal fade" id="Rega_modal_edit" aria-hidden="true">
        <EditPopup handleCloseEdit={setModalEShow} showEdit={modalEShow} />
      </div>
    </Fragment>
  );
}

export default EditBasicInfoOverview;
