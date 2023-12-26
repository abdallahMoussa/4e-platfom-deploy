import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import {  toAbsoluteUrl } from "../../helpers";
import { Link } from "react-router-dom";

const LatestNews: FC = () => {
  const [active, setActive] = useState<number>(1);
  const intl = useIntl();
  return (
    <>
      <div className="row gx-5 gx-xl-8 mb-5 mb-xl-8">
        <div className="col-xl-12">
          <div className="card card-xxl-stretch-50">
            <div className="card-body pt-5">
              <div
                id="kt_security_guidelines"
                className="carousel carousel-custom carousel-stretch slide myCarousel"
                data-bs-ride="carousel"
                data-bs-interval="8000"
              >
                <div className="d-flex flex-stack align-items-center flex-wrap">
                  <span className="card-label fw-bolder fs-3">
                    {intl.formatMessage({ id: "LatestNews" })}
                  </span>
                  <Link to="/digital-media-news-details">
                    <button
                      className="border border-0 d-flex align-items-center justify-content-between"
                      style={{ backgroundColor: "white", outline: "none" }}
                    >
                      <span className="text-primary">
                        {intl.formatMessage({ id: "More" })}
                      </span>
                      <i className="bi bi-arrow-left fw-bolder text-muted fs-5"></i>
                    </button>
                  </Link>
                </div>
                <div className="d-flex flex-stack align-items-center flex-wrap">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="text-muted fw-bold fs-7">
                      {intl.formatMessage({ id: "ShowLatestNews" })}{" "}
                    </span>
                  </h3>
                  <ol className="p-0 m-0 carousel-indicators carousel-indicators-dots">
                    <li
                      data-bs-target="#kt_security_guidelines"
                      data-bs-slide-to="0"
                      className="ms-1 active"
                      aria-current="true"
                    ></li>
                    <li
                      data-bs-target="#kt_security_guidelines"
                      data-bs-slide-to="1"
                      className="ms-1"
                    ></li>
                    <li
                      data-bs-target="#kt_security_guidelines"
                      data-bs-slide-to="2"
                      className="ms-1"
                    ></li>
                    <li
                      data-bs-target="#kt_security_guidelines"
                      data-bs-slide-to="3"
                      className="ms-1"
                    ></li>
                    <li
                      data-bs-target="#kt_security_guidelines"
                      data-bs-slide-to="4"
                      className="ms-1"
                    ></li>
                  </ol>
                </div>
                <div className="row gx-5 gx-xl-8 ps-0">
                  <ul
                    className="list-group col-sm-4 p-0"
                    style={{ borderRadius: "10px 0px 0 10px" }}
                  >
                    <li
                      data-bs-target="#kt_security_guidelines"
                      data-bs-slide-to="0"
                      onClick={() => setActive(1)}
                      className={`list-group-item cursor-pointer ${
                        active === 1 ? "active" : ""
                      }`}
                    >
                      <h4 className="truncate-lines mb-0">
                        {intl.formatMessage({
                          // id: "HomeNews1"
                          id: "ITINews1",
                        })}
                      </h4>
                    </li>
                    <li
                      data-bs-target="#kt_security_guidelines"
                      data-bs-slide-to="1"
                      onClick={() => setActive(2)}
                      className={`list-group-item cursor-pointer ${
                        active === 2 ? "active" : ""
                      }`}
                    >
                      <h4 className="truncate-lines mb-0">
                        {intl.formatMessage({
                          // id: "HomeNews2"
                          id: "ITINews2",
                        })}
                      </h4>
                    </li>
                    <li
                      data-bs-target="#kt_security_guidelines"
                      data-bs-slide-to="2"
                      onClick={() => setActive(3)}
                      className={`list-group-item cursor-pointer ${
                        active === 3 ? "active" : ""
                      }`}
                    >
                      <h4 className="truncate-lines mb-0">
                        {intl.formatMessage({
                          // id: "HomeNews3"
                          id: "ITINews3",
                        })}
                      </h4>
                    </li>
                    <li
                      data-bs-target="#kt_security_guidelines"
                      data-bs-slide-to="3"
                      onClick={() => setActive(4)}
                      className={`list-group-item cursor-pointer ${
                        active === 4 ? "active" : ""
                      }`}
                    >
                      <h4 className="truncate-lines mb-0">
                        {intl.formatMessage({
                          // id: "HomeNews4"
                          id: "ITINews4",
                        })}
                      </h4>
                    </li>
                    <li
                      data-bs-target="#kt_security_guidelines"
                      data-bs-slide-to="4"
                      onClick={() => setActive(5)}
                      className={`list-group-item cursor-pointer ${
                        active === 5 ? "active" : ""
                      }`}
                    >
                      <h4 className="truncate-lines mb-0">
                        {intl.formatMessage({
                          // id: "HomeNews5"
                          id: "ITINews5",
                        })}
                      </h4>
                    </li>
                  </ul>
                  <div className="col-sm-8 ps-0">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="carousel-wrapper">
                          <img
                            src={toAbsoluteUrl("/media/News/news1.jpg")}
                            alt="img1"
                            className="LatestNews-home"
                          />
                          <div className="carousel-caption">
                            <a href="#">
                              {intl.formatMessage({
                                //  id: "HomeNews1"
                                id: "ITINews1",
                              })}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="carousel-wrapper">
                          <img
                            src={toAbsoluteUrl("/media/News/news2.jpg")}
                            alt=""
                            className="LatestNews-home"
                          />
                          <div className="carousel-caption">
                            <a href="#">
                              {intl.formatMessage({
                                //  id: "HomeNews2"
                                id: "ITINews2",
                              })}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="carousel-wrapper">
                          <img
                            src={toAbsoluteUrl("/media/News/news3.jpg")}
                            alt=""
                            className="LatestNews-home"
                          />
                          <div className="carousel-caption">
                            <a href="#">
                              {intl.formatMessage({
                                // id: "HomeNews3"
                                id: "ITINews3",
                              })}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="carousel-wrapper">
                          <img
                            src={toAbsoluteUrl("/media/News/news4.jpg")}
                            alt=""
                            className="LatestNews-home"
                          />
                          <div className="carousel-caption">
                            <a href="#">
                              {intl.formatMessage({
                                //  id: "HomeNews4"
                                id: "ITINews4",
                              })}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="carousel-wrapper">
                          <img
                            src={toAbsoluteUrl("/media/News/news5.jpg")}
                            alt=""
                            className="LatestNews-home"
                          />
                          <div className="carousel-caption">
                            <a href="#">
                              {intl.formatMessage({
                                //  id: "HomeNews5"
                                id: "ITINews5",
                              })}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { LatestNews };
