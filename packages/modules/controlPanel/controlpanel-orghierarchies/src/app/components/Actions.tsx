import { FC } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../helpers";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

type ActionProps = {
  id: number;
};

export const Actions: FC<ActionProps> = ({ id }) => {
  const intl = useIntl();
  let navigate = useNavigate();

  return (
    <>
      <div className="card-toolbar text-center">
        <div className="me-n3">
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              size="sm"
              className="btn-icon btn-light"
            >
              <i className="bi bi-three-dots fs-2"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold  py-3"
              style={{ width: "fit-content" }}
            >
              <Dropdown.Item
                className="menu-link fs-6 px-3 text-primary"
                onClick={() => {
                  navigate(`/admin-panel-users/details/${id}`);
                }}
              >
                <span className="svg-icon svg-icon-3 me-2">
                  <KTSVG path="/media/icons/duotune/general/gen087.svg" />
                </span>{" "}
                {intl.formatMessage({ id: "Edit" })}
              </Dropdown.Item>
              <Dropdown.Item className="menu-link fs-6 px-3">
                <span className="svg-icon svg-icon-3 me-2">
                  <KTSVG path="/media/icons/duotune/general/gen073.svg" />
                </span>{" "}
                {intl.formatMessage({ id: "FormerManagers" })}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};
