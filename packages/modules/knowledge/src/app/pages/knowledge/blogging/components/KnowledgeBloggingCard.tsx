import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

const KnowledgeBloggingCard: FC = () => {
  const intl = useIntl();
  return (
    <div className="d-flex justify-content-start">
      <div className="card-header p-4 d-flex flex-column w-100 border-0 mb-4 mb-md-5">
        <div className="d-flex justify-content-between ">
          <div className="d-flex justify-content-start align-items-center w-200px mb-3">
            <div className="w-45px h-45px ">
              <img
                src={`/media/avatars/300-3.jpg`}
                className="w-100"
                alt="user profile"
              />
            </div>
            <div className="mx-2 px-1 d-flex flex-column">
              <div className="mb-1">سعودي الشهري</div>
              <div className="text-gray-500">امس في 5:06 PM</div>
            </div>
          </div>
        </div>
        <div className="mt-2 w-100">
          <div className="py-1">
            <Link to={`/knowledge-blogging/blog-details`}>
              <div>
                <h5 className="text-primary">
                  الرياض تقوم بتطوير منظومة العمل عن بعد للموظفين الحكوميين
                </h5>
              </div>
              <div className="pt-2">
                <p className="text-gray-600 mb-2">
                  لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
                  هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                  كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس
                  عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي
                  أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه
                  الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى
                  صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني.
                </p>
              </div>
              <div className="py-2">
                <img
                  src={`/media/news/topic.jpg`}
                  style={{ width: "100%", maxHeight: "500px" }}
                  alt="Attachment"
                />
              </div>
            </Link>
          </div>
          <div className="d-flex justify-content-between align-items-md-center mt-2 pt-2 align-items-start flex-column-reverse flex-md-row">
            <div className="d-flex flex-wrap">
              <div
                style={{
                  marginLeft: intl?.locale == "ar" ? "6.5px" : "",
                  marginRight: intl?.locale == "en" ? "6.5px" : "",
                }}
                className="border border-1 d-flex align-items-center cursor-pointer mb-2 mb-lg-0 p-2"
              >
                <span className="d-flex align-items-center text-gray-500">
                  {intl.formatMessage({ id: "Like" })}{" "}
                  <i className="fa-regular fa-thumbs-up mx-1 fs-3 fa-fw"></i>
                </span>{" "}
                <span className="text-success px-1">85</span>
              </div>
              <div className="border border-1 d-flex align-items-center cursor-pointer mb-2 mb-lg-0 p-2 mx-2">
                <span className="d-flex align-items-center text-gray-500">
                  {intl.formatMessage({ id: "Dislike" })}{" "}
                  <i className="fa-regular fa-thumbs-down mx-1 fs-3 fa-fw"></i>
                </span>{" "}
                <span className="text-danger px-1">20</span>
              </div>

              <Link to={`/knowledge-blogging/blog-details`}>
                <div className="border border-1 d-flex align-items-center cursor-pointer mb-2 mb-lg-0 p-2 mx-2">
                  <span className="d-flex align-items-center text-gray-500">
                    {intl.formatMessage({ id: "Comment" })}{" "}
                  <i className="fa-regular fa-comments mx-1 fs-4 fa-fw"></i>
                  </span>{" "}
                  <span className="text-primary px-1">55</span>
                </div>
              </Link>

              <div className="border border-1 d-flex align-items-center cursor-pointer mb-2 mb-lg-0 p-2 mx-2">
                <span className="d-flex align-items-center text-gray-500">
                  {intl.formatMessage({ id: "Share" })}{" "}
                  <i className="fa-solid fa-share mx-1 fs-3 fa-fw"></i>
                </span>{" "}
                <span className="text-dark px-1">10</span>
              </div>
            </div>
            <div className="mx-2 p-2">منذ اسبوعين</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { KnowledgeBloggingCard };
