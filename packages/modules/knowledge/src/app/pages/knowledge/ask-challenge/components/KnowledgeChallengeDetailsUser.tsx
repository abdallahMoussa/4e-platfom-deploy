import { FC } from "react";
import { useIntl } from "react-intl";

const KnowledgeChallengeDetailsUser: FC = () => {
  const intl = useIntl();

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
                <div role="button">
                  <img
                    src={`/media/pmo/pdfIcon.png`}
                    width={"30px"}
                    height={"30px"}
                  />
                  <span className="fs-7 mt-1 mx-2">اسم المرفق</span>
                </div>
                <div className="mx-2" role="button">
                  <img
                    src={`/media/pmo/pdfIcon.png`}
                    width={"30px"}
                    height={"30px"}
                  />
                  <span className="fs-7 mt-1 mx-2">اسم المرفق</span>
                </div>
              </div>

              <div className="d-flex flex-wrap">
                <div className="border border-1 d-flex align-items-center mb-2 mb-lg-0 p-2 rounded-1">
                  <span className="d-flex align-items-center text-gray-500">
                    <i className="fa-regular fa-comments mx-1 fs-4 fa-fw"></i>
                  </span>{" "}
                  <span className="text-gray-500 px-1">25</span>
                </div>
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
            <div className="px-4 py-3 bg-light mb-3">
              <div className="fs-6 fw-bold mb-4">
                عدم تعاون الجهات المالكه في حل الازمات
              </div>
              <div className="text-gray-500 mb-4">
                لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
                الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
                عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة
                قرون من الزمن لم تقضي على
              </div>
              <div className="mb-2">
                <a href="#!" className="text-primary">
                  www.rega.com
                </a>
              </div>
            </div>
            <div className="mb-4 w-100">
              <div className="py-2">
                <img
                  src={`/media/news/topic.jpg`}
                  style={{ width: "100%", maxHeight: "500px" }}
                  alt=""
                />
              </div>
            </div>
            <>
              <div className="d-flex justify-content-between align-items-center  mb-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="w-50px h-50px flex-shrink-0">
                    <img
                      src={`/media/avatars/300-3.jpg`}
                      className="w-100 h-100 rounded-3"
                      alt="profile"
                    />
                  </div>
                  <div
                    style={{ marginRight: ".5rem" }}
                    className="px-4 py-3 d-flex flex-column bg-light rounded-2"
                  >
                    <div className="mb-2">سعودي الشهري</div>
                    <div className="text-gray-500">
                      لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن
                      الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع
                      ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي
                      منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من
                      الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل
                      أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على
                      هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة
                      والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن
                      مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي
                      مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور
                      برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus
                      PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.
                    </div>
                  </div>
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
                style={{ marginRight: intl?.locale == 'ar' ? ".5rem" : '', marginLeft: intl?.locale == 'en' ? ".5rem" : '' }}
                className="position-relative w-100"
              >
                <textarea
                  style={{ paddingLeft: intl?.locale == 'ar' ? "105px" : ".75rem", paddingRight: intl?.locale == 'ar' ? ".75rem" : '105px' }}
                className="form-control border-1 min-h-30px fs-6"
                  rows={2}
                  placeholder={intl.formatMessage({ id: "WriteAComment" })}
                ></textarea>
                <div
                  className="position-absolute d-flex translate-middle-y"
                  style={{ left: intl?.locale == 'ar' ? "10px" : '', top: "50%", right: intl?.locale == 'en' ? "10px" : ''}}
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
                    className={`d-flex justify-content-center align-items-center bg-secondary w-35px h-35px rounded-circle mx-3`}
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
    </div>
  );
};

export { KnowledgeChallengeDetailsUser };
