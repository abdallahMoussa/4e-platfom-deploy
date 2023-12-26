import React, { FC } from "react";
import {
   AttachmentTableTypes,
   AttachmentSvgPath,
} from "../pmo-attachments-details";
import { KTSVG } from "../../../../helpers";
import { RatingItems } from "../../../partials/RatingItems";
import { Actions } from "./Actions";
import { WorkParticipantsTooltip } from "./WorkParticipantTooltip";

type AttachmentItemProps = {
   attachment: AttachmentTableTypes;
};

export const AttachmentItem: FC<AttachmentItemProps> = ({
   attachment: { id, name, type, size, owner, participants, date, review },
}) => {
   return (
      <>
         <tr>
            <td>
               <div className="d-flex align-items-center">
                  <div className="ms-5 d-flex align-items-center">
                     <KTSVG
                        path={AttachmentSvgPath[type]}
                        className="svg-icon-2 svg-icon-lg-1"
                     />
                     <div className="mx-3">
                        <span className="text-gray-800 fw-bolder d-block fs-6">
                           {name}
                        </span>
                        <span>{size}</span>
                     </div>
                  </div>
               </div>
            </td>
            <td>
               <span className="text-gray-800 fw-bolder d-block fs-6">
                  {type}
               </span>
            </td>
            <td>
               <span className="text-gray-800 fw-bolder d-block fs-6">
                  {participants?.length == 1 ? (
                     <span>{participants[0]}</span>
                  ) : (
                     <div>
                        <WorkParticipantsTooltip
                           count={participants.length}
                           names={participants}
                        />
                     </div>
                  )}
               </span>
            </td>
            <td>
               <span className="text-gray-800 fw-bolder d-block fs-6">
                  {owner}
               </span>
            </td>
            <td>
               <span className="text-gray-800 fw-bolder d-block fs-6">
                  {date}
               </span>
            </td>
            <td>
               <span className="text-gray-800 fw-bolder d-block fs-6">
                  {RatingItems(review)}
               </span>
            </td>
            <td>
               <div>
                  <Actions id={id} />
               </div>
            </td>
         </tr>
      </>
   );
};
