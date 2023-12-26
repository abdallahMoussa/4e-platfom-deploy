import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { AddRatingPopup } from "./../../../partials/AddRatingPopup";

type ActionProps = {
  id: Number;
};

export const Actions: FC<ActionProps> = ({ id }) => {
  const [modalRShow, setModalRShow] = useState<boolean>(false);
  const intl = useIntl();

  return (
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
          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-150px py-3"
          data-kt-menu="true"
        >
          <div className="menu-item px-3">
            <Link
              to="#"
              className="menu-link px-3 text-dark text-hover-primary"
              //   data-bs-toggle="modal"
              //   data-bs-target="#Rega_modal_add_rating"
              onClick={() => setModalRShow(true)}
            >
              <i className="fa-sharp fa-solid fa-plus mx-2"></i>
              {intl.formatMessage({ id: "AddReview" })}
            </Link>
          </div>

          <div className="menu-item px-3">
            <Link
              to="#"
              className="menu-link px-3 text-dark text-hover-primary"
            >
              <i className="fa-solid fa-file-arrow-down mx-2"></i>
              {intl.formatMessage({ id: "DownloadAttachment" })}
            </Link>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_add_rating" aria-hidden="true">
        <AddRatingPopup
          show={modalRShow}
          handleClose={() => setModalRShow(false)}
        />
      </div>
    </div>
  );
};
