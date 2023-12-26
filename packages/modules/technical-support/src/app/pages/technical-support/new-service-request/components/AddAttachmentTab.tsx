import React, { FC, Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../app/helpers";
interface Iprop {
  active: any;
}

const AddAttachmentTab: FC<Iprop> = ({ active }) => {
  let intl = useIntl();
  const [file, setFile] = useState<File | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  }

  let [attachments, setAttachments] = useState([
    {
      id: 1,
      img: "/media/svg/files/pdf.svg",
      title: "المتطلبات الفنيه للمشروع",
      name: "احمد محمود",
      period: "يومين",
    },
    {
      id: 2,
      img: "/media/svg/files/css.svg",
      title: "إنشاء تصميم مبدئي للمشروع",
      name: "محمد علي",
      period: "يوم",
    },
    {
      id: 3,
      img: "/media/svg/files/doc.svg",
      title: "استكمال تصميمات المشروع",
      name: "يوسف خالد",
      period: "يومين",
    },
  ]);

  function handleDeleteAttachment(id: number) {
    // Filter out the attachment with the specified id
    const updatedAttachments = attachments.filter(item => item.id !== id);
    setAttachments(updatedAttachments);
  }
  return (
    <Fragment>
      <div
        className="tab-pane fade active show"
        id="attachment"
        role="tabpanel"
        aria-labelledby="attachment-tab"
      >
        {file ? (
          <Fragment>
            <div className="mb-5">
              {attachments?.map((item) => {
                let { id, name, img, title, period } = item;
                return (
                  <Fragment key={Math.random()}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center justify-content-center h-70px">
                        <img
                          src={img}
                          className="d-block h-100 w-50px rounded-circle mx-2 "
                          alt=""
                        />
                        <div>
                          <p className="text-dark-75 mb-4 fw-bolder fs-6 text-hover-primary  font-size-lg">
                            {title}
                          </p>
                          <p className="text-muted">
                            منذ
                            <span className="mx-2">{period}</span>
                            بواسطه
                            <span className="text-primary mx-2">{name}</span>
                          </p>
                        </div>
                      </div>

                      <div
                        className="w-20px h-20px d-flex justify-content-center align-items-center myrounded bg-danger text-white cursor-pointer"
                        onClick={() => handleDeleteAttachment(id)}
                      >
                        x
                      </div>

                      <div
                        className="menu menu-spe menu-sub menu-sub-dropdown w-200px w-md-200px"
                        data-kt-menu="true"
                      >
                        <div className="px-7 py-5">
                          <div className="fs-5 text-dark fw-bolder">
                            {intl.formatMessage({ id: "Properties" })}
                          </div>
                        </div>
                        <div className="separator border-gray-200"></div>
                        <div className="p-4">
                          <div className="mb-5">
                            <div className="">
                              <label className="form-check form-check-sm form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="2"
                                />
                                <span className="form-check-label">
                                  {intl.formatMessage({
                                    id: "AddToFavorites",
                                  })}
                                </span>
                              </label>
                              <label className="form-check form-check-sm form-check-custom form-check-solid py-2">
                                <input
                                  id="indicatorsCardHideInput"
                                  className="form-check-input check-danger"
                                  type="checkbox"
                                  value="2"
                                />
                                <span className="form-check-label">
                                  {" "}
                                  {intl.formatMessage({
                                    id: "HideFromWorkspace",
                                  })}{" "}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="mb-5">
                            <label className="form-label fw-bold">
                              {intl.formatMessage({
                                id: "Notifications",
                              })}
                              :
                            </label>
                            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid py-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                name="notifications"
                              />
                              <label className="form-check-label">
                                {intl.formatMessage({ id: "Enable" })}
                              </label>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              type="reset"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true"
                            >
                              {intl.formatMessage({ id: "Cancel" })}
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                              data-kt-menu-dismiss="true"
                            >
                              {intl.formatMessage({ id: "Agree" })}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="h-fit notice d-flex bg-light-primary rounded border-primary border border-dashed mb-1">
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
                    placeholder={intl.formatMessage({ id: "FileUpload" })}
                    className="dropzone-select w-100 uploadFile-style inputAreaHeight d-none"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="rounded  mb-1  mx-5 py-9">
              <label
                htmlFor="outputAttachment"
                className="form-label px-2 d-flex flex-column justify-content-center align-items-center fontSz-6 dropzone-select  uploadFile-style inputAreaHeight"
              >
                <img
                  src="/media/pmo/uploadFile.png"
                  className="img-fluid d-block w-25 h-100px mb-3"
                />
                <p className="text-primary fw-bolder my-1">
                  {" "}
                  {intl.formatMessage({ id: "QuickFileUploader" })}
                </p>
                <p>
                  {intl.formatMessage({
                    id: "DragAndDropOrChooseFilesFromComputer",
                  })}
                </p>
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
                    onChange={(e) => {
                      handleFileChange(e);
                    }}
                    className="dropzone-select w-100 uploadFile-style inputAreaHeight d-none"
                  />
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default AddAttachmentTab;
