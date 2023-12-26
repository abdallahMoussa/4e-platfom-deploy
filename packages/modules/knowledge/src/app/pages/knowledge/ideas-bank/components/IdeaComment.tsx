import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../helpers";
import { DeletePopup } from "../../../partials/DeletePopup";
const IdeasComment: FC = () => {
  const intl = useIntl();
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  return (
    <div className="d-flex flex-column flex-md-row justify-content-start align-items-start align-items-md-center flex-grow-1 align-items-top mb-3 py-3 py-md-1">
      <div className="d-flex align-items-start align-items-md-center justify-content-start justify-content-md-center flex-column flex-shrink-0">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="w-45px h-45px flex-shrink-0">
            <img
              src={`/media/avatars/300-3.jpg`}
              className="w-100 rounded-3"
              alt="profile"
            />
          </div>
          <div className="d-flex align-items-start align-items-md-center flex-column ms-auto">
            <div className="mx-3">
              <div>سعودي الشهري</div>
              <span className="text-gray-500">امس في 5:06 PM</span>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <div>منذ اسبوعين</div>
          <div className="d-flex mb-2 mb-md-0 mx-1">
            <div className="btn-sm mx-1 bg-light d-flex align-items-center cursor-pointer">
              <i className="fa-regular fa-thumbs-up mx-2 fs-4 fa-fw"></i>
              20
            </div>
            <div className="btn-sm mx-1 bg-light d-flex align-items-center cursor-pointer">
              <i className="fa-regular fa-comments mx-2 fs-5 fa-fw"></i>5
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-2 mx-md-2 px-md-2 w-100">
          <div className="d-flex flex-column flex-md-row w-100">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <div className="d-flex flex-column mx-md-3">
                <div className="text-gray-700 my-1 bg-light py-2 px-3 rounded-2">
                  لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
                  هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                  كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس
                  عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي
                  أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه
                  الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى
                  صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          onClick={handleShowDelete}
          
        className="btn btn-outline-danger border border-1 border-danger btn-sm mt-2 mt-md-0 mx-2 mx-md-0 flex-shrink-0 d-flex align-items-center"
      >
        {intl.formatMessage({ id: "DeleteComment" })}
        <span className="svg-icon svg-icon-3 mx-0">
          <KTSVG path="/media/icons/duotune/general/gen088.svg" />
        </span>
      </div>
      <div className="modal fade"  aria-hidden="true">
        <DeletePopup handleCloseDelete={handleCloseDelete} showDelete={showDelete} />
      </div>
    </div>
    
  );
};

export { IdeasComment };
