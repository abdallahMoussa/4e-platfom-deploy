import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import AddAttachmentTab from "./AddAttachmentTab";
import LinkToAnotherReportTab from "./LinkToAnotherReportTab";
import Swal from "sweetalert2";
import RedirectPopup from "../popups/RedirectPopup";
import RejectReportPopup from "../popups/RejectReportPopup";
import { useNavigate, useParams } from "react-router";

function OptionsTab() {
  let intl = useIntl();
  let { id } = useParams();
  const [rejectReportShow, setRejectReportShow] = useState<boolean>(false);
  const [redirectShow, setRedirectShow] = useState<boolean>(false);

  let navigate = useNavigate();
  let [activeAttchment, setActiveAttchment] = useState(true);
  let [activeLink, setActiveLink] = useState(false);
  let activeAttchmentHandler = () => {
    setActiveAttchment(true);
    setActiveLink(false);
  };
  let activeLinkHandler = () => {
    setActiveAttchment(false);
    setActiveLink(true);
  };
  let showAlert = () => {
    Swal.fire({
      text: "تمت الاضافه بنجاح",
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: "موافق",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  return (
    <Fragment>
      <div
        className="tab-pane fade show active"
        id="options"
        role="tabpanel"
        aria-labelledby="options-tab"
      >
        <div className="row mb-9">
          <div className="col-lg-6">
            <textarea
              className="form-control h-450px pt-4 form-control-lg form-control-solid mb-3 mb-lg-2"
              placeholder={intl.formatMessage({
                id: "TheOptions",
              })}
            ></textarea>
          </div>
          <div className="col-lg-6 card  shadow h-450px ">
            <div className="w-100">
              <div
                className="nav row  mx-auto nav-pills mb-7   background-pills d-flex justify-content-center justify-content-lg-evenly"
                id="pills-tab"
                role="tablist"
                // style={{ backgroundColor: "#F5F8FA" }}
              >
                <div
                  className="nav-item col-12 col-lg-2 w-40 navTabsPills"
                  role="presentation"
                >
                  <button
                    className={`nav-link w-100 m-1 fs-5 fw-bolder  ${
                      activeAttchment
                        ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                        : ""
                    }`}
                    id="attachment-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#attachment"
                    type="button"
                    role="tab"
                    aria-controls="options"
                    aria-selected="true"
                    onClick={() => {
                      activeAttchmentHandler();
                    }}
                    style={{
                      color: `${
                        activeAttchment ? "rgb(0, 158, 247)" : "black"
                      }`,
                      backgroundColor: `${activeAttchment ? "white" : ""}`,
                      borderRadius: `${activeAttchment ? "20px" : ""}`,
                    }}
                  >
                    {intl.formatMessage({ id: "AddAttachments" })}{" "}
                  </button>
                </div>
                <div
                  className="nav-item col-12 col-lg-2 w-40 navTabsPills"
                  role="presentation"
                >
                  <button
                    className={`nav-link w-100 fs-5 m-1 fw-bolder ${
                      activeLink
                        ? "rounded-0 active btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary"
                        : ""
                    }`}
                    id="link-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#link"
                    type="button"
                    role="tab"
                    aria-controls="track"
                    aria-selected="false"
                    onClick={() => {
                      activeLinkHandler();
                    }}
                    style={{
                      color: `${activeLink ? "rgb(0, 158, 247)" : "black"}`,
                      backgroundColor: `${activeLink ? "white" : ""}`,
                      borderRadius: `${activeLink ? "20px" : ""}`,
                    }}
                  >
                    {intl.formatMessage({ id: "LinkToAnotherReport" })}{" "}
                  </button>
                </div>
              </div>

              <div className="tab-content px-2" id="pills-tabContent">
                <AddAttachmentTab active={activeLink} />
                <LinkToAnotherReportTab active={activeLink} />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-6">
          <div className="col-2">
            <div
              className="btn btn-danger w-85 text-center "
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_reject"
              onClick={() => setRejectReportShow(true)}
              style={{ border: "none" }}
            >
              {intl.formatMessage({ id: "Reject" })}
            </div>
          </div>
          <div className="col-2">
            <div
              className="btn btn-primary w-85 text-center"
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_redirect"
              onClick={() => setRedirectShow(true)}
            >
              {intl.formatMessage({ id: "Redirect" })}
            </div>
          </div>
          <div className="col-2">
            <div
              className="btn btn-success w-85 text-center"
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_reject"
              onClick={() => {
                navigate(
                  `/technical-support-feedbacks-adminstration-manager/${id}/request-approval-details`
                );
              }}
            >
              {intl.formatMessage({ id: "Accept" })}
            </div>
          </div>
        </div>
      </div>
      <RedirectPopup
        show={redirectShow}
        handleClose={() => setRedirectShow(false)}
      />
      <RejectReportPopup
        show={rejectReportShow}
        handleClose={() => setRejectReportShow(false)}
      />
    </Fragment>
  );
}

export default OptionsTab;
