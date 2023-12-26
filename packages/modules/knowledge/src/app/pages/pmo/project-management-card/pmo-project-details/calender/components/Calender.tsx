import React, { Fragment, useState } from "react";
import Cards from "./Cards";
import Progressbar from "./Progressbar";
import TimeTable1 from "./TimeTable";
import TimeTable2 from "./TimeTable2";
import { useIntl } from "react-intl";
import { RiFilter2Fill } from "react-icons/ri";
import FilterPopup from "../popups/FilterPopup";
function Calender() {
  const intl = useIntl();
  const [modalFShow, setModalFShow] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="detailsCard my-5">
        <div className="card card-xl-stretch mb-xl-8 p-6">
          <div className="d-flex align-items-center flex-wrap justify-content-between mb-5">
            <div className="w-lg-50 w-md-50 w-sm-50 w-100">
              <div className="d-flex mb-6 me-4">
                <div className=" d-inline-block  me-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="Checkboxes1"
                  />
                </div>
                <label htmlFor="Checkboxes1">BaseLine</label>
              </div>

              <div
                className=" d-flex align-items-center flex-wrap justify-content-between pe-4"
              >
                <div className="mx-4 d-flex align-items-center justify-content-between my-2">
                  <div className="w-30px h-20px bg-primary"></div>

                  <div className="mx-4">
                    {" "}
                    {intl.formatMessage({ id: "Present" })}
                  </div>
                </div>
                <div className="mx-4 d-flex align-items-center justify-content-between my-2">
                  <div className="w-30px h-20px bg-primary"></div>

                  <div className="mx-4">
                    {" "}
                    {intl.formatMessage({ id: "Supposed" })}
                  </div>
                </div>
                <div className="mx-4 d-flex align-items-center justify-content-between my-2">
                  <div
                    className="w-30px h-20px "
                    style={{ backgroundColor: "#009EF7", opacity: ".4" }}
                  ></div>
                  <div className="mx-4">
                    {" "}
                    {intl.formatMessage({ id: "Currentt" })}
                  </div>
                </div>

              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
              <button className="btn btn-sm btn-bg-white btn-active-color-white text-primary border border-3">
                {intl.formatMessage({ id: "CompletionRate" })}
                <span className="mx-1">80%</span>
              </button>
              <div className="me-4">
                <div
                  className="btn  btn-sm text-white fw-bolder"
                  // data-bs-toggle="modal"
                  style={{ backgroundColor: "#A1A5B7" }}
                  // data-bs-target="#Rega_modal_filter_calender"
                  onClick={(event) => {
                    event.preventDefault();
                    setModalFShow(true);
                  }}
                >
                  <RiFilter2Fill size={17} className="me-3 text-white" />{" "}
                  {intl.formatMessage({ id: "Filtering" })}
                </div>
              </div>
            </div>
          </div>

          <h3 className="fw-bolder mb-7 mt-3 mb-3 px-3">
            {intl.formatMessage({
              id: "StatisticsOfTheCurrentStagesOfTheProject",
            })}
          </h3>
          <Cards />

          <h3 className="my-4">
            {intl.formatMessage({ id: "ConditionsForApplyingForTheProject" })}
          </h3>
          <Progressbar />
          <h3 className="my-6">
            {intl.formatMessage({ id: "TimetableForTheProject" })}
          </h3>
          {/* the first timetable */}
          <TimeTable1 />
          {/* the second timetable , i commented it below */}
          {/* <TimeTable2/> */}
        </div>
      </div>
      <FilterPopup show={modalFShow} handleClose={() => setModalFShow(false)} />
    </Fragment>
  );
}

export default Calender;
