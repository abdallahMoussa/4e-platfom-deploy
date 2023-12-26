import { FC } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

const UserManagementPermissionsToolbar: FC = () => {
  const intl = useIntl();
  return (
    <>
      <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl d-flex flex-stack flex-wrap p-0"
        >
          <div className="page-title d-flex flex-column me-3">
            <h1 className="d-flex text-white fw-bolder my-1 fs-3">
              {intl.formatMessage({id: "PermissionsList"})}
            </h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-3">
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
                  to="/admin-panel-workspace"
                  className="text-white text-hover-primary"
                >
                  {intl.formatMessage({ id: "Workspace" })}
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-white opacity-75">
                <Link
                  to="/admin-panel-users-workspace"
                  className="text-white text-hover-primary"
                >
                  {intl.formatMessage({ id: "UsersManagement" })}
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-white opacity-75">
                <span className="text-white">
                  {intl.formatMessage({ id: "UsersPermissions" })}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { UserManagementPermissionsToolbar };