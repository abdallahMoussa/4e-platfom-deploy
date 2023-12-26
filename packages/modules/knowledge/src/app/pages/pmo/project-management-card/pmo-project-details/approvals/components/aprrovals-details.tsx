import { FC, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
import { RejectPopup } from "../../../../../partials/RejectPopup";
import { AcceptPopup } from "../../../../../partials/AcceptPopup";
import { EditPopup } from "../../../../../partials/EditPopup";

const ApprovalsDetails: FC = () => {
  const intl = useIntl();
  const [modalEShow, setModalEShow] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalRShow, setModalRShow] = useState<boolean>(false);

  return (
    <>
      <Row>
        <Col md={3}>
          <Card>
            {" "}
            <div className="px-4 pt-4 my-3">
              <div className="fw-bolder mb-2">
                {intl.formatMessage({ id: "Calender" })}
              </div>
              <div className="text-muted">
                {intl.formatMessage({ id: "TimetableForTheApprovals" })}
              </div>
            </div>
            <div className="card-body ">
              <div className="timeline-label">
                <div className="timeline-item">
                  <div className="timeline-label fw-bold text-gray-800 fs-6">
                    08:42
                  </div>

                  <div className="timeline-badge">
                    <i className="fa fa-check-square text-success fs-4"></i>
                  </div>

                  <div className="fw-mormal timeline-content text-muted ps-3">
                    <p>3/2/2023</p>
                    <p className="text-dark">إدارة 1</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-label fw-bold text-gray-800 fs-6">
                    08:00
                  </div>

                  <div className="timeline-badge">
                    <i className="fa fa-check-square text-success fs-4"></i>{" "}
                  </div>

                  <div className="fw-mormal timeline-content text-muted ps-3">
                    <p>3/2/2023</p>
                    <p className="text-dark">إدارة 2</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-label fw-bold text-gray-800 fs-6">
                    08:00
                  </div>

                  <div className="timeline-badge">
                    <i className="fa fa-clock text-muted fs-5"></i>
                  </div>
                  <div className="fw-mormal timeline-content text-muted ps-3">
                    <p>{intl.formatMessage({ id: "WaitingForApproval" })}</p>
                    <p className="text-dark">إدارة 3</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={9}>
          <Card>
            <Row>
              <Card.Body className="mx-4  ">
                <Row
                  className="bg-light px-3  py-4  fs-6  "
                  style={{
                    borderTop: "1px dashed #A1A5B7",
                    borderBottom: "1px dashed #A1A5B7",
                    lineHeight: "2.5",
                  }}
                >
                  <Col md={10}>
                    <div className="d-flex">
                      <p className="text-primary ">
                        {intl.formatMessage({ id: "OrderName" })}:
                      </p>

                      <p className="px-2 text-muted">الاسم الاساسى للطلب</p>
                    </div>
                    <div className="d-flex">
                      <p className="text-primary">
                        {intl.formatMessage({ id: "Applicant" })} :{" "}
                      </p>

                      <p className="px-2 text-muted">خلود العجلان</p>
                    </div>
                    <div className="d-flex">
                      <p className="text-primary">
                        {intl.formatMessage({ id: "OrderDescription" })} :
                      </p>

                      <p className="px-2 text-muted">
                        وصف الطلب, وصف الطلب, وصف الطلب, وصف الطلب, وصف الطلب,
                      </p>
                    </div>
                    <Row className="d-flex">
                      <Col md={6}>
                        <div className="d-flex">
                          <p className="text-primary">
                            {intl.formatMessage({ id: "OrderDate" })} :
                          </p>

                          <p className="px-2 text-muted">25 Jun 2022</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="d-flex">
                          <p className="text-primary">
                            {intl.formatMessage({ id: "OrderTime" })} :
                          </p>

                          <p className="px-2 text-muted">02:00PM </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={2}>
                    <div className="btn btn-primary  text-center w-100 p-5">
                      {intl.formatMessage({ id: "DisplayDetails" })}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <div className="card-body my-4 ">
                    <div className="timeline-label">
                      <div className="timeline-item">
                        <div className="timeline-label fw-bold text-gray-800 fs-6 "></div>

                        <div className="timeline-badge px-4 my-8">
                          <img
                            src="/media/avatars/300-1.jpg"
                            style={{ width: "64px", borderRadius: "50%" }}
                          />
                        </div>

                        <div className="fw-mormal timeline-content text-muted ps-3 mx-5">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                <p className="text-dark fw-black">
                                  تركى العطالله
                                </p>
                                <p className="text-muted mb-0">مسؤل تفتيش </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                <p className="text-primary fw-bolder">
                                  25 Jun 2022
                                </p>
                                <p className="text-mute mb-0">
                                  {intl.formatMessage({ id: "ReceivedDate" })}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                <p className="text-success  fw-bolder">
                                  25 Jun 2022
                                </p>
                                <p className="text-mute mb-0">
                                  {intl.formatMessage({ id: "ApprovelDate" })}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row my-4  text-center">
                            <div className="col-md-6 mt-5">
                              <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                <p className="mb-0 py-2 fw-bolder text-black">
                                  {" "}
                                  <i className="fa fa-genderless text-warning fs-5"></i>{" "}
                                  ملاحظة: العمل على زيادة الوعى العقارى{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-label fw-bold text-gray-800 fs-6 "></div>

                        <div className="timeline-badge px-4 my-8">
                          <img
                            src="/media/avatars/300-3.jpg"
                            style={{ width: "64px", borderRadius: "50%" }}
                          />
                        </div>

                        <div className="fw-mormal timeline-content text-muted ps-3 mx-5">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                <p className="text-dark fw-bolder">
                                  خلود العجلان
                                </p>
                                <p className="text-muted mb-0">مسؤل تفتيش </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                <p className="text-primary fw-bolder">
                                  25 Jun 2022
                                </p>
                                <p className="text-mute mb-0">
                                  {intl.formatMessage({ id: "ReceivedDate" })}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                <p className="text-success  fw-bolder">
                                  25 Jun 2022
                                </p>
                                <p className="text-mute mb-0">
                                  {intl.formatMessage({ id: "ApprovelDate" })}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex mt-7  text-center justify-content-center">
                            <div className="border border-gray-300 rounded min-w-400px py-3 px-4 me-6 mb-3 d-flex  align-items-center justify-content-around">
                              <div className="">
                                <img src="/media/pmo/pdfIcon.png" alt="" />
                                <span className="text-primary mx-2 fw-bolder">
                                  الهوية
                                </span>
                              </div>
                              <div className="">
                                <img src="/media/pmo/docIcon.png" alt="" />
                                <span className="text-primary mx-2 fw-bolder">
                                  محضر اتصال
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="separator separator-dashed mb-5"></div>

                <Form className="my-4">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-dark fs-5 my-5">
                      {intl.formatMessage({ id: "Notes" })}
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder={intl.formatMessage({ id: "AddNotes" })}
                      style={{ background: "#F5F8FA" }}
                    />
                  </Form.Group>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-2 pt-4 pb-3">
                          <label className="text-dark fs-5 form-label my-5">
                            {intl.formatMessage({ id: "Attachments" })}{" "}
                          </label>
                          <div className=" notice d-flex bg-light-primary rounded border-primary border border-dashed mb-1  mx-5">
                            <label
                              htmlFor="outputAttachment"
                              className="form-label px-2  fontSz-6 dropzone-select   w-100 uploadFile-style inputAreaHeight"
                            >
                              <div className="row align-items-center">
                                <div className="col-md-1">
                                  <img
                                    src="/media/pmo/uploadFile.png"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-md-8 mt-2">
                                  <p className="text-primary fw-bolder my-1">
                                    {" "}
                                    {intl.formatMessage({
                                      id: "QuickFileUploader",
                                    })}
                                  </p>
                                  <p>
                                    {intl.formatMessage({
                                      id: "DragAndDropOrChooseFilesFromComputer",
                                    })}
                                  </p>
                                </div>
                              </div>
                            </label>
                            <div
                              className="dropzone dropzone-queue mb-2"
                              id="kt_dropzonejs_example_3"
                            >
                              <div className="dropzone-panel mb-lg-0 mb-2">
                                <input
                                  multiple
                                  type="file"
                                  accept="image/*"
                                  id="outputAttachment"
                                  name="attachments"
                                  placeholder={intl.formatMessage({
                                    id: "FileUpload",
                                  })}
                                  className="dropzone-select w-100 uploadFile-style inputAreaHeight d-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>

                <div className="row justify-content-center ">
                  <Col xs={2}>
                    <div
                      className="btn btn-secondary w-100 text-center"
                      // data-bs-toggle="modal"
                      // data-bs-target="#Rega_modal_reject"
                      onClick={() => setModalRShow(true)}
                    >
                      {intl.formatMessage({ id: "Reject" })}
                    </div>
                  </Col>
                  <Col xs={2}>
                    <div
                      className="btn btn-success w-100 text-center"
                      // data-bs-toggle="modal"
                      // data-bs-target="#Rega_modal_accept"
                      onClick={() => setModalShow(true)}
                    >
                      {intl.formatMessage({ id: "Accept" })}
                    </div>
                  </Col>
                  <Col xs={2}>
                    <div
                      className="btn btn-primary w-100 text-center "
                      // data-bs-toggle="modal"
                      // data-bs-target="#Rega_modal_edit"
                      onClick={() => setModalEShow(true)}
                      style={{ border: "none" }}
                    >
                      {intl.formatMessage({ id: "Edit" })}
                    </div>
                  </Col>
                </div>
              </Card.Body>
            </Row>
          </Card>
        </Col>
      </Row>

      <div className="modal fade" id="Rega_modal_reject" aria-hidden="true">
        <RejectPopup
          show={modalRShow}
          handleClose={() => setModalRShow(false)}
        />
      </div>
      <div className="modal fade" id="Rega_modal_edit" aria-hidden="true">
        <EditPopup handleCloseEdit={setModalEShow} showEdit={modalEShow} />
      </div>
      <div className="modal fade" id="Rega_modal_accept" aria-hidden="true">
        <AcceptPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
    </>
  );
};
export { ApprovalsDetails };
