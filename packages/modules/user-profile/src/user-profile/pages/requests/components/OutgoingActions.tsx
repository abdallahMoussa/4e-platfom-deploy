import React, { FC } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { DeletePopup } from "../../../../partials/DeletePopup";
import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
type ActionProps = {
  id: Number;
  item: any;
};

export const OutgoingActions: FC<ActionProps> = ({ id, item }) => {
  const intl = useIntl();

  return (
    <>
      <div className="card-toolbar text-center">
        <div>
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
              <Link
                to={`/user-profile/requests/${id}/details`}
                className="menu-link px-3 "
                state={{
                  type: intl.formatMessage({
                    id: "OutgoingRequest",
                  }),
                  item,
                }}
              >
                <i className="fa-solid fa-eye mx-2"></i>
                {intl.formatMessage({ id: "Show" })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
