import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { EditPopup } from "../../../partials/EditPopup";
import { DeletePopup } from "../../../partials/DeletePopup";
import { RxDividerHorizontal } from "react-icons/rx";
import { KTSVG } from "../../../../helpers";

const EditProblem: FC = () => {
  const intl = useIntl();
  const [modalEShow, setModalEShow] = useState<boolean>(false);
  const [modalDShow, setModalDShow] = useState<boolean>(false);

  return (
    <div className="card card-xl-stretch mb-xl-0">
      <div className="card-header px-3 pt-3 pb-2 mb-3">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fs-4 my-5 ">
            {intl.formatMessage({ id: "EDIT.PROBLEM" })}
          </span>
          <span className="mt-1 fw-semibold fs-6 text-muted my-5">
            {intl.formatMessage({ id: "CHOOSE.FILTERING.DATA" })}
          </span>
        </h3>
      </div>
      <div className="card-body py-3 px-3 mx-8">
        <div className="tab-content">
          <div
            className="tab-pane fade active show"
            id="REGA_table_widget_5_tab_1"
          >
            <form noValidate className="form outputForm">
              <div className="row">
                <div className="col-lg-4 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="outputName"
                    className="form-label px-2 fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "PROBLEM.ADDRESS" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-map-marker-alt special"></i>
                      </span>
                    </div>
                    <input
                      id="outputName"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: "PROBLEM.ADDRESS",
                      })}
                    />
                  </div>
                </div>
                <div className="col-lg-4 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="stageName"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "PROBLEM.SOURCE" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-box-open special"></i>
                      </span>
                    </div>
                    <input
                      id="stageName"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({ id: "PROBLEM.SOURCE" })}
                    />
                  </div>
                </div>
                <div className="col-lg-4 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="stageName"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "PROBLEM.OWNER" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user-cog special"></i>
                      </span>
                    </div>
                    <input
                      id="stageName"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({ id: "PROBLEM.OWNER" })}
                    />
                  </div>
                </div>
                <div className="col-lg-4 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="outputDate"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "PROBLEM.DATE" })}
                  </label>
                  <input
                    id="outputDate"
                    type="date"
                    className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                    placeholder={intl.formatMessage({ id: "PROBLEM.DATE" })}
                  />
                </div>
                <div className="col-lg-8 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="stageName"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "PROBLEM.DESCRIPTION" })}
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-info-circle special"></i>
                      </span>
                    </div>
                    <input
                      id="stageName"
                      type="text"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: "PROBLEM.DESCRIPTION",
                      })}
                    />
                  </div>
                </div>
                <div className="col-lg-4 mb-2 pt-2 pb-3">
                  <label
                    htmlFor="outputDate"
                    className="form-label px-2  fontSz-6 required"
                  >
                    {intl.formatMessage({ id: "PROJECTS.NUM" })}
                  </label>
                  <input
                    id="outputDate"
                    type="date"
                    className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                    placeholder={intl.formatMessage({ id: "PROJECTS.NUM" })}
                  />
                </div>
                <div className="row border border-gray-300">
                  <div className="col-lg-6 border-start border-gray-300">
                    <div className="container pt-10 ps-5">
                      <p className="text-primary fw-bolder fs-4 mb-4">
                        {intl.formatMessage({ id: "PROJECTS" })}
                      </p>
                      <p className="d-flex align-items-center my-10">
                        بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها (اسم
                        المشروع)
                      </p>
                      <p className="d-flex align-items-center my-10">
                        بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها (اسم
                        المشروع)
                      </p>
                      <p className="d-flex align-items-center my-10">
                        بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها (اسم
                        المشروع)
                      </p>
                      <p className="d-flex align-items-center my-10">
                        بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها (اسم
                        المشروع)
                      </p>
                      <p className="d-flex align-items-center my-10">
                        بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها (اسم
                        المشروع)
                      </p>
                      <p className="d-flex align-items-center my-10">
                        بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها (اسم
                        المشروع)
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="container pt-10 px-5">
                      <p className="text-primary fw-bolder fs-4 mb-10">
                        {intl.formatMessage({ id: "EDIT.PROJECTS" })}
                      </p>
                      <div className="d-flex justify-content-center my-4">
                        <form
                          className="w-100 position-relative mb-5"
                          autoComplete="off"
                        >
                          <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-3 translate-middle-y">
                            <KTSVG
                              path="/media/icons/duotune/general/gen114_search.svg"
                              className="pe-5"
                            />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-solid px-15"
                            name="search"
                            value=""
                            placeholder={intl.formatMessage({
                              id: "SEARCH.ABOUT.PROJECTS",
                            })}
                          />
                        </form>
                      </div>
                      <div className="d-flex my-4">
                        <p>
                          بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها
                          (اسم المشروع)
                        </p>
                        <i className="fa-solid fa-circle-xmark text-danger mx-2"></i>
                      </div>
                      <div className="d-flex my-4">
                        <p>
                          بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها
                          (اسم المشروع)
                        </p>
                        <i className="fa-solid fa-circle-xmark text-danger mx-2"></i>
                      </div>
                    </div>
                    <hr className="w-100 text-muted" />
                    <div className="container pt-4 pb-4 px-5">
                      <div className="d-flex align-items-center my-3">
                        <div className="form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md">
                          <input
                            className="form-check-input widget-9-check xCheckBg"
                            type="checkbox"
                            value="test"
                            id="Checkme1"
                          />
                        </div>
                        <label
                          className="form-check-label ms-4"
                          htmlFor="Checkme1"
                        >
                          بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها
                          (اسم المشروع)
                        </label>
                      </div>
                      <div className="d-flex align-items-center my-3">
                        <div className="form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md">
                          <input
                            className="form-check-input widget-9-check xCheckBg"
                            type="checkbox"
                            value="test"
                            id="Checkme1"
                          />
                        </div>
                        <label
                          className="form-check-label ms-4"
                          htmlFor="Checkme1"
                        >
                          بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها
                          (اسم المشروع)
                        </label>
                      </div>
                      <div className="d-flex align-items-center my-3">
                        <div className="form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md">
                          <input
                            className="form-check-input widget-9-check xCheckBg"
                            type="checkbox"
                            value="test"
                            id="Checkme1"
                          />
                        </div>
                        <label
                          className="form-check-label ms-4"
                          htmlFor="Checkme1"
                        >
                          بناء نظام قادر علي التعامل مع مشاكل المستخدم و حلها
                          (اسم المشروع)
                        </label>
                      </div>
                    </div>
                    <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center pb-4">
                      <div className="d-flex justify-content-center align-items-center w-50">
                        <Link
                          to={"/pmo-problem-challenge-details"}
                          className="btn btn-secondary mx-1 text-center w-100"
                        >
                          {intl.formatMessage({ id: "CANCEL" })}
                        </Link>
                        <div
                          className="btn btn-danger mx-1 text-center w-100"
                          // data-bs-toggle="modal"
                          // data-bs-target="#Rega_modal_Delete"
                          onClick={(event) => {
                            event.preventDefault();
                            setModalDShow(true);
                          }}
                        >
                          {intl.formatMessage({ id: "Delete" })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-7 mx-auto mb-10 mt-10">
                <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center w-50">
                    <Link
                      to={"/pmo-problem-challenge-details"}
                      className="btn btn-secondary mx-1 text-center w-100"
                    >
                      {intl.formatMessage({ id: "CANCEL" })}
                    </Link>
                    <div
                      className="btn btn-primary mx-1 text-center w-100"
                      // data-bs-toggle="modal"
                      // data-bs-target="#Rega_modal_edit"
                      onClick={() => setModalEShow(true)}
                    >
                      {intl.formatMessage({ id: "Save" })}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_edit" aria-hidden="true">
        <EditPopup handleCloseEdit={setModalEShow} showEdit={modalEShow} />
      </div>
      <div className="modal fade" id="Rega_modal_Delete" aria-hidden="true">
        <DeletePopup
          handleCloseDelete={() => setModalDShow(false)}
          showDelete={modalDShow}
        />
      </div>
    </div>
  );
};

export { EditProblem };
