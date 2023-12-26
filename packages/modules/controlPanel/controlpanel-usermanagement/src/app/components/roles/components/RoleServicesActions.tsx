import React, { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { ButtonGroup } from "react-bootstrap";
import { DeletePopup } from "../../domain-components/popups/DeletePopup";
import { EditRoleServicePopup } from "../popup/EditRoleServicePopup";


type ActionProps = {
  RoleId:string
  WorkSpaceId:string
  workSpaceKey:number
};

export const RoleServicesActions: FC<ActionProps> = ({RoleId,workSpaceKey,WorkSpaceId }) => {
  const intl = useIntl();
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle split variant="none" className=" p-0 text-center" id="dropdown-custom-2">
          <i className="bi bi-three-dots fs-2" style={{color: "#7e8299"}}></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="button">
            <a
              onClick={() => setShowEdit(true)}
              className="menu-link px-3 text-primary"
            >
              <span className="svg-icon svg-icon-3 mx-2">
                {/* <KTSVG path="/media/icons/duotune/general/gen087.svg" /> */}
              </span>
              {intl.formatMessage({ id: "Edit" })}
            </a>
          </Dropdown.Item>
       
        </Dropdown.Menu>
      </Dropdown>
      {showEdit? 
      <div className="modal fade" aria-hidden="true">
       
        <EditRoleServicePopup
          show={showEdit}
          handleClose={() => setShowEdit(false)}
          WorkSpaceId={WorkSpaceId}
          workSpaceKey={workSpaceKey}
          RoleId={RoleId}
          
        />
      </div>:''}
    </>
  );
};
