import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { AcceptPopup } from "../../../partials/AcceptPopup";
import { RejectPopup } from "../../../partials/RejectPopup";
import { useLocation } from "react-router";

function KnowledgePostingRequestsDetails() {
  let location = useLocation();
  let status = location?.state as string;
  let intl = useIntl();

  const [modalRShow, setModalRShow] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="detailsCard my-5">
        <div className="card card-xl-stretch mb-xl-6">
          <div className="card-header pt-3 pb-2 mb-3">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder fs-3 mb-2 ">
                {intl.formatMessage({ id: "RequestDetails" })}
              </span>
              <span className="mt-1 fw-semibold  text-muted fs-6 ">
                {intl.formatMessage({ id: "TotalRequests" })} 5000
              </span>
            </h3>
          </div>
          <div className="container-xxl mb-7 ">
            <div className="w-100 mb-3 mt-4 position-relative px-6 card pt-2 shadow border border-2 border-bottom-4">
              <div
                style={{
                  height: "100%",
                  width: "3px",
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  backgroundColor: `${
                    status ==
                    intl.formatMessage({
                      id: "PendingRequests",
                    })
                      ? "#ffc700"
                      : status ==
                        intl.formatMessage({
                          id: "RejectedRequests",
                        })
                      ? "red"
                      : "green"
                  }`,
                }}
              ></div>
              <div className="d-flex align-items-center justify-content-end">
                <span
                  className={`ps-4 badgex ${
                    status == intl.formatMessage({ id: "PendingRequests" })
                      ? "badge-light-warning"
                      : status == intl.formatMessage({ id: "RejectedRequests" })
                      ? "badge-light-danger"
                      : "badge-light-success"
                  }`}
                >
                  {status ? status : "الطلبات المعلقه"}
                </span>
              </div>
              <div className=" d-flex justify-content-between mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <img
                    src="/media/avatars/300-3.jpg"
                    className="d-block mx-2"
                    style={{ height: "50px", width: "50px" }}
                    alt="profile img"
                  />
                  <div className="mx-3 text-gray-700">
                    <p className="mb-1 fw-bolder text-black">سعود الشهري</p>
                    <p className="mb-1 text-muted">امس في 5:06 PM</p>
                  </div>
                </div>
                <div className="w-75"></div>
              </div>
              <p className="text-primary mt-3 mb-5 fs-3">
                الحياه اكثر اثاره للاهتمام عندما تتذكر اخر مره
              </p>
            </div>
          </div>
          <hr
            style={{ backgroundColor: "gray", width: "95%", margin: "0 auto" }}
          />

          <div className="container-xxl mt-5 mb-4">
            <div className="pt-3">
              <label htmlFor="addNotes" className="px-2 mb-3">
                {intl.formatMessage({ id: "Notes" })}
              </label>
              <textarea
                name="admine notes"
                placeholder={intl.formatMessage({
                  id: "AddNotesToTheRequest",
                })}
                className="form-control form-control-solid mb-3 mb-lg-0 min-h-100px"
                style={{ maxHeight: "200px" }}
                id="addNotes"
              ></textarea>
            </div>
          </div>

          <div className="mt-5 mb-5 col-12 col-lg-8 mx-auto">
            <div className="outputCard card-diff-toolbar pt-5 w-100 mt-3 d-flex justify-content-center">
              <div className="d-flex justify-content-center align-items-center w-100 w-lg-50 w-md-75 w-sm-75">
                <div
                  className="btn btn-secondary mx-3 text-center w-50 w-lg-25 w-md-25 w-sm-50"
                  // data-bs-target="#Rega_modal_reject"
                  // data-bs-toggle="modal"
                  onClick={() => setModalRShow(true)}
                >
                  {intl.formatMessage({ id: "Reject" })}
                </div>
                <button
                  type="button"
                  // data-bs-toggle="modal"
                  // data-bs-target="#Rega_modal_accept"
                  onClick={() => setModalShow(true)}
                  className="btn btn-success mx-3 text-center w-50 w-lg-25 w-md-25 w-sm-50"
                  style={{ border: "none" }}
                >
                  {intl.formatMessage({ id: "Acceptance" })}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_accept" aria-hidden="true">
        <AcceptPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      <div className="modal fade" id="Rega_modal_reject" aria-hidden="true">
        <RejectPopup
          show={modalRShow}
          handleClose={() => setModalRShow(false)}
        />
      </div>
    </Fragment>
  );
}

export default KnowledgePostingRequestsDetails;
