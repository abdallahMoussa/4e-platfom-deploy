import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import { useIntl } from "react-intl";
import { AcceptPopup } from "../../../../partials/AcceptPopup";
import { EditPopup } from "../../../../partials/EditPopup";
import { RejectPopup } from "../../../../partials/RejectPopup";

function PostingRequest() {
  let intl = useIntl();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalRShow, setModalRShow] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  mt-4"
      >
        <div className="content flex-row-fluid " id="kt_content">
          <div className="row">
            <div className="col-3">
              <div className="card shadow">
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
                        {intl.formatMessage({ id: "Day" })}
                      </div>

                      <div className="timeline-badge">
                        <i className="fa fa-check-square text-success fs-4"></i>
                      </div>

                      <div className="fw-mormal timeline-content text-muted ps-3">
                        <p>3/2/2023</p>
                        <p className="text-dark">
                          {intl.formatMessage({ id: "HumanManagement" })}
                        </p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-label fw-bold text-gray-800 fs-6">
                        {intl.formatMessage({ id: "Day" })}{" "}
                      </div>

                      <div className="timeline-badge">
                        <i className="fa fa-check-square text-success fs-4"></i>{" "}
                      </div>

                      <div className="fw-mormal timeline-content text-muted ps-3">
                        <p>3/2/2023</p>
                        <p className="text-dark">
                          {intl.formatMessage({ id: "FinancialManagement" })}
                        </p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-label fw-bold text-gray-800 fs-6">
                        {intl.formatMessage({ id: "Day" })}{" "}
                      </div>

                      <div className="timeline-badge">
                        <i className="fa fa-clock text-muted fs-5"></i>
                      </div>
                      <div className="fw-mormal timeline-content text-muted ps-3">
                        <p>
                          {intl.formatMessage({ id: "WaitingForApproval" })}
                        </p>
                        <p className="text-dark">
                          {intl.formatMessage({ id: "ContentManagement" })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="card shadow">
                <div className="row">
                  <div className="mx-4 card-body  ">
                    <div
                      className="bg-light px-3  py-4  fs-6  row"
                      style={{
                        borderTop: "1px dashed #A1A5B7",
                        borderBottom: "1px dashed #A1A5B7",
                        lineHeight: "2.5",
                      }}
                    >
                      <div className="col-8">
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
                            وصف الطلب, وصف الطلب, وصف الطلب, وصف الطلب, وصف
                            الطلب,
                          </p>
                        </div>
                        <div className="d-flex row justify-content-between">
                          <div className="col-sm-6 col-12">
                            <div className="d-flex">
                              <p className="text-primary">
                                {intl.formatMessage({ id: "RequestDate" })} :
                              </p>

                              <p className="px-2 text-muted">25 Jun 2022</p>
                            </div>
                          </div>
                          <div className="col-sm-6 col-12"></div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-12 d-flex flex-column justify-content-between align-items-center">
                        <div className="btn btn-primary  text-center w-75 mx-auto">
                          {intl.formatMessage({ id: "DisplayDetails" })}
                        </div>
                        <div className="d-flex ">
                          <p className="text-primary">
                            {intl.formatMessage({ id: "RequestStatus" })} :
                          </p>

                          <p className="px-3" style={{ color: "#FFCF39" }}>
                            {intl.formatMessage({
                              id: "WaitingForApproval",
                            })}{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="card-body my-4 ">
                        <div className="timeline-label">
                          <div className="timeline-item">
                            <div className="timeline-label fw-bold text-gray-800 fs-6 "></div>

                            <div className="timeline-badge px-4 my-8">
                              <img
                                src="/media/avatars/300-3.jpg"
                                style={{
                                  width: "64px",
                                  borderRadius: "50%",
                                  border: "2px solid #FFC700",
                                }}
                              />
                            </div>

                            <div className="fw-mormal timeline-content ps-3 mx-9">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="text-dark fw-bolder mb-3">
                                    محمود علي محمد
                                  </p>
                                  <p className="text-muted mb-3">مسئول رقابه</p>
                                  <div className="text-muted d-flex ">
                                    <span>
                                      {intl.formatMessage({
                                        id: "ReceivedDate",
                                      })}{" "}
                                    </span>
                                    <p className="text-primary mx-4">
                                      25 Jun 2022
                                    </p>
                                  </div>
                                  <div className="text-muted d-flex">
                                    <span>
                                      {intl.formatMessage({
                                        id: "ApprovelDate",
                                      })}
                                    </span>
                                    <p className="text-success mx-4">
                                      25 Jun 2022
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="row my-4 ">
                                <div className="col-md-6 mt-5">
                                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4  mb-3 d-flex flex-column align-items-center justify-content-center">
                                    <p className="mb-0 py-2 fw-bolder text-muted">
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

                            {/* <div className="fw-mormal timeline-content text-muted ps-3 mx-5">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                    <p className="text-dark fw-bolder">
                                      خلود العجلان
                                    </p>
                                    <p className="text-muted mb-0">
                                      مسؤل تفتيش العقار
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                    <p className="text-primary fw-bolder">
                                      25 Jun 2022
                                    </p>
                                    <p className="text-mute mb-0">
                                      {intl.formatMessage({
                                        id: "ReceivedDate",
                                      })}
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                                    <p className="text-success  fw-bolder">
                                      25 Jun 2022
                                    </p>
                                    <p className="text-mute mb-0">
                                      {intl.formatMessage({
                                        id: "ApprovelDate",
                                      })}
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
                            </div> */}
                            <div className="fw-mormal timeline-content ps-3 mx-9">
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="text-dark fw-bolder mb-3">
                                    خلود العجلان
                                  </p>
                                  <p className="text-muted mb-3">
                                    مدير اداره المرافق
                                  </p>
                                  <div className="text-muted d-flex ">
                                    <span>
                                      {intl.formatMessage({
                                        id: "ReceivedDate",
                                      })}{" "}
                                    </span>
                                    <p className="text-primary mx-4">
                                      25 Jun 2022
                                    </p>
                                  </div>
                                  <div className="text-muted d-flex">
                                    <span>
                                      {intl.formatMessage({
                                        id: "ApprovelDate",
                                      })}
                                    </span>
                                    <p className="text-success mx-4">
                                      25 Jun 2022
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="row my-4 ">
                                <div className="col-sm-6 col-12 mt-5">
                                  <div className="d-flex w-100">
                                    <div className="border border-gray-300 rounded min-w-350px py-3   mb-3 d-flex  align-items-center justify-content-around">
                                      <div className="d-flex">
                                        <img
                                          src="/media/pmo/pdfIcon.png"
                                          alt=""
                                          className="d-inline-block ms-2"
                                          style={{
                                            height: "40px",
                                            width: "40px",
                                          }}
                                        />
                                        <div>
                                          <p className="text-primary mx-2 fw-bolder p-0 m-0">
                                            الهوية
                                          </p>
                                          <p className="text-muted mx-2 fw-bolder">
                                            19 mb
                                          </p>
                                        </div>
                                      </div>
                                      <div className="d-flex">
                                        <img
                                          src="/media/pmo/docIcon.png"
                                          alt=""
                                          className="d-inline-block ms-2"
                                          style={{
                                            height: "40px",
                                            width: "40px",
                                          }}
                                        />
                                        <div>
                                          <p className="text-primary mx-2 fw-bolder p-0 m-0">
                                            محضر اتصال
                                          </p>
                                          <p className="text-muted mx-2 fw-bolder">
                                            19 mb
                                          </p>
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
                      <div className="col-2">
                        <div
                          className="btn btn-secondary w-100 text-center"
                          // data-bs-toggle="modal"
                          // data-bs-target="#Rega_modal_reject"
                          onClick={() => setModalRShow(true)}
                        >
                          {intl.formatMessage({ id: "Reject" })}
                        </div>
                      </div>
                      <div className="col-2">
                        <div
                          className="btn btn-success w-100 text-center"
                          // data-bs-toggle="modal"
                          // data-bs-target="#Rega_modal_accept"
                          onClick={() => setModalShow(true)}
                        >
                          {intl.formatMessage({ id: "Accept" })}
                        </div>
                      </div>
                      <div className="col-2">
                        <div
                          className="btn btn-primary w-100 text-center "
                          onClick={() => setShowEdit(true)}
                          style={{ border: "none" }}
                        >
                          {intl.formatMessage({ id: "Edit" })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="Rega_modal_reject" aria-hidden="true">
            <RejectPopup
              show={modalRShow}
              handleClose={() => setModalRShow(false)}
            />
          </div>
          <div className="modal fade" aria-hidden="true">
            <EditPopup
              showEdit={showEdit}
              handleCloseEdit={() => setShowEdit(false)}
            />
          </div>
          <div className="modal fade" id="Rega_modal_accept" aria-hidden="true">
            <AcceptPopup
              show={modalShow}
              handleClose={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostingRequest;
