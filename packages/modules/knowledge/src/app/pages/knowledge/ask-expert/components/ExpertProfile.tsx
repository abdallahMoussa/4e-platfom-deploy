import React, { Fragment, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AddPopup } from "../../../partials/AddPopup";
import { useIntl } from "react-intl";

const ExpertProfile = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const intl = useIntl();

  const [imagePreview, setImagePreview] = useState<string>(
    "/media/avatars/blank-img.png"
  );
  const [file, setFile] = useState<File | null>(null);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setFile(file);
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

  function handleCancel() {
    setImagePreview("/media/avatars/blank-img.png");
    setFile(null);
  }

  function handleRemove() {
    setImagePreview("/media/avatars/blank-img.png");
    setFile(null);
  }
  return (
    <Fragment>
      <div className="card p-5" style={{ height: "fitContent" }}>
        <div className="d-flex align-items-center justify-content-between">
          <p
            style={{ fontWeight: "700", fontSize: "18px", color: "#181C32" }}
            className="mb-3 mt-3 w-75"
          >
            {intl.formatMessage({ id: "ProfileExpert" })}{" "}
          </p>
          <div
            role="button"
            style={{ border: "#F2F2F2 1px solid" }}
            className="p-1"
          >
            <i className="fa-regular fa-heart mx-1 fs-6 fa-fw"></i>

            {intl.formatMessage({ id: "AddToFavorite" })}
          </div>
        </div>
        <div className="row mb-7 mt-5">
          <label className="col-lg-2 mb-2 mb-lg-0 fw-semibold text-muted">
            {intl.formatMessage({ id: "ProfilePicture" })}
          </label>

          <div className="col-lg-9">
            <div
              className="image-input image-input-outline px-5"
              data-kt-image-input="true"
              style={{
                backgroundImage: `url(${"/media/svg/brand-logos/plurk.svg"})`,
              }}
            >
              <div
                className="image-input-wrapper w-125px h-125px"
                style={{ backgroundImage: `url(${imagePreview})` }}
              ></div>

              <label
                className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow "
                data-kt-image-input-action="change"
                data-bs-toggle="tooltip"
                data-bs-dismiss="click"
                title="Change avatar"
              >
                <i className="fas fa-edit">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>

                <input
                  type="file"
                  name="avatar"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleImageChange}
                />
                {file && <input type="hidden" name="avatar_remove" />}
              </label>

              {file && (
                <span
                  className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="cancel"
                  data-bs-toggle="tooltip"
                  data-bs-dismiss="click"
                  title="Cancel avatar"
                  onClick={handleCancel}
                >
                  <i className="fas fa-xmark "></i>
                </span>
              )}

              {file && (
                <span
                  className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="remove"
                  data-bs-toggle="tooltip"
                  data-bs-dismiss="click"
                  title="Remove avatar"
                  onClick={handleRemove}
                >
                  <i className="fas fa-xmark "></i>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="row mb-7">
          <label
            htmlFor="name"
            className="col-lg-2 ms-3 mb-2 mb-lg-0 fw-semibold "
            style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
          >
            {intl.formatMessage({ id: "FullName" })}
          </label>

          <div className="col-lg-9 ">
            <p
              style={{ fontWeight: "700", fontSize: "16px", color: "#181C32" }}
            >
              محمد علي محمد
            </p>
          </div>
        </div>

        <div className="row mb-7">
          <label
            style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
            className="col-lg-2 ms-3  mb-2 mb-lg-0 fw-semibold "
          >
            {intl.formatMessage({ id: "Email" })}
          </label>

          <div className="col-lg-9 ">
            <p
              style={{ fontWeight: "700", fontSize: "16px", color: "#181C32" }}
            >
              mhmd@gmail.com
            </p>
          </div>
        </div>

        <div className="row mb-7">
          <label
            style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
            className="col-lg-2 ms-3 mb-2 mb-lg-0 fw-semibold "
          >
            {intl.formatMessage({ id: "Phone" })}
          </label>

          <div className="col-lg-9 ">
            <p
              style={{ fontWeight: "700", fontSize: "16px", color: "#181C32" }}
            >
              +989559595959494
            </p>
          </div>
        </div>

        <div className="row mb-7">
          <label
            className="col-lg-2 ms-3 mb-2 mb-lg-0 fw-semibold "
            style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
          >
            {intl.formatMessage({ id: "Nationality" })}
          </label>

          <div className="col-lg-9 ">
            <p
              style={{ fontWeight: "700", fontSize: "16px", color: "#181C32" }}
            >
              سعودي
            </p>
          </div>
        </div>

        <div className="row mb-7">
          <label
            className="col-lg-2 ms-3 mb-2 mb-lg-0 fw-semibold"
            style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
          >
            {intl.formatMessage({ id: "BirthDay" })}
          </label>

          <div className="col-lg-9 ">
            <p
              style={{ fontWeight: "700", fontSize: "16px", color: "#181C32" }}
            >
              19-10-1999
            </p>
          </div>
        </div>
        <div className="row mb-7">
          <label
            className="col-lg-2 ms-3 mb-2 mb-lg-0 fw-semibold "
            style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
          >
            {intl.formatMessage({ id: "Address" })}{" "}
          </label>

          <div className="col-lg-9 ">
            <p
              style={{ fontWeight: "700", fontSize: "16px", color: "#181C32" }}
            >
              2929,ريحانه بنت زيد , حي العارض
            </p>
          </div>
        </div>

        <div className="row mb-7">
          <label
            className="col-lg-2 ms-3 mb-2 mb-lg-0 fw-semibold "
            style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
          >
            {intl.formatMessage({ id: "YearsOfExperience" })}{" "}
          </label>

          <div className="col-lg-9 ">
            <p
              style={{ fontWeight: "700", fontSize: "16px", color: "#181C32" }}
            >
              5 سنوات
            </p>
          </div>
        </div>

        <div className="row mb-7">
          <label
            className="col-lg-2 ms-3 mb-2 mb-lg-0 fw-semibold "
            style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
          >
            {intl.formatMessage({ id: "Specialization" })}{" "}
          </label>

          <div className="col-lg-9 ">
            <p
              style={{ fontWeight: "700", fontSize: "16px", color: "#181C32" }}
            >
              خبير الشؤون القانوينه
            </p>
          </div>
        </div>

        <div className="row mb-7">
          <label
            className="col-lg-2 ms-3 mb-2 mb-lg-0 fw-semibold "
            style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
          >
            {intl.formatMessage({ id: "Experiences" })}{" "}
          </label>
          <div className="col-lg-9 ">
            <ul className="custom-list d-flex align-items-center justify-content-between flex-wrap">
              <Fragment>
                <li className="mb-3">
                  <p
                    style={{
                      fontWeight: "700",
                      color: "#181C32",
                      fontSize: "14px",
                    }}
                    className="mb-3"
                  >
                    اسم الخبره (استشاري قانوني)
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      color: "#181C32",
                      fontSize: "14px",
                    }}
                    className="mb-3"
                  >
                    اسم المكان الذي عمل به
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      color: "#A1A5B7",
                      fontSize: "14px",
                    }}
                    className="mb-3"
                  >
                    من 25 مارس 2010 - ابريل 2022
                  </p>
                </li>
                <li className="mb-3">
                  <p
                    style={{
                      fontWeight: "700",
                      color: "#181C32",
                      fontSize: "14px",
                    }}
                    className="mb-3"
                  >
                    اسم الخبره (استشاري قانوني)
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      color: "#181C32",
                      fontSize: "14px",
                    }}
                    className="mb-3"
                  >
                    اسم المكان الذي عمل به
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      color: "#A1A5B7",
                      fontSize: "14px",
                    }}
                    className="mb-3"
                  >
                    من 25 مارس 2010 - ابريل 2022
                  </p>
                </li>
                <li className="mb-3">
                  <p
                    style={{
                      fontWeight: "700",
                      color: "#181C32",
                      fontSize: "14px",
                    }}
                    className="mb-3"
                  >
                    اسم الخبره (استشاري قانوني)
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      color: "#181C32",
                      fontSize: "14px",
                    }}
                    className="mb-3"
                  >
                    اسم المكان الذي عمل به
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      color: "#A1A5B7",
                      fontSize: "14px",
                    }}
                    className="mb-3"
                  >
                    من 25 مارس 2010 - ابريل 2022
                  </p>
                </li>
              </Fragment>
            </ul>
          </div>
        </div>

        <div className="row mb-7">
          <label
            className="col-lg-2 ms-3 mb-2 mb-lg-0 fw-semibold "
            style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
          >
            {intl.formatMessage({ id: "AboutTheExpert" })}{" "}
          </label>

          <div className="col-lg-9 ">
            <p
              style={{ fontWeight: "400", color: "#A1A5B7", fontSize: "14px" }}
            >
              الخبير محمد عبد الله هو الخبير الاقتصاد الدولي ومعلومات عن الخبير
              ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات
              عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير
              ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات
              عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير
              ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات
              عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير
              ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات
              عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير ومعلومات عن الخبير
              ومعلومات عن الخبير ومعلومات عن الخبير
            </p>
          </div>
          <form style={{ width: "100%", height: "fitContent" }} noValidate>
            <div className="my-5">
              <label htmlFor="notes" className="form-label px-2 mb-2 fontSz-4">
                {intl.formatMessage({ id: "WriteQuestionToExpert" })}
              </label>
              <textarea
                id="notes"
                className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 h-150px"
                placeholder={intl.formatMessage({ id: "ExpertQuestion" })}
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary"
                type="button"
                // data-kt-element="send"
                // data-bs-toggle="modal"
                // data-bs-target="#Rega_modal_add"
                onClick={() => setModalShow(true)}
              >
                {intl.formatMessage({ id: "Send" })}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
    </Fragment>
  );
};

export { ExpertProfile };
