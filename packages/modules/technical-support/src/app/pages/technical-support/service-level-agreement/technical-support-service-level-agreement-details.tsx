import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { RightToolbar } from "../partials/RightToolbar";
import { ServiceLevelAgreementToolbar } from "./toolbar/ServiceLevelAgreementToolbar";
import { Actions } from "./components/actions";
import { SystemPagination } from "../../partials/SystemPagination";
import { Link } from "react-router-dom";
import { KTSVG } from "../../../helpers";

export const TechnicalSupportServiceLevelAgreementDetails: FC = () => {
   const intl = useIntl();

   const [checkedAll, setCheckedAll] = useState(false);
   const [data, setData] = useState([
      {
         id: 1,
         name: "Design SLA",
         implementationPeriod: "5 أيام 10 ساعات و 10 دقائق",
         responseTime: "3 أيام 10 ساعات و 10 دقائق",
         isChecked: false,
      },
      {
         id: 2,
         name: "Laptop SLA",
         implementationPeriod: "7 أيام 9 ساعات و 10 دقائق",
         responseTime: "3 أيام 10 ساعات و 10 دقائق",
         isChecked: true,
      },
      {
         id: 3,
         name: "Sp3 SLA",
         implementationPeriod: "5 أيام 10 ساعات و 10 دقائق",
         responseTime: "3 أيام 10 ساعات و 5 دقائق",
         isChecked: false,
      },
      {
         id: 4,
         name: "Design SLA",
         implementationPeriod: "5 أيام 10 ساعات و 4 دقائق",
         responseTime: "3 أيام 3 ساعات و 10 دقائق",
         isChecked: true,
      },
   ]);

   const handleChangeCheckBox = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      const { checked, name } = event.target;

      setData((data) => {
         return data.map((item) => {
            if (`checkbox-${item.id}` === name) {
               return { ...item, isChecked: checked };
            }
            return item;
         });
      });
   };

   const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedAll(!checkedAll);
      setData((data) => {
         return data.map((item) => {
            return { ...item, isChecked: !checkedAll };
         });
      });
   };

   return (
      <>
         <ServiceLevelAgreementToolbar />
         <RightToolbar />
         <div
            id="kt_content_container"
            className="d-flex flex-column-fluid align-items-start container-xxl p-0"
         >
            <div className="content flex-row-fluid" id="kt_content">
               <div
                  className="flex-lg-row-fluid"
                  data-select2-id="select2-data-129-tmo1"
               >
                  <div className="card mb-5 mb-xl-8">
                     <div className="d-flex align-items-center justify-content-between w-100 pt-5">
                        <div className="card-body py-3">
                           <div className="position-relative w-md-400px ms-md-0">
                              <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                                 <KTSVG path="/media/icons/duotune/general/gen065.svg" />
                              </span>
                              <input
                                 type="text"
                                 className="form-control form-control-solid ps-10"
                                 name="search"
                                 value=""
                                 placeholder={intl.formatMessage({
                                    id: "TypeYourSearchHere",
                                 })}
                              />
                           </div>
                        </div>
                        <div className="card-body py-3  text-end">
                           <Link
                              to={{ pathname: "/addNewTechnicalAgreement" }}
                              className="btn btn-primary"
                           >
                              <bdi>
                                 {intl.formatMessage({
                                    id: "AddNewAgreement",
                                 })}
                              </bdi>
                           </Link>
                        </div>
                     </div>
                     <div className="card-body py-3">
                        <div className="table-responsive">
                           <table
                              className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
                              id="REGA-WS-caseList"
                           >
                              <thead>
                                 <tr className="fw-bolder text-muted">
                                    <th className="min-w-100px">
                                       <div className="form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-lg">
                                          <input
                                             className="form-check-input widget-9-check xCheckBg"
                                             type="checkbox"
                                             defaultValue={0}
                                             name="getMyToolsList"
                                             checked={checkedAll}
                                             onChange={handleSelectAll}
                                          />
                                       </div>
                                    </th>
                                    <th className="ps-4 min-w-100px">
                                       SLA Name
                                    </th>
                                    <th className="min-w-250px">
                                       {intl.formatMessage({
                                          id: "ServiceImplementationPeriod",
                                       })}
                                    </th>
                                    <th className="min-w-150px">
                                       {intl.formatMessage({
                                          id: "ResponseTime",
                                       })}
                                    </th>
                                    <th className="min-w-50px">
                                       {intl.formatMessage({
                                          id: "Actions",
                                       })}
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {data.map((item) => (
                                    <tr key={item.id}>
                                       <td>
                                          <div className="form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-lg">
                                             <input
                                                className="form-check-input widget-9-check xCheckBg"
                                                type="checkbox"
                                                defaultValue={0}
                                                name={`checkbox-${item.id}`}
                                                checked={item.isChecked}
                                                onChange={handleChangeCheckBox}
                                             />
                                          </div>
                                       </td>
                                       <td>
                                          <div className="d-flex align-items-center">
                                             <div className="ms-5">
                                                <Link
                                                   to={"/technical-support-service-level-agreement-details-sla"}
                                                   className="text-primary-800 text-hover-primary fw-bolder fs-6"
                                                >
                                                   {item.name}
                                                </Link>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <div className="d-flex align-items-center">
                                             <div className="ms-5">
                                                <span className="text-gray-800 fw-bolder d-block fs-6">
                                                   {item.implementationPeriod}
                                                </span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <div className="d-flex align-items-center">
                                             <div className="ms-5">
                                                <span className="text-gray-800 fw-bolder d-block fs-6">
                                                   {item.responseTime}
                                                </span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <div>
                                             <Actions id={item.id} />
                                          </div>
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                        <SystemPagination />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
