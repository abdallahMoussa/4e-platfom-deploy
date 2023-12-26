import React, { FC } from "react";
import { useIntl } from "react-intl";

const PmoAttachmentsToolbar: FC = () => {
   const intl = useIntl();

   return (
      <>
         <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
            <div
               id="kt_toolbar_container"
               className="container-xxl d-flex flex-stack flex-wrap p-0"
            >
               <div className="page-title d-flex flex-column me-3">
                  <h1 className="d-flex text-white fw-bolder my-1 fs-3">
                     {intl.formatMessage({ id: "FormsAndOperationsGuide" })}
                  </h1>
                  <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-3">
                     <li className="breadcrumb-item text-white opacity-75">
                        <a
                           href="/home-workspace"
                           className="text-white text-hover-primary"
                        >
                           {intl.formatMessage({ id: "Home" })}
                        </a>
                     </li>
                     <li className="breadcrumb-item">
                        <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                     </li>
                     <li className="breadcrumb-item text-white opacity-75">
                        <a
                           href="/pmo-workspace"
                           className="text-white text-hover-primary"
                        >
                           {intl.formatMessage({ id: "Workspace" })}
                        </a>
                     </li>
                     <li className="breadcrumb-item">
                        <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                     </li>
                     <li className="breadcrumb-item text-white opacity-75">
                        <a
                           href="/pmo-forms-operations-guide"
                           className="text-white text-hover-primary"
                        >
                           {intl.formatMessage({
                              id: "FormsAndOperationsGuide",
                           })}
                        </a>
                     </li>
                     <li className="breadcrumb-item">
                        <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                     </li>
                     <li className="breadcrumb-item text-white opacity-75">
                        {intl.formatMessage({ id: "Attachments" })}
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export { PmoAttachmentsToolbar };
