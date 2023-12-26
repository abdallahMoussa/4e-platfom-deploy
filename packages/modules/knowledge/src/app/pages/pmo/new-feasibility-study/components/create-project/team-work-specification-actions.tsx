import React, { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { DeletePopup } from "../../../../partials/DeletePopup";
import { KTSVG, toAbsoluteUrl } from "../../../../../helpers";
import { EditTeamWorkSpecificationPopup } from "../popup/edit-team-work-specification-popup";

type ActionProps = {
  data: any;
  handleEdit: (data) => void;
};

export const TeamWorkSpecificationActions: FC<ActionProps> = ({
  data,
  handleEdit,
}) => {
  const intl = useIntl();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalDShow, setModalDShow] = useState<boolean>(false);

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
                //  data-bs-toggle="modal"
                //  data-bs-target={`#Rega_modal_edit_team_work_specification${data.id}`}
                onClick={() => setModalShow(true)}
                className="menu-link px-3 text-primary"
              >
                <span className="svg-icon svg-icon-3 mx-2">
                  <KTSVG path="/media/icons/duotune/general/gen087.svg" />
                </span>
                {intl.formatMessage({ id: "Edit" })}
              </a>
            </div>

            <div className="menu-item px-3">
              <a
                className="menu-link px-3 text-danger"
                //  data-bs-toggle="modal"
                //  data-bs-target="#Rega_modal_Delete"
                onClick={(event) => {
                  event.preventDefault();
                  setModalDShow(true);
                }}
              >
                <span className="svg-icon svg-icon-3 mx-2">
                  <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                </span>
                {intl.formatMessage({ id: "Delete" })}
              </a>
            </div>
          </div>
        </div>
        <div className="modal fade" id="Rega_modal_Delete" aria-hidden="true">
          <DeletePopup
            handleCloseDelete={() => setModalDShow(false)}
            showDelete={modalDShow}
          />
        </div>
      </div>

      <div
        className="modal fade creatForm"
        id={`Rega_modal_edit_team_work_specification${data.id}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <EditTeamWorkSpecificationPopup
          data={data}
          handleEdit={handleEdit}
          show={modalShow}
          handleClose={() => setModalShow(false)}
        />
      </div>
    </>
  );
};
