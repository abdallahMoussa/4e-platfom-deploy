import { FC, useState } from "react";
import { EditPopup } from "../../../../../partials/EditPopup";
import { Col, Form } from "react-bootstrap";
import { PDFViewer } from "../../../../../partials/PDFViewer";
import { useIntl } from "react-intl";

const ProjectSettings: FC = () => {
  const [modalEShow, setModalEShow] = useState<boolean>(false);
  const intl = useIntl();

  const [imagePreview, setImagePreview] = useState<string>(
    "/media/avatars/blank-img.png"
  );
  const [file, setFile] = useState<File | null>(null);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setFile(file);
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

  function handleCancel() {
    setImagePreview("/media/avatars/blank-img.png");
    setFile(null);
  }

  function handleRemove() {
    setImagePreview("/media/avatars/blank-img.png");
    setFile(null);
  }
  return (
    <>
      <div className="card card-xl-stretch mb-xl-8">
        <div className="card-header border-0 pt-3 pb-2 mb-2">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">
              {intl.formatMessage({ id: "ProjectSettings" })}{" "}
            </h3>
          </div>
        </div>
        <div className="card-body py-3">
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="REGA_table_widget_5_tab_1"
            ></div>
            <Form>
              <div className="card-body border-top p-9">
                <div className="row mb-6 d-flex align-items-center">
                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {" "}
                    {intl.formatMessage({ id: "ProjectLogo" })}
                  </label>
                  <div className="col-lg-3">
                    <div
                      className="image-input image-input-outline "
                      data-kt-image-input="true"
                      style={{
                        backgroundImage: `url(${"/media/svg/brand-logos/plurk.svg"})`,
                      }}
                    >
                      <div
                        className="image-input-wrapper w-125px h-125px"
                        style={{ backgroundImage: `url(${imagePreview})` }}
                      ></div>

                      <label
                        className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow "
                        data-kt-image-input-action="change"
                        data-bs-toggle="tooltip"
                        data-bs-dismiss="click"
                        title="Change avatar"
                      >
                        <i className="fas fa-edit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>

                        <input
                          type="file"
                          name="avatar"
                          accept=".png, .jpg, .jpeg"
                          onChange={handleImageChange}
                        />
                        {file && <input type="hidden" name="avatar_remove" />}
                      </label>

                      {file && (
                        <span
                          className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                          data-kt-image-input-action="cancel"
                          data-bs-toggle="tooltip"
                          data-bs-dismiss="click"
                          title="Cancel avatar"
                          onClick={handleCancel}
                        >
                          <i className="fas fa-xmark "></i>
                        </span>
                      )}

                      {file && (
                        <span
                          className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                          data-kt-image-input-action="remove"
                          data-bs-toggle="tooltip"
                          data-bs-dismiss="click"
                          title="Remove avatar"
                          onClick={handleRemove}
                        >
                          <i className="fas fa-xmark "></i>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row mb-6 d-flex align-items-center">
                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "ProjectName" })}
                  </label>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="special bi bi-kanban special"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="جائزة الدرجة"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-6 d-flex align-items-center">
                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "ProjectType" })}
                  </label>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="bi bi-file-earmark-medical special"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="علاقة العميل"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-6 d-flex align-items-center">
                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "ProjectDescription" })}
                  </label>
                  <div className="col-lg-9">
                    <textarea
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 h-90px"
                      placeholder=" ها هي استراتيجية المخطط التفصيلي التي أستخدمها ، وأعدك بأنها تعمل مثل السحر ، ولن تجعل كتابة منشور المدونة الخاص بك أسهل فحسب ، بل ستساعدك على توصيل رسالتك"
                    />
                  </div>
                </div>

                <div className="row mb-6 g-9 d-flex align-items-center">
                  <label className="col-lg-3 col-form-label fw-semibold fs-6 ">
                    {intl.formatMessage({ id: "ProjectCost" })}
                  </label>
                  <div className="col-lg-3">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-wallet special"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        placeholder="5000000 مليون"
                      />
                    </div>
                  </div>

                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "ProjectCode-Number" })}
                  </label>
                  <div className="col-lg-3">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-hashtag special"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        placeholder="52441KP0Lk"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-6 d-flex align-items-center g-9">
                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "ProjectDuration" })}
                  </label>
                  <div className="col-lg-3">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-clock special"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="500 يوم"
                      />
                    </div>
                  </div>

                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "ProjectManager" })}
                  </label>
                  <div className="col-lg-3">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user-cog special"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: "ProjectManager",
                        })}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-6 d-flex align-items-center g-9">
                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "ProjectStartDate" })}
                  </label>
                  <div className="col-lg-3">
                    <input
                      type="date"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                    />
                  </div>

                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "ProjectEndDate" })}
                  </label>
                  <div className="col-lg-3">
                    <input
                      type="date"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                    />
                  </div>
                </div>

                <div className="row mb-6 d-flex align-items-center g-9">
                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "ProjectSponsor" })}
                  </label>

                  <div className="col-lg-3">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user-shield special"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: "ProjectSponsor",
                        })}
                      />
                    </div>
                  </div>

                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "TheMainStakeholders" })}
                  </label>
                  <div className="col-lg-3 my-2">
                    <select
                      className="form-select form-select-solid"
                      aria-label="Select example"
                    >
                      <option value="رئيسى">رئيسى</option>
                      <option value="فرعى">فرعى</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-10 d-flex align-items-center ">
                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "CompanyName" })}
                  </label>
                  <div className="col-lg-3">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="special fas fa-building"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={intl.formatMessage({ id: "CompanyName" })}
                      />
                    </div>
                  </div>

                  <label className="col-lg-3 col-form-label fw-semibold fs-6">
                    {intl.formatMessage({ id: "ContractStartingDate" })}
                  </label>
                  <div className="col-lg-3">
                    <input
                      type="date"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                    />
                  </div>
                </div>

                <div className="row mb-6 d-flex align-items-center  g-9">
                  {/* <Col lg={4} className="d-flex">
                  <label className="col-lg-3 col-form-label fw-semibold fs-7">{intl.formatMessage({ id:"Notifications"})}</label>

                    <div className="d-flex align-items-center mt-3 ">
                      <label className=" form-check-inline form-check-solid  ">
                        <input className="form-check-input h-20px w-20px mx-2" name="communication[]" type="checkbox" />
                        <span className="form-check-label fw-semibold ps-2 fs-6 ">{intl.formatMessage({ id: "E-mail" })} </span>
                      </label>

                      <label className=" form-check-inline form-check-solid">
                        <input className="form-check-input h-20px w-20px mx-2" name="communication[]" type="checkbox" />
                        <span className="fw-semibold ps-2 fs-6">{intl.formatMessage({ id: "Phone" })}</span>
                      </label>
                  </div>
                  </Col> */}
                  {/* 
                  <Col lg={4}className="d-flex justify-content-center align-items-center">

                  <label className="col-lg-2 col-form-label fw-semibold fs-6">{intl.formatMessage({ id: "Cases" })}</label>

                    <label className="form-check form-switch form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" value="1" />
                      <span className="form-check-label fw-semibold">{intl.formatMessage({ id: "ALLOWABLE" })}</span>
                    </label>
                 </Col> */}

                  <Col lg={2} className="d-flex ">
                    <div className=" d-flex align-items-center mt-3   ">
                      <span>
                        <i
                          className="far fa-eye fa-lg"
                          data-bs-toggle="modal"
                          data-bs-target="#ShowLetter"
                          role="button"
                        ></i>
                      </span>

                      <label className=" form-check-inline form-check-solid  ">
                        <input
                          className="form-check-input h-20px w-20px "
                          type="checkbox"
                          checked={true}
                        />
                        <span className="form-check-label fw-semibold ps-2 fs-6 mx-2 ">
                          {intl.formatMessage({ id: "Contract" })}{" "}
                        </span>
                      </label>
                    </div>
                  </Col>

                  <Col
                    lg={2}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div className=" d-flex align-items-center mt-3  ">
                      <span>
                        <i
                          className="far fa-eye fa-lg"
                          data-bs-toggle="modal"
                          data-bs-target="#ShowLetter"
                          role="button"
                        ></i>
                      </span>

                      <label className=" form-check-inline form-check-solid">
                        <input
                          className="form-check-input h-20px w-20px mx-1"
                          type="checkbox"
                          checked={true}
                        />
                        <span className="fw-semibold ps-2 fs-6 mx-2">
                          تعميد
                        </span>
                      </label>
                    </div>
                  </Col>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-3 mt-lg-0 ">
                  <div className="me-4">
                    <div className="btn btn-secondary  text-center w-100">
                      {" "}
                      تعميد{" "}
                    </div>
                  </div>

                  <div className="me-4">
                    <div className="btn btn-secondary  text-center w-100">
                      {" "}
                      {intl.formatMessage({ id: "Contract" })}{" "}
                    </div>
                  </div>

                  <div className="me-4">
                    <div
                      // data-bs-toggle="modal"
                      // data-bs-target="#Rega_modal_edit"
                      onClick={() => setModalEShow(true)}
                      className="btn btn-primary text-center w-100"
                    >
                      {" "}
                      {intl.formatMessage({ id: "SaveModifications" })}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_edit" aria-hidden="true">
        <EditPopup handleCloseEdit={setModalEShow} showEdit={modalEShow} />
      </div>
      <div
        className="modal fade letter-show mt-10"
        id="ShowLetter"
        tabIndex={-1}
        aria-hidden="true"
        style={{ paddingRight: "0px" }}
      >
        <PDFViewer path="/media/pdf/test.pdf" />
      </div>
    </>
  );
};
export { ProjectSettings };
