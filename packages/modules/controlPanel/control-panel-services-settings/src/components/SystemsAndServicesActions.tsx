import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { DeletePopup } from "../partials/DeletePopup";
import { KTSVG } from "../helpers";
import { StopPopup } from "../partials/StopPopup";
import { deleteSubSystems } from "../slices/removeSubsystemSlice";
import { useDispatch } from "react-redux";
import {putWorkspaceActivation} from "../slices/putWorkspaceActivation";
import { getSubSystems } from "../slices/workspaceSlice";

type ActionProps = {
  id: string;
  searchTerm:string;
};

export const SystemsAndServicesActions: FC<ActionProps> = ({ id ,searchTerm}) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => {
    setShowDelete(true);
  };

  const [showStop, setShowStop] = useState(false);
  const handleCloseStop = () => setShowStop(false);
  const handleShowStop = () => setShowStop(true);

  const handelDelete=(id:string)=>{
    dispatch(deleteSubSystems(id) as any);
    setTimeout(() => {
      dispatch(getSubSystems(searchTerm) as any);
    }, 1000);
    
  }
  const handelstop=(id:string)=>{
    dispatch(putWorkspaceActivation(id)as any);
  }

  return (
    <>
      <div className="card-toolbar text-center">
        <div className="me-n3">
          <Dropdown>
            <Dropdown.Toggle variant="light" size="sm" className="btn-icon btn-light">
              <i className="bi bi-three-dots fs-2"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-100px py-3">
              <Dropdown.Item as={Link} to={`/systems-services-settings/view-system/${id}`} className="menu-link px-1 text-primary">
                <div className="d-flex align-items-center">
                  <span className="svg-icon svg-icon-3 mx-2">
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  {intl.formatMessage({ id: "Show" })}
                </div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`/systems-services-settings/edit-system/${id}`} className="menu-link px-1 text-primary">
                <div className="d-flex align-items-center">
                  <span className="svg-icon svg-icon-3 mx-2">
                    <KTSVG path="/media/icons/duotune/general/gen087.svg" />
                  </span>{" "}
                  {intl.formatMessage({ id: "Edit" })}
                </div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`/systems-services-settings/admin-panel-viewallcards/${id}`} className="menu-link px-1 text-dark">
                <div className="d-flex align-items-center">
                  <span className="svg-icon svg-icon-3 mx-2">
                    <i className="bi bi-info-circle text-dark"></i>
                  </span>{" "}
                  {intl.formatMessage({ id: "Details" })}
                </div>
              </Dropdown.Item>
              <Dropdown.Item className="menu-link px-1 text-danger">
                <a onClick={handleShowDelete}>
                  <div className="d-flex align-items-center">
                    <span className="svg-icon svg-icon-3 mx-2">
                      <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                    </span>{" "}
                    {intl.formatMessage({ id: "Delete" })}
                  </div>
                </a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="modal fade" aria-hidden="true">
        <DeletePopup handleCloseDelete={handleCloseDelete} showDelete={showDelete} id={id} handleDelete={handelDelete} />
      </div>
      <div className="modal fade">
        <StopPopup handleCloseStop={handleCloseStop} showStop={showStop} id={id} handelstop={handelstop}/>
      </div>
    </>
  );
};
