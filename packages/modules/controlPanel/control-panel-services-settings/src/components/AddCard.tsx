import { FC } from "react";
import { useIntl } from "react-intl";
import { ViewAllcardsCardContent } from "./CardContent";
import { ViewAllcardsAddCardContent } from "./AddCardContent";
import { GetWorkSpaceByIdResponse } from "../Shared/models/VM/GetWorkSpaceByIdResponse";

const ViewAllcardsAddCard: FC = () => {
  const intl = useIntl();
  return (
    <>
      <div className="row gy-5">
        <div className="col-md-4">
          <ViewAllcardsCardContent subSystemSetting={new GetWorkSpaceByIdResponse()}/>
        </div>
        <div className="col-md-8">
          <ViewAllcardsAddCardContent />
        </div>
      </div>
    </>
  );
};

export { ViewAllcardsAddCard };
