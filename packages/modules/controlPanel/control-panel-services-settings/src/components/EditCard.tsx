import { FC, useEffect } from "react";
import { useIntl } from "react-intl";
import { ViewAllcardsCardContent } from "./CardContent";
import { ViewAllcardsEditCardContent } from "./EditCardContent";
import { useDispatch, useSelector} from "react-redux";
import { fetchWorkSpace } from "../slices/SubsytemSettingsSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../store/workspaceStore";

const ViewAllcardsEditCard: FC = () => {
  const intl = useIntl();

  let workspace=useSelector((state:RootState)=>{return state?.SubsytemSettingsAggregator})
  const dispatch = useDispatch();
 let {id}=useParams();

  useEffect(()=>{
     dispatch(fetchWorkSpace(id) as any);
 },[id]);


  return (
    <>
      <div className="row gy-5">
        <div className="col-md-4">
          <ViewAllcardsCardContent subSystemSetting={workspace.data} />
        </div>
        <div className="col-md-8">
          <ViewAllcardsEditCardContent subSystemSetting={workspace.data} />
        </div>
      </div>
    </>
  );
};

export { ViewAllcardsEditCard };
