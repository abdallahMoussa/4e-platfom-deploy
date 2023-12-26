import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { EmployeeHierarchyPopup } from "../partials/EmployeeHierarchyPopup";
import { GetWorkSpaceByIdResponse } from "../Shared/models/VM/GetWorkSpaceByIdResponse";
import { Color } from "../Shared/models/response-status";

interface GetSubSystemSettingProp{
  subSystemSetting:GetWorkSpaceByIdResponse;
}



const ViewSystemContent: FC<GetSubSystemSettingProp> = ({subSystemSetting}:GetSubSystemSettingProp) => {
  const [modalHShow, setModalHShow] = useState<boolean>(false);

  const intl = useIntl();

  return (
    <div
      id="kt_content_container"
      className="d-flex flex-column-fluid align-items-start"
    >
      <div id="kt_content">
        <div className="row">
          <div>
            <div className="card card-xl-stretch card-body">
              <div className="card-header py-5 mb-5">
                <div className="py-2">
                  <h3>{intl.formatMessage({ id: "Viewsystem" })}</h3>
                </div>
              </div>
              <form>
                <div className="row gy-5 p-3">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="SystemName" className="mb-2 required">
                        {intl.formatMessage({ id: "SystemNameInArabic" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fa-solid fa-gear"></i>
                          </span>
                        </div>
                        <input
                        readOnly
                          type="text"
                          className="form-control"
                          id="SystemName"
                          value={subSystemSetting.noteNameAr}
                          placeholder={intl.formatMessage({ id: "SystemName" })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="SystemName" className="mb-2 required">
                        {intl.formatMessage({ id: "SystemNameInEnglish" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fa-solid fa-gear"></i>
                          </span>
                        </div>
                        <input
                        readOnly
                          type="text"
                          className="form-control"
                          id="SystemName"
                          value={subSystemSetting.noteNameEn}
                          placeholder={intl.formatMessage({ id: "SystemName" })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="ManagementName" className="mb-2 required">
                        {intl.formatMessage({ id: "FollowingManagementName" })}
                      </label>
                      <div className="position-relative">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="special fas fa-user-shield"></i>
                            </span>
                          </div>
                          <input
                          readOnly
                          value={subSystemSetting.orgNameAr}
                            style={{
                              paddingLeft: intl.locale == "ar" ? "2.75rem" : "",
                              paddingRight:
                                intl.locale == "en" ? "2.75rem" : "",
                            }}
                            type="text"
                            className="form-control"
                            id="ManagementName"
                            placeholder={intl.formatMessage({
                              id: "FollowingManagementName",
                            })}
                          />
                          <div
                            className="position-absolute translate-middle-y"
                            style={{
                              top: "50%",
                              left: intl.locale == "ar" ? "15px" : "",
                              right: intl.locale == "en" ? "15px" : "",
                            }}
                          >
                            <i
                              // className="bi bi-journal-plus cursor-pointer fs-2 text-muted"
                              className="bi bi-diagram-3 cursor-pointer fs-1 text-muted"
                              // data-bs-target="#Rega_modal_viewallcards_hierarchy"
                              // data-bs-toggle="modal"
                              // onClick={() => setModalHShow(true)}
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label
                        htmlFor="CardDescription"
                        className="mb-2 required"
                      >
                        {intl.formatMessage({ id: "Description" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fa-solid fa-circle-info"></i>
                          </span>
                        </div>
                        <input
                        readOnly
                        value={subSystemSetting.description}
                          type="text"
                          className="form-control"
                          id="CardDescription"
                          placeholder={intl.formatMessage({
                            id: "Description",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="Icon" className="mb-2 required">
                        {intl.formatMessage({ id: "Icon" })}
                      </label>
                      <div className="position-relative">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="special fa-solid fa-icons"></i>
                            </span>
                          </div>
                          <input
                          value={subSystemSetting.icon}
                          readOnly
                            style={{
                              paddingLeft: intl.locale == "ar" ? "2.75rem" : "",
                              paddingRight:
                                intl.locale == "en" ? "2.75rem" : "",
                            }}
                            type="text"
                            className="form-control"
                            id="Icon"
                            placeholder={intl.formatMessage({ id: "Icon" })}
                          />
                          <div
                            style={{
                              top: "50%",
                              left: intl.locale == "ar" ? "15px" : "",
                              right: intl.locale == "en" ? "15px" : "",
                            }}
                            className="position-absolute translate-middle-y"
                          >
                            <i className="fa-solid fa-link fs-5 text-muted"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div >
                    <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="Color" className="mb-2 required">
                        {intl.formatMessage({ id: "Color" })}
                      </label>
                      <select
                      value={subSystemSetting.color}
                        id="Color"
                        className="form-select myform-control form-select-solid select2-hidden-accessible mt-1"
                        data-placeholder="اختر"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option disabled selected>
                          {intl.formatMessage({ id: "Color" })}
                        </option>
                        
                        <option value={Color.Red}>احمر</option>
                        <option value={Color.Green}>اخضر</option>
                        <option value={Color.Yellow}>اصفر</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="mb-4">
                      <label htmlFor="CardLink" className="mb-2 required">
                        {intl.formatMessage({ id: "SystemLink" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fa-solid fa-link"></i>
                          </span>
                        </div>
                        <input
                        value={subSystemSetting.url}
                        readOnly
                          type="text"
                          className="form-control"
                          id="CardLink"
                          placeholder={intl.formatMessage({ id: "SystemLink" })}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-6">
                  <div className="mb-4">
                      <label htmlFor="CardLink" className="mb-2 required">
                        {intl.formatMessage({ id: "MainSystem" })}
                      </label>
                        <select
                        id="MainSystem"
                        className="form-select myform-control form-select-solid select2-hidden-accessible mt-1"
                        data-placeholder="اختر"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option disabled selected>
                          {intl.formatMessage({ id: "MainSystem" })}
                        </option>
                        <option value="1">نظام 1</option>
                        <option value="2">نظام 2</option>
                        <option value="3">نظام 3</option>
                      </select>
                      </div>
                    </div> */}

                
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="Rega_modal_viewallcards_hierarchy"
          aria-hidden="true"
        >
          <EmployeeHierarchyPopup
            show={modalHShow}
            handleClose={() => setModalHShow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export { ViewSystemContent };
