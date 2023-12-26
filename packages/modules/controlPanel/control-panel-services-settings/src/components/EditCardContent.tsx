import { FC, useState } from "react";
import { useIntl } from "react-intl";
// import { ViewallcardsHierarchyDepartmentsPopup } from "../popup/viewallcards-hierarchy-departments-popup"; // unused component
import { EditPopup } from "../partials/EditPopup";
import { Link } from "react-router-dom";
import { ManagementHierarchyPopup } from "../partials/ManagementHierarchyPopup";
import { GetWorkSpaceByIdResponse } from "../Shared/models/VM/GetWorkSpaceByIdResponse";
import { Color } from "../Shared/models/response-status";
import { useDispatch } from "react-redux";
import { editSubsystem } from "../slices/editWorkspaceSlice";

interface GetSubSystemSettingProp{
  subSystemSetting:GetWorkSpaceByIdResponse;
}


const ViewAllcardsEditCardContent: FC<GetSubSystemSettingProp> = ({subSystemSetting}:GetSubSystemSettingProp) => {
  const [modalHShow, setModalHShow] = useState<boolean>(false);

  const intl = useIntl();
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const [subsystem, setSubsystem] = useState<GetWorkSpaceByIdResponse>(subSystemSetting);


  const [orgName, setOrgName] = useState("");
  
  const [orgId, setOrgId] = useState(""); 
  
  const SubmitEditHandler = () => {
    let body = {...subsystem};
    body.organizationHierarchyId= orgId
   
    dispatch(editSubsystem({ id: subSystemSetting.id, item: body }) as any);
  }

  const handleInputChange = (e:any , id:string) => {
    setSubsystem((prev) => {
      return {
        ...prev,
        [id]: e.target.value,
      };
    });
  }

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
                  <h3>{intl.formatMessage({ id: "EditCard" })}</h3>
                  <span className="text-gray-600">
                    {intl.formatMessage({ id: "PleaseEnterTheData" })}
                  </span>
                </div>
              </div>
              <form>
                <div className="row gy-5 p-3">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="CardName" className="mb-2 required">
                        {intl.formatMessage({ id: "CardName" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fa-solid fa-gear"></i>
                          </span>
                        </div>
                        <input
                         value={subsystem?.noteNameAr}
                         onChange={(e)=>handleInputChange(e,'noteNameAr')}
                          type="text"
                          className="form-control"
                          id="CardName"
                          placeholder={intl.formatMessage({ id: "CardName" })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="CardName" className="mb-2 required">
                        {intl.formatMessage({ id: "CardName" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fa-solid fa-gear"></i>
                          </span>
                        </div>
                        <input
                         value={subsystem?.noteNameEn}
                          onChange={(e)=>handleInputChange(e,'noteNameEn')}
                           type="text"
                          className="form-control"
                          id="CardName"
                          placeholder={intl.formatMessage({ id: "CardName" })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="ManagementName" className="mb-2 required">
                        {intl.formatMessage({ id: "ManagementName" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fas fa-user-shield"></i>
                          </span>
                        </div>
                        <input
                          defaultValue={subsystem.orgNameAr}
                          value={orgName}
                          onChange={(e)=>handleInputChange(e,'orgNameAr')}
                           style={{
                            paddingLeft: intl.locale == "ar" ? "2.75rem" : "",
                            paddingRight: intl.locale == "en" ? "2.75rem" : "",
                          }}
                          type="text"
                          className="form-control"
                          id="ManagementName"
                          placeholder={intl.formatMessage({
                            id: "ManagementName",
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
                            onClick={() => setModalHShow(true)}
                          ></i>
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
                        {intl.formatMessage({ id: "CardDescription" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fa-solid fa-circle-info"></i>
                          </span>
                        </div>
                        <input
                         value={subsystem.description}
                         onChange={(e)=>handleInputChange(e,'description')}
                          type="text"
                          className="form-control"
                          id="CardDescription"
                          placeholder={intl.formatMessage({
                            id: "CardDescription",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="Type" className="mb-2 required">
                        {intl.formatMessage({ id: "Type" })}
                      </label>
                      <select
                        value={subsystem.noteTypeId}
                        onChange={(e)=>handleInputChange(e,'noteTypeId')}
                         
                        id="Type"
                        className="form-select myform-control form-select-solid select2-hidden-accessible mt-1"
                        data-placeholder="اختر"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option disabled selected>
                          {intl.formatMessage({ id: "Type" })}
                        </option>
                        <option value="1">النوع 1</option>
                        <option value="2">النوع 2</option>
                        <option value="3">النوع 3</option>
                      </select>
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
                             value={subsystem.icon}
                             onChange={(e)=>handleInputChange(e,'icon')}
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
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="Color" className="mb-2 required">
                        {intl.formatMessage({ id: "Color" })}
                      </label>
                      <select
                      value={subsystem.color}
                      onChange={(e)=>handleInputChange(e,'color')}
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
                        {intl.formatMessage({ id: "CardLink" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fa-solid fa-link"></i>
                          </span>
                        </div>
                        <input
                          value={subsystem.url}
                          onChange={(e)=>handleInputChange(e,'url')}
                          type="text"
                          className="form-control"
                          id="CardLink"
                          placeholder={intl.formatMessage({ id: "CardLink" })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center my-5">
                    <Link
                      to={`/systems-services-settings/admin-panel-viewallcards`}
                      type="reset"
                      className="btn btn-secondary px-15 me-5"
                    >
                      {intl.formatMessage({ id: "Cancel" })}
                    </Link>
                    <div
                      onClick={handleShowEdit}
                      className="btn btn-primary px-15 ms-5"
                    >
                      {intl.formatMessage({ id: "Edit" })}
                    </div>
                  </div>
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
        <ManagementHierarchyPopup
             show={modalHShow}
             orgId={orgId}
             setOrgId={setOrgId}
             orgName={orgName}
             setOrgName={setOrgName}
             handleClose={() => {
               setModalHShow(false);
             }}
          />
        </div>
        <div className="modal fade" aria-hidden="true">
          <EditPopup handleSubmitEdit={SubmitEditHandler} handleCloseEdit={handleCloseEdit} showEdit={showEdit} />
        </div>
      </div>
    </div>
  );
};

export { ViewAllcardsEditCardContent };
