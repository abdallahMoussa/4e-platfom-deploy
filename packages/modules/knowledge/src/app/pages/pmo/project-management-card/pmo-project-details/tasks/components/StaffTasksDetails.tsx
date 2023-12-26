import React, { Fragment } from "react";
import { Col, Container, ListGroup, ProgressBar, Row } from "react-bootstrap";
import { KTSVG } from "../../../../../../helpers";
import { useIntl } from "react-intl";

function StaffTasksDetails() {
  let intl = useIntl();
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={3}>
            <div className="mt-3">
              <div className="card">
                <div className="card-header border-0 pt-2 pe-4 mb-3">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-dark mb-3">
                      {intl.formatMessage({ id: "TasksOverview" })}{" "}
                    </span>
                    <span className="text-muted mt-1 fw-bold fs-7 ">
                      {intl.formatMessage({ id: "Latest" })} 10
                    </span>
                  </h3>
                </div>
                <button className="text-primary bg-white border-0 d-flex justify-content-start ps-3">
                  <i className="bi bi-plus-lg ms-1 me-3 fs-4 fw-bolder"></i>
                  <span className="fw-bolder">
                    {intl.formatMessage({ id: "AddClassification" })}
                  </span>
                </button>
                <div className="card-body pt-4 px-0">
                  <ListGroup className="b-0">
                    <ListGroup.Item className="w-100 d-flex align-items-center flex-row position-relative border-0">
                      <div className="symbol symbol-50px me-2">
                        <span className="symbol-label bg-light-gray">
                          <span className="svg-icon svg-icon-2x svg-icon-dark">
                            <KTSVG
                              path="/media/icons/duotune/general/gen102_tasks.svg"
                              className="svg-icon-4 me-1"
                            />
                          </span>
                        </span>
                      </div>
                      <div className="d-flex flex-grow-1 min-w-150px text-dark text-hover-primary fs-7 fw-bolder">
                        {intl.formatMessage({ id: "Gross" })}{" "}
                      </div>
                      <span className="badge badge-light-dark fs-7 fw-bolder task-num text-dark">
                        25
                      </span>
                    </ListGroup.Item>
                    <div className="border border-dashed-1 mb-4"></div>
                    <ListGroup.Item className="w-100 border-0 mb-3 d-flex align-items-center position-relative border-0">
                      <div className="symbol symbol-50px me-2 b-0">
                        <span className="symbol-label bg-light-info">
                          <span className="svg-icon svg-icon-2x svg-icon-info">
                            <i
                              className="fa-sharp fa-regular fa-circle-user"
                              style={{ fontSize: "20px", color: "#9E79F2" }}
                            ></i>
                          </span>
                        </span>
                      </div>
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex flex-row justify-content-between">
                          <a className="text-dark text-hover-primary min-w-150px  fw-bolder">
                            {intl.formatMessage({ id: "TheDaily" })}{" "}
                          </a>
                          <span
                            className="badge badge-light-dark fs-7 fw-bolder  text-dark"
                            style={{ width: "fit-content" }}
                          >
                            13
                          </span>
                        </div>
                        <div className="py-1">
                          <span className="text-dark fs-7 me-2">45%</span>
                        </div>
                        <ProgressBar
                          variant="bg-danger"
                          className=" h-7px "
                          style={{ color: "#9E79F2" }}
                          now={45}
                        />
                      </div>
                    </ListGroup.Item>
                    <div className="border border-dashed-1 mb-3"></div>
                    <ListGroup.Item className="w-100 border-0 d-flex align-items-center mb-3 position-relative">
                      <div className="symbol symbol-50px me-2">
                        <span className="symbol-label bg-light-warning">
                          <i
                            className="fa-solid fa-exclamation"
                            style={{ fontSize: "22px", color: "#FFC700" }}
                          ></i>
                        </span>
                      </div>
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex justify-content-between flex-row">
                          <a className="text-dark text-hover-primary min-w-150px fw-bolder">
                            {" "}
                            {intl.formatMessage({ id: "TheImportant" })}{" "}
                          </a>
                          <span
                            style={{ width: "fit-content" }}
                            className="badge badge-light-warning fs-7 fw-bolder  text-dark"
                          >
                            25
                          </span>
                        </div>
                        <div className="py-1">
                          <span className="text-dark fs-7 me-2">15%</span>
                        </div>
                        <ProgressBar
                          variant="warning"
                          className=" h-7px bg-warning  bg-opacity-50"
                          now={15}
                        />
                      </div>
                    </ListGroup.Item>
                    <div className="border border-dashed-1 mb-3"></div>
                    <ListGroup.Item className="w-100 border-0 d-flex align-items-center mb-3 position-relative">
                      <div className="symbol symbol-50px me-2">
                        <span className="symbol-label bg-light-danger">
                          <span className="svg-icon svg-icon-2x svg-icon-danger">
                            <span className="symbol-label bg-light-danger">
                              <span className="svg-icon svg-icon-2x svg-icon-danger">
                                <KTSVG
                                  path="/media/icons/duotune/general/gen103_alarm.svg"
                                  className="svg-icon-4 me-1"
                                />
                              </span>
                            </span>{" "}
                          </span>
                        </span>
                      </div>
                      <div className="d-flex flex-grow-1  flex-column">
                        <div className="d-flex justify-content-between">
                          <a className="text-dark text-hover-primary min-w-150px fw-bolder">
                            {" "}
                            {intl.formatMessage({ id: "Latest" })}{" "}
                          </a>
                          <span
                            className="badge badge-light-danger fs-7 fw-bolder text-dark"
                            style={{ width: "fit-content" }}
                          >
                            25
                          </span>
                        </div>
                        <div className="py-1">
                          <span className="text-dark fs-7 me-2">15%</span>
                        </div>
                        <ProgressBar
                          variant="danger"
                          className=" h-7px bg-danger  bg-opacity-50"
                          now={30}
                        />
                      </div>
                    </ListGroup.Item>
                    <div className="border border-dashed-1 mb-3"></div>
                    <ListGroup.Item className="w-100 border-0 d-flex align-items-center mb-3 position-relative">
                      <div className="symbol symbol-50px me-2">
                        <span className="symbol-label bg-light-success">
                          <span className="svg-icon svg-icon-2x svg-icon-success">
                            <KTSVG
                              path="/media/icons/duotune/general/gen104_thumb_up.svg"
                              className="svg-icon-4 me-1"
                            />
                          </span>
                        </span>
                      </div>
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex justify-content-between">
                          <a className="text-dark text-hover-primary min-w-150px  fw-bolder">
                            {intl.formatMessage({ id: "Ended" })}{" "}
                          </a>
                          <span className="badge badge-light-success fw-bolder  text-dark  ">
                            25
                          </span>
                        </div>
                        <div className="py-1">
                          <span className="text-dark fs-7 me-2">50%</span>
                        </div>

                        <ProgressBar
                          variant="success"
                          className=" h-7px bg-success bg-opacity-50"
                          now={50}
                        />
                      </div>
                    </ListGroup.Item>
                    <div className="border border-dashed-1 mb-3"></div>
                    <ListGroup.Item className="w-100 border-0 d-flex align-items-center mb-3 position-relative">
                      <div className="symbol symbol-50px ms-2">
                        <span className="symbol-label bg-light-primary me-2">
                          <span className="svg-icon svg-icon-2x svg-icon-primary">
                            <KTSVG
                              path="/media/icons/duotune/general/gen105_paperclip.svg"
                              className="svg-icon-4 me-1"
                            />
                          </span>
                        </span>
                      </div>

                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex justify-content-between">
                          <a className="text-dark text-hover-primary min-w-150px fw-bolder">
                            {" "}
                            {intl.formatMessage({ id: "Predicate" })}{" "}
                          </a>
                          <span
                            className="badge badge-light-primary  fw-bolder  text-dark"
                            style={{ width: "fit-content" }}
                          >
                            7
                          </span>
                        </div>
                        <div className="py-1">
                          <span className="text-dark fs-7 me-2">20%</span>
                        </div>

                        <ProgressBar
                          variant="primary"
                          className=" h-7px bg-primary bg-opacity-50"
                          now={20}
                        />
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div
              className="card mb-5 mb-xl-10 my-3"
              style={{ backgroundColor: "#FAF9F8" }}
            >
              <div className="card-body pt-9 pb-0">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src="/media/avatars/300-3.jpg"
                    alt="Rega"
                    className="img-fluid d-inline-block"
                    style={{
                      height: "70px",
                      width: "60px",
                      borderRadius: "7px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="d-flex flex-row flex-wrap ">
                    <div className="d-flex align-items-center mb-2 ">
                      <a className="text-primary text-hover-primary fs-5 fw-bolder me-1">
                        {intl.formatMessage({ id: "MahmoudAliMuhammad" })}{" "}
                      </a>
                    </div>
                    <div className="d-flex  fw-semibold fs-6 mb-4 ">
                      <div
                        style={{ width: "170px" }}
                        className="d-flex me-1  align-items-center text-muted text-hover-primary  mb-2"
                      >
                        {intl.formatMessage({
                          id: "ControlOfficerControlDepartment",
                        })}{" "}
                      </div>
                      <div className="d-flex min-w-150px ms-1 align-items-center text-muted text-hover-primary mb-2">
                        <KTSVG
                          path="/media/icons/duotune/communication/com011.svg"
                          className="svg-icon-4 me-1"
                        />
                        mahmoud@mail.com{" "}
                      </div>

                      <div className="d-flex me-6 align-items-center min-w-100px text-hover-primary mb-2">
                        {intl.formatMessage({ id: "Gross" })} :5
                      </div>
                    </div>
                  </div>
                </div>
                <form
                  noValidate
                  className="form pe-3 mb-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="d-flex flex-column mb-6">
                    <div
                      className="bg-light mt-4 mb-4"
                      style={{
                        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        height: "50px",
                      }}
                    >
                      <button className="text-primary bg-white border-0 d-inline-block w-100 h-100">
                        <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                          <i className="bi bi-plus-lg ms-1 me-3 fs-3 fw-bolder"></i>
                          <span className="fw-bolder fs-4">
                            {intl.formatMessage({ id: "AddTask" })}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="mb-6 d-flex align-items-center justify-content-between">
                    <div className="min-w-150px d-flex">
                      <i className="d-block fa-solid fa-calendar-days text-muted me-3 fs-3 fw-bolder"></i>
                      <i className="d-block fa-solid fa-bell   me-3 fs-3 fw-bolder text-muted"></i>
                      <i className="d-block bi bi-repeat  ms-3  fs-3 fw-bolder text-muted"></i>
                    </div>
                    <button className="text-primary shadow bg-white min-w-80px border-0 p-3">
                      {intl.formatMessage({ id: "Add" })}{" "}
                    </button>
                  </div>
                  <div className="d-flex flex-row mb-6 w-100">
                    <div
                      className="w-100 bg-white mt-4 mb-4 d-flex align-items-center justify-content-evenly"
                      style={{
                        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        height: "100px",
                      }}
                    >
                      <div className="h-100 w-50px d-flex align-items-center justify-content-center ">
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            border: "2px solid #A1A5B7",
                            borderRadius: "50%",
                            color: "blue",
                            backgroundColor: "rgba(255,255,255,.5)",
                          }}
                        ></div>
                      </div>
                      <div className="min-w-300px ">
                        <h3 className="mb-3">
                          {intl.formatMessage({
                            id: "FollowUpTheTeam'sPerformance",
                          })}
                        </h3>
                        <div className="d-flex align-items-center">
                          <span className="text-muted">
                            {intl.formatMessage({ id: "TheTasks" })}
                          </span>
                          <div className="d-flex justify-content-start align-items-center ps-3 h-100 min-w-100px">
                            <i className="fa-solid fa-bell  ms-1 me-2 fs-3 fw-bolder text-muted"></i>
                            <span className="fw-bolder fs-7 text-muted">
                              الاربعاء 11 يناير
                            </span>
                          </div>
                          <div className="d-flex justify-content-start align-items-center ps-3 h-100 min-w-150px">
                            <i className="text-muted fa-solid fa-paperclip ms-1 me-3 fs-3 fw-bolder"></i>
                            <span className="fw-bolder fs-7 text-muted">
                              {intl.formatMessage({ id: "TheAttachedFiles" })}{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="h-100 w-50px d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-star fs-5 text-primary"></i>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Col>

          <Col lg={3}>
            <div className="card my-3 " style={{ height: "700px" }}>
              <div className="pt-3 px-4 d-flex align-items-center justify-content-evenly">
                <div className="h-100 w-30px d-flex align-items-center justify-content-center">
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "2px solid #A1A5B7",
                      borderRadius: "50%",
                      color: "blue",
                      backgroundColor: "rgba(255,255,255,.5)",
                    }}
                  ></div>
                </div>
                <h6
                  className="me-3 pt-2 h-100 d-flex align-items-center justify-content-center"
                  style={{ height: "40px" }}
                >
                  {intl.formatMessage({ id: "FollowUpTheTeam'sPerformance" })}{" "}
                </h6>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: "40px" }}
                >
                  <i className=" bi bi-star-fill text-primary fs-3 "></i>
                </div>
              </div>
              <div className="p-3 d-flex flex-column justify-content-between">
                <form
                  noValidate
                  className="form  mb-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="d-flex flex-column mb-7">
                    <div
                      className="bg-light mb-5"
                      style={{
                        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                    >
                      <button className="text-primary bg-white border-0 d-inline-block w-100 h-100">
                        <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                          <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder"></i>
                          <span className="fw-bolder fs-7">
                            {intl.formatMessage({ id: "AddStep" })}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div
                      className="bg-light mb-5"
                      style={{
                        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                    >
                      <button className="bg-white border-0 d-inline-block w-100 h-100">
                        <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                          <i
                            className="bi bi-tag d-inline-block ms-2 me-3 fs-3 fw-bolder text-muted"
                            style={{ transform: "rotate(90deg)" }}
                          ></i>
                          <span className="fw-bolder fs-7">
                            {intl.formatMessage({ id: "DefineTheProject" })}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div
                      className="bg-light mb-5"
                      style={{
                        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                    >
                      <button className="bg-white border-0 d-inline-block w-100 h-100">
                        <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                          <i className="fa-solid fa-calendar-days text-muted ms-2 me-3 fs-3 fw-bolder"></i>
                          <span className="fw-bolder fs-7">
                            {intl.formatMessage({ id: "AddTheDueDate" })}{" "}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div
                      className="bg-light mb-5"
                      style={{
                        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                    >
                      <button className=" bg-white border-0 d-inline-block w-100 h-100">
                        <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                          <i className="bi bi-brightness-high ms-2 me-3 fs-3 fw-bolder text-muted"></i>
                          <span className="fw-bolder fs-7">
                            {intl.formatMessage({ id: "TaskPredication" })}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div
                      className="bg-light mb-5"
                      style={{
                        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                    >
                      <button className="bg-white border-0 d-inline-block w-100 h-100">
                        <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                          <i className="fa-solid fa-bell  ms-2 me-3 fs-3 fw-bolder text-muted"></i>
                          <span className="fw-bolder fs-7">
                            {intl.formatMessage({
                              id: "PleaseRemindMeOn13:00",
                            })}{" "}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div
                      className="bg-light mb-5"
                      style={{
                        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                    >
                      <button className=" bg-white border-0 d-inline-block w-100 h-100">
                        <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                          <i className="bi bi-repeat  ms-2 me-3 fs-3 fw-bolder text-muted"></i>
                          <span className="fw-bolder fs-7">
                            {intl.formatMessage({ id: "Repeat" })}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div
                      className="bg-light mb-5"
                      style={{
                        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                    >
                      <button className=" bg-white border-0 d-inline-block w-100 h-100">
                        <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                          <i className="text-muted fa-solid fa-paperclip ms-2 me-3 fs-3 fw-bolder"></i>
                          <span className="fw-bolder fs-7">
                            {intl.formatMessage({ id: "AddAttachments" })}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div
                      className="bg-light mb-5"
                      style={{
                        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        height: "40px",
                      }}
                    >
                      <button className=" bg-white border-0 d-inline-block w-100 h-100">
                        <div className="d-flex justify-content-start align-items-center ps-3 h-100 w-100">
                          <i className="bi bi-plus-lg ms-2 me-3 fs-3 fw-bolder text-muted"></i>
                          <span className="fw-bolder fs-7">
                            {intl.formatMessage({ id: "AddNotes" })}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="border border-dashed-1 mb-4"></div>
                </form>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-5">
                    <i className="fa-solid fa-copy ms-2 text-muted fs-5"></i>
                    {intl.formatMessage({
                      id: "CreatedOnWed,January11th",
                    })}{" "}
                    <i className="fa-regular fa-trash-can me-8 fs-5 text-muted"></i>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-calendar-days text-muted ms-1 me-3 fs-5 fw-bolder"></i>
                    {intl.formatMessage({ id: "ExpiryDate" })}{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default StaffTasksDetails;
