import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  fetchUserRoles,
  removeUserRoleAsync,
} from "../../../features/role-user/roleUserSlice";
import { fetchDetailsRolesById } from "../../../features/role/rolesSlice";
import { DeleteUserRoleModel } from "../../../models/role-user/delete-user-role-model";
import { removeGroupRoleAsync } from "../../../features/role-group/roleGroup";
import { DeleteGroupRoleModel } from "../../../models/role-group/delete-group-role-model";
import Swal from "sweetalert2";

type ActionProps = {
  groupId: string;
  RoleId: string;
  // refreshPageAfterDeleteFunch: () => void;
};

export const RoleGroupsActions: FC<ActionProps> = ({
  groupId,
  RoleId,
  // refreshPageAfterDeleteFunch,
}) => {
  const intl = useIntl();
  const showAlert = (messageAddFail: boolean, text: string) => {
    //dispatch(restMassge());

    Swal.fire({
      text: text,
      icon: messageAddFail ? "error" : "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: `btn ${messageAddFail ? "btn-danger" : "btn-primary"}`,
      },
    }).then((result) => {
      if (!messageAddFail && result.isConfirmed) {
        // setTimeout(() => {
        //  // handleClose();
        // }, 1000);
      }
    });
  };
  const [showDelete, setShowDelete] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    let data: DeleteGroupRoleModel = {
      GroupId: groupId,
      id: RoleId,
    };

    dispatch(removeGroupRoleAsync(data) as any)
      .then((result: any) => {
        if (result.payload.statusEnum === 5) {
          showAlert(true, result.payload.message);
        } else {
          showAlert(false, result.payload.message);
        }
      })
      .catch((err: any) => {});
  };

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
            <Link
              // admin-panel-groups-details
              to={`/admin-panel-users/groups/edit/${groupId}`}
              className="menu-link px-3 text-primary"
            >
              <i className="fa-solid fa-eye mx-2"></i>

              {intl.formatMessage({ id: "Show" })}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <a
              onClick={handleDeleteClick}
              className="menu-link px-3 text-danger"
            >
              <span className="svg-icon svg-icon-3 mx-2">
                {/* <KTSVG path="/media/icons/duotune/general/gen088.svg" /> */}
              </span>
              {intl.formatMessage({ id: "Delete" })}
            </a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="modal fade" aria-hidden="true">
        {/* <DeletePopup id={+id} showDelete={showDelete} handleCloseDelete={() => setShowDelete(false)} /> */}
      </div>
    </>
  );
};
