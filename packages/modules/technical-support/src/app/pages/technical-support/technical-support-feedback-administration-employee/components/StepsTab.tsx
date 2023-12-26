import React, { Fragment } from "react";
import { useIntl } from "react-intl";

function StepsTab() {
  let intl = useIntl();
  return (
    <Fragment>
      <div
        className="tab-pane fade"
        id="steps"
        role="tabpanel"
        aria-labelledby="steps-tab"
      >
        <div className="timeline-label">
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
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-dark fw-black fw-bolder ">
                      تركى العطالله
                    </h4>
                    <p className="text-muted mb-0">موظف الهيئه</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-dark fw-bolder">25 Jun 2022</h4>
                    <p className="text-mute mb-0">
                      {intl.formatMessage({ id: "SendingDate" })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row my-4  text-center">
                <div className="col-md-12 mt-5">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 ">
                    <p className="mb-0 py-2 fw-bolder text-muted d-flex justify-content-start align-items-center">
                      {" "}
                      <i className="fa fa-genderless text-warning fs-5 mx-3"></i>{" "}
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
                src="/media/avatars/woman.jpg"
                style={{ width: "64px", borderRadius: "50%" }}
              />
            </div>

            <div className="fw-mormal timeline-content text-muted ps-3 mx-5">
              <div className="row">
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-dark fw-black fw-bolder">
                      خلود العجلان
                    </h4>
                    <p className="text-muted mb-0">موظف الدعم الفني</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-primary fw-bolder">25 Jun 2022</h4>
                    <p className="text-mute mb-0">
                      {intl.formatMessage({ id: "ReceivedDate" })}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-danger  fw-bolder">25 Jun 2022</h4>
                    <p className="text-mute mb-0">
                      {intl.formatMessage({ id: "RejectDate" })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row my-4  text-center">
                <div className="col-md-12 mt-5">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 ">
                    <p className="mb-0 py-2 fw-bolder text-muted d-flex justify-content-start align-items-center">
                      {" "}
                      <i className="fa fa-genderless text-warning fs-5 mx-3"></i>{" "}
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
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-dark fw-black fw-bolder">
                      تركى العطالله
                    </h4>
                    <p className="text-muted mb-0">موظف الهيئه</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <p className="text-warning fw-bolder">25 Jun 2022</p>
                    <p className="text-mute mb-0">
                      {intl.formatMessage({ id: "ReopeningDate" })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row my-4  text-center">
                <div className="col-md-12 mt-5">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 ">
                    <p className="mb-0 py-2 fw-bolder text-muted d-flex justify-content-start align-items-center">
                      {" "}
                      <i className="fa fa-genderless text-warning fs-5 mx-3"></i>{" "}
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
                src="/media/avatars/woman.jpg"
                style={{ width: "64px", borderRadius: "50%" }}
              />
            </div>

            <div className="fw-mormal timeline-content text-muted ps-3 mx-5">
              <div className="row">
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-dark fw-black fw-bolder ">
                      خلود العجلان
                    </h4>
                    <p className="text-muted mb-0">موظف الدعم الفني</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <p className="text-success fw-bolder">25 Jun 2022</p>
                    <p className="text-mute mb-0">
                      {intl.formatMessage({ id: "SolutionDate" })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row my-4  text-center">
                <div className="col-md-12 mt-5">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 ">
                    <p className="mb-0 py-2 fw-bolder text-muted d-flex justify-content-start align-items-center">
                      {" "}
                      <i className="fa fa-genderless text-warning fs-5 mx-3"></i>{" "}
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
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-dark fw-black fw-bolder ">
                      تركى العطالله
                    </h4>
                    <p className="text-muted mb-0">موظف الهيئه</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-dark fw-bolder">25 Jun 2022</h4>
                    <p className="text-mute mb-0">
                      {intl.formatMessage({ id: "ClosingDate" })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row my-4  text-center">
                <div className="col-md-12 mt-5">
                  <div className="border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 ">
                    <p className="mb-0 py-2 fw-bolder text-muted d-flex justify-content-start align-items-center">
                      {" "}
                      <i className="fa fa-genderless text-warning fs-5 mx-3"></i>{" "}
                      ملاحظة: العمل على زيادة الوعى العقارى{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default StepsTab;
