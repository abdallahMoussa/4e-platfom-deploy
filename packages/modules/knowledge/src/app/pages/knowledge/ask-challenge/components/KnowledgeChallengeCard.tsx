import { FC } from "react";
import { Link } from "react-router-dom";

const KnowledgeChallengeCard: FC = () => {
  return (
    <div className="col-lg-6">
      <div className="p-4 shadow rounded-3">
        <div className="d-flex justify-content-start align-items-center mb-4">
          <div className="w-50px h-50px">
            <img
              src={`/media/avatars/300-3.jpg`}
              className="w-100 rounded-3"
              alt="profile"
            />
          </div>
          <div className="mx-2 px-2 d-flex flex-column">
            <div className="mb-2">سعودي الشهري</div>
            <div className="text-gray-500">25 مارس - 2:45 مساء</div>
          </div>
        </div>
        <Link to={"/knowledge-ask-challenge/challenge-details"}>
          <div className="fs-6 fw-bold mb-4 text-primary">
            عدم تعاون الجهات المالكه في حل الازمات
          </div>
          <div className="text-gray-500 mb-4">
            لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
            الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم
            إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
            مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
            كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم
            تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة.
          </div>
        </Link>
        <div className="mb-4">
          <a href="#!" className="text-primary">
            www.rega.com
          </a>
        </div>
        <div className="d-flex flex-wrap">
          <div className="border border-1 d-flex align-items-center cursor-pointer mb-2 mb-lg-0 py-1 px-2 rounded-2">
            <span className="text-gray-500 px-1">40</span>
            <span className="d-flex align-items-center text-gray-500">
              <i className="fa-regular fa-comments mx-1 fs-4 fa-fw text-gray-500"></i>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export { KnowledgeChallengeCard };
