import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { AddPopup } from "../partials/AddPopup";
import { Link } from "react-router-dom";
import { ManagementHierarchyPopup } from "../partials/ManagementHierarchyPopup";
import { useForm } from "react-hook-form";
import { ValidationFormsProps, ValidationFormsSchema } from "../validations/ValidationForms";
import { useDispatch, useSelector } from "react-redux";
import {yupResolver} from '@hookform/resolvers/yup'
import{addWorkSpace} from "../slices/addWorkspaceSlice"
import React from "react";
import { RootState } from "../store/workspaceStore";
import { Color } from "../models/Colors";
import { getSubsystemsDropdown } from "../slices/getAllSubsystemSlice";
import { SubsystemModel } from "../models/subsystemsModel";
import { Lookup } from "../models/Lookup";
import { getNoteTypeId } from "../slices/getLookUpsSlice";
import { format } from 'date-fns';

const ViewAllcardsAddCardContent: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalHShow, setModalHShow] = useState<boolean>(false);

  const intl = useIntl();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ValidationFormsProps>({
    resolver: yupResolver(ValidationFormsSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  console.log("errors", errors);
  let dispatch = useDispatch();
  let { message } = useSelector((state: RootState) => {
    return state?.addWorkspace;
  });
 
  
  const [inputs, setInputs] = useState<Color>();
  const handleColor = (index:any) => {
    
    setInputs(inputs);
  };
  const [parentId, setParents] = useState<string>('');
  const handleParentId =(index:any) => { 
    setParents(parentId);
  };
  const [dataFromChild, setDataFromChild] = useState(null);
  const handleDataFromChild = (data:any) => {
    
    setDataFromChild(data);
  };
  let subsystems=useSelector((state:RootState)=>{return state?.subsystemDropdownList.items})
  let noteTypeId=useSelector((state:RootState)=>{return state?.NoteTypeId.items})
  const [noteType, setNoteType] = useState<Lookup>();
  let [orgId, setOrgId] = useState<string>(
    ""
  );
  let [orgName, setOrgName] = useState<string>("");
  useEffect(()=>{
     dispatch(getSubsystemsDropdown() as any);
     dispatch(getNoteTypeId() as any);
 },[dispatch])

 const Addworkspace = async (formValues:ValidationFormsProps) => {
  console.log("formValues",formValues)
  
  let body={
    noteNameAr:formValues.noteNameAr,
    noteNameEn:formValues.noteNameEn,
    organizationHierarchyId:orgId,
    description:formValues.description,
    icon:formValues.icon,
    url:formValues.url,
    color:formValues.color,
    state:0,
    visitDate:format(new Date(), 'yyyy-MM-dd'),
    noteTypeId:formValues.noteTypeId,
    // noteTypeId:'1b746739-f0be-43fe-a7d2-08dbf4077122',
    parentId:formValues.parentId||null,
    // parentId:'1b746739-f0be-43fe-a7d2-08dbf4077122',
    isActive:true
  }

  dispatch(addWorkSpace(body)as any   );
};
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
                  <h3>{intl.formatMessage({ id: "AddNewCard" })}</h3>
                  <span className="text-gray-600">
                    {intl.formatMessage({ id: "PleaseEnterTheData" })}
                  </span>
                </div>
              </div>
              <form onSubmit={handleSubmit(Addworkspace)}>
                <div className="row gy-5 p-3">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="CardName" className="mb-2 required">
                        {intl.formatMessage({ id: "CardNameInArabic" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fa-solid fa-gear"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="noteNameAr"
                          placeholder={intl.formatMessage({ id: "CardName" })}
                          {...register('noteNameAr')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
            <div className="mb-4">
              <label htmlFor="CardName" className="mb-2 required">
                {intl.formatMessage({ id: "CardNameInEnglish" })}
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="special fa-solid fa-gear"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="noteNameEn"
                  placeholder={intl.formatMessage({ id: "SystemName" })}
                  {...register('noteNameEn')}
                />
              </div>
            </div>
          </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="ManagementName" className="mb-2 required">
                        {intl.formatMessage({ id: "ManagementName" })}
                      </label>
                      <div className="position-relative">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="special fas fa-user-shield"></i>
                            </span>
                          </div>
                          <input
                            style={{
                              paddingLeft: intl.locale == "ar" ? "2.75rem" : "",
                              paddingRight:
                                intl.locale == "en" ? "2.75rem" : "",
                            }}
                            type="text"
                            className="form-control"
                            id="organizationHierarchyId"
                            placeholder={intl.formatMessage({
                              id: "ManagementName",
                            })}
                            value={orgName}
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
                              className="bi bi-diagram-3 cursor-pointer fs-1 text-muted"
                              onClick={() => setModalHShow(true)}
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
                        {intl.formatMessage({ id: "CardDescription" })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="special fa-solid fa-circle-info"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          placeholder={intl.formatMessage({
                            id: "CardDescription",
                          })}
                          {...register('description')}
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
                            style={{
                              paddingLeft: intl.locale == "ar" ? "2.75rem" : "",
                              paddingRight:
                                intl.locale == "en" ? "2.75rem" : "",
                            }}
                            type="text"
                            className="form-control"
                            id="icon"
                            placeholder={intl.formatMessage({ id: "Icon" })}
                            {...register('icon')}
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
                        id="Color"
                        className="form-select myform-control form-select-solid select2-hidden-accessible mt-1"
                        data-placeholder="اختر"
                        tabIndex={-1}
                        aria-hidden="true"
                        {...register('color')}
                        value={inputs}
                        onChange={(e) => handleColor(String(e.target.value))}        
                      >
                        <option disabled selected>
                          {intl.formatMessage({ id: "Color" })}
                        </option>
                        <option value={Color.Red}>Red</option>
                        <option value={Color.Green}>Green</option>
                         <option value={Color.Yellow}>Yellow</option>
              </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="noteTypeId" className="mb-2 required">
                        {intl.formatMessage({ id: "Type" })}
                      </label>
                      <select
                        id="noteTypeId"
                        className="form-select myform-control form-select-solid select2-hidden-accessible mt-1"
                        data-placeholder="اختر"
                        tabIndex={-1}
                        aria-hidden="true"
                        {...register('noteTypeId')}
                        value={noteType?.id} 
                      >
                        <option disabled selected>
                          {intl.formatMessage({ id: "Type" })}
                        </option>
                        {noteTypeId.map((system)=>(
                          <option  value={system?.id} >{system.nameAr} </option>
                         // <option  value={system?.nameAr} >{system.d} </option>
                        ))}
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
                          type="text"
                          className="form-control"
                          id="url"
                          placeholder={intl.formatMessage({ id: "CardLink" })}
                          {...register('url')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
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
                  {...register('parentId')}
                  value={parentId}
                  onChange={(e) => handleParentId(e.target.value)}
                 
                >
                  <option disabled selected>
                    {intl.formatMessage({ id: "MainSystem" })}
                  </option>
                  {subsystems.map((system:SubsystemModel)=>(
                  <option key={system.id} value={system.id} 
                   >{system.noteNameAr}</option>
                  ))
                }
                </select>
              
            
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
                    <button
            type="submit"
            className="btn btn-success px-15 ms-5"
          >
             {intl.formatMessage({ id: "Add" })}
           </button>
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
        <div
          className="modal fade"
          id="Rega_modal_viewallcards_addcard"
          aria-hidden="true"
        >
          <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export { ViewAllcardsAddCardContent };
