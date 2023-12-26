import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useSearchParams } from "react-router-dom";
import CheckBoxDropDown from "../CheckBoxDropDown";
import { Button } from "react-bootstrap";
import AddItemPopup from "../../popup/AddItemPopup";
import { useDispatch, useSelector } from "react-redux";
import { ManagerCard } from "./manager-card";
import { OrgUsers } from "./org-users-card";
import OrgTree from "./OrgTree";
import { RootState } from "../../features/store";
import { fetchOrgs } from "../../features/orghierarchies-slice/orgSlice";
import { OrgHierarchyModel } from "../../models/org-model";
import { fetchOrgsCategory } from "../../features/orghierarchies-slice/org-categorySlice";
import { OrgCategoryModel } from "../../models/org-category";


const OrganizationalChart: FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const intl = useIntl();

  const dispatch = useDispatch();
  

  let [searchParams, setSearchParams] = useSearchParams();
  const [showAddPopup,setAddPopup]= useState<boolean>(false);

  let allOrgs = useSelector((state: RootState) => {
    return state?.orghierarchies;
  });
 
 
  let orgCategories:OrgCategoryModel[] = useSelector((state:RootState)=>{
    return state?.orgCategories.data
  })
 

  useEffect(() => {
    if (!searchParams.get("categoryId")) {
      setSearchParams(searchParams);
    }

    let params: any = {
      categoryId: searchParams.get("categoryId"),
    };

    dispatch(fetchOrgs(params) as any);
    dispatch(fetchOrgsCategory() as any)
        
  }, [searchParams]);

  return (
    <>
      <div className="card card-xl-stretch mb-xl-0">
        <div className="card-header px-3 pt-3 pb-2 mb-3  d-flex justify-content-between">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fs-4 my-5 ">
              {" "}
              {intl.formatMessage({ id: "OrganizationalChart" })}{" "}
            </span>
            <span className="mt-1 fw-semibold fs-6 text-muted my-5">
              {intl.formatMessage({ id: "PleaseEnterTheFollowingData" })}{" "}
            </span>
          </h3>
         
        </div>
        <div className="card-body py-3 px-3">
          <div className="tab-content">
            <div className="row h-100 w-100">
              <div className="col-md-6">
                <div className="h-100 border border-end-0 border-start-1  border-bottom-0  border-top-0 border-secondary">
                  

                  <div className="d-flex flex-stack flex-wrap px-0 border-0 pb-2 mb-4 ">
                    <h3 className="card-title align-items-start flex-column">
                      <p className="fw-bolder fs-4 mb-7 text-primary">
                        {intl.formatMessage({
                          id: "DepartmentsClassification",
                        })}{" "}
                      </p>
                    </h3>
                    <div className="d-flex">
                      <div className="card-toolbar card-diff-toolbar mx-5">
                       
                        <div className="mx-auto mt-1">
                          <CheckBoxDropDown
                            selectedOptions={orgCategories}
                            setSelectedOptions={orgCategories}
                            options={orgCategories}
                          
                          />
                        </div>
                      
                      </div>

                      <Button
                      onClick={()=>{setAddPopup(true)}}
                        variant="success"
                        className="d-flex mx-2 align-items-center rounded-10 px-2 py-0"
                        style={{ borderRadius: "50" }}
                      >
                        <i className="bi bi-plus-lg fs-1 mx-1"></i>
                      </Button>
                    </div>
                  </div>
                  {/* here write org tag */}
                  {allOrgs.data.map((org:OrgHierarchyModel) => (
                    <OrgTree key={org.id} org={org} />
                  ))}
                </div>
              </div>

              <div className="col-md-6">
                <div className="h-50 pt-0 p-4 pt-0  ">
                  <ManagerCard  />

                  <OrgUsers />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7 mx-auto my-10">
              <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center w-50">
                  <Link
                    to="/admin-panel-workspace"
                    className="btn btn-secondary mx-1 text-center w-100"
                  >
                    {intl.formatMessage({ id: "Cancel" })}
                  </Link>
                  <div
                    // data-bs-toggle="modal"
                    // data-bs-target="#Rega_modal_add"
                    // onClick={() => setModalShow(true)}
                    className="btn btn-success mx-1 text-center w-100"
                  >
                    {intl.formatMessage({ id: "Add" })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {showAddPopup? <AddPopup show={showAddPopup} handleClose={() => setAddPopup(false)} />:""} */}
      {showAddPopup?<AddItemPopup handleClose={() => setAddPopup(false)} show={showAddPopup} /> :""}
{/* 
        <EmployeeHierarchyPopup
          show={modalHShow}
          handleClose={() => setModalHShow(false)}
        />
      <AddItemPopup handleClose={handleClose} show={show} /> */}
    </>
  );
};

export { OrganizationalChart };
function useSelectors(arg0: (state: RootState) => any) {
  throw new Error("Function not implemented.");
}
