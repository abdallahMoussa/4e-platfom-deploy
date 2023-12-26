import { FC } from "react";
import { Community } from "./components/Community";
import { InteractionChannels } from "./components/InteractionChannels";
import { LatestNews } from "./components/LatestNews";
import { Meetings } from "./components/Meetings";
import { QuickLinks } from "./components/QuickLinks";
import { Requests } from "./components/Requests";
import { TasksList } from "./components/TasksList";
import { Upper3Div } from "./components/Upper3Div";
import { useIntl } from "react-intl";

const HomeWorkspace: FC = () => {
  const intl = useIntl();

  return (
    <>
    
      <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
        <div id="kt_toolbar_container" className="container-xxl d-flex flex-stack flex-wrap p-0">
          <div className="page-title d-flex flex-column me-3">
            <h1 className="d-flex text-white fw-bolder my-1 fs-3">{intl.formatMessage({ id: "Home" })}</h1>
          </div>
        </div>
      </div>

      <div className="row g-5 g-xl-8">
        <div className="col-xl-4">
          <QuickLinks />
        </div>
        <div className="col-xl-8">
          <Upper3Div />
          <LatestNews />
        </div>
      </div>
      <div className="row g-5 g-xl-8">
        <div className="col-xl-4">
          <TasksList />
        </div>
        <div className="col-xl-8">
          <Requests />
        </div>
      </div>
      <div className="row g-5 g-xl-8">
        <div className="col-xl-4">
          <Meetings />
        </div>
        <div className="col-xl-4">
          <Community />
        </div>
        <div className="col-xl-4">
          <InteractionChannels />
        </div>
      </div>
    </>
  );
};

export { HomeWorkspace };
