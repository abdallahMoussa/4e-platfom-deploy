import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { AddPopup } from "../partials/AddPopup";
import { Link, useSearchParams } from "react-router-dom";
import { ManagementHierarchyPopup } from "../partials/ManagementHierarchyPopup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import { RootState } from "../store/workspaceStore";
import { Color } from "../models/Colors";
import { addWorkSpaceCard } from "../slices/addCardsystemsSlice";
import { ValidationSFormsSchema, ValidationSystemFormsProps } from "../validations/ValidationSystemFormsProps";
import { format } from 'date-fns';

const AddSystemContent: FC = () => {
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
  } = useForm<ValidationSystemFormsProps>({
    resolver: yupResolver(ValidationSFormsSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  console.log("errors", errors);
  let dispatch = useDispatch();
  
  let { message } = useSelector((state: RootState) => {
    return state?.addWorkspace;
  });

  let [searchParams,setSearchParams]=useSearchParams()
  const [inputs, setInputs] = useState<Color>();
      const handleColor = (index:any) => {
        setInputs(inputs);
      };
      let [orgId, setOrgId] = useState<string>("");
      let [orgName, setOrgName] = useState<string>("");

     const Addworkspace = async (formValues:ValidationSystemFormsProps) => {
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
        isActive:true
      }
      dispatch(addWorkSpaceCard(body)as any);
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
          <h3>{intl.formatMessage({ id: "AddNewSystem" })}</h3>
          <span className="text-gray-600">
            {intl.formatMessage({ id: "PleaseEnterTheData" })}
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit(Addworkspace)}>
        <div className="row gy-5 p-3">
          <div className="col-md-6">
            <div className="mb-4">
              <label htmlFor="noteNameAr" className="mb-2 required">
                {intl.formatMessage({ id: "SystemNameInArabic" })}
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
                  placeholder={intl.formatMessage({ id: "SystemName" })}
                  {...register('noteNameAr')}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-4">
              <label htmlFor="noteNameEn" className="mb-2 required">
                {intl.formatMessage({ id: "SystemNameInEnglish" })}
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
              <label htmlFor="organizationHierarchyId" className="mb-2 required">
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
                    style={{
                      paddingLeft: intl.locale == "ar" ? "2.75rem" : "",
                      paddingRight:
                        intl.locale == "en" ? "2.75rem" : "",
                    }}
                    type="text"
                    className="form-control"
                    id="organizationHierarchyId"
                    placeholder={intl.formatMessage({
                      id: "FollowingManagementName",
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
          </div>
          <div className="col-md-6">
            <div className="mb-4">
              <label
                htmlFor="description"
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
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder={intl.formatMessage({
                    id: "Description",
                  })}
                  {...register('description')}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-4">
              <label htmlFor="icon" className="mb-2 required">
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
                    className="position-absolute translate-middle-y">
                    <i className="fa-solid fa-link fs-5 text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
            </div >
            <div className="col-md-6">
            <div className="mb-4">
              <label htmlFor="color" className="mb-2 required">
                {intl.formatMessage({ id: "Color" })}
              </label>
              <select
                id="color"
                className="form-select myform-control form-select-solid select2-hidden-accessible mt-1"
                data-placeholder={intl.formatMessage({ id: "Color" })}
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
              <label htmlFor="url" className="mb-2 required">
                {intl.formatMessage({ id: "SystemLink" })}
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
                  placeholder={intl.formatMessage({ id: "SystemLink" })}
                  {...register('url')}
                />
              </div>
            </div>
          </div>
    
          <div className="d-flex justify-content-center my-5">
            <Link
              to={`/systems-services-settings`}
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

export { AddSystemContent };
