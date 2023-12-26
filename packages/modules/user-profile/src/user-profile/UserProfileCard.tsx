import { FC, Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

interface MyComponentProps {
  ActiveNav: string;
}

const UserProfileCard: FC<MyComponentProps> = ({ ActiveNav }) => {
  const intl = useIntl();
  return (
    <>
      <div className="card mb-6 mb-xl-9">
        <div className="card-body pt-9 pb-0">
          <div className="row m-auto my-4">
            <div className="col-2 col-lg-2 h-100px h-lg-auto ">
              <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px mx-5 mb-4">
                <img
                  src="/media/avatars/300-3.jpg"
                  className="w-125px h-125px"
                  style={{borderRadius:"10px"}}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-8 col-lg-10">
              <div>
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between flex-column flex-lg-row pb-3 my-4 ">
                    <div className="col-lg-6">
                      <div className="d-flex justify-content-between flex-column flex-md-row">
                        <div className="d-flex flex-column align-items-center mb-1">
                          <h2 className="mb-3 fw-bolder text-black ">محمود علي محمد</h2>
                          <p className="mb-0 text-muted fs-5">
                            مسئول رقابه- اداره الرقابه
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row w-100">
                    <div className="col-lg-12 my-2 w-100">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="d-flex min-w-300px">
                          <div className="me-3 border border-gray-300 border-dashed rounded text-center min-w-125px py-1 px-4 me-auto mb-3">
                            <p className="mb-1 fw-bolder fs-2 ">80</p>
                            <p className="mb-0 text-muted">
                              {intl.formatMessage({ id: "Projects" })}
                            </p>
                          </div>
                          <div className="border border-gray-300 border-dashed rounded text-center min-w-125px py-1 px-4 me-auto mb-3">
                            <p className="mb-1 fw-bolder fs-2 ">110</p>
                            <p className="mb-0 text-muted">
                              {" "}
                              {intl.formatMessage({ id: "Tasks" })}
                            </p>
                          </div>
                        </div>
                        <div className="ms-5 min-w-100px border border-gray-300 border-dashed rounded p-3">
                          <p className="fs-4 text-muted">
                            {" "}
                            {intl.formatMessage({ id: "CompleteProfile" })}
                          </p>
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              {[1, 2, 3, 4, 5].map((ele) => {
                                return (
                                  <Fragment key={Math.random()}>
                                    <i className=" mx-1 bi bi-star-fill" style={{color:"#52CD50"}}></i>
                                  </Fragment>
                                );
                              })}
                            </div>
                            <span style={{color:"#52CD50"}}>100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-7 fw-bold">
              <li className="nav-item">
                <Link
                  to={`/user-profile/overview`}
                  className={`nav-link text-active-primary py-2 me-6 fs-4 ${
                    ActiveNav == ""||ActiveNav == intl.formatMessage({ id: "Overview" })
                      ? "active"
                      : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "Overview" })}{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/user-profile/settings`}
                  className={`nav-link text-active-primary  py-2 me-6 fs-4  ${
                    ActiveNav == intl.formatMessage({ id: "Settings" })
                      ? "active"
                      : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "Settings" })}{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/user-profile/tasks`}
                  className={`nav-link text-active-primary  py-2 me-6 fs-4  ${
                    ActiveNav == intl.formatMessage({ id: "Tasks" })
                      ? "active"
                      : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "Tasks" })}{" "}
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center">
                <Link
                  to={`/user-profile/requests`}
                  className={`nav-link text-active-primary  py-2 me-6 fs-4  ${
                    ActiveNav == intl.formatMessage({ id: "Requests" })
                      ? "active"
                      : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "Requests" })}{" "}
                </Link>
                <span className="bg-light d-inline-block h-50 px-2">204</span>
              </li>

              <li className="nav-item d-flex align-items-center">
                <Link
                  to={`/user-profile/notifications`}
                  className={`nav-link text-active-primary  py-2 me-6 fs-4  ${
                    ActiveNav == intl.formatMessage({ id: "Notifications" })
                      ? "active"
                      : ""
                  }`}
                  role="button"
                >
                  {" "}
                  {intl.formatMessage({ id: "Notifications" })}{" "}
                </Link>
                <span className="bg-light-danger  d-inline-block h-50 px-3">12</span>
              </li>

              <li className="nav-item">
                <Link
                  to={`/user-profile/delegation`}
                  className={`nav-link text-active-primary  py-2 me-6 fs-4  ${
                    ActiveNav == intl.formatMessage({ id: "TheDelegation" })
                      ? "active"
                      : ""
                  }`}
                  role="button"
                >
                  {intl.formatMessage({ id: "TheDelegation" })}{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { UserProfileCard };
