import React, { Fragment, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { getCurrentSystemLanguage } from "../../../../functions/language";

function LanguageAndForm() {
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
      <div className="card shadow p-7 mb-9">
        <p className="fw-bolder text-black fs-4 mb-5">
          {intl.formatMessage({ id: "LanguageAndForm" })}
        </p>
        <hr />
        <div className="w-100 position-relative mb-9 mt-9 ">
          <img
            src={`${
              imagePreview ? imagePreview : "/media/theme-img/header-bg.jpg"
            }`}
            alt=""
            className="h-300px w-75 border-radius-10 d-block mx-auto"
          />
          <div
            onClick={() => {
              handleCancel();
            }}
            className={`d-flex align-items-center justify-content-center cursor-pointer top-90  w-50px h-50px border-radius-50 bg-white position-absolute ${
              getCurrentSystemLanguage() == "ar" ? "left-10" : "right-10"
            }`}
          >
            <i className="bi bi-x fs-1 text-muted"></i>
          </div>
          <div
            onClick={() => {
              inputRef?.current?.click();
            }}
            className={`d-flex align-items-center justify-content-center w-50px h-50px border-radius-50 bg-white position-absolute top--5  cursor-pointer ${
              getCurrentSystemLanguage() == "ar" ? "left-10" : "right-10"
            }`}
          >
            <i className="fa-solid fa-pen-to-square fs-1 text-muted"></i>{" "}
            <input
              ref={inputRef}
              style={{ display: "none" }}
              type="file"
              name="avatar"
              accept=".png, .jpg, .jpeg"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <hr className="mb-7" />
        <div className="d-flex mb-7">
          <div className="w-25 d-flex ms-7">
            <span
              className={`fs-3 text-muted  ${
                getCurrentSystemLanguage() == "ar" ? "ms-9" : "me-9"
              }`}
            >
              <i className="fa-solid fa-moon fs-1"></i>
            </span>
            <span className="text-muted fs-3">
              {intl.formatMessage({ id: "NightMode" })}
            </span>
          </div>
          <select className="form-select  form-select-solid fw-bold fs-6 text-gray-600 w-400px d-inline-block ">
            <option selected value={intl.formatMessage({ id: "Active" })}>
              {intl.formatMessage({ id: "Active" })}
            </option>
            <option value={intl.formatMessage({ id: "Active" })}>
              {intl.formatMessage({ id: "NotActive" })}
            </option>
          </select>
        </div>
        <hr className="mb-7" />
        <div className="d-flex mb-7">
          <div className="w-25 d-flex ms-7">
            <span
              className={`fs-3 text-muted ${
                getCurrentSystemLanguage() == "ar" ? "ms-9" : "me-9"
              }`}
            >
              <i className="fa-solid fa-globe  fs-1"></i>
            </span>
            <span className="text-muted fs-3">
              {intl.formatMessage({ id: "SiteLanguage" })}
            </span>
          </div>
          <select
            className="form-select  form-select-solid fw-bold fs-6 text-gray-600 "
            style={{ display: "inline-block", width: "400px" }}
          >
            <option selected value={intl.formatMessage({ id: "Arabic" })}>
              {intl.formatMessage({ id: "Arabic" })}
            </option>
            <option value={intl.formatMessage({ id: "English" })}>
              {intl.formatMessage({ id: "English" })}
            </option>
          </select>
        </div>
      </div>
    </Fragment>
  );
}

export default LanguageAndForm;
