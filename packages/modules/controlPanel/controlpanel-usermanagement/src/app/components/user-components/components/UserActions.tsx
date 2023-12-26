import { FC, useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { ChangePasswordPopup } from "../popups/change-password-popup";
import { DeleteUserPopup } from "../popups/DeleteUserPopup";

type ActionProps = {
  id: number | string | Number;
  detailsLink?: string;
};

export const UserActions: FC<ActionProps> = ({ id, detailsLink = "#" }) => {
  const intl = useIntl();
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const [showChangePasswordPopup, setChangePasswordPopup] = useState(false);
  const handleCloseChangePasswordPopup = () => setChangePasswordPopup(false);
  const handleShowChangePasswordPopup = () => setChangePasswordPopup(true);
  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          split
          variant="none"
          className=" p-0 text-center"
          id="dropdown-custom-2"
        >
          <i className="bi bi-three-dots fs-2" style={{ color: "#7e8299" }}></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="button">
            <Link to={detailsLink} className="menu-link px-3 text-dark">
              <i className="fa-solid fa-eye mx-2"></i>
              {intl.formatMessage({ id: "Show" })}
            </Link>
          </Dropdown.Item>

          <Dropdown.Item as="button">
            <Link
              to=""
              className="menu-link px-3 text-info"
              onClick={handleShowChangePasswordPopup}
            >
              <span className="svg-icon svg-icon-3 ms-2">
                <i className="bi bi-lock-fill fs-4"></i>
              </span>
              {intl.formatMessage({ id: "ChangePassword" })}
            </Link>
          </Dropdown.Item>

          <Dropdown.Item as="button">
            <a
              onClick={() => setShowDelete(true)}
              className="menu-link px-3 text-danger"
            >
              {/* <span className="svg-icon svg-icon-3 mx-2">
                <KTSVG path="/media/icons/duotune/general/gen088.svg" />
              </span> */}
              {intl.formatMessage({ id: "Delete" })}
            </a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {showChangePasswordPopup ? (
        <>
          {" "}
          <div className="modal fade" aria-hidden="true">
            <ChangePasswordPopup
              handleCloseChangePasswordPopup={() => setChangePasswordPopup(false)}
              showChangePasswordPopup={showChangePasswordPopup}
              id={id}
            />
          </div>
        </>
      ) : (
        <></>
      )}

      {showDelete ? (
        <>
          <div className="modal fade" aria-hidden="true">
            <DeleteUserPopup
              handleCloseDelete={handleCloseDelete}
              showDelete={showDelete}
              id={id}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
