import { FC } from "react";
import { FaBold, FaItalic, FaUnderline, FaRegImage } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { useIntl } from "react-intl";

const KnowledgeBloggingTextArea: FC = () => {
  const intl = useIntl();

  return (
    <div
      data-bs-toggle="modal"
      data-bs-target="#rega_modal_blog_post"
      className="d-flex flex-column w-100"
    >
      <div className="d-flex justify-content-start align-items-center w-200px mb-3">
        <div className="w-50px h-50px">
          <img
            src={`/media/avatars/300-1.jpg`}
            className="w-100"
            alt=""
          />
        </div>
        <div className="mx-2 px-1">سعودي الشهري</div>
      </div>
      <div className="cursor-pointer">
        <div className="pb-3 mb-2 border-bottom ">
          <div className="w-100 myform-control form-control-solid h-50px d-flex justify-content-start align-items-center">
            <p className="text-gray-500 mb-0 fs-6 ">
              {intl.formatMessage({ id: "WhatOnYourMind" })}
            </p>
          </div>
        </div>
        <div className="mt-3">
          <span>
            <FaBold size={14} className="mx-2" />
          </span>
          <span>
            <FaItalic size={14} className="mx-2" />
          </span>
          <span>
            <FaUnderline size={14} className="mx-2" />
          </span>
          <span>
            <FaRegImage size={14} className="mx-2" />
          </span>
          <span>
            <ImAttachment size={14} className="mx-2" />
          </span>
        </div>
      </div>
    </div>
  );
};

export { KnowledgeBloggingTextArea };
