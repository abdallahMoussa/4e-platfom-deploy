import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { OrgProps, OrgSchema } from "../validation/add-org-validation";
import { RootState } from "../features/store";
import { editOrg } from "../features/orghierarchies-slice/edit-orgSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { PutOrgModel} from "../models/consume-org-model";
import { OrgCategoryModel } from "../models/org-category";
import { OrgHierarchyModel } from "../models/org-model";

type EditPopupProps = {
  showEdit?: any;
  handleCloseEdit?: any;
  orgId:string
};
const EditItemPopup: React.FC<EditPopupProps> = ({ showEdit, handleCloseEdit,orgId }) => {

  const intl = useIntl();
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "EditedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });

  };
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrgProps>({
    resolver: yupResolver(OrgSchema),
  });



  let currentOrg = useSelector((state: RootState) => {
    const findOrgById = (orgList: OrgHierarchyModel[], targetId: string): OrgHierarchyModel | undefined => {
      for (const org of orgList) {
        if (org.id === targetId) {
          return org;
        }
  
        if (org.children && org.children.length > 0) {
          const childResult = findOrgById(org.children, targetId);
          if (childResult) {
            return childResult;
          }
        }
      }
  
      return undefined;
    };
  
    return findOrgById(state?.orghierarchies.data, orgId);
  });

  let orgCategories: OrgCategoryModel[] = useSelector((state: RootState) => {
    return state?.orgCategories.data;
  });
  useEffect(() => {
  
    console.log("Current Org in useEffect:", currentOrg); // Log currentOrg in useEffect for debugging
  }, [currentOrg]);

  const handleEditSubmit: SubmitHandler<PutOrgModel> = async (data) => {
    
    data.id=orgId;
    data.parentId=currentOrg?.parentId!=null ?currentOrg.parentId:null;
     dispatch(editOrg(data)as any);

    // Show success alert
    showSuccessAlert();

    // Close the modal
    handleCloseEdit();
  };
  return (
    <>
      <div className="modal fade" aria-hidden="true">
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showEdit}
          onHide={handleCloseEdit}
        >
          <div className="card">
            <div className="mx-5"></div>
            <Modal.Header
              closeButton
              style={{
                alignItems: intl.locale == "ar" ? "flex-start" : "center",
                flexDirection: intl.locale == "en" ? "column-reverse" : "row",
              }}
            >
              <div className="card-header w-100 px-1 d-flex justify-content-center pb-2  border-bottom-0 mt-10">
                <Modal.Title>
                  <h3 className="card-title flex-column align-items-center ">
                    <span className="card-label fw-bolder fs-3 mb-2 ">
                      {intl.formatMessage({ id: "EditMainItem" })}/
                      {intl.formatMessage({ id: "Secondary" })}
                    </span>

                    <span className="mt-1 fw-semibold fs-5 text-muted">
                      {intl.formatMessage({
                        id: "ChooseDataClassification",
                      })}
                    </span>
                  </h3>
                </Modal.Title>
              </div>
            </Modal.Header>
            <Modal.Body>
                      {/* Form with react-hook-form */}
                      <form onSubmit={handleSubmit(handleEditSubmit)}>
                {/* Input fields for editing */}
                <div className="row">
                    <div className="col-6">
                      <div className="mb-2 pt-2 pb-3">
                        <label className="form-label px-2 fs-6 text-gray-700 required">
                          {intl.formatMessage({ id: "NameInArabic" })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-vector-square special"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className={`form-control ${
                              errors?.nameAr ? "is-invalid" : ""
                            }`}
                            placeholder={intl.formatMessage({
                              id: "NameInArabic",
                            })}
                            {...register("nameAr")}
                          />
                        </div>
                        {errors?.nameAr && (
                          <div className="invalid-feedback">
                            {errors.nameAr.message}
                            console.log(errors)
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-2 pt-2 pb-3">
                        <label className="form-label px-2 fs-6 text-gray-700 required">
                          {intl.formatMessage({ id: "NameInEnglish" })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-vector-square special"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className={`form-control ${
                              errors?.nameEn ? "is-invalid" : ""
                            }`}
                            placeholder={intl.formatMessage({
                              id: "NameInEnglish",
                            })}
                            {...register("nameEn")}
                          />
                        </div>
                        {errors?.nameEn && (
                          <div className="invalid-feedback">
                            {errors.nameEn.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-2 pt-2 pb-3">
                        <label className="form-label px-2 fs-6 text-gray-700 required">
                          {intl.formatMessage({ id: "Description" })}
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-vector-square special"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className={`form-control ${
                              errors?.description ? "is-invalid" : ""
                            }`}
                            placeholder={intl.formatMessage({
                              id: "Description",
                            })}
                            {...register("description")}
                          />
                        </div>
                        {errors?.description && (
                          <div className="invalid-feedback">
                            {errors.description.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-2 pt-2 pb-3">
                        <label className="form-label px-2 fs-6 text-gray-700 required">
                          {intl.formatMessage({
                            id: "DepartmentClassification",
                          })}
                        </label>
                        <div className="input-group">
                          <select
                            className={`form-control form-control-solid ${
                              errors?.categoryId ? "is-invalid" : ""
                            }`}
                            {...register("categoryId")}
                          >
                            <option value=" ">
                              {intl.formatMessage({ id: "SelectCategory" })}
                            </option>
                            {orgCategories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.nameAr}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errors?.categoryId && (
                          <div className="invalid-feedback">
                            {errors.categoryId.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                {/* Modal Footer with submit button */}
                <Modal.Footer className="justify-content-center py-2">
                  <div className="mt-5 mb-5 col-12 col-lg-7 mx-auto">
                    <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                      <div className="d-flex justify-content-center align-items-center w-50">
                        <div
                          data-bs-dismiss="modal"
                          className="btn btn-secondary mx-1 text-center w-100"
                          onClick={handleCloseEdit}
                        >
                          {intl.formatMessage({ id: "Cancel" })}
                        </div>
                        <button
                          type="submit"
                          className="btn btn-success mx-1 text-center w-100"
                          style={{ border: "none" }}
                        >
                          {intl.formatMessage({ id: "Agree" })}
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal.Footer>
              </form>
            </Modal.Body>
           
          </div>
        </Modal>
      </div>
    </>
  );
};

export default EditItemPopup;

