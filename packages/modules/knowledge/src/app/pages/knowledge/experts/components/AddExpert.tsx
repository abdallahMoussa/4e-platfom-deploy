import BasicData from "./BasicData";
import JobData from "./JobData";
import { ExperienceData } from "./ExperienceData";
import { useIntl } from "react-intl";
import { AddPopup } from "../../../partials/AddPopup";
import { useNavigate } from "react-router";
import { EmployeeHierarchyPopup } from "../../../partials/EmployeeHierarchyPopup";
import { useState } from "react";

const AddExpert = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalHShow, setModalHShow] = useState<boolean>(false);

  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <>
      <div className="card card-xl-stretch mb-xl-8 me-3">
        <div className="card-body py-3">
          <form noValidate className="">
            <div className="mb-4 pt-2 pb-3 " style={{ width: "100%" }}>
              <div className="d-flex justify-content-between mb-3">
                <div className="w-50">
                  <label className="fs-6 fw-bold mb-2" htmlFor="name">
                    {intl.formatMessage({ id: "EmployeeName" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user-cog special"></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder={intl.formatMessage({ id: "EmployeeName" })}
                    />
                    <div className="h-110 d-flex" role="button">
                      <span
                        className="input-group-text"
                        // data-bs-target="#Rega_modal_viewEmployee_hierarchy_addExpert"
                        // data-bs-toggle="modal"
                        onClick={() => setModalHShow(true)}
                      >
                        <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-20">
                  <input
                    type="checkbox"
                    id="mycheck"
                    className="form-check-input widget-9-check xCheckBg mx-2"
                  />
                  <label htmlFor="mycheck" className="fs-6 fw-bold mb-2">
                    {intl.formatMessage({ id: "OutsideExpert" })}
                  </label>
                </div>
              </div>
              <div />
            </div>
            <BasicData />
            <JobData />
            <ExperienceData />
            <div className="col-12 col-lg-7 mx-auto mb-10">
              <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center w-50">
                  <div
                    className="btn btn-secondary mx-1 text-center w-100"
                    onClick={() => navigate("/knowledge-experts")}
                  >
                    {intl.formatMessage({ id: "Cancel" })}
                  </div>
                  <button
                    className="btn btn-primary w-100"
                    type="button"
                    // data-kt-element="send"
                    // data-bs-toggle="modal"
                    // data-bs-target="#Rega_modal_add"
                    onClick={() => setModalShow(true)}
                  >
                    {intl.formatMessage({ id: "Add" })}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      <div
        className="modal fade"
        id="Rega_modal_viewEmployee_hierarchy_addExpert"
        aria-hidden="true"
      >
        <EmployeeHierarchyPopup
          show={modalHShow}
          handleClose={() => setModalHShow(false)}
        />
      </div>
    </>
  );
};

export { AddExpert };
