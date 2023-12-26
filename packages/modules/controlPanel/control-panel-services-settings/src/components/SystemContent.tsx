import { FC } from "react";
import { useIntl } from "react-intl";
import { GetWorkSpaceByIdResponse } from "../Shared/models/VM/GetWorkSpaceByIdResponse";
import moment from "moment";


interface GetSubSystemSettingProp{
  subSystemSetting:GetWorkSpaceByIdResponse;
}

const SystemContent: FC<GetSubSystemSettingProp> = ({subSystemSetting}:GetSubSystemSettingProp) => {
  const intl = useIntl();

  return (
    <div className="card">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-6">
            {" "}
            {subSystemSetting?.orgNameAr}
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">
            {" "}
            {subSystemSetting?.lkNoteTypes?.nameAr}
          </span>
        </h3>
      </div>

      <div className="card-body d-flex flex-center flex-column">
        <div className="symbol symbol-75px mb-2 toolsIcon">
          <span className="symbol-label bg-light-info">
            <span className="svg-icon svg-icon-4x svg-icon-info">
              <i className="bi bi-graph-up-arrow fs-3x"></i>
            </span>
            <span className="top-icon">
              <i className="bi bi-tools"></i>
            </span>
          </span>
        </div>

        <span className="fs-5 text-gray-800 fw-bolder">
          {subSystemSetting?.noteNameAr}
          </span>

        <div className="fw-bold text-gray-400 mb-6">
          {subSystemSetting?.description}
        </div>

        <div className="d-flex flex-center flex-wrap">
          <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
            <div className="fs-7 fw-bolder text-gray-700">
              {moment(subSystemSetting?.lastUpdate).format('YYYY-MM-DD')}
              </div>
            <div className="fw-bold text-gray-400 text-center fs-9">
              {intl.formatMessage({ id: "LastUpdate" })}
            </div>
          </div>

          <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
            <div className="fs-7 fw-bolder text-gray-700">
              {moment(subSystemSetting?.visitDate).format('YYYY-MM-DD')}
              </div>
            <div className="fw-bold text-gray-400 text-center fs-9">
              {intl.formatMessage({ id: "LastVisit" })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SystemContent };

