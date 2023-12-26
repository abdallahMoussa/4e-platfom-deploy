import React, { FC, useState } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import { KnowledgeKnowledgeableContentToolbar } from "./toolbar/KnowledgeKnowledgeableContentToolbar";
import { useIntl } from "react-intl";
import { RatingItems } from "../../partials/RatingItems";
import { toAbsoluteUrl } from "./../../../../_metronic/helpers/AssetHelpers";
import { KTSVG } from "../../../helpers";
import { WorkParticipantsTooltip } from "./components/WorkParticipantTooltip";

export const KnowledgeKnowledgeableContent: FC = () => {
   const intl = useIntl();

   const [details, setDetails] = useState({
      id: 1,
      date: "11 مارس 2023",
      title: `تطوير منظومه المساهمات  واستحداث تنظيم
      جديد للمساهمات `,
      description: `تطوير منظومه المساهمات  واستحداث تنظيم جديد للمساهمات ",
   description: "ندما قررت لسياسات من في دعم الدور ال الدولي السلام
   القوى قضايا تحديا الأحزاب وغير ولو للدول الصواريخ
   للسعودية لها مع يقول من أيضا نعم رابعا أكبر سيناء
   لكن قد إلا إن مما تمثل يشير في العرب تضمن مخاوف
   يرى قوضت الوطنية`,
      info: [
         {
            name: `${intl.formatMessage({
               id: "KnowledgeName",
            })} (${intl.formatMessage({ id: "Category" })})`,
            subName: intl.formatMessage({
               id: "KnowledgeName",
            }),
         },
         {
            name: `${intl.formatMessage({
               id: "EntityName",
            })} (${intl.formatMessage({ id: "DocumentOwner" })})`,
            subName: intl.formatMessage({ id: "EntityName" }),
         },
      ],
      stats: [
         {
            name: "177",
            icon: "bi bi-hand-thumbs-up mx-2 fa-xl",
         },
         {
            name: "17",
            icon: "bi bi-hand-thumbs-down mx-2 fa-xl",
         },
         {
            name: intl.formatMessage({ id: "Favorites" }),
            icon: "bi bi-heart mx-2 fa-xl",
         },
         {
            name: `17 ${intl.formatMessage({ id: "View" })}`,
            icon: "bi bi-eye mx-2 fa-xl",
         },
      ],
      rating: 4,
      participants: ["المشارك1", "المشارك2", "المشارك3"],
   });

   return (
      <>
         <KnowledgeKnowledgeableContentToolbar />
         <RightToolbar />

         <div
            id="kt_content_container"
            className="d-flex flex-column-fluid align-items-start container-xxl p-0"
         >
            <div className="content flex-row-fluid" id="kt_content">
               <div className="d-flex flex-column flex-lg-row">
                  <div className="flex-column flex-lg-row-auto w-lg-350px w-100 mb-10 mb-lg-0">
                     <div className="card card-xl-stretch mb-xl-3">
                        <div className="card-body scroll-y mh-600px">
                           <div>
                              <div className="my-4 border-bottom border-2">
                                 <div className="my-5 text-gray-900 bg-hover-secondary p-3 rounded active">
                                    <KTSVG
                                       path="/media/icons/duotune/general/gen172PopupMenu.svg"
                                       className="svg-icon-2x"
                                    />
                                    <span className="text-primary fw-bolder h3 mx-2">
                                       {intl.formatMessage({
                                          id: "KnowledgeContentDisplay",
                                       })}
                                    </span>
                                 </div>
                                 <div className="my-5 text-gray-900 bg-hover-secondary p-3 rounded">
                                    <i className="bi bi-file-earmark-fill fa-xl text-muted"></i>
                                    <span className="mx-2">
                                       {intl.formatMessage({
                                          id: "KnowledgeContentFile",
                                       })}
                                    </span>
                                 </div>
                                 <div className="my-5 text-gray-900 bg-hover-secondary p-3 rounded">
                                    <i className="bi bi-eye fa-xl text-muted"></i>
                                    <span className=" mx-2">
                                       {intl.formatMessage({ id: "Goal" })}
                                    </span>
                                 </div>
                              </div>
                              <div className="my-4">
                                 <div className="my-5 text-gray-900 p-3">
                                    <span className="mx-2">
                                       {intl.formatMessage({
                                          id: "AssociatedEvidenceAndLegislation",
                                       })}
                                    </span>
                                 </div>
                                 <div className="my-5 text-gray-900 p-3">
                                    <span className="mx-2 text-primary fw-bolder h3">
                                       {intl.formatMessage({
                                          id: "AttachedFilesForStudying",
                                       })}
                                    </span>
                                 </div>
                                 <div className="my-5 text-gray-900 p-3">
                                    <span className=" mx-2">
                                       {intl.formatMessage({
                                          id: "NoFiles",
                                       })}
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="w-100 w-lg-850px ms-lg-7 ms-xl-10">
                     <div className="card card-xl-stretch mb-xl-0 py-4">
                        <div className="card-body py-3 px-3 mx-8">
                           <div className="tab-content">
                              <div
                                 className="col-12 border-bottom border-2 py-4 mt-4"
                                 key={details.id}
                              >
                                 <div className="text-end">
                                    <i className="fas fa-calendar-alt mx-2 text-muted fa-xl"></i>
                                    <span className="text-muted">
                                       <bdi>{details.date}</bdi>
                                    </span>
                                 </div>
                                 <p className="text-primary fw-bolder">
                                    {details.title}
                                 </p>
                                 <div className="my-5 text-muted">
                                    {details.description}
                                 </div>
                                 <div className="d-flex justify-content-between align-items-center mt-8">
                                    <div className="d-flex justify-content-between">
                                       <div>
                                          <p className="fw-bolder">
                                             {intl.formatMessage({
                                                id: "ParticipantsWork",
                                             })}
                                          </p>
                                          <p className="text-primary text-center">
                                             <div>
                                                <WorkParticipantsTooltip
                                                   count={
                                                      details.participants
                                                         .length
                                                   }
                                                   names={details.participants}
                                                />
                                             </div>
                                          </p>
                                       </div>
                                       <div className="mx-8">
                                          <p className="fw-bolder">
                                             {intl.formatMessage({
                                                id: "ParticipantEntity",
                                             })}
                                          </p>
                                          <p className="text-primary text-center">
                                             {intl.formatMessage({
                                                id: "EntityName",
                                             })}
                                          </p>
                                       </div>
                                    </div>
                                    <div>{RatingItems(4, "fa-2x mx-2")}</div>
                                 </div>
                                 <div className="row d-flex align-items-center my-8 shadow-sm py-5 h-100px">
                                    <div className="col-6 d-flex justify-content-between">
                                       {details.info.map((info) => (
                                          <div>
                                             <p className="ms-2 fw-bolder">
                                                {info.name}
                                             </p>
                                             <p className="text-primary text-center">
                                                {info.subName}
                                             </p>
                                          </div>
                                       ))}
                                    </div>
                                    <div className="col-6 d-flex justify-content-end">
                                       {details.stats.map((stat) => (
                                          <span
                                             className="mx-2 mb-0"
                                             role="button"
                                          >
                                             <i className={stat.icon}></i>
                                             <span>{stat.name}</span>
                                          </span>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                              <div className=" mt-10">
                                 <div className="col-md-12 col-sm-12 topics-units create-live explain">
                                    <embed
                                       src={toAbsoluteUrl(
                                          "/media/pdf/test.pdf"
                                       )}
                                       style={{
                                          width: "100%",
                                          height: "750px",
                                          borderRadius: "15px",
                                       }}
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
