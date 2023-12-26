import React, { FC, useState } from "react";
import { RightToolbar } from "../partials/RightToolbar";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../partials/SystemPagination";
import { AddRatingPopup } from "../../partials/AddRatingPopup";
import { KnowledgeGeneralKnowledgeListToolbar } from "./toolbar/KnowledgeGeneralKnowledgeListToolbar";

const EN_LANG = "en";

export const KnowledgeKnowledgeList: FC = () => {
  const [modalRShow, setModalRShow] = useState<boolean>(false);

  const intl = useIntl();
  const [knowledge, setKnowledge] = useState([
    {
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
          name: intl.formatMessage({ id: "EntityName" }),
          icon: "bi bi-justify fa-xl",
        },
        {
          name: `${intl.formatMessage({
            id: "KnowledgeName",
          })} (${intl.formatMessage({ id: "Category" })})`,
          icon: "bi bi-justify fa-xl",
        },
      ],
      stats: [
        {
          name: `17 ${intl.formatMessage({ id: "View" })}`,
          icon: "bi bi-eye mx-2 fa-xl",
        },
        {
          name: "17",
          icon: "bi bi-hand-thumbs-down mx-2 fa-xl",
        },
        {
          name: "177",
          icon: "bi bi-hand-thumbs-up mx-2 fa-xl",
        },
        {
          name: intl.formatMessage({ id: "Print" }),
          icon: "bi bi-printer mx-2 fa-xl",
        },
        {
          name: intl.formatMessage({ id: "Favorites" }),
          icon: "bi bi-heart mx-2 fa-xl",
        },
        {
          name: intl.formatMessage({ id: "Rating" }),
          icon: "bi bi-star mx-2 fa-xl",
          isRating: true,
        },
      ],
    },
    {
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
          name: intl.formatMessage({ id: "EntityName" }),
          icon: "bi bi-justify fa-xl",
        },
        {
          name: `${intl.formatMessage({
            id: "KnowledgeName",
          })} (${intl.formatMessage({ id: "Category" })})`,
          icon: "bi bi-justify fa-xl",
        },
      ],
      stats: [
        {
          name: `15 ${intl.formatMessage({ id: "View" })}`,
          icon: "bi bi-eye mx-2 fa-xl",
        },
        {
          name: "17",
          icon: "bi bi-hand-thumbs-down mx-2 fa-xl",
        },
        {
          name: "177",
          icon: "bi bi-hand-thumbs-up mx-2 fa-xl",
        },
        {
          name: intl.formatMessage({ id: "Print" }),
          icon: "bi bi-printer mx-2 fa-xl",
        },
        {
          name: intl.formatMessage({ id: "Favorites" }),
          icon: "bi bi-heart mx-2 fa-xl",
        },
        {
          name: intl.formatMessage({ id: "Rating" }),
          icon: "bi bi-star mx-2 fa-xl",
          isRating: true,
        },
      ],
    },
    {
      id: 1,
      date: "11 مارس 2023",
      title: `تطوير منظومه المساهمات العقرية واستحداث تنظيم
         جديد للمساهمات `,
      description: `تطوير منظومه المساهمات  واستحداث تنظيم جديد للمساهمات ",
      description: "ندما قررت لسياسات من في دعم الدور ال الدولي السلام
      القوى قضايا تحديا الأحزاب وغير ولو للدول الصواريخ
      للسعودية لها مع يقول من أيضا نعم رابعا أكبر سيناء
      لكن قد إلا إن مما تمثل يشير في العرب تضمن مخاوف
      يرى قوضت الوطنية`,
      info: [
        {
          name: intl.formatMessage({ id: "EntityName" }),
          icon: "bi bi-justify fa-xl",
        },
        {
          name: `${intl.formatMessage({
            id: "KnowledgeName",
          })} (${intl.formatMessage({ id: "Category" })})`,
          icon: "bi bi-justify fa-xl",
        },
      ],
      stats: [
        {
          name: `17 ${intl.formatMessage({ id: "View" })}`,
          icon: "bi bi-eye mx-2 fa-xl",
        },
        {
          name: "17",
          icon: "bi bi-hand-thumbs-down mx-2 fa-xl",
        },
        {
          name: "177",
          icon: "bi bi-hand-thumbs-up mx-2 fa-xl",
        },
        {
          name: intl.formatMessage({ id: "Print" }),
          icon: "bi bi-printer mx-2 fa-xl",
        },
        {
          name: intl.formatMessage({ id: "Favorites" }),
          icon: "bi bi-heart mx-2 fa-xl",
        },
        {
          name: intl.formatMessage({ id: "Rating" }),
          icon: "bi bi-star mx-2 fa-xl",
          isRating: true,
        },
      ],
    },
  ]);

  let selectedLang = localStorage.getItem("i18nConfig");
  try {
    selectedLang = JSON.parse(selectedLang).selectedLang;
  } catch (err) {
    console.log("Can't get selectedLang from localStorage");
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <KnowledgeGeneralKnowledgeListToolbar title="KnowledgeList" />
          <RightToolbar />
        </div>
        <div>
          <Link
            to="/knowledge-general-knowledge/list/add"
            className="btn btn-bg-white btn-active-color-primary"
          >
            {intl.formatMessage({
              id: "AddKnowledge",
            })}
          </Link>
        </div>
      </div>

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
              <div className="row card-body py-8">
                {knowledge.map((item) => (
                  <div
                    className="col-12 border-bottom border-2 py-4 mt-4"
                    key={item.id}
                  >
                    <div className="text-end">
                      <i className="fas fa-calendar-alt mx-2 text-muted fa-xl"></i>
                      <span className="text-muted">
                        <bdi>{item.date}</bdi>
                      </span>
                    </div>
                    <Link
                      to="/knowledge-general-knowledge/list/1"
                      className="text-primary fw-bolder"
                    >
                      {item.title}
                    </Link>
                    <div className="my-5 text-muted">{item.description}</div>
                    <div className="row d-flex align-items-start justify-content-between my-5">
                      <div
                        className={`col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-between flex-wrap mt-2 ${
                          selectedLang === EN_LANG && "ms-0"
                        }`}
                      >
                        {item.info.map((info) => (
                          <div>
                            <i className={info.icon}></i>
                            <span className="ms-2">{info.name}</span>
                          </div>
                        ))}
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-6 col-12 d-flex justify-content-between flex-wrap mt-2 gap-2">
                        {item.stats.map((stat) => (
                          <span
                            className="m-0 border border-1 rounded p-3"
                            role="button"
                            onClick={() => setModalRShow(true)}
                          >
                            <i className={stat.icon}></i>
                            <span>{stat.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <SystemPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_add_rating" aria-hidden="true">
        <AddRatingPopup
          show={modalRShow}
          handleClose={() => setModalRShow(false)}
        />
      </div>
    </>
  );
};
