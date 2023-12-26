import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { ClosePopup } from "../../../../../partials/ClosePopup";
import { RejectPopup } from "../../../../../partials/RejectPopup";
import { EditPopup } from "../../../../../partials/EditPopup";

const ProjectStatus: FC = () => {
  const intl = useIntl();
  const [modalEShow, setModalEShow] = useState<boolean>(false);
  const [modalRShow, setModalRShow] = useState<boolean>(false);
  const [modalCShow, setModalCShow] = useState<boolean>(false);

  return (
    <>
      <div className="col-lg-6 col-md-6 col-12 ">
        <div className="card card-xl-stretch mb-xl-0">
          <div className="card-body py-3 px-3">
            <div className="d-flex flex-stack py-5 ">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-55px symbol-circle mx-5">
                  <img alt="Pic" src="/media/avatars/300-3.jpg" />
                </div>

                <div className="ms-6">
                  <div className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary mb-3">
                    تركى العطالله{" "}
                  </div>

                  <div className="fw-semibold text-muted">مدير المشروع</div>
                </div>
              </div>

              <div className="d-flex mx-5 ">
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-primary mb-2">
                    25 Jun 2022
                  </div>

                  <div className="fs-7 fw-bolder text-gray-700">
                    اغلاق المشروع
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-stack py-5 ">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-55px symbol-circle mx-5">
                  <img alt="Pic" src="/media/avatars/300-3.jpg" />
                </div>

                <div className="ms-6">
                  <div className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary mb-3">
                    عبدالله محمد{" "}
                  </div>

                  <div className="fw-semibold text-muted"> مالك المشروع</div>
                </div>
              </div>

              <div className="d-flex mx-5 ">
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-success mb-2">
                    25 Jun 2022
                  </div>

                  <div className="fs-7 fw-bolder text-gray-700">
                    تمت الموافقه{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-11 notice d-flex rounded border-dark border  my-5 mx-10">
              <div className=" my-5 mx-5 text-dark fw-bolder fs-5 ">
                <i className="fa-sharp fa-regular fa-circle  fa-xl mx-2 text-success"></i>
                ملاحظة : العمل على زيادة الوعى العقارى
              </div>
            </div>

            <div className="d-flex flex-stack py-5 ">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-55px symbol-circle mx-5">
                  <img alt="Pic" src="/media/avatars/300-3.jpg" />
                </div>

                <div className="ms-6">
                  <div className="d-flex align-items-center fs-5 fw-bolder text-dark text-hover-primary mb-3">
                    عبدالله محمد{" "}
                  </div>

                  <div className="fw-semibold text-muted">
                    {" "}
                    مكتب اداره المشاريع
                  </div>
                </div>
              </div>

              <div className="d-flex mx-5 ">
                <div className="text-end">
                  <div className="fs-5 fw-bolder text-warning mb-2">
                    25 Jun 2022
                  </div>

                  <div className="fs-7 fw-bolder text-gray-700">
                    بانتظار الموافقه{" "}
                  </div>
                </div>
              </div>
            </div>
            <label className="form-label px-2  fontSz-6 my-5">
              {" "}
              {intl.formatMessage({ id: "Notes" })}{" "}
            </label>
            <textarea
              className="form-control form-control-solid"
              rows={5}
              placeholder=" اضف ملاحظات علي مهام المشروع"
            ></textarea>

            <div className="mb-2 pt-4 pb-3 ">
              <label className="form-label px-2  fontSz-6 ">
                {intl.formatMessage({ id: "Attachments" })}{" "}
              </label>
              <div className=" notice d-flex bg-light-primary rounded border-primary border border-dashed mb-1  mx-5">
                <label
                  htmlFor="outputAttachment"
                  className="form-label px-2  fontSz-6 dropzone-select   w-100 uploadFile-style inputAreaHeight"
                >
                  <div className="row align-items-center">
                    <div className="col-md-1">
                      <img
                        src="/media/pmo/uploadFile.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="text-primary fw-bolder my-1">
                        {" "}
                        {intl.formatMessage({ id: "QuickFileUploader" })}
                      </p>
                      <p>
                        {intl.formatMessage({
                          id: "DragAndDropOrChooseFilesFromComputer",
                        })}
                      </p>
                    </div>
                  </div>
                </label>
                <div
                  className="dropzone dropzone-queue mb-2"
                  id="kt_dropzonejs_example_3"
                >
                  <div className="dropzone-panel mb-lg-0 mb-2">
                    <input
                      multiple
                      type="file"
                      accept="image/*"
                      id="outputAttachment"
                      name="attachments"
                      placeholder="رفع الملفات"
                      className="dropzone-select w-100 uploadFile-style inputAreaHeight d-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7 mx-auto mb-10">
              <div className="  w-100 mt-3 d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center w-100 ">
                  <div
                    // data-bs-toggle="modal"
                    // data-bs-target="#Rega_modal_reject"
                    onClick={() => setModalRShow(true)}
                    className="btn btn-danger mx-1 text-center w-100"
                  >
                    {intl.formatMessage({ id: "Reject" })}
                  </div>
                  <div
                    // data-bs-toggle="modal"
                    // data-bs-target="#Rega_modal_close"
                    onClick={() => setModalCShow(true)}
                    className="btn btn-success mx-1 text-center w-100"
                  >
                    {intl.formatMessage({ id: "Accept" })}
                  </div>
                  <div
                    // data-bs-toggle="modal"
                    // data-bs-target="#Rega_modal_edit"
                    onClick={() => setModalEShow(true)}
                    className="btn btn-primary mx-1 text-center w-100"
                  >
                    {intl.formatMessage({ id: "Edit" })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_close" aria-hidden="true">
        <ClosePopup
          show={modalCShow}
          handleClose={() => setModalCShow(false)}
        />
      </div>
      <div className="modal fade" id="Rega_modal_reject" aria-hidden="true">
        <RejectPopup
          show={modalRShow}
          handleClose={() => setModalRShow(false)}
        />
      </div>
      <div className="modal fade" id="Rega_modal_edit" aria-hidden="true">
        <EditPopup handleCloseEdit={setModalEShow} showEdit={modalEShow} />
      </div>
    </>
  );
};
export { ProjectStatus };
