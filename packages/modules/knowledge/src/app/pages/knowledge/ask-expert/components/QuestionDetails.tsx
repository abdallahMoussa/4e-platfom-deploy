import { FC, useState } from "react";
import { KTSVG } from "../../../../helpers";
import { DeletePopup } from "../../../partials/DeletePopup";
import { useIntl } from "react-intl";

const KnowledgeQuestionDetails: FC = () => {
  const intl = useIntl();
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
 
  return (
    <div className="card card-custom card-stretch gutter-b">
      <div className="card-body">
        <div className="d-flex justify-content-start">
          <div className="card-header p-4 d-flex flex-column w-100 border-0 mb-4 mb-md-4">
            <div className="d-flex justify-content-start align-items-center mb-4">
              <div className="w-50px h-50px">
                <img
                  src={`/media/avatars/300-3.jpg`}
                  className="w-100 rounded-3"
                  alt="profile"
                />
              </div>
              <div className="mx-2 px-1 d-flex flex-column">
                <div className="mb-2">سعودي الشهري</div>
                <div className="text-gray-500">25 مارس - 2:45 مساء</div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-column flex-md-row mb-4">
              <div className="d-flex justify-content-between justify-content-md-center mb-4 mb-md-0">
              <div 
                className='fs-4 text-gray-800 fw-bolder mb-0'>
                    ما هي عوامل النجاح المنظمه وكيفيه التغلب علي المشاكل ؟
               </div>
              </div>
              <div className="d-flex flex-wrap">
                <div className="border border-1 d-flex align-items-center mb-2 mb-lg-0 cursor-pointer mx-2 p-2 rounded-1">
                  <span className="d-flex align-items-center text-gray-500">
                    <i className="fa-solid fa-print mx-1 fs-3 fa-fw"></i>
                  </span>{" "}
                  <span className="text-gray-500 px-1">40</span>
                </div>
                <div className="border border-1 d-flex align-items-center mb-2 mb-lg-0 cursor-pointer p-2 rounded-1">
                  <span className="d-flex align-items-center text-gray-500">
                    <i className="fa-solid fa-share mx-1 fs-3 fa-fw"></i>
                  </span>{" "}
                  <span className="text-gray-500 px-1">10</span>
                </div>
              </div>
            </div>
            <div className="mb-4 w-100">
              <div className="py-2">
                <img
                  src={`/media/img/book.png`}
                  style={{ width: "100%", maxHeight: "400px" }}
                  alt="IdeaPicture"
                />
              </div>
            </div>
            <>
              <div className="d-flex justify-content-between align-items-end align-items-md-center flex-column flex-md-row mb-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="w-50px h-50px flex-shrink-0">
                    <img
                      src={`/media/avatars/300-3.jpg`}
                      className="w-100 h-100 rounded-3"
                      alt="profile"
                    />
                  </div>
                  <div className="px-4 py-3 d-flex flex-column bg-light mx-2 rounded-2">
                    <div className="mb-2">سعودي الشهري</div>
                    <div className="text-gray-500">
                      هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة
                      والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن
                      مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي
                      مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور
                      برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus
                      PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.
                    </div>
                  </div>
                </div>
                <div
                  onClick={handleShowDelete}
                  className="btn btn-outline-danger border border-1 border-danger mt-3 mt-md-0 mx-2 mx-md-0 flex-shrink-0 d-flex align-items-center"
                >
                  {intl.formatMessage({ id: "DeleteComment" })}
                  <span className="svg-icon svg-icon-3 mx-0">
                    <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                  </span>
                </div>
              </div>
            </>
            <div className="mb-3">
              {intl.formatMessage({ id: "WriteAComment" })}
            </div>
            <div className="d-flex align-items-start">
              <div className="w-50px h-50px">
                <img
                  src={`/media/avatars/300-3.jpg`}
                  className="w-100 rounded-3"
                  alt="profile"
                />
              </div>
              <form
                style={{
                  marginRight: intl?.locale == "ar" ? ".5rem" : "",
                  marginLeft: intl?.locale == "en" ? ".5rem" : "",
                }}
                className="position-relative w-100"
              >
                <textarea
                  style={{
                    paddingLeft: intl?.locale == "ar" ? "105px" : ".75rem",
                    paddingRight: intl?.locale == "ar" ? ".75rem" : "105px",
                  }}
                  className="form-control border-1 min-h-50px fs-6"
                  rows={2}
                  placeholder={intl.formatMessage({ id: "WriteAComment" })}
                ></textarea>
                <div
                  className="position-absolute d-flex translate-middle-y"
                  style={{
                    left: intl?.locale == "ar" ? "10px" : "",
                    top: "50%",
                    right: intl?.locale == "en" ? "10px" : "",
                  }}
                >
                  <label
                    htmlFor="file-upload"
                    className="d-flex justify-content-center align-items-center bg-secondary w-35px h-35px rounded-circle"
                    role="button"
                  >
                    <i className="fa-solid fa-paperclip mx-1 fs-3 fa-fw text-gray-600"></i>
                  </label>
                  <input
                    hidden
                    type="file"
                    id="file-upload"
                    name="file-upload"
                  />
                  <label
                    className={`d-flex justify-content-center align-items-center bg-secondary w-35px h-35px rounded-circle mx-3 `}
                    role="button"
                  >
                    <i
                      className={`fa-regular fa-paper-plane fs-3 fa-fw text-gray-600  ${
                        intl?.locale == "ar" ? "fa-flip-horizontal" : ""
                      }`}
                    ></i>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade"  aria-hidden="true">
        <DeletePopup handleCloseDelete={handleCloseDelete} showDelete={showDelete} />
      </div>
    </div>
  );
};

export { KnowledgeQuestionDetails };