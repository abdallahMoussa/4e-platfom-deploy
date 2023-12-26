import { FC } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
// import { PDFViewer } from '../../../partials/PDFViewer'

export enum NewFeasibilityStudyToolbarLinkType {
  ProjectBrochure = "ProjectBrochure",
  FeasibilityStudy = "FeasibilityStudy",
}

interface INewFeasibilityStudyToolbar {
  isNewFeasibilityStudy: boolean;
  type: NewFeasibilityStudyToolbarLinkType;
  title?: string;
}

export const NewFeasibilityStudyToolbar: FC<INewFeasibilityStudyToolbar> = ({
  isNewFeasibilityStudy,
  type,
  title= ""
}) => {
  const intl = useIntl();

  return (
    <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
      <div
        id="kt_toolbar_container"
        className="container-xxl d-flex flex-stack flex-wrap p-0"
      >
        <div className="page-title d-flex flex-column me-3">
          <h1 className="d-flex text-white fw-bolder my-1 fs-3">
            {intl.formatMessage({
              id: isNewFeasibilityStudy
                  ? "NewFeasibilityStudy"
                  : type == NewFeasibilityStudyToolbarLinkType.ProjectBrochure
                      ? "ProjectBrochure"
                      : "ProjectDetails"
            })}
          </h1>
          <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
            <li className="breadcrumb-item text-white opacity-75">
              <Link
                to={"/home-workspace"}
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
                to={"/pmo-workspace"}
                className="text-white text-hover-primary"
              >
                {intl.formatMessage({ id: "Workspace" })}
              </Link>
            </li>
            {!isNewFeasibilityStudy && (
              <>
                <li className="breadcrumb-item">
                  <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                </li>
                <li className="breadcrumb-item text-white opacity-75">
                  <Link
                    to={"/pmo-new-feasibility-study"}
                    className="text-white text-hover-primary"
                  >
                    {intl.formatMessage({ id: "FeasibilityStudy" })}
                  </Link>
                </li>

                {type == NewFeasibilityStudyToolbarLinkType.ProjectBrochure && (
                  <>
                    <li className="breadcrumb-item">
                      <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                    </li>
                    <li className="breadcrumb-item text-white opacity-75">
                      <div
                        /* data-bs-toggle="modal" data-bs-target="#ShowLetter" */ className="text-white text-hover-primary"
                      >
                        {intl.formatMessage({ id: title || type })}
                      </div>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
        {isNewFeasibilityStudy && (
          <div className="d-flex align-items-center py-3">
            <Link
              to={"/pmo-new-feasibility-study/project-information"}
              className="btn btn-bg-white btn-active-color-primary py-lg-3 py-sm-1 px-2"
            >
              {intl.formatMessage({ id: "AddFeasibilityStudy" })}
            </Link>
          </div>
        )}
      </div>

      {/* <div className="modal fade letter-show mt-10" id="ShowLetter" tabIndex={-1} aria-hidden="true" style={{ paddingRight: "0px" }}>
        <PDFViewer path='/media/pdf/test.pdf' />
      </div> */}
    </div>
  );
};
