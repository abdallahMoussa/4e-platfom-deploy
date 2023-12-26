import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { KnowledgeGeneralKnowledgeToolbar } from "./toolbar/KnowledgeGeneralKnowledgeToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import { KTSVG } from "../../../helpers";
import AdvancedSearch from "./popup/AdvancedSearch";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EN_LANG = "en";

const KnowledgeGeneralKnowledge: FC = () => {
  const intl = useIntl();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [knowledgeData, setKnowledgeData] = useState([
    {
      id: 1,
      name: "المعرفة العامة",
      icon: "fas fa-book-open text-primary fa-3x",
    },
    {
      id: 2,
      name: "المعرفة التنفيذية",
      icon: "fas fa-book-open text-danger fa-3x",
    },
    {
      id: 3,
      name: "المعرفة الوطنية",
      icon: "fas fa-book-open text-success fa-3x",
    },
    {
      id: 4,
      name: "المعرفة الاخلاقية",
      icon: "fas fa-book-open text-warning fa-3x",
    },
  ]);

  const navigate = useNavigate();

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
          <KnowledgeGeneralKnowledgeToolbar />
          <RightToolbar />
        </div>
        <div>
          <Link
            to="/knowledge-general-knowledge/add-new"
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
              <div className="d-flex align-items-center justify-content-between  pt-5">
                <div className="row card-body py-3">
                  <div className="col-12 col-sm-8 col-md-8 col-xl-4 col-lg-4 col-md-4 col-sm-4 position-relative text-center ms-md-0">
                    <input
                      style={{
                        background: "#F5F8FA",
                        borderRadius: "6px",
                        outline: "unset",
                        border: "0",
                        padding: "1rem 3rem 1rem 1rem",
                      }}
                      type="search"
                      name="searchForProject"
                      className="input input-group searchBoxDesign"
                      id="searchForProject"
                      placeholder={intl.formatMessage({
                        id: "KnowledgeSearch",
                      })}
                    />
                    <i
                      className="fa-solid fa-light fa-magnifying-glass fs-3 fa-fw position-absolute"
                      style={{
                        top: "50%",
                        right: "1rem",
                        transform: "translateY(-50%)",
                      }}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-end col-12 col-sm-4 col-md-4 col-lg-4 col-xl-8 mt-4 mt-sm-0">
                    <button
                      className="btn btn-primary w-100 w-lg-25 w-md-75 w-sm-75 "
                      onClick={handleShow}
                    >
                      <span className="svg-icon svg-icon-3 svg-icon-gray-500 mx-2">
                        <KTSVG path="/media/icons/duotune/general/gen065.svg" />
                      </span>
                      <span className="fw-bolder text-light">
                        {intl.formatMessage({
                          id: "AdvancedSearch",
                        })}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row card-body py-3 mb-5">
                {knowledgeData.map((item) => (
                  <div className="col-12 col-sm-6 col-md-3">
                    <div
                      className="shadow-sm p-3 m-1 bg-body rounded d-flex flex-column justify-content-evenly align-items-center h-300px"
                      onClick={() =>
                        navigate("/knowledge-general-knowledge/list")
                      }
                      role="button"
                    >
                      <div className="bg-primary bg-opacity-10 rounded-2 p-4">
                        <i className={item.icon}></i>
                      </div>
                      <p className="h2 fw-bolder">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        aria-hidden="true"
      >
        <AdvancedSearch handleClose={handleClose} show={show} />
      </div>
    </>
  );
};

export { KnowledgeGeneralKnowledge };
