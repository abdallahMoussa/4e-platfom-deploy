import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import BlogTab from "./BlogTab";
import AskTab from "./AskTab";
import IdeasTab from "./IdeasTab";
import IdeasBankTab from "./IdeasBankTab";
import ChallengeTab from "./Challenge";

function KnowledgePostingRequestsHome() {
  let intl = useIntl();
  let [allRequestsData, setAllRequestsData] = useState([
    {
      id: 1,
      name: "سعودي الشهري",
      img: "/media/avatars/300-3.jpg",
      time: "امس في 5:06 PM",
      status: intl.formatMessage({ id: "RejectedRequests" }),
      requestTitle: "الحياه اكثر اثاره للاهتمام عندما تتذكر اخر مره",
    },
    {
      id: 2,
      name: "سعودي الشهري",
      img: "/media/avatars/300-3.jpg",
      time: "امس في 5:06 PM",
      status: intl.formatMessage({ id: "PendingRequests" }),
      requestTitle: "الحياه اكثر اثاره للاهتمام عندما تتذكر اخر مره",
    },
    {
      id: 3,
      name: "سعودي الشهري",
      img: "/media/avatars/300-3.jpg",
      time: "امس في 5:06 PM",
      status: intl.formatMessage({ id: "ApprovedRequests" }),
      requestTitle: "الحياه اكثر اثاره للاهتمام عندما تتذكر اخر مره",
    },
    {
      id: 4,
      name: "سعودي الشهري",
      img: "/media/avatars/300-3.jpg",
      time: "امس في 5:06 PM",
      status: intl.formatMessage({ id: "RejectedRequests" }),
      requestTitle: "الحياه اكثر اثاره للاهتمام عندما تتذكر اخر مره",
    },
    {
      id: 5,
      name: "سعودي الشهري",
      img: "/media/avatars/300-3.jpg",
      time: "امس في 5:06 PM",
      status: intl.formatMessage({ id: "ApprovedRequests" }),
      requestTitle: "الحياه اكثر اثاره للاهتمام عندما تتذكر اخر مره",
    },
    {
      id: 6,
      name: "سعودي الشهري",
      img: "/media/avatars/300-3.jpg",
      time: "امس في 5:06 PM",
      status: intl.formatMessage({ id: "PendingRequests" }),
      requestTitle: "الحياه اكثر اثاره للاهتمام عندما تتذكر اخر مره",
    },
    {
      id: 7,
      name: "سعودي الشهري",
      img: "/media/avatars/300-3.jpg",
      time: "امس في 5:06 PM",
      status: intl.formatMessage({ id: "ApprovedRequests" }),
      requestTitle: "الحياه اكثر اثاره للاهتمام عندما تتذكر اخر مره",
    },
  ]);

  let [activeBlog, setActiveBlog] = useState(true);
  let [activeAsk, setActiveAsk] = useState(false);
  let [activeIdeas, setActiveIdeas] = useState(false);
  let [activeIdeasBank, setActiveIdeasBank] = useState(false);
  let [activeChallenge, setActiveChallenge] = useState(false);
  let activeBlogHandler = () => {
    setActiveBlog(true);
    setActiveAsk(false);
    setActiveIdeas(false);
    setActiveIdeasBank(false);
    setActiveChallenge(false);
  };
  let activeAskHandler = () => {
    setActiveBlog(false);
    setActiveAsk(true);
    setActiveIdeas(false);
    setActiveIdeasBank(false);
    setActiveChallenge(false);
  };
  let activeIdeasHandler = () => {
    setActiveBlog(false);
    setActiveAsk(false);
    setActiveIdeas(true);
    setActiveIdeasBank(false);
    setActiveChallenge(false);
  };
  let activeIdeasBankHandler = () => {
    setActiveBlog(false);
    setActiveAsk(false);
    setActiveIdeas(false);
    setActiveIdeasBank(true);
    setActiveChallenge(false);
  };
  let activeChallengeHandler = () => {
    setActiveBlog(false);
    setActiveAsk(false);
    setActiveIdeas(false);
    setActiveIdeasBank(false);
    setActiveChallenge(true);
  };
  return (
    <Fragment>
      <div className="detailsCard my-5">
        <div className="card card-xl-stretch mb-xl-6">
          <div className="card-header border border-bottom-2 pt-3 pb-5 mb-8">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label  fs-3 mb-1 fw-bolder">
                {intl.formatMessage({ id: "RequestsArchive" })}{" "}
              </span>
              <span className="mt-1 fw-semibold fs-6 text-muted">
                {intl.formatMessage({ id: "TotalRequests" })} 5000{" "}
              </span>
            </h3>
          </div>

          <div className="container-xxl">
            <div
              className="nav row nav-pills mb-3 background-pills d-flex justify-content-center justify-content-lg-between"
              id="pills-tab"
              role="tablist"
              style={{ backgroundColor: "#F5F8FA" }}
            >
              <div
                className="nav-item col-12 col-lg-2 navTabsPills"
                role="presentation"
              >
                <button
                  className={`nav-link w-100 m-1 fs-5 fw-bolder text-black${
                    activeBlog ? "active bg-white theme-text" : ""
                  }`}
                  id="pills-blog-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-blog"
                  type="button"
                  role="tab"
                  aria-controls="pills-blog"
                  aria-selected="true"
                  onClick={() => {
                    activeBlogHandler();
                  }}
                  style={{
                    borderRadius: `${activeBlog ? "20px" : ""}`,
                  }}
                >
                  {intl.formatMessage({ id: "Blog" })}{" "}
                </button>
              </div>
              <div
                className="nav-item col-12 col-lg-2 navTabsPills"
                role="presentation"
              >
                <button
                  className={`nav-link w-100 fs-5 m-1 fw-bolder text-black${
                    activeAsk ? "active bg-white theme-text" : ""
                  }`}
                  id="pills-ask-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ask"
                  type="button"
                  role="tab"
                  aria-controls="pills-ask"
                  aria-selected="false"
                  onClick={() => {
                    activeAskHandler();
                  }}
                  style={{
                    borderRadius: `${activeAsk ? "20px" : ""}`,
                  }}
                >
                  {intl.formatMessage({ id: "AskExpert" })}{" "}
                </button>
              </div>
              {/* <div
                className="nav-item col-12 col-lg-2 navTabsPills"
                role="presentation"
              >
                <button
                  className={`nav-link w-100 m-1 fs-5 fw-bolder ${activeIdeas?"active":""}`}
                  id="pills-ideas-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ideas"
                  type="button"
                  role="tab"
                  aria-controls="pills-ideas"
                  aria-selected="false"
                  onClick={() => {
                    activeIdeasHandler();
                  }}
                  style={{
                    color: `${activeIdeas ? "rgb(0, 158, 247)" : "black"}`,
                    backgroundColor: `${activeIdeas ? "white" : ""}`,
                    borderRadius:`${activeIdeas? "20px" : ""}`
                  }}
                >
                  {intl.formatMessage({ id: "Ideas" })}{" "}
                </button>
              </div> */}
              <div
                className="nav-item col-12 col-lg-2 navTabsPills"
                role="presentation"
              >
                <button
                  className={`nav-link w-100 m-1 fs-5 fw-bolder text-black${
                    activeIdeasBank ? "active bg-white theme-text" : ""
                  } `}
                  id="pills-ideasBank-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ideasBank"
                  type="button"
                  role="tab"
                  aria-controls="pills-ideasBank"
                  aria-selected="false"
                  onClick={() => {
                    activeIdeasBankHandler();
                  }}
                  style={{
                    borderRadius: `${activeIdeasBank ? "20px" : ""}`,
                  }}
                >
                  {intl.formatMessage({ id: "IdeaBank" })}{" "}
                </button>
              </div>
              <div
                className="nav-item col-12 col-lg-2 navTabsPills"
                role="presentation"
              >
                <button
                  className={`nav-link w-100 m-1 fs-5 fw-bolder text-black${
                    activeChallenge ? "active bg-white theme-text" : ""
                  }`}
                  id="pills-challenge-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-challenge"
                  type="button"
                  role="tab"
                  aria-controls="pills-challenge"
                  aria-selected="false"
                  onClick={() => {
                    activeChallengeHandler();
                  }}
                  style={{
                    borderRadius: `${activeChallenge ? "20px" : ""}`,
                  }}
                >
                  {intl.formatMessage({ id: "AskChallenge" })}{" "}
                </button>
              </div>
            </div>

            <div className="tab-content px-2" id="pills-tabContent">
              <BlogTab allRequestsData={allRequestsData} />
              <AskTab allRequestsData={allRequestsData} />
              {/* <IdeasTab allRequestsData={allRequestsData} /> */}
              <IdeasBankTab allRequestsData={allRequestsData} />
              <ChallengeTab allRequestsData={allRequestsData} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default KnowledgePostingRequestsHome;
