import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { DeletePopup } from "../partials/DeletePopup";
import { KTSVG } from "../helpers";
import { StopPopup } from "../partials/StopPopup";
import { useDispatch } from "react-redux";
import { deleteSubSystems } from "../slices/removeSubsystemSlice";
import {putWorkspaceActivation} from "../slices/putWorkspaceActivation";
import { Dropdown, Modal } from 'react-bootstrap';
import { getWorkSpaceComponentById } from "../slices/workspaceAggregatorSlice";
import { TurnOffPopup } from "../partials/TurnOffPopup";
import { TurnOnPopup } from "../partials/TurnOnPopup";

type ActionProps = {
  id: string;
  routeId:string;
  searchTerm:string;
  isActive:boolean;
};

export const ViewAllcardsCardActions: FC<ActionProps> = ({ id,routeId,searchTerm,isActive }) => {
  
  const intl = useIntl();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => {
    setShowDelete(true);
  };
  const [showStop, setShowStop] = useState(false);
  const handleCloseStop = () => setShowStop(false);
  const handleShowStop = () => setShowTurnOffModel(true);
  const [showTurnOffModel, setShowTurnOffModel] = useState<boolean>(false);

  const handelDelete=(id:string)=>{
    dispatch(deleteSubSystems(id) as any);
    setTimeout(() => {
      dispatch(getWorkSpaceComponentById({id:routeId, searchTerm }) as any);
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
          <Dropdown.Toggle variant="light" className="btn btn-sm btn-icon btn-light">
            <i className="bi bi-three-dots fs-2"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-100px py-3">
            <Dropdown.Item as={Link} to={`/systems-services-settings/edit-card/${id}`} className="menu-link px-1 text-primary">
              <span className="svg-icon svg-icon-3 mx-2">
                <KTSVG path="/media/icons/duotune/general/gen087.svg" />
              </span>{" "}
              {intl.formatMessage({ id: "Edit" })}
            </Dropdown.Item>

            <Dropdown.Item className="menu-link px-1 text-danger" onClick={handleShowDelete}>
              <span className="svg-icon svg-icon-3 mx-2">
                <KTSVG path="/media/icons/duotune/general/gen088.svg" />
              </span>{" "}
              {intl.formatMessage({ id: "Delete" })}
            </Dropdown.Item>

            <Dropdown.Item onClick={handleShowStop} className="menu-link px-1 text-gray">
              <i className="fa-solid fa-ban fa-fw mx-2"></i>
              {isActive ? (
                <span>{intl.formatMessage({ id: "Stop" })}</span>
              ) : (
                <span>{intl.formatMessage({ id: "TurnOn" })}</span>
              )}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>

      <div className="modal fade" aria-hidden="true">
        <DeletePopup
          handleCloseDelete={handleCloseDelete} id={id}
          showDelete={showDelete} handleDelete={handelDelete}
        />
      </div>
      {isActive ? (
        <div className="modal fade" aria-hidden="true">
          <TurnOffPopup show={showTurnOffModel} handleClose={() => setShowTurnOffModel(false)} id={id} handelstop={handelstop} />
        </div>
      ) : (
        <div className="modal fade" aria-hidden="true">
          <TurnOnPopup show={showTurnOffModel} handleClose={() => setShowTurnOffModel(false)} id={id} handelstop={handelstop}/>
        </div>
      )}
      {/* <div className="modal fade">
        <StopPopup handleCloseStop={handleCloseStop} showStop={showStop} id={id} handelstop={handelstop} />
      </div> */}
      

    </>
  );
};
