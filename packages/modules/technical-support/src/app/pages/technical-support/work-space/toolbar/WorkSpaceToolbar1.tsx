import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

const WorkSpaceToolbar1: FC = () => {
  const intl = useIntl();

  return (
    <>
      <div className="page-title d-flex flex-column me-3">
        <h1 className="d-flex text-white fw-bolder my-1 fs-2">
          {intl.formatMessage({ id: "TechnicalSupportManagementWorkspace" })}
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
            {intl.formatMessage({ id: "Workspace" })}
          </li>
        </ul>
      </div>
    </>
  );
};

export { WorkSpaceToolbar1 };
