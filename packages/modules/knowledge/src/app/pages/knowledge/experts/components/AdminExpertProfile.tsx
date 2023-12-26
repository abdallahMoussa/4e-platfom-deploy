import { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { experiences } from "./TabelData";
import { SystemPagination } from "../../../../../app/pages/partials/SystemPagination";

const AdminExpertProfile = () => {
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
        <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-md-nowrap flex-sm-nowrap justify-content-between">
          <p
            style={{ fontWeight: "700", fontSize: "18px", color: "#181C32" }}
            className="mb-3 mt-3 w-75"
          >
            {intl.formatMessage({ id: "ProfileExpert" })}{" "}
          </p>
          <div
            role="button"
            style={{ border: "#F2F2F2 1px solid" }}
            className="p-2 mx-1"
          >
            <i className="fa-regular fa-heart mx-1 fs-6 fa-fw"></i>

            {intl.formatMessage({ id: "AddToFavorite" })}
          </div>
          <div className="p-2 mx-1">
            <label htmlFor="AreYouAnExpert">
              {intl.formatMessage({ id: "AreYouAnExpert" })}
            </label>
            <input
              className="form-check-input mx-2"
              type="checkbox"
              value=""
              id="AreYouAnExpert"
            />
          </div>
        </div>
        <div className="row mb-7 mt-5">
          <label className="col-lg-2 mb-2 mb-lg-0 fw-semibold text-muted">
            {intl.formatMessage({ id: "ProfilePicture" })}
          </label>

          <div className="col-lg-9">
            <div>
              <img
                src="/media/avatars/300-3.jpg"
                className="image-input-wrapper w-125px h-125px"
                alt="avatar"
              />
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
            {intl.formatMessage({ id: "AboutTheExpert" })}{" "}
          </label>

          <div className="col-lg-9 mb-5">
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

          <div className="row mb-7">
            <p
              className="col-lg-2 ms-3 mb-3 fw-semibold"
              style={{ color: "#A1A5B7", fontWeight: "700", fontSize: "16px" }}
            >
              {intl.formatMessage({ id: "ExperiencesData" })}{" "}
            </p>
            <hr />
            <div className="table-responsive mt-4">
              <table
                className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-7"
                id="REGA-WS-caseList"
              >
                <thead>
                  <tr className="fw-bolder text-muted">
                    <th className="min-w-50px text-center">
                      {intl.formatMessage({ id: "Sequence" })}
                    </th>
                    <th className="min-w-150px text-center">
                      {intl.formatMessage({ id: "ExperienceName" })}
                    </th>
                    <th className="min-w-150px text-center">
                      {intl.formatMessage({ id: "YearsOfExperience" })}
                    </th>
                    <th className="min-w-150px text-center">
                      {intl.formatMessage({ id: "Specialization" })}
                    </th>
                    <th className="min-w-100px text-center">
                      {intl.formatMessage({ id: "PlaceOfPractice" })}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {experiences?.map((experience: any) => {
                    return (
                      <Fragment key={Math.random()}>
                        <tr style={{ verticalAlign: "middle" }}>
                          <td style={{ verticalAlign: "middle" }}>
                            <p className="text-center">{experience?.id}</p>
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <p className="text-center">{experience?.name}</p>
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <p className="text-center">
                              {experience?.numberOfYears}
                            </p>
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <p className="text-center">{experience?.field}</p>
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <p className="text-center">
                              {experience?.companyLocation}
                            </p>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <SystemPagination />
          </div>

          <div className="d-flex justify-content-center mt-5">
            <Link
              to="/knowledge-experts-edit-expert"
              className="btn btn-primary"
            >
              <i className="fa-regular fa-pen-to-square mx-2 fs-4 fa-fw"></i>
              {intl.formatMessage({ id: "Edit" })}
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { AdminExpertProfile };
