import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { DeletePopup } from "../partials/DeletePopup";
import { SystemPagination } from "../partials/SystemPagination";
import { SystemsAndservicesTableRowInformation } from "./SystemsAndservicesTableRowInformation";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../store/workspaceStore";
import { getSubSystems } from "../slices/workspaceSlice";
import { useSearchParams } from "react-router-dom";
import { SubsystemModel } from "../models/subsystemsModel";

const SystemsAndservicesTable: FC = () => {
  const intl = useIntl();
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  let [searchParams,setSearchParams]=useSearchParams()
  let subsystems=useSelector((state:RootState)=>{return state?.subsystem.items})
  let totalPages=useSelector((state:RootState)=>{return state?.subsystem.totalpages})

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    dispatch(getSubSystems(searchTerm) as any);
  };

  const dispatch = useDispatch();

  useEffect(()=>{
    if (!searchParams.get("pageNumber")) {
       searchParams.set("pageNumber", "1");
       setSearchParams(searchParams);
     }
     if (!searchParams.get("pageSize")) {
       searchParams.set("pageSize", "10");
       setSearchParams(searchParams);
     }
     let params: any = {
       pageSize: searchParams.get("pageSize"),
       pageNumber: searchParams.get("pageNumber"),
     };
     dispatch(getSubSystems(params) as any);
 },[searchParams.get("pageSize"), searchParams.get("pageNumber")])

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

  return (
    <>
      <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start  mt-4">
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row g-5 g-xl-8">
            <div className="col-xl-12">
              <div className="card card-xl-stretch mb-xl-8 card-body">
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-start align-items-md-center w-100">
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
            </div>

                </div>

                <div className="py-5 taskLogs">
                  <div className="table-responsive">
                    <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                      <thead>
                        <tr className="fw-bolder text-muted">
                          <th className="w-25 text-center">{intl.formatMessage({ id: "SystemName" })}</th>
                          <th className="min-w-100px text-center">{intl.formatMessage({ id: "EstablishedDate" })}</th>
                          <th className="min-w-100px text-center">{intl.formatMessage({ id: "CardsCounts" })}</th>
                          <th className="min-w-100px text-center">{intl.formatMessage({ id: "TheProcedures" })}</th>
                        </tr>
                      </thead>

                      <tbody>
                        {subsystems?.map((card:SubsystemModel) => (
                          <>
                            <SystemsAndservicesTableRowInformation cardInfo={card} searchTerm={searchTerm} />
                          </>
                        ))}
                      </tbody>
                    </table>
                    <SystemPagination page={searchParams?.get("pageNumber")} totalPages={totalPages}/>
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

export { SystemsAndservicesTable };
