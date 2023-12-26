import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../helpers";
import { DeletePopup } from "../../../partials/DeletePopup";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup } from "react-bootstrap";
import { EditEscalationLevelPopup } from "../popups/EditEscalationLevelPopup";

interface IAction {
  id?: string | number;
}

export const EscalationLevelActions: FC<IAction> = ({ id }) => {
  const intl = useIntl();
  const [showDelete, setShowDelete] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
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
            <a
              className="menu-link px-3 text-primary"
              onClick={() => {
                setShowEditModal(true);
              }}
            >
              <span className="svg-icon svg-icon-3 mx-2">
                <KTSVG path="/media/icons/duotune/general/gen087.svg" />
              </span>
              {intl.formatMessage({ id: "Edit" })}
            </a>
          </Dropdown.Item>

          <Dropdown.Item as="button">
            <a
              onClick={() => setShowDelete(true)}
              className="menu-link px-3 text-danger"
            >
              <span className="svg-icon svg-icon-3 mx-2">
                <KTSVG path="/media/icons/duotune/general/gen088.svg" />
              </span>
              {intl.formatMessage({ id: "Delete" })}
            </a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="modal fade" aria-hidden="true">
        <DeletePopup
          showDelete={showDelete}
          handleCloseDelete={() => setShowDelete(false)}
        />
      </div>
      <div className="modal fade" aria-hidden="true">
        <EditEscalationLevelPopup
          showEdit={showEditModal}
          handleCloseEdit={() => {
            setShowEditModal(false);
          }}
          id={+id}
        />
      </div>
    </>
  );
};
