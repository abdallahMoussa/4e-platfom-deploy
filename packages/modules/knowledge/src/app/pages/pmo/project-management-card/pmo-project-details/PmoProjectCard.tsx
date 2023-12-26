import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import ProjectCardCheckBoxDropDown from "./ProjectCardCheckBoxDropDown";
import CLoseProjectPopup from "./close-project-popup";
import AddAnExistingProject from "./project-details/popup/add-existing-project-popup";

interface MyComponentProps {
  ActiveNav: string;
}

const PmoProjectCard: FC<MyComponentProps> = ({ ActiveNav }) => {
  const intl = useIntl();
  const [selected, setSelected] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const usersImage = [
    "/media/avatars/arab.png",
    "/media/avatars/arab.png",
    "/media/avatars/300-3.jpg",
    "/media/avatars/arab.png",
    "/media/avatars/300-3.jpg",
    "/media/avatars/arab.png",
  ];
  const optionsOne = [
    {
      id: 1,
      name: intl.formatMessage({ id: "Canceled" }),
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "Pending" }),
    },
  ];

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="card mb-6 mb-xl-9">
        <div className="card-body pt-9 pb-0">
          <div className="row m-auto my-4">
            <div className="col-12 col-lg-2 col-md-2 h-100px h-lg-auto d-flex justify-content-center text-center mb-2">
              <div className="d-flex flex-center  bg-light rounded w-100px h-100px w-lg-150px h-lg-150px mx-5 mb-4">
                <img
                  src="/media/theme-img/logo-sm.png"
                  className="w-125px h-125px"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-12 col-lg-10 col-md-10">
              <div className="row">
                <div className="col-lg-4 my-2 col-md-4 col-sm-4 col-12">
                  <div className="d-flex justify-content-between flex-column flex-md-row">
                    <div className="d-flex flex-column  mb-1">
                      <h5 className="mb-3 fw-bloder fs-5 ">
                        {intl.formatMessage({ id: "ProjectName" })}
                      </h5>
                      <div className="d-flex align-items-center">
                        <span className="bullet bullet-dot bg-success me-5"></span>
                        <p className="mb-0 text-muted fs-7 mb-2">
                          {intl.formatMessage({ id: "DepartmentName" })}{" "}
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="bullet bullet-dot bg-primary me-5"></span>
                        <p className="mb-0 text-muted fs-7">
                          {intl.formatMessage({ id: "CompanyName" })}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 my-2 col-sm-4 col-12">
                  <div className="w-150px w-sm-100 w-xs-100">
                    <ProjectCardCheckBoxDropDown
                      selectedOption={selected}
                      setSelectedOption={setSelected}
                      options={optionsOne}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 my-2 col-sm-4 col-12">
                  <div className="d-flex justify-content-end flex-column flex-md-row">
                    <Link to="/pmo-close-project">
                      <div className="btn  btn-primary me-3 w-sm-100 w-xs-100">
                        {" "}
                        {intl.formatMessage({ id: "projectClosing" })}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Dates */}
              <div className="row">
                <div className="col-lg-7 col-12 col-md-7 my-2">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="border border-gray-300 border-dashed rounded text-center min-w-125px py-3 px-4 me-auto mb-3">
                      <p className="mb-1 fw-blod">29/01/2022</p>
                      <p className="mb-0 text-muted">
                        {" "}
                        {intl.formatMessage({ id: "StartDate" })}{" "}
                      </p>
                    </div>
                    <div className="border border-gray-300 border-dashed rounded text-center min-w-125px py-3 px-4 me-auto mb-3">
                      <p className="mb-1 fw-bold ">365 يوم</p>
                      <p className="mb-0 text-muted">
                        {intl.formatMessage({ id: "ProjectDuration" })}
                      </p>
                    </div>
                    <div className="border border-gray-300 border-dashed rounded text-center min-w-125px py-3 px-4 me-auto mb-3">
                      <p className="mb-1 fw-bold ">$1,750,000</p>
                      <p className="mb-0 text-muted">
                        {" "}
                        {intl.formatMessage({ id: "ProjectBudget" })}
                      </p>
                    </div>
                    <div className="border border-gray-300 border-dashed rounded text-center min-w-125px py-3 px-4 me-auto mb-3">
                      <p className="mb-1 fw-bold ">$500,000</p>
                      <p className="mb-0 text-muted">
                        {" "}
                        {intl.formatMessage({ id: "OutgoingValue" })}
                      </p>
                    </div>
                  </div>
                </div>
                {/*  users Images */}
                <div className="col-lg-5 col-12 col-md-5 my-2">
                  <div className="symbol-group symbol-hover mb-3">
                    <div
                      className="symbol symbol-35px symbol-circle"
                      data-bs-toggle="tooltip"
                      data-bs-original-title="Alan Warden"
                      data-kt-initialized="1"
                    >
                      <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                        A
                      </span>
                    </div>
                    {usersImage.map((imgSrc, index) => (
                      <div
                        key={index}
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Michael Eberon"
                        data-bs-original-title="Michael Eberon"
                        data-kt-initialized="1"
                      >
                        <img src={imgSrc} alt="Pic" />
                      </div>
                    ))}
                    <div
                      className="symbol symbol-35px symbol-circle"
                      data-bs-toggle="tooltip"
                      data-bs-original-title="Perry Matthew"
                      data-kt-initialized="1"
                    >
                      <span className="symbol-label bg-info text-inverse-info fw-bold">
                        P
                      </span>
                    </div>
                    <a
                      className="symbol symbol-35px symbol-circle"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_view_users"
                    >
                      <span
                        className="symbol-label bg-dark text-inverse-dark fs-8 fw-bold"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-original-title="View more users"
                        data-kt-initialized="1"
                      >
                        +42
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Tabs */}
            <div className="separator"></div>
            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-7 fw-bold">
              <li className="nav-item">
                <Link
                  to={`/pmo-project-details`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "mainSection" ? "active" : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "Home" })}{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/pmo-project-tasks`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "tasks" ? "active" : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "Tasks" })}{" "}
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to={`/pmo-project-details-tab`} className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${ActiveNav == "projectDetails" ? "active" : ""}`} role="button">
                  {intl.formatMessage({ id: "ProjectDetails" })}{" "}
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  to={`/pmo-project-documents`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "projectDocuments" ? "active" : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "ProjectDocuments" })}{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/pmo-project-calender`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "calender" ? "active" : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "Calender" })}{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/pmo-project-outputs`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "outputs" ? "active" : ""
                  }`}
                  role="button"
                >
                  {" "}
                  {intl.formatMessage({ id: "Outputs" })}{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/pmo-project-approvals`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "approvals" ? "active" : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "Approvals" })}{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/pmo-project-risks-challenges`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "risksAndChallenges" ? "active" : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "RisksAndChallenges" })}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/pmo-project-change-requests`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "changeRequests" ? "active" : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "ChangeRequests" })}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/pmo-project-payments-table`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "paymentTable" ? "active" : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "PaymentsTable" })}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/pmo-project-lessons-learned`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "lessonsLearned" ? "active" : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "LessonsLearned" })}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/pmo-project-settings`}
                  className={`w-fit btn d-flex btn-active-color-primary justify-content-center align-items-center rounded-0 bg-transparent border-0 ms-2 px-2 py-5 fs-6  fw-bolder  border border-bottom border-white border-2  ${
                    ActiveNav == "settings" ? "active" : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "Settings" })}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CLoseProjectPopup onClose={handleClosePopup} />
    </>
  );
};

export { PmoProjectCard };
