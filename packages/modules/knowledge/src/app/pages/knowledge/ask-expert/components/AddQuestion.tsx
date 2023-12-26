import { Navigation } from "swiper";
import { experts } from "./ExpertData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { useIntl } from "react-intl";
import { Col, Row } from "react-bootstrap";
import { AddPopup } from "../../../partials/AddPopup";
import { useState } from "react";

const AddQuestion = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const intl = useIntl();

  return (
    <>
      <div>
        <div className="card card-xl-stretch mb-xl-8">
          <div className="card-body py-3">
            <form noValidate className="card mb-3 p-5">
              <p style={{ fontWeight: "400", fontSize: "16px" }}>
                {intl.formatMessage({ id: "ChooseExpert" })}
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#A1A5B7",
                }}
                className="mb-5"
              >
                {intl.formatMessage({ id: "ChooseExpert" })} /{" "}
                {intl.formatMessage({ id: "ExpertsWhoAsked" })}
              </p>
              <div className="my-5">
                <Swiper
                  className="p-5"
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={3}
                  navigation={true}
                  breakpoints={{
                    500: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {experts?.map((expert) => (
                    <SwiperSlide key={expert?.id}>
                      <div
                        className="d-flex align-items-center shadow p-4 position-relative"
                        style={{ height: "100px" }}
                      >
                        <input
                          type="checkbox"
                          className="mycheckmark form-check-input"
                        />
                        <img
                          src="/media/avatars/300-3.jpg"
                          className="ms-3"
                          style={{
                            display: "block",
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                          }}
                        />
                        <div>
                          <div
                            className="mb-2"
                            style={{ fontWeight: "700", fontSize: "14px" }}
                          >
                            {expert?.expertName}
                          </div>
                          <div style={{ fontWeight: "400", fontSize: "13px" }}>
                            {expert?.specialization}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="mb-5 d-flex mt-5 align-items-center">
                <label htmlFor="field" className="flex-shrink-0 fs-5">
                  {intl.formatMessage({ id: "ChooseSpecialization" })}:{" "}
                </label>
                <select
                  name="field"
                  id="field"
                  className="form-control myinput mx-md-1"
                  style={{ backgroundColor: "#F5F8FA" }}
                >
                  <option value="اضف التصنيف الخاص بالفكره" hidden>
                    الكل{" "}
                  </option>
                  <option value="1">خبير الشئون القانونيه</option>
                  <option value="2">خبير الشئون الماليه</option>
                </select>
              </div>
              <div className="col-lg-12 mb-2 pt-2 pb-3">
                <label htmlFor="notes" className="form-label px-2 fontSz-6">
                  {intl.formatMessage({ id: "ExpertQuestion" })}
                </label>
                <form
                  id="kt_forms_widget_1_form"
                  className="ql-quil ql-quil-plain pb-3"
                >
                  <div className="editor-wrapper bg-light my-2">
                    <textarea
                      id="notes"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                      placeholder={intl.formatMessage({ id: "ExpertQuestion" })}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <div className="border border-secondary-subtle borderRadius-top">
                    <div className="position-relative text-center py-4 w-75 mx-auto">
                      <input
                        style={{
                          background: "#F5F8FA",
                          borderRadius: "6px",
                          outline: "unset",
                          border: "0",
                          padding: "1rem 3rem 1rem 1rem",
                        }}
                        type="search"
                        name="searchForProject"
                        className="input input-group searchBoxDesign"
                        id="searchForProject"
                        placeholder={intl.formatMessage({ id: "SearchExpert" })}
                      />
                      <i
                        className="fa-solid fa-light fa-magnifying-glass fs-3 fa-fw position-absolute"
                        style={{
                          top: "50%",
                          right: "1rem",
                          transform: "translateY(-50%)",
                        }}
                      ></i>
                    </div>
                    <div className=" d-flex justify-content-center px-3 py-2 ">
                      <div
                        className="scroll-y mb-3 me-n5 pe-5 h-200px d-flex justify-content-between px-3 py-2 flex-column w-100"
                        data-kt-scroll="true"
                        data-kt-scroll-activate="{default: false, lg: true}"
                        data-kt-scroll-max-height="auto"
                        data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_contacts_list_header"
                        data-kt-scroll-wrappers="#kt_content, #kt_contacts_list_body"
                        data-kt-scroll-stretch="#kt_contacts_list, #kt_contacts_main"
                        data-kt-scroll-offset="5px"
                      >
                        {experts?.map((expert) => (
                          <div key={expert?.id}>
                            <div className="d-flex justify-content-between mb-4">
                              <div className="d-flex justify-content-right">
                                <img
                                  src="/media/avatars/300-3.jpg"
                                  className="ms-3"
                                  style={{
                                    display: "block",
                                    height: "46px",
                                    width: "46px",
                                    borderRadius: "50%",
                                  }}
                                />
                                <div>
                                  <div
                                    style={{
                                      fontWeight: "700",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {expert?.expertName}
                                  </div>
                                  <div
                                    style={{
                                      fontWeight: "400",
                                      fontSize: "13px",
                                    }}
                                  >
                                    {expert?.specialization}
                                  </div>
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="border borderRadius-bottom mt-5">
                    <Row className="gy-5 mt-5 px-5 py-2">
                      {experts?.map((expert) => (
                        <Col xs={12} sm={6} md={4} lg={3}>
                          <div className="mx-3 ">
                            <div className="card mb-3 py-5">
                              <div
                                role="button"
                                className="position-absolute"
                                style={{
                                  backgroundColor: "red",
                                  color: "white",
                                  top: "5%",
                                  left: "-5%",
                                  width: " 20px",
                                  height: "20px",
                                  borderRadius: "50%",
                                  border: "none",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                x
                              </div>
                              <div
                                className="d-flex align-items-center py-5"
                                style={{
                                  boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)",
                                  height: "80%",
                                }}
                              >
                                <img
                                  src="/media/avatars/300-3.jpg"
                                  className="ms-3"
                                  style={{
                                    display: "block",
                                    height: "46px",
                                    width: "46px",
                                    borderRadius: "50%",
                                  }}
                                />
                                <div>
                                  <div
                                    style={{
                                      fontWeight: "700",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {expert?.expertName}
                                  </div>
                                  <div
                                    style={{
                                      fontWeight: "400",
                                      fontSize: "13px",
                                    }}
                                  >
                                    {expert?.specialization}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5">
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
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
    </>
  );
};

export { AddQuestion };
