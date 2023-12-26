import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { DeletePopup } from "../partials/DeletePopup";
import { SystemPagination } from "../partials/SystemPagination";
import { ViewallcardsTableCardRowInformation } from "./TableCardRowInformation";
import CheckBoxDropDown from "../partials/CheckBoxDropDown";
import { RootState } from "../store/workspaceStore";
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from "react-router-dom";
import { getWorkSpaceComponentById } from "../slices/workspaceAggregatorSlice";
import { WorkspaceComponentModel } from "../models/workspaceComponent-model";

const ViewAllcardsTableCards: FC = () => {
  const intl = useIntl();
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  let searchParams =useSearchParams()
  let {id} =useParams()

  let components=useSelector((state:RootState)=>{return state?.workspaceComponent.items})
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (id) {
      dispatch(getWorkSpaceComponentById({ id, searchTerm }) as any);
    } 
    };


 useEffect(() => {
  if (id) {
  dispatch(getWorkSpaceComponentById({ id, searchTerm }) as any);
  }
}, [dispatch, id]);


  // delete when you get data from api
  const [categories, setCategories] = useState([]);
  const categoryOptions = [
    {
      id: 1,
      name: "تصنيف1",
    },
    {
      id: 2,
      name: "تصنيف2",
    },
    {
      id: 3,
      name: "تصنيف3",
    },
    {
      id: 4,
      name: "تصنيف4",
    },
  ];

 
  //
  return (
    <>
      <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start  mt-4">
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row g-5 g-xl-8">
            <div className="col-xl-12">
              <div className="card card-xl-stretch mb-xl-8 card-body">
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                  <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-start align-items-md-center w-100">
                    {/* <div className="w-100 w-lg-50 w-sm-50 w-md-50 mb-3 mb-md-0">
                      <input type="search" name="search" className="form-control form-control-solid ps-10" placeholder={intl.formatMessage({ id: "Search" })} />
                    </div> */}
                      <div className="w-lg-50 w-md-50 w-sm-50 w-100 mb-3 mb-md-0">
                <div className="w-100 position-relative">
                  <input
                    type="text" 
                    name="search"
                    className="form-control form-control-solid ps-10 pr-10"
                    placeholder={intl.formatMessage({ id: "SearchForSystem" })}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    onClick={() => handleSearch()}
                    className="btn  position-absolute end-0 top-0 h-100"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
                    <div className="w-100 w-lg-25 w-sm-25 w-md-25 mt-3 mt-md-0">
                      <div className="w-100">
                        <CheckBoxDropDown placeholder={intl.formatMessage({ id: "Category" })} selectedOptions={categories} setSelectedOptions={setCategories} options={categoryOptions} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-5 taskLogs">
                  <div className="table-responsive">
                    <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                      <thead>
                        <tr className="fw-bolder text-muted">
                          <th className="min-w-250px text-center">{intl.formatMessage({ id: "CardName" })}</th>
                          <th className="min-w-130px text-center">{intl.formatMessage({ id: "Category" })}</th>
                          <th className="min-w-150px text-center">{intl.formatMessage({ id: "Owner" })}</th>
                          <th className="min-w-130px text-center">{intl.formatMessage({ id: "Permissions" })}</th>
                          <th className="min-w-120px text-center">{intl.formatMessage({ id: "CardStatus" })}</th>
                          <th className="min-w-150px text-center">{intl.formatMessage({ id: "TheProcedures" })}</th>
                        </tr>
                      </thead>

                      <tbody>
                        {components?.map((card:WorkspaceComponentModel) => (
                          <>
                            <ViewallcardsTableCardRowInformation cardInfo={card} id={id===undefined?"":id} searchTerm={searchTerm}/>
                          </> 
                        ))}
                      </tbody>
                    </table>
                    <SystemPagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" aria-hidden="true">
        <DeletePopup handleCloseDelete={handleCloseDelete} showDelete={showDelete} />
      </div>
    </>
  );
};

export { ViewAllcardsTableCards };
