import React, { FC } from "react";
import { useIntl } from "react-intl";

type AgreementToolbarProps = {
  isEditPage?: boolean;
};

export const AddEditServiceLevelAgreementToolbar: FC<AgreementToolbarProps> = ({
  isEditPage,
}) => {
  const intl = useIntl();

  let title = isEditPage ? (
    <bdi>{intl.formatMessage({ id: "EditAgreement" })}</bdi>
  ) : (
    <bdi>{intl.formatMessage({ id: "AddNewAgreement" })}</bdi>
  );
  return (
    <>
      <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl p-0 d-flex flex-stack flex-wrap"
        >
          <div className="page-title d-flex flex-column me-3">
            <h1 className="d-flex text-white fw-bolder my-1 fs-3">{title}</h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
              <li className="breadcrumb-item text-white opacity-75">
                <a
                  href="/home-workspace"
                  className="text-white text-hover-primary"
                >
                  {intl.formatMessage({ id: "Home" })}
                </a>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-white opacity-75">
                <a
                  href="/pmo-workspace"
                  className="text-white text-hover-primary"
                >
                  {intl.formatMessage({ id: "Workspace" })}
                </a>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-white opacity-75">
                <a
                  href="/service-level-agreement"
                  className="text-white text-hover-primary"
                >
                  {intl.formatMessage({ id: "ServiceLevelAgreement" })}
                </a>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-white opacity-75">{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
