import React, { Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";
function RequestDetails() {
  let [requestDetails, setRequestDetails] = useState<any>();
  let [loading, setLoading] = useState<boolean>(true);
  let intl = useIntl();
  let location:any = useLocation();
  let type: any = location?.state?.type as any;
  useEffect(() => {
    setLoading(false);
    setRequestDetails((location?.state?.item as any) || []);
  }, []);
  if (loading) {
    return <h2>loading..............</h2>;
  }
  return (
    <Fragment>
      {type ==
      intl.formatMessage({
        id: "OutgoingRequest",
      }) ? (
        <div className="card mb-5 mb-xl-10 shadow pb-5">
          <div className="card-body pt-9 pb-0">
            <div
              className="card-header bg-light  px-4 py-4  mb-3 w-100"
              style={{
                borderTop: "1px dashed #A1A5B7",
                borderBottom: "1px dashed #A1A5B7",
                lineHeight: "2.5",
              }}
            >
              <h3 className="card-title align-items-start flex-column w-100">
                <span className="card-label fw-bolder text-black fs-4 mb-2 ">
                  {intl.formatMessage({
                    id: "RequestData",
                  })}
                </span>
                <span className="mt-1 fs-6 text-muted">
                  {intl.formatMessage({
                    id: "OutgoingRequests",
                  })}
                </span>
              </h3>
            </div>
            <div
              style={{ borderBottom: "1px dashed #A1A5B7" }}
              className="d-flex align-items-center  px-4 py-4  mb-3 w-100"
            >
              <p className="pb-2 mb-0 " style={{ color: "#727272" }}>
                {intl.formatMessage({
                  id: "RequestNumber",
                })}{" "}
                :{" "}
              </p>
              <p
                className="px-2 mb-0  pb-2 fw-bolder"
                style={{ color: "#727272" }}
              >
                {requestDetails?.requestNum}
              </p>
            </div>
            <div
              style={{ borderBottom: "1px dashed #A1A5B7" }}
              className="d-flex  align-items-center  px-4 py-4  mb-3 w-100"
            >
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({
                  id: "RequestName",
                })}{" "}
                :
              </p>
              <p
                className="px-2 mb-0  pb-2 fw-bolder"
                style={{ color: "#009EF7" }}
              >
                {requestDetails?.requestName}
              </p>
            </div>
            <div
              style={{ borderBottom: "1px dashed #A1A5B7" }}
              className="d-flex  px-4 py-4  mb-3 w-100 align-items-center"
            >
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({ id: "WhereItSentTo" })} :
              </p>
              <p
                className="px-2 mb-0  pb-2  fw-bolder"
                style={{ color: "#009EF7" }}
              >
                {requestDetails.whereSent.sentTo}
              </p>
              <p
                className="px-2 mb-0  pb-2  fw-bolder"
                style={{ color: "#727272" }}
              >
                {requestDetails.whereSent.commisionName}
              </p>
            </div>
            <div
              style={{ borderBottom: "1px dashed #A1A5B7" }}
              className="d-flex  align-items-center  px-4 py-4  mb-3 w-100"
            >
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({ id: "RequestType" })} :
              </p>
              <p
                className="px-2 mb-0  pb-2  fw-bolder"
                style={{ color: "#727272" }}
              >
                {requestDetails.requestType}
              </p>
            </div>
            <div
              style={{ borderBottom: "1px dashed #A1A5B7" }}
              className="d-flex align-items-center px-4 py-4  mb-3 w-100"
            >
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({ id: "AdminstrationName" })} :
              </p>
              <p
                className="px-2 mb-0  pb-2  fw-bolder"
                style={{ color: "#727272" }}
              >
                {requestDetails.whereSent.commisionName}
              </p>
            </div>
            <div
              className="d-flex align-items-center  px-4 py-4  mb-3 w-100"
              style={{ borderBottom: "1px dashed #A1A5B7" }}
            >
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({ id: "RequestDate" })} :
              </p>
              <p
                className="px-2 mb-0  pb-2 fw-bolder"
                style={{ color: "#727272" }}
              >
                {requestDetails.date}
              </p>
            </div>
            <div className="d-flex align-items-center   px-4 py-4  mb-3 w-100">
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({ id: "RequestStatus" })} :
              </p>
              <p
                className="px-2 mb-0  pb-2  fw-bolder"
                style={{
                  color: `${
                    requestDetails.status == "تم الرفض"
                      ? "#F14141"
                      : requestDetails.status == "تم الاستلام"
                      ? "#FFCF39"
                      : requestDetails.status == "تم القبول"
                      ? "#52CD50"
                      : ""
                  }`,
                }}
              >
                {requestDetails.status}
              </p>
            </div>
          </div>
        </div>
      ) : type ==
        intl.formatMessage({
          id: "IncomingRequest",
        }) ? (
        <div className="card mb-5 mb-xl-10 shadow pb-5">
          <div className="card-body pt-9 pb-0">
            <div
              className="card-header  bg-light px-4 py-4  mb-3 w-100"
              style={{
                borderTop: "1px dashed #A1A5B7",
                borderBottom: "1px dashed #A1A5B7",
                lineHeight: "2.5",
              }}
            >
              <h3 className="card-title align-items-start flex-column w-100">
                <span className="card-label fw-bolder text-black fs-4 mb-2 ">
                  {intl.formatMessage({
                    id: "RequestData",
                  })}
                </span>
                <span className="mt-1 fs-6 text-muted">
                  {intl.formatMessage({
                    id: "IncomingRequests",
                  })}
                </span>
              </h3>
            </div>
            <div
              style={{ borderBottom: "1px dashed #A1A5B7" }}
              className="d-flex align-items-center  px-4 py-4  mb-3 w-100"
            >
              <p className="pb-2 mb-0 " style={{ color: "#727272" }}>
                {intl.formatMessage({
                  id: "RequestNumber",
                })}{" "}
                :{" "}
              </p>
              <p
                className="px-2 mb-0  pb-2 fw-bolder"
                style={{ color: "#727272" }}
              >
                {requestDetails?.requestNum}
              </p>
            </div>
            <div
              style={{ borderBottom: "1px dashed #A1A5B7" }}
              className="d-flex  align-items-center px-4 py-4  mb-3 w-100"
            >
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({
                  id: "RequestName",
                })}{" "}
                :
              </p>
              <p
                className="px-2 mb-0  pb-2 fw-bolder"
                style={{ color: "#009EF7" }}
              >
                {requestDetails?.requestName}
              </p>
            </div>
            <div
              style={{ borderBottom: "1px dashed #A1A5B7" }}
              className="d-flex  px-4 py-4  mb-3 w-100 align-items-center"
            >
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({ id: "Applicant" })} :
              </p>
              <p
                className="px-2 mb-0  pb-2  fw-bolder"
                style={{ color: "#009EF7" }}
              >
                {requestDetails.whereSent.sentTo}
              </p>
              <p
                className="px-2 mb-0  pb-2  fw-bolder"
                style={{ color: "#727272" }}
              >
                {requestDetails.whereSent.commisionName}
              </p>
            </div>
            <div
              style={{ borderBottom: "1px dashed #A1A5B7" }}
              className="d-flex  align-items-center  px-4 py-4  mb-3 w-100"
            >
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({ id: "RequestType" })} :
              </p>
              <p
                className="px-2 mb-0  pb-2  fw-bolder"
                style={{ color: "#727272" }}
              >
                {requestDetails.requestType}
              </p>
            </div>
            <div
              style={{ borderBottom: "1px dashed #A1A5B7" }}
              className="d-flex align-items-center  px-4 py-4  mb-3 w-100"
            >
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({ id: "AdminstrationName" })} :
              </p>
              <p
                className="px-2 mb-0  pb-2  fw-bolder"
                style={{ color: "#727272" }}
              >
                {requestDetails.whereSent.commisionName}
              </p>
            </div>
            <div
              className="d-flex align-items-center px-4 py-4  mb-3 w-100"
              style={{ borderBottom: "1px dashed #A1A5B7" }}
            >
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({ id: "RequestDate" })} :
              </p>
              <p
                className="px-2 mb-0  pb-2 fw-bolder"
                style={{ color: "#727272" }}
              >
                {requestDetails.date}
              </p>
            </div>
            <div className="d-flex align-items-centerpx-4 py-4  mb-3 w-100">
              <p className="pb-2 mb-0 fw-bolder" style={{ color: "#727272" }}>
                {intl.formatMessage({ id: "RequestStatus" })} :
              </p>
              <p
                className="px-2 mb-0  pb-2  fw-bolder"
                style={{
                  color: `${
                    requestDetails.status == "تم الرفض"
                      ? "#F14141"
                      : requestDetails.status == "تم الاستلام"
                      ? "#FFCF39"
                      : requestDetails.status == "تم القبول"
                      ? "#52CD50"
                      : ""
                  }`,
                }}
              >
                {requestDetails.status}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default RequestDetails;
