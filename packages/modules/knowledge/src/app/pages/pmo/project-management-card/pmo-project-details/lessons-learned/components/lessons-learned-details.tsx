import { FC } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

const LessonsLearnedDetails: FC = () => {
  const intl = useIntl();

  return (
    <>
      <div className=" my-5">
        <div className="card card-xl-stretch mb-xl-0">
          <div className="card-header px-3 pt-3 pb-2  d-flex bg-light  border-secondary border-0 border-top-1 border-bottom-1 border-dashed   mx-7 mt-10 mb-5 ">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder fs-4 mb-2 "> {intl.formatMessage({ id: "LessonsLearnedData" })}   </span>
              <span className="mt-1 fw-semibold fs-6 text-muted">{intl.formatMessage({ id: "CurrentLessonLearnedData" })} </span>
            </h3>
            <div className="card-toolbar">
              <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end mb-5">
                <Link to={"/pmo-project-edit-lesson-learned"} className="btn btn-secondary mx-1 me-3 mw-100 text-center">
                {intl.formatMessage({ id: "EditLesson" })}                </Link>
                <Link to={"/pmo-project-add-lesson-learned"} className="btn btn-primary mx-1 me-3 mw-100 text-center">
                {intl.formatMessage({ id: "AddLesson" })} 
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body py-3 px-3">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="REGA_table_widget_5_tab_1">
                <div className="mx-5">
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id: "LessonsLearnedTitle" })} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-primary fw-bold">العنوان الاساسى للدروس المستفادة  </p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary border-0 border-bottom-1 border-dashed pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6"> {intl.formatMessage({ id: "Class" })} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold"> العمليات (1)   </p>
                  </div>
                  <div className="d-flex mb-10 pt-2 border-secondary pb-3 align-items-center">
                    <p className="pb-2 mb-5 fontSz-6">  {intl.formatMessage({ id: "FutureRecommendations" })} :</p>
                    <p className="px-2 mb-5 fontSz-7 pb-2 text-muted fw-bold"> السبب الأساسى لوجود توصيات مستقبلة, السبب الأساسى لوجود توصيات مستقبلة,</p>
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

export { LessonsLearnedDetails };
