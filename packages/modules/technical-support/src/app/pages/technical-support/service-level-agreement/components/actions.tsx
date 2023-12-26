import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { DeletePopup } from "../../../partials/DeletePopup";
import { KTSVG } from "../../../../helpers";

type ActionProps = {
   id: Number;
};

export const Actions: FC<ActionProps> = ({ id }) => {
   const intl = useIntl();
   const [showDelete, setshowDelete] = useState<boolean>(false);

   return (
      <div className="card-toolbar text-center">
         <div className="me-n3">
            <button
               className="btn btn-sm btn-icon btn-light"
               data-kt-menu-trigger="click"
               data-kt-menu-placement="bottom-end"
            >
               <i className="bi bi-three-dots fs-2"></i>
            </button>
            <div
               className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-100px py-3"
               data-kt-menu="true"
            >
               <div className="menu-item px-3">
                  <Link to="/technical-support-service-level-agreement-details-sla" className="menu-link px-3 text-dark">
                     <i className="fa-solid fa-eye mx-2"></i>
                     {intl.formatMessage({ id: "Show" })}
                  </Link>
               </div>

               <div className="menu-item px-3">
                  <Link
                     to={`/editTechnicalAgreement/${id}`}
                     className="menu-link px-3 text-primary"
                  >
                     <span className="svg-icon svg-icon-3 ms-2">
                        <KTSVG path="/media/icons/duotune/general/gen087.svg" />
                     </span>
                     {intl.formatMessage({ id: "Edit" })}
                  </Link>
               </div>

               <div className="menu-item px-3">
                  <a
                     onClick={(event) => {
                        event.preventDefault();
                        setshowDelete(true);
                      }}
                     className="menu-link px-3 text-danger"
                     // data-bs-toggle="modal"
                     // data-bs-target="#Rega_modal_Delete"
                  >
                     <span className="svg-icon svg-icon-3 mx-2">
                        <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                     </span>
                     {intl.formatMessage({ id: "Delete" })}
                  </a>
               </div>
            </div>
         </div>
         <div className="modal fade" id="Rega_modal_Delete" aria-hidden="true">
            <DeletePopup  handleCloseDelete={() => setshowDelete(false)}
          showDelete={showDelete}/>
         </div>
      </div>
   );
};
