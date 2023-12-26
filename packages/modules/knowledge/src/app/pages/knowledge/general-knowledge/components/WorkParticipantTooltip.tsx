import React, { FC } from "react";

type WorkParticipantsTooltipProps = {
   count: Number;
   names: string[];
};

export const WorkParticipantsTooltip: FC<WorkParticipantsTooltipProps> = ({
   count,
   names,
}) => {
   return (
      <div className="card-toolbar text-center">
         <div className="me-n3">
            <button
               className="btn btn-sm btn-icon btn-transparent"
               data-kt-menu-trigger="hover"
               data-kt-menu-placement="top-end"
            >
               {`${count}`}
            </button>
            <div
               className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 fw-bold w-150px py-3"
               data-kt-menu="true"
            >
               <div className="menu-item px-3">
                  {names.map((name, index) => (
                     <p
                        className="menu-link px-3 text-dark pe-none"
                        key={index}
                     >
                        {name}
                     </p>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};
