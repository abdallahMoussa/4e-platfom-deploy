import React, { Fragment } from "react";
import { useIntl } from "react-intl";

function TrackTab() {
  let intl = useIntl();
  return (
    <Fragment>
      <div
        className="tab-pane fade"
        id="track"
        role="tabpanel"
        aria-labelledby="track-tab"
      >
        <div className=" my-gray-dash-border d-flex  align-items-center  px-4 py-4  mb-3 w-100">
          <div className="w-5px h-5px border-radius-50 mx-2 bg-gray"></div>
          <p className="pb-2 mb-0 fw-bolder mx-1 text-black-50 fw-bolder fs-6">
            {intl.formatMessage({
              id: "TheTechnicalFailureReportWasReceivedOnDate",
            })}{" "}
          </p>
          <p className="px-2 mb-0  pb-2 text-black-50 fw-bolder fs-6 text-primary">
            25 June 2022
          </p>
        </div>
        <div className=" my-gray-dash-border d-flex  align-items-center  px-4 py-4  mb-3 w-100">
          <div className="w-5px h-5px border-radius-50 mx-2 bg-gray"></div>

          <p className="pb-2 mb-0 fw-bolder mx-1 text-black-50 fw-bolder fs-6">
            {intl.formatMessage({
              id: "TheReportWasAcceptedOnDate",
            })}{" "}
          </p>
          <p className="px-2 mb-0  pb-2 text-black-50 fw-bolder fs-6 text-primary">
            26 June 2022
          </p>
        </div>
        <div className=" my-gray-dash-border d-flex  align-items-center  px-4 py-4  mb-3 w-100">
          <div className="w-5px h-5px border-radius-50 mx-2 bg-gray"></div>

          <p className="pb-2 mb-0 fw-bolder mx-1 text-black-50 fw-bolder fs-6">
            {intl.formatMessage({
              id: "TheReportWasVerifiedAndATechnicalMalfunctionWasDiscoveredOnTheDate",
            })}{" "}
          </p>
          <p className="px-2 mb-0  pb-2 text-black-50 fw-bolder fs-6 text-primary">
            27 June 2022
          </p>
        </div>
        <div className=" my-gray-dash-border d-flex  align-items-center  px-4 py-4  mb-3 w-100">
          <div className="w-5px h-5px border-radius-50 mx-2 bg-gray"></div>

          <p className="pb-2 mb-0 fw-bolder mx-1 text-black-50 fw-bolder fs-6">
            {intl.formatMessage({
              id: "ProceduresForResolvingTheTechnicalFaultWereInitiatedOnTheDate",
            })}{" "}
          </p>
          <p className="px-2 mb-0  pb-2 text-black-50 fw-bolder fs-6 text-primary">
            28 June 2022
          </p>
        </div>
        <div className=" my-gray-dash-border d-flex  align-items-center  px-4 py-4  mb-3 w-100">
          <div className="w-5px h-5px border-radius-50 mx-2 bg-gray"></div>

          <p className="pb-2 mb-0 fw-bolder mx-1 text-black-50 fw-bolder fs-6">
            {intl.formatMessage({
              id: "TheReportWasResolvedAndClosedOnDate",
            })}{" "}
          </p>
          <p className="px-2 mb-0  pb-2 text-black-50 fw-bolder fs-6 text-primary">
            29 June 2022
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default TrackTab;
