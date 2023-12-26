import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ViewAllcardsCardActions } from "./CardActions";
import { TurnOffPopup } from "../partials/TurnOffPopup";
import { TurnOnPopup } from "../partials/TurnOnPopup";
import { WorkspaceComponentModel } from "../models/workspaceComponent-model";
import { putWorkspaceActivation } from "../slices/putWorkspaceActivation";
import { useDispatch } from "react-redux";
import { getWorkSpaceComponentById } from "../slices/workspaceAggregatorSlice";

interface Iprop {
  cardInfo: WorkspaceComponentModel
  id:string
  searchTerm:string
}

const ViewallcardsTableCardRowInformation: FC<Iprop> = ({ cardInfo,id ,searchTerm}) => {
  const [isTurndeOn, setIsTurndeOn] = useState(cardInfo?.isActive);
  const [showTurnOffModel, setShowTurnOffModel] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handelstop=(id:string)=>{
    dispatch(putWorkspaceActivation(id)as any);
  }
  return (
    <tr>
      <td className="">
        <Link to={"/systems-services-settings/admin-panel-viewallcards/card-details"}>
          <div className="d-flex justify-content-center align-items-center">
            <div className="symbol symbol-50px mb-2 toolsIcon">
              <span className={`symbol-label ${cardInfo?.color}`}>
                <span className={`svg-icon svg-icon-4x svg-icon-${cardInfo?.color}`} dangerouslySetInnerHTML={{ __html:cardInfo?.icon}}></span>
              </span>
            </div>
            <div className="d-flex flex-column mx-3">
              <span className={`text-${cardInfo?.color}`}>
                {localStorage.getItem("i18nextLng") === "en" ? cardInfo?.noteNameEn: cardInfo?.noteNameAr}
                </span>
              <span className="text-gray-600">{cardInfo?.description}</span>
            </div>
          </div>
        </Link>
      </td>
      <td className="text-center">
      {localStorage.getItem("i18nextLng") === "en" ? cardInfo?.lkNoteTypes?.nameEn: cardInfo?.lkNoteTypes?.nameAr}
        </td>
      <td className="text-center">            
      {localStorage.getItem("i18nextLng") === "en" ? cardInfo?.orgNameEn: cardInfo?.orgNameAr}
      </td>
      <td className="text-center">
        <span className={`badge ${cardInfo?.color} p-3`}>{ }</span>
      </td>
      <td className="text-center">
        <div className="form-check form-switch form-check-custom form-check-solid d-flex justify-content-center">
          <input
            className="form-check-input"
            type="checkbox"
            id="status"
            name="status"
            onClick={() => {
            
              // setIsTurndeOn(!isTurndeOn);
              // setShowTurnOffModel(true);
              handelstop(cardInfo?.id)
              
            }}
            defaultChecked={isTurndeOn}
          />
        </div>
      </td>
      <td className="text-center">
        <ViewAllcardsCardActions id={cardInfo?.id} routeId={id} searchTerm={searchTerm} isActive={cardInfo?.isActive}/>
      </td>
      {!isTurndeOn ? (
        <div className="modal fade" aria-hidden="true">
          <TurnOffPopup show={showTurnOffModel} handleClose={() => setShowTurnOffModel(false)} id={cardInfo?.id} handelstop={handelstop} />
        </div>
      ) : (
        <div className="modal fade" aria-hidden="true">
          <TurnOnPopup show={showTurnOffModel} handleClose={() => setShowTurnOffModel(false)} id={cardInfo?.id} handelstop={handelstop}/>
        </div>
      )}
    </tr>
  );
};

export { ViewallcardsTableCardRowInformation }; 