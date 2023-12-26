import React, { FC } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../../helpers";

const NewestAttachments: FC = () => {
  const intl = useIntl();

  return (
    <>
      <div className="col-md-6">
        <div>
          <div className=" my-5">
            <div className="card card-xl-stretch  py-3">
              <div className="card-header d-flex align-items-center px-0 border-0 pb-2 mb-2 mx-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="card-label fw-bolder fs-4 mb-1  mx-0">
                    {intl.formatMessage({ id: "NewestAttachments" })}{" "}
                  </span>
                  <span className="mt-1 fw-semibold fs-6 text-muted ">
                    {intl.formatMessage({ id: "TotalParticipants" })} 482
                  </span>
                </h3>
                <div className="subTitle-cards ">
                  <a className="mb-0 btn btn-light">
                    {" "}
                    {intl.formatMessage({ id: "ViewAll" })}
                  </a>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column mx-5">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex">
                      <img
                        src="/media/pmo/pdfIcon.png"
                        className="w-40px h-40px"
                        alt="pdf"
                      />

                      <div className="d-flex flex-column mx-3 mb-3">
                        <p className="mb-0 fw-bolder ">
                          المتطلبات الفنية للمشروع
                        </p>
                        <p className="mb-0 fw-bolder text-muted">
                          منذ يومين بواسطة{" "}
                          <span className="text-primary fw-bolder">
                            أحمد محمود
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* Pop up menu */}
                    <div className="card-toolbar w-auto">
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <span className="svg-icon svg-icon-2">
                          <KTSVG path="/media/icons/duotune/general/gen172PopupMenu.svg" />
                        </span>
                      </button>

                      <div
                        className="menu menu-sub menu-sub-dropdown w-200px w-md-200px h-auto"
                        data-kt-menu="true"
                        id="kt_menu_G01"
                      >
                        <div className="p-3">
                          <div className="fs-5 text-dark fw-bolder">خصائص</div>
                        </div>
                        <div className="separator border-gray-200"></div>
                        <div className="p-3">
                          <div className="mb-3">
                            <label className="form-label fw-bold text-muted fs-5">
                              {" "}
                              تخصيص:
                            </label>

                            <div className="">
                              <label className="form-check form-check-sm form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="1"
                                />
                                <span className="form-check-label me-1">
                                  اضافة الى مفضلة
                                </span>
                              </label>
                              <label className="form-check form-check-sm form-check-custom form-check-solid py-2">
                                <input
                                  id="indicatorsCardHideInput"
                                  className="form-check-input check-danger"
                                  type="checkbox"
                                  value="2"
                                />
                                <span className="form-check-label me-1">
                                  {" "}
                                  إخفاء من مساحة العمل{" "}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="mb-5">
                            <label className="form-label fw-bold text-muted fs-5">
                              الاشعارات:
                            </label>
                            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid py-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="3"
                                name="notifications"
                              />
                              <label className="form-check-label me-1">
                                تمكين
                              </label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-end">
                            <button
                              type="reset"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true"
                            >
                              الغاء
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                              data-kt-menu-dismiss="true"
                            >
                              موافق
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Pop up */}
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex">
                      <img
                        src="/media/pmo/docIcon.png"
                        className="w-40px h-40px"
                        alt="pdf"
                      />
                      <div className="d-flex flex-column mx-3 mb-3">
                        <p className="mb-0 fw-bolder ">
                          المتطلبات الفنية للمشروع
                        </p>
                        <p className="mb-0 fw-bolder text-muted">
                          منذ يومين بواسطة{" "}
                          <span className="text-primary fw-bolder">
                            أحمد محمود
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* Pop up menu */}
                    <div className="card-toolbar w-auto">
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <span className="svg-icon svg-icon-2">
                          <KTSVG path="/media/icons/duotune/general/gen172PopupMenu.svg" />
                        </span>
                      </button>

                      <div
                        className="menu menu-sub menu-sub-dropdown w-200px w-md-200px h-auto"
                        data-kt-menu="true"
                        id="kt_menu_G01"
                      >
                        <div className="p-3">
                          <div className="fs-5 text-dark fw-bolder">خصائص</div>
                        </div>
                        <div className="separator border-gray-200"></div>
                        <div className="p-3">
                          <div className="mb-3">
                            <label className="form-label fw-bold text-muted fs-5">
                              {" "}
                              تخصيص:
                            </label>

                            <div className="">
                              <label className="form-check form-check-sm form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="1"
                                />
                                <span className="form-check-label me-1">
                                  اضافة الى مفضلة
                                </span>
                              </label>
                              <label className="form-check form-check-sm form-check-custom form-check-solid py-2">
                                <input
                                  id="indicatorsCardHideInput"
                                  className="form-check-input check-danger"
                                  type="checkbox"
                                  value="2"
                                />
                                <span className="form-check-label me-1">
                                  {" "}
                                  إخفاء من مساحة العمل{" "}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="mb-5">
                            <label className="form-label fw-bold text-muted fs-5">
                              الاشعارات:
                            </label>
                            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid py-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="3"
                                name="notifications"
                              />
                              <label className="form-check-label me-1">
                                تمكين
                              </label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-end">
                            <button
                              type="reset"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true"
                            >
                              الغاء
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                              data-kt-menu-dismiss="true"
                            >
                              موافق
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Pop up */}
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex">
                      <img
                        src="/media/pmo/pdfIcon.png"
                        className="w-40px h-40px"
                        alt="pdf"
                      />
                      <div className="d-flex flex-column mx-3 mb-3">
                        <p className="mb-0 fw-bolder ">
                          المتطلبات الفنية للمشروع
                        </p>
                        <p className="mb-0 fw-bolder text-muted">
                          منذ يومين بواسطة{" "}
                          <span className="text-primary fw-bolder">
                            أحمد محمود
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* Pop up menu */}
                    <div className="card-toolbar w-auto">
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <span className="svg-icon svg-icon-2">
                          <KTSVG path="/media/icons/duotune/general/gen172PopupMenu.svg" />
                        </span>
                      </button>

                      <div
                        className="menu menu-sub menu-sub-dropdown w-200px w-md-200px h-auto"
                        data-kt-menu="true"
                        id="kt_menu_G01"
                      >
                        <div className="p-3">
                          <div className="fs-5 text-dark fw-bolder">خصائص</div>
                        </div>
                        <div className="separator border-gray-200"></div>
                        <div className="p-3">
                          <div className="mb-3">
                            <label className="form-label fw-bold text-muted fs-5">
                              {" "}
                              تخصيص:
                            </label>

                            <div className="">
                              <label className="form-check form-check-sm form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="1"
                                />
                                <span className="form-check-label me-1">
                                  اضافة الى مفضلة
                                </span>
                              </label>
                              <label className="form-check form-check-sm form-check-custom form-check-solid py-2">
                                <input
                                  id="indicatorsCardHideInput"
                                  className="form-check-input check-danger"
                                  type="checkbox"
                                  value="2"
                                />
                                <span className="form-check-label me-1">
                                  {" "}
                                  إخفاء من مساحة العمل{" "}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="mb-5">
                            <label className="form-label fw-bold text-muted fs-5">
                              الاشعارات:
                            </label>
                            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid py-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="3"
                                name="notifications"
                              />
                              <label className="form-check-label me-1">
                                تمكين
                              </label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-end">
                            <button
                              type="reset"
                              className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true"
                            >
                              الغاء
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm btn-primary"
                              data-kt-menu-dismiss="true"
                            >
                              موافق
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Pop up */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className=" notice d-flex bg-light-primary rounded border-primary border border-dashed mb-5  mx-5  ">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NewestAttachments };
