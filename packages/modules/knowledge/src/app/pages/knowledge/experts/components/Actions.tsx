import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { DeletePopup } from "../../../partials/DeletePopup";
import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import EditExperience from "../popup/edit-expert-experience-popup";

type ActionProps = {
  id: Number;
};

export const Actions: FC<ActionProps> = ({ id }) => {
  const intl = useIntl();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  return (
    <>
      <div className="card-toolbar text-center">
        <div className="me-n3">
          <button
            className="btn btn-sm btn-icon btn-light"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
          >
            <i className="bi bi-three-dots fs-2"></i>
          </button>
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-100px py-3"
            data-kt-menu="true"
          >
            <div className="menu-item px-3">
              <a
                // data-bs-toggle="modal"
                // data-bs-target="#EditExperiencePopup"
                onClick={handleShow}
                className="menu-link px-3 text-primary"
              >
                <span className="svg-icon svg-icon-3 mx-2">
                  <KTSVG path="/media/icons/duotune/general/gen087.svg" />
                </span>{" "}
                {intl.formatMessage({ id: "Edit" })}
              </a>
            </div>

            <div className="menu-item px-3">
              <a
                className="menu-link px-3 text-danger"
                onClick={handleShowDelete}
              >
                <span className="svg-icon svg-icon-3 mx-2">
                  <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                </span>{" "}
                {intl.formatMessage({ id: "Delete" })}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" aria-hidden="true">
        <DeletePopup
          handleCloseDelete={handleCloseDelete}
          showDelete={showDelete}
        />
      </div>
      <div
        className="modal fade"
        id="EditExperiencePopup"
        tabIndex={-1}
        aria-hidden="true"
      >
        <EditExperience handleClose={handleClose} show={show} />
      </div>
    </>
  );
};
