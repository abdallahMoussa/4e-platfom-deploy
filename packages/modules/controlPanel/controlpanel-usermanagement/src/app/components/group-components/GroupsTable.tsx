import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
// import { toAbsoluteUrl } from "../../../../helpers";
import { useNavigate } from "react-router";
import { Actions } from "../domain-components/ActionsComponent";

type TableDataTypes = {
   id: Number;
   name: string;
   avatar: string;
   description: string;
   establishedDate: string;
   lastEditDate: string;
};

type TableHeadersTypes = {
   name: string;
   className: string;
};

export const GroupsTable: FC = () => {
   const intl = useIntl();
   const usersTableData: TableDataTypes[] = [
      {
         id: 1,
         name: "تقيم العقارات",
         description: "التفتيش علي العقارات والابنية القديمة",
         avatar: "arab.png",
         establishedDate: "22 مايو 2023",
         lastEditDate: "22 مايو 2023",
      },
      {
         id: 2,
         name: "مديرين الادارات",
         description: "التفتيش علي العقارات والابنية القديمة",
         avatar: "arab.png",
         establishedDate: "22 مايو 2023",
         lastEditDate: "22 مايو 2023",
      },
      {
         id: 3,
         name: "تقيم العقارات",
         description: "التفتيش علي العقارات والابنية القديمة",
         avatar: "arab.png",
         establishedDate: "22 مايو 2023",
         lastEditDate: "22 مايو 2023",
      },
      {
         id: 4,
         name: "المنشأت المصنعة",
         description: "التفتيش علي العقارات والابنية القديمة",
         avatar: "arab.png",
         establishedDate: "22 مايو 2023",
         lastEditDate: "22 مايو 2023",
      },
   ];
   const usersTableHeader: TableHeadersTypes[] = [
      {
         name: "GroupDetails",
         className: "ps-4 min-w-300px",
      },
      {
         name: "EstablishedDate",
         className: "min-w-200px",
      },
      {
         name: "LastEditDate",
         className: "min-w-200px",
      },
      {
         name: "Actions",
         className: "min-w-50px",
      },
   ];

   const [data, setData] = useState<TableDataTypes[]>(usersTableData);
   const [headers, setHeaders] =
      useState<TableHeadersTypes[]>(usersTableHeader);
   const navigate = useNavigate();
   return (
      <div className="table-responsive">
         <table
            className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
            id="REGA-WS-caseList"
         >
            <thead>
               <tr className="fw-bolder text-muted">
                  {headers.map((item, index) => (
                     <th key={index} className={item.className}>
                        {intl.formatMessage({
                           id: item.name,
                        })}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {data.map((item) => (
                  <tr key={`${item.id}`}>
                     <td>
                        <div
                           onClick={() =>
                              navigate(`/admin-panel-users-workspace/admin-panel-users/groups/edit`)
                           }
                           role="button"
                        >
                           <div className="ms-5 d-flex align-items-center">
                              <div className="symbol position-relative  symbol-circle">
                                 <img
                                    alt="Pic"
                                    // src={toAbsoluteUrl(
                                    //    `/media/avatars/${item?.avatar}`
                                    // )}
                                    src={""}
                                 />
                              </div>
                              <div className="ms-3">
                                 <p className="h4 fw-bolder mb-1">
                                    {item.name}
                                 </p>
                                 <p className="text-muted mb-0 fw-lighter">
                                    {item.description}
                                 </p>
                              </div>
                           </div>
                        </div>
                     </td>
                     <td>
                        <span className="fw-bolder">
                           {item.establishedDate}
                        </span>
                     </td>
                     <td>
                        <span className="fw-bolder">{item.lastEditDate}</span>
                     </td>
                     <td>
                        <div>
                           <Actions
                              id={item.id}
                              editLink={"/admin-panel-users-workspace/admin-panel-users/groups/edit"}
                              enableActionView={false}
                           />
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};
