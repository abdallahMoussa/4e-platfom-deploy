import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ViewAllcardsCardActions } from "./CardActions";
import { TurnOffPopup } from "../partials/TurnOffPopup";
import { TurnOnPopup } from "../partials/TurnOnPopup";
import { SystemsAndServicesActions } from "./SystemsAndServicesActions";
import { SubsystemModel } from "../models/subsystemsModel";
import moment from "moment";

interface Iprop {
  cardInfo:SubsystemModel
  searchTerm:string
}

const SystemsAndservicesTableRowInformation: FC<Iprop> = ({ cardInfo,searchTerm }) => {
  const [isTurndeOn, setIsTurndeOn] = useState(false);
  const [showTurnOffModel, setShowTurnOffModel] = useState<boolean>(false);

  return (
    <tr>
      <td className="">
        <Link to={`/systems-services-settings/admin-panel-viewallcards/${cardInfo?.id}`}>
        <div className="d-flex mx-10">
          <div className="symbol symbol-50px mb-2 toolsIcon">
            <span className={"svg-icon svg-icon-4x svg-icon"} dangerouslySetInnerHTML={{ __html:cardInfo?.icon}}></span>
          </div>
          {/* {cardInfo?.icon} */}
          <div className="d-flex flex-column mx-3">
            <span>
            {localStorage.getItem("i18nextLng") === "en" ? cardInfo?.noteNameEn: cardInfo?.noteNameAr}
            </span>
          </div>
        </div>
        </Link>
      </td>
      <td className="text-center">{moment(cardInfo?.createdOn).format("YYYY-MM-DD")}</td>
      <td className="text-center">{cardInfo?.numberOfServices}</td>

      <td className="text-center">
        <SystemsAndServicesActions id={cardInfo.id} searchTerm={searchTerm}/>
      </td>
      {isTurndeOn ? (
        <div className="modal fade" aria-hidden="true">
          <TurnOffPopup show={showTurnOffModel} handleClose={() => setShowTurnOffModel(false)} />
        </div>
      ) : (
        <div className="modal fade" aria-hidden="true">
          <TurnOnPopup show={showTurnOffModel} handleClose={() => setShowTurnOffModel(false)} />
        </div>
      )}
    </tr>
  );
};

export { SystemsAndservicesTableRowInformation };
