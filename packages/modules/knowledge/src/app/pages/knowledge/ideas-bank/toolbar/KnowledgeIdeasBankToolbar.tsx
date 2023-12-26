import React, { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import AddIdeaPopup from '../popup/add-idea-popup'

const KnowledgeIdeasBankToolbar: FC = () => {
  const intl = useIntl()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
        <div id="kt_toolbar_container" className="container-xxl d-flex flex-stack flex-wrap p-0">
          <div className="page-title d-flex flex-column me-3">
            <h1 className="d-flex text-white fw-bolder my-1 fs-3">{intl.formatMessage({ id: "IdeaBank" })}</h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                <li className="breadcrumb-item text-white opacity-75">
                  <Link to="/home-workspace" className="text-white text-hover-primary">
                    {intl.formatMessage({ id: "Home" })}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                </li>
                <li className="breadcrumb-item text-white opacity-75">
                  <Link
                    to="/knowledge-workspace"
                    className="text-white text-hover-primary"
                  >
                    {intl.formatMessage({ id: "Workspace" })}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                </li>
                <span
                  className="breadcrumb-item text-white opacity-75"
                >
                  {intl.formatMessage({ id: "IdeaBank" })}
                </span>
              </ul>
          </div>
          <div
              onClick={handleShow}   
          >
          <div className="d-flex align-items-center py-3 py-md-1">
              <a
                className="btn btn-bg-white btn-active-color-primary"
              >
                {intl.formatMessage({ id: "AddIdea" })}
              </a>
          </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        aria-hidden="true"
      >
        <AddIdeaPopup handleClose={handleClose} show={show}/>
          </div>
    </>
    )
  }
  

export { KnowledgeIdeasBankToolbar }
