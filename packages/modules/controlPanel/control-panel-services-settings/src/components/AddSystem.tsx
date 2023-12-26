import { FC } from "react";
import { SystemContent } from "./SystemContent";
import { AddSystemContent } from "./AddSystemContent";
import { GetWorkSpaceByIdResponse } from "../Shared/models/VM/GetWorkSpaceByIdResponse";


const AddSystem: FC = () => {


  return (
    <>
      <div className="row gy-5">
        <div className="col-md-4">
          <SystemContent subSystemSetting={new GetWorkSpaceByIdResponse()}/>
        </div>
        <div className="col-md-8">
          <AddSystemContent />
        </div>
      </div>
    </>
  );
};

export { AddSystem };
