import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import AddPostBlogPopup from "../popup/add-post-blog-popup";

const KnowledgeBloggingToolbar: FC = () => {
  const intl = useIntl();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl d-flex flex-stack flex-wrap p-0"
        >
          <div className="page-title d-flex flex-column me-3">
            <h1 className="d-flex text-white fw-bolder my-1 fs-3">
              {intl.formatMessage({ id: "Blogging" })}
            </h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
              <li className="breadcrumb-item text-white opacity-75">
                <Link
                  to="/home-workspace"
                  className="text-white text-hover-primary"
                >
                  {intl.formatMessage({ id: "Home" })}
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-white opacity-75">
                <Link
                  to="/knowledge-workspace"
                  className="text-white text-hover-primary text-hover-primary"
                >
                  {intl.formatMessage({ id: "Workspace" })}
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-white opacity-75">
                <Link
                  to="/knowledge-blogging"
                  className="text-white text-hover-primary text-hover-primary"
                >
                  {intl.formatMessage({ id: "Blogging" })}
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center py-3 py-md-1">
            <div>
              <a
                className="btn btn-bg-white btn-active-color-primary"
                onClick={handleShow}
              >
                {intl.formatMessage({ id: "AddPost" })}
              </a>
            </div>
          </div>
          <div
            className="modal fade"
            id="rega_modal_blog_post"
            aria-hidden="true"
          >
            <AddPostBlogPopup handleClose={handleClose} show={show} />
          </div>
        </div>
      </div>
    </>
  );
};

export { KnowledgeBloggingToolbar };
