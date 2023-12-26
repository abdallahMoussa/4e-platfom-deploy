import React, { Fragment } from "react";

function TotalCircularReports() {
  return (
    <Fragment>
      {/* <div className="circular-progress d-flex align-items-center justify-content-center flex-column">
        <p className="fw-bolder fs-1 text-dark">145</p>
        <p className="fw-bolder fs-3 text-dark">اجمالي عدد البلاغات</p>
        <p className="fw-bolder text-muted fs-4">نسبه البلاغات: 100%</p>
      </div> */}
      {/* <div className="outer circle shapeborder">
        <div className="inner circle shapeborder">&nbsp;</div>
      </div> */}
     <div style={{height:"300px",width:"300px"}} className="position-relative circular-container">
     <div className="color-wheel">
      </div>
      <p className="fw-bolder fs-1 text-dark p1 d-flex align-items-center justify-content-center" >145</p>
        <p className="fw-bolder fs-3 text-dark p2 d-flex align-items-center justify-content-center" >اجمالي عدد البلاغات</p>
        <p className="fw-bolder text-muted fs-4 p3 d-flex align-items-center justify-content-center" >نسبه البلاغات: 100%</p>
     </div>
    </Fragment>
  );
}

export default TotalCircularReports;
