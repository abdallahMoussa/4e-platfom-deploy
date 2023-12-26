import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

function CurrentServiceReport() {
  let intl = useIntl();
  let [activeApps, setActiveApps] = useState(true);
  let [activeEmail, setActiveEmail] = useState(false);
  let [activeHardware, setActiveHardware] = useState(false);
  let [activeSoftware, setActiveSoftware] = useState(false);
  let [activeNetwork, setActiveNetwork] = useState(false);
  let [activeTelephone, setActiveTelephone] = useState(false);
  let [activeData, setActiveData] = useState(false);
  let [activeUser, setActiveUser] = useState(false);
  let [activeInstitute, setActiveInstitute] = useState(false);
  let [activeRequests, setActiveRequests] = useState(false);
  let activeAppsHandler = () => {
    setActiveApps(true);
    setActiveEmail(false);
    setActiveHardware(false);
    setActiveSoftware(false);
    setActiveNetwork(false);
    setActiveTelephone(false);
    setActiveData(false);
    setActiveUser(false);
    setActiveInstitute(false);
    setActiveRequests(false);
  };
  let activeEmailHandler = () => {
    setActiveApps(false);
    setActiveEmail(true);
    setActiveHardware(false);
    setActiveSoftware(false);
    setActiveNetwork(false);
    setActiveTelephone(false);
    setActiveData(false);
    setActiveUser(false);
    setActiveInstitute(false);
    setActiveRequests(false);
  };
  let activeHardwareHandler = () => {
    setActiveApps(false);
    setActiveEmail(false);
    setActiveHardware(true);
    setActiveSoftware(false);
    setActiveNetwork(false);
    setActiveTelephone(false);
    setActiveData(false);
    setActiveUser(false);
    setActiveInstitute(false);
    setActiveRequests(false);
  };
  let activeSoftwareHandler = () => {
    setActiveApps(false);
    setActiveEmail(false);
    setActiveHardware(false);
    setActiveSoftware(true);
    setActiveNetwork(false);
    setActiveTelephone(false);
    setActiveData(false);
    setActiveUser(false);
    setActiveInstitute(false);
    setActiveRequests(false);
  };
  let activeNetworkHandler = () => {
    setActiveApps(false);
    setActiveEmail(false);
    setActiveHardware(false);
    setActiveSoftware(false);
    setActiveNetwork(true);
    setActiveTelephone(false);
    setActiveData(false);
    setActiveUser(false);
    setActiveInstitute(false);
    setActiveRequests(false);
  };
  let activeTelephoneHandler = () => {
    setActiveApps(false);
    setActiveEmail(false);
    setActiveHardware(false);
    setActiveSoftware(false);
    setActiveNetwork(false);
    setActiveTelephone(true);
    setActiveData(false);
    setActiveUser(false);
    setActiveInstitute(false);
    setActiveRequests(false);
  };
  let activeDataHandler = () => {
    setActiveApps(false);
    setActiveEmail(false);
    setActiveHardware(false);
    setActiveSoftware(false);
    setActiveNetwork(false);
    setActiveTelephone(false);
    setActiveData(true);
    setActiveUser(false);
    setActiveInstitute(false);
    setActiveRequests(false);
  };
  let activeUserHandler = () => {
    setActiveApps(false);
    setActiveEmail(false);
    setActiveHardware(false);
    setActiveSoftware(false);
    setActiveNetwork(false);
    setActiveTelephone(false);
    setActiveData(false);
    setActiveUser(true);
    setActiveInstitute(false);
    setActiveRequests(false);
  };
  let activeInstituteHandler = () => {
    setActiveApps(false);
    setActiveEmail(false);
    setActiveHardware(false);
    setActiveSoftware(false);
    setActiveNetwork(false);
    setActiveTelephone(false);
    setActiveData(false);
    setActiveUser(false);
    setActiveInstitute(true);
    setActiveRequests(false);
  };
  let activeRequestsHandler = () => {
    setActiveApps(false);
    setActiveEmail(false);
    setActiveHardware(false);
    setActiveHardware(false);
    setActiveSoftware(false);
    setActiveNetwork(false);
    setActiveTelephone(false);
    setActiveData(false);
    setActiveUser(false);
    setActiveInstitute(false);
    setActiveRequests(true);
  };

  return (
    <Fragment>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start"
      >
        <div className="content flex-row-fluid " id="kt_content">
          <div className="w-100 row  d-flex justify-content-between ">
            <div
              className="nav col-3 pt-7 card shadow h-fit pb-9  d-flex  flex-column nav-pills mb-3   background-pills "
              id="pills-tab"
              role="tablist"
            >
              <h5 className="me-3 pt-2 h-30px px-6 mb-3">
                {intl.formatMessage({ id: "MainClassification" })}{" "}
              </h5>
              <div
                className="nav-item  h-fit w-90 navTabsPills"
                role="presentation"
              >
                <button
                  className={`nav-link w-100 m-1 fs-5 fw-bolder d-flex justify-content-start align-items-center ps-3  ${
                    activeApps
                      ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                      : "text-muted"
                  }`}
                  id="apps-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#apps"
                  type="button"
                  role="tab"
                  aria-controls="options"
                  aria-selected="true"
                  onClick={() => {
                    activeAppsHandler();
                  }}
                >
                  <i className="fas fa-shapes ms-2 me-3 fs-3 fw-bolder"></i>
                  <div>
                    <span className="fw-bolder fs-7">التطبيقات -</span>
                    <span className="fw-bolder fs-7 me-2">Applications</span>
                  </div>
                </button>
              </div>
              <div className="nav-item  w-90 navTabsPills" role="presentation">
                <button
                  className={`nav-link  w-100 m-1 fs-5 fw-bolder d-flex justify-content-start align-items-center ps-3  ${
                    activeEmail
                      ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                      : "text-muted"
                  }`}
                  id="apps-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#email"
                  type="button"
                  role="tab"
                  aria-controls="email"
                  aria-selected="true"
                  onClick={() => {
                    activeEmailHandler();
                  }}
                >
                  <i
                    className="fas fa-envelope ms-2 me-3 fs-3 fw-bolder primary"
                    style={{ color: "#6bd098" }}
                  ></i>
                  {/* <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i> */}
                  <div>
                    <span className="fw-bolder fs-7">البريد الالكتروني-</span>
                    <span className="fw-bolder fs-7 me-2">Email</span>
                  </div>
                </button>
              </div>
              <div className="nav-item  w-90 navTabsPills" role="presentation">
                <button
                  className={`nav-link  w-100 m-1 fs-5 fw-bolder d-flex justify-content-start align-items-center ps-3  ${
                    activeHardware
                      ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                      : "text-muted"
                  }`}
                  id="hardware-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#hardware"
                  type="button"
                  role="tab"
                  aria-controls="hardware"
                  aria-selected="true"
                  onClick={() => {
                    activeHardwareHandler();
                  }}
                >
                  <i
                    className="fas fa-tv ms-2 me-3 fs-3 fw-bolder"
                    style={{ color: "#d4c3fa" }}
                  ></i>
                  <div>
                    <span className="fw-bolder fs-7">الاجهزه وملحقاتها-</span>
                    <span className="fw-bolder fs-7 me-2">Hardware</span>
                  </div>
                </button>
              </div>
              <div className="nav-item w-90 navTabsPills" role="presentation">
                <button
                  className={`nav-link  w-100 m-1 fs-7 fw-bolder d-flex justify-content-start align-items-center ps-3  ${
                    activeNetwork
                      ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                      : "text-muted"
                  }`}
                  id="network-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#network"
                  type="button"
                  role="tab"
                  aria-controls="network"
                  aria-selected="true"
                  onClick={() => {
                    activeNetworkHandler();
                  }}
                >
                  <i
                    className="far fa-wifi ms-2 me-3 fs-3 fw-bolder"
                    style={{ color: "#f6a7b1" }}
                  ></i>
                  <div>
                    <span className="fw-bolder fs-7 mx-1">
                      الانترنت والشبكات-
                    </span>
                    <span className="fw-bolder fs-7 me-2">Network</span>
                  </div>
                </button>
              </div>
              <div className="nav-item w-90 navTabsPills" role="presentation">
                <button
                  className={`nav-link w-100 m-1 fs-5 fw-bolder d-flex justify-content-start align-items-center ps-3  ${
                    activeSoftware
                      ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                      : "text-muted"
                  }`}
                  id="software-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#software"
                  type="button"
                  role="tab"
                  aria-controls="software"
                  aria-selected="true"
                  onClick={() => {
                    activeSoftwareHandler();
                  }}
                >
                  <i
                    className="fas fa-wrench ms-2 me-3 fs-3 fw-bolder"
                    style={{ color: "#d4c3fa" }}
                  ></i>{" "}
                  <div>
                    <span className="fw-bolder fs-7">البرامج-</span>
                    <span className="fw-bolder fs-7 me-2">Softwares</span>
                  </div>
                </button>
              </div>
              <div className="nav-item  w-90 navTabsPills" role="presentation">
                <button
                  className={`nav-link w-100 m-1 fs-5 fw-bolder d-flex justify-content-start align-items-center ps-3  ${
                    activeTelephone
                      ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                      : "text-muted"
                  }`}
                  id="telephone-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#telephone"
                  type="button"
                  role="tab"
                  aria-controls="telephone"
                  aria-selected="true"
                  onClick={() => {
                    activeTelephoneHandler();
                  }}
                >
                  <i
                    className="fas fa-phone-volume  ms-2 me-3 fs-3 fw-bolder"
                    style={{ color: "#6bd098" }}
                  ></i>
                  <div>
                    <span className="fw-bolder fs-7">الهاتف-</span>
                    <span className="fw-bolder fs-7 me-2">Telephony</span>
                  </div>
                </button>
              </div>
              <div className="nav-item w-90 navTabsPills" role="presentation">
                <button
                  className={`nav-link  w-100 m-1 fs-5 fw-bolder d-flex justify-content-start align-items-center ps-3  ${
                    activeData
                      ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                      : "text-muted"
                  }`}
                  id="data-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#data"
                  type="button"
                  role="tab"
                  aria-controls="data"
                  aria-selected="true"
                  onClick={() => {
                    activeDataHandler();
                  }}
                >
                  <i
                    className="far fa-database ms-2 me-3 fs-3 fw-bolder"
                    style={{ color: "#d4c3fa" }}
                  ></i>
                  <div>
                    <span className="fw-bolder fs-7">مركز البيانات-</span>
                    <span className="fw-bolder fs-7 me-2">Data center</span>
                  </div>
                </button>
              </div>
              <div className="nav-item w-90 navTabsPills" role="presentation">
                <button
                  className={`nav-link  w-100 m-1 fs-5 fw-bolder d-flex justify-content-start align-items-center ps-3  ${
                    activeUser
                      ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                      : "text-muted"
                  }`}
                  id="user-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#user"
                  type="button"
                  role="tab"
                  aria-controls="user"
                  aria-selected="true"
                  onClick={() => {
                    activeUserHandler();
                  }}
                >
                  <i
                    className="fad fa-user ms-2 me-3 fs-3 fw-bolder"
                    style={{ color: "#faccd2" }}
                  ></i>
                  {/* // <i className="bi bi-plus-lg "></i> */}
                  <div>
                    <span className="fw-bolder fs-7 me-2">Usermangmment</span>
                  </div>
                </button>
              </div>
              <div className="nav-item  w-90 navTabsPills" role="presentation">
                <button
                  className={`nav-link w-100 m-1 fs-5 fw-bolder d-flex justify-content-start align-items-center ps-3  ${
                    activeInstitute
                      ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                      : "text-muted"
                  }`}
                  id="institute-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#institute"
                  type="button"
                  role="tab"
                  aria-controls="institute"
                  aria-selected="true"
                  onClick={() => {
                    activeInstituteHandler();
                  }}
                >
                  <i
                    className="fas fa-book ms-2 me-3 fs-3 fw-bolder"
                    style={{ color: "#ffcf4b" }}
                  ></i>
                  <div>
                    <span className="fw-bolder fs-7 me-2">المعهد العقاري</span>
                  </div>
                </button>
              </div>
              <div className="nav-item  w-90  navTabsPills" role="presentation">
                <button
                  className={`nav-link  w-100 m-1 fs-5 fw-bolder d-flex justify-content-start align-items-center ps-3  ${
                    activeRequests
                      ? "rounded-0 active  btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                      : "text-muted"
                  }`}
                  id="requests-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#requests"
                  type="button"
                  role="tab"
                  aria-controls="requests"
                  aria-selected="true"
                  onClick={() => {
                    activeRequestsHandler();
                  }}
                >
                  <i
                    className="far fa-file-alt ms-2 me-3 fs-3 fw-bolder"
                    style={{ color: "#009ef7" }}
                  ></i>
                  <div>
                    <span className="fw-bolder fs-7 me-2">
                      طلبات مكتب الرئيس التنفيذي
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div className="tab-content col-9 px-2 " id="pills-tabContent">
              <div
                className="card mb-5 mb-xl-10 shadow pb-5 tab-pane fade show active"
                id="apps"
                role="tabpanel"
                aria-labelledby="apps-tab"
              >
                <div className="card-body pt-5 pb-0">
                  <h5 className="me-3 pt-2 h-30px px-4 mb-5">
                    {intl.formatMessage({ id: "SubCategory" })}{" "}
                  </h5>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      {" "}
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        {intl.formatMessage({
                          id: "AdministrativeCommunications",
                        })}{" "}
                        AC system{" "}
                      </p>
                      <p className="px-2 mb-0  pb-2 fw-bolder text-muted">
                        This template is used when an application issue is
                        occured
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        مشكله تطبيقات نظام الموارد المؤسسيه/ Application issue
                      </p>
                      <p className="px-2 mb-0  pb-2 fw-bolder text-muted">
                        This template is used when an application crashes /hangs
                        frequently
                      </p>
                    </Link>
                  </div>

                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        Database
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        نظام تمام EPM
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        نظام الارشفه Archiving
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder ">
                        Database
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        نظام تمام EPM
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        البوابه الذاتيه SelfService
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        الانظمه system
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        البوابه الداخليه
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        المؤشرات العقاريه
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        الملكيه
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-2  mb-3 w-100 my-gray-dash-border">
                    <Link
                      to="/current-service-report/add-current-service"
                      className="text-white text-hover-primary"
                    >
                      <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                        موقع الهيئه العامه للعقار الخارجي
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-3  mb-3 w-100 my-gray-dash-border">
                    <p className="pb-2 mb-2 text-primary -50 fs-5 fw-bolder">
                      نظام الاداء المؤسسي
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show "
                id="email"
                role="tabpanel"
                aria-labelledby="email-tab"
              >
                <div className="h-300px card fs-4 d-flex justify-content-center align-items-center">
                  email tab
                </div>
              </div>

              <div
                className="tab-pane fade show"
                id="hardware"
                role="tabpanel"
                aria-labelledby="hardware-tab"
              >
                <div className="h-300px card fs-4 d-flex justify-content-center align-items-center">
                  Hardware tab
                </div>{" "}
              </div>

              <div
                className="tab-pane fade show"
                id="network"
                role="tabpanel"
                aria-labelledby="network-tab"
              >
                <div className="h-300px card fs-4 d-flex justify-content-center align-items-center">
                  Network tab
                </div>{" "}
              </div>

              <div
                className="tab-pane fade show "
                id="software"
                role="tabpanel"
                aria-labelledby="software-tab"
              >
                <div className="h-300px card fs-4 d-flex justify-content-center align-items-center">
                  Software tab
                </div>
              </div>

              <div
                className="tab-pane fade show"
                id="telephone"
                role="tabpanel"
                aria-labelledby="telephone-tab"
              >
                <div className="h-300px card fs-4 d-flex justify-content-center align-items-center">
                  Telephone tab
                </div>
              </div>

              <div
                className="tab-pane fade show "
                id="data"
                role="tabpanel"
                aria-labelledby="data-tab"
              >
                <div className="h-300px card fs-4 d-flex justify-content-center align-items-center">
                  Data tab
                </div>
              </div>

              <div
                className="tab-pane fade show "
                id="user"
                role="tabpanel"
                aria-labelledby="user-tab"
              >
                <div className="h-300px card fs-4 d-flex justify-content-center align-items-center">
                  User tab
                </div>{" "}
              </div>

              <div
                className="tab-pane fade show "
                id="institute"
                role="tabpanel"
                aria-labelledby="institute-tab"
              >
                <div className="h-300px card fs-4 d-flex justify-content-center align-items-center">
                  Institute tab
                </div>
              </div>

              <div
                className="tab-pane fade show "
                id="requests"
                role="tabpanel"
                aria-labelledby="requests-tab"
              >
                <div className="h-300px card fs-4 d-flex justify-content-center align-items-center">
                  requests tab
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CurrentServiceReport;
