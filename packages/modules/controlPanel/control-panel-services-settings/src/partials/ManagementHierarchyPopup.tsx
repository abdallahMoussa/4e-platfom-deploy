import React, { FC, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { RootState } from "../store/workspaceStore";
import { fetchOrgs } from "../slices/orgHierarchySlice";
import { Modal } from "react-bootstrap";
import { KTSVG } from "../helpers";
import { OrgHierarchyModel } from "../models/OrgHierarchyModel";

const EN_LANG = "en";
let language:string=localStorage.getItem("selectedLang") || ""

type PopupProps = {
  setOrgId?: any;
  show: boolean;
  orgId:string
  handleClose: any;
  sendDataToParent?:any;
  orgName?: string;
  setOrgName?: any;
}
export const ManagementHierarchyPopup: FC<PopupProps> = ({
  show,
  handleClose,
  orgId, 
  setOrgId, 
  orgName,
  setOrgName 
}) => {
  
  const intl = useIntl();
  const [managementData, setManagementData] = useState<any>();
  let dispatch = useDispatch();
  let allOrgs = useSelector((state: RootState) => state?.orgHierarchy.data);

  useEffect(()=>{
    dispatch(fetchOrgs() as any);
    },[dispatch])
    
    // function modifyOrgs(orgs: OrgHierarchyModel[]): OrgHierarchyModel[] {
    //   let x=  orgs.map((element) => {
    //      return {
    //        ...element,
    //        collapsed: true,
    //        checked: false,
    //        children: modifyOrgs(element.children),
         
    //      };
    //    });
    //    console.log("kkkkkk",x);
    //    return x;
     
    //  }
    //  useEffect(() => {
    //    const modifiedOrgs = modifyOrgs(allOrgs);
    //    setmodifiedOrgs(modifiedOrgs)
    //    console.log("modifiedOrgs",modifiedOrgs);
    //  }, []);
let orgsAfterConversion = allOrgs?.map((org: any) => {
    return {
      id: org?.id,
      name: language=="Ar"?org?.nameAr :org?.nameEn,
      collapsed: true,
      checked: false,
      children: org?.children?.map((child: any) => {
        return {
          id: child?.id,
          name: child?.nameAr || child?.nameEn,
          collapsed: true,
          checked: false,
        };
      }),
    };
  });
  useEffect(() => {
    setManagementData(orgsAfterConversion);
  }, [allOrgs]);

   const handleChange = () => {
    setManagementData([...managementData]);
  };
   const handleChildrenChecked = (item: any, isChecked: boolean) => {
    item.checked = isChecked;
    item?.children?.forEach((child: any) => {
      child.checked = isChecked;
      if (child?.children?.length) {
        handleChildrenChecked(child, isChecked);
      }
    });
    handleChange();
  };

  const handleCollapse = (item: any, id: any): {} => ({
    "data-bs-toggle": "collapse",
    "data-bs-target": `#flush-main-tree${id}`,
    "aria-expanded": "true",
    "aria-controls": `flush-main-tree${id}`,
    onClick: () => {
      item.collapsed = !item.collapsed;
      handleChange();
    },
  });

  let selectedLang = localStorage.getItem("i18nConfig");
  try {
    selectedLang = JSON.parse(selectedLang as string).selectedLang;
  } catch (err) {
    console.log("Can't get selectedLang from localStorage");
  }

  let showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "AddedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  console.log("mangment data", managementData);
  const handleRadioChange = (item: any) => {
    setOrgId(item?.id);
    setOrgName(item?.name);
  };
    return (
      <>
      <Modal centered show={show} onHide={handleClose} size="lg">
        <Modal.Header
          closeButton
          style={{
            alignItems: intl.locale == "ar" ? "flex-start" : "center",
            flexDirection: intl.locale == "en" ? "column-reverse" : "row",
          }}
        >
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="card">
            <div className="card-body mx-5">
              <div className="card-header px-1 d-flex justify-content-start  pb-2 mb-5">
                <h3 className="card-title flex-column">
                  <span className="card-label fw-bolder fs-3 mb-2 ">
                    {intl.formatMessage({
                      id: "OrganizationalStructure",
                    })}
                  </span>
                  <span className="mt-1 fw-semibold fs-5 text-muted">
                    {intl.formatMessage({
                      id: "PleaseEnterTheData",
                    })}
                  </span>
                </h3>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <div className="mb-2 pt-2 pb-3 custom_tree">
                    {managementData?.map((item: any) => (
                      <div className="tree_main mb-5" key={item?.id}>
                        <ul id="tree1" className="tree list-unstyled">
                          <div className="fs-5 py-4 mb-7 d-flex align-items-center">
                            {item?.children?.length>0 &&
                              (item?.collapsed ? (
                                <i
                                  className={`fas fa-chevron-${
                                    selectedLang === EN_LANG ? "right" : "left"
                                  } fa-xl text-primary`}
                                  {...handleCollapse(item, item?.id)}
                                ></i>
                              ) : (
                                <i
                                  className="fas fa-chevron-down fa-xl text-danger"
                                  {...handleCollapse(item, item?.id)}
                                ></i>
                              ))}

                            <div className=" d-inline mx-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                              <input
                                className="form-check-input widget-9-check xCheckBg mt-0"
                                type="radio"
                                name="item"
                                onChange={() => {
                                  handleChildrenChecked(item, !item?.checked);
                                  handleRadioChange(item);
                                }}
                                id={item?.id}
                                checked={item?.id === orgId}
                              />
                            </div>
                            <div
                              className="d-inline-block"
                              {...handleCollapse(item, item?.id)}
                            >
                              <i className="bi bi-diagram-3 mx-3 fs-1"></i>
                              <button className="basic-item bg-transparent border-0">
                                {item?.name}
                              </button>
                            </div>
                          </div>
                          <div className="px-8 mx-4">
                            <li
                              className={`basic-branch branch accordion-collapse ${
                                item?.collapsed ? "collapse" : "show"
                              }`}
                              id={`flush-main-tree${item?.id}`}
                              aria-labelledby={`flush-main-tree${item?.id}`}
                              data-bs-parent={`#accordionFlushMainTree${item?.id}`}
                            >
                              <ul className="list-unstyled">
                                {item?.children?.map((child: any) => (
                                  <li className="branch mb-3" key={child?.id}>
                                    {child?.children?.length &&
                                      (child?.collapsed ? (
                                        <i
                                          className={`fas fa-chevron-${
                                            selectedLang === EN_LANG
                                              ? "right"
                                              : "left"
                                          } fa-xl text-primary`}
                                          {...(child?.children
                                            ? handleCollapse(
                                                child,
                                                `${item?.id}${child?.id}`
                                              )
                                            : {})}
                                        ></i>
                                      ) : (
                                        <i
                                          className="fas fa-chevron-down fa-xl text-danger"
                                          {...(child?.children
                                            ? handleCollapse(
                                                child,
                                                `${item?.id}${child?.id}`
                                              )
                                            : {})}
                                        ></i>
                                      ))}
                                    <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="radio"
                                        name="item"
                                        id={child?.id}
                                        checked={child?.id === orgId}
                                        onChange={() => {
                                          handleChildrenChecked(
                                            child,
                                            !child?.checked
                                          );
                                          handleRadioChange(child);
                                        }}
                                      />
                                    </div>
                                    <label
                                      htmlFor={`${child?.id}`}
                                      className="collapsed"
                                      {...(child?.children
                                        ? handleCollapse(
                                            child,
                                            `${item?.id}${child?.id}`
                                          )
                                        : {})}
                                    >
                                      {child?.name}
                                    </label>
                                    <div className="my-8 px-8 mx-4">
                                      <ul
                                        className="list-unstyled accordion-collapse collapse"
                                        id={`flush-main-tree${item.id}${child.id}`}
                                        aria-labelledby={`flush-headingOne${item.id}${child.id}`}
                                        data-bs-parent={`#accordionFlushMainTree${item.id}${child.id}`}
                                      >
                                        {child?.children?.map(
                                          (nestedChild: any) => (
                                            <li
                                              className="branch mb-3"
                                              key={nestedChild.id}
                                            >
                                              <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                                <input
                                                  className="form-check-input widget-9-check xCheckBg"
                                                  type="radio"
                                                  name="item"
                                                  id={nestedChild?.id}
                                                  checked={
                                                    nestedChild?.id === orgId
                                                  }
                                                  onChange={() => {
                                                    handleChildrenChecked(
                                                      nestedChild,
                                                      !nestedChild?.checked
                                                    );
                                                    handleRadioChange(
                                                      nestedChild
                                                    );
                                                  }}
                                                />
                                              </div>
                                              <label
                                                htmlFor={`${nestedChild?.id}`}
                                              >
                                                {nestedChild?.name}
                                              </label>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          </div>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Modal.Footer className="justify-content-center pb-5 pt-3 border-top-0">
              <div className="mt-5 mb-5 col-12 col-lg-7 mx-auto">
                <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center w-50">
                    <div
                      // data-bs-dismiss="modal"
                      onClick={() => {
                        handleClose();
                      }}
                      className="btn btn-secondary mx-1 text-center w-100"
                    >
                      {intl.formatMessage({ id: "Cancel" })}
                    </div>
                    <button
                      data-bs-dismiss="modal"
                      className="btn btn-success mx-1 text-center w-100"
                      style={{ border: "none" }}
                      type="submit"
                      onClick={(event) => {
                        event.preventDefault();
                        handleClose();
                        showSuccessAlert();
                      }}
                    >
                      {intl.formatMessage({ id: "Add" })}
                    </button>
                  </div>
                </div>
              </div>
              </Modal.Footer>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};