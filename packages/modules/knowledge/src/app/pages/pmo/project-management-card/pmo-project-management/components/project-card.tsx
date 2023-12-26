import { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../helpers";
import { IconUserModel } from "../../../../../modules/profile/ProfileModels";
import { UsersList } from "../../../../../modules/profile/components/UsersList";

type Props = {
  icon: string;
  badgeColor: string;
  status: string;
  statusColor: string;
  title: string;
  description: string;
  duration: string;
  outgoingValue: string;
  progress: number;
  StartDate: string;
  budget: string;
  users?: Array<IconUserModel>;
};

const ProjectCard: FC<Props> = ({ icon, badgeColor, status, statusColor, title, description, duration, outgoingValue, progress, StartDate, budget, users = undefined }) => {
  const intl = useIntl();
  return (
    <>
      <Link to="/pmo-project-details" className="card border border-2 border-gray-300 border-hover">
        <div className="card-header border-0 pt-9">
          <div className="card-title m-0">
            <div className="symbol symbol-50px w-50px bg-light">
              <img src={toAbsoluteUrl(icon)} alt="card2" className="p-3" />
            </div>
          </div>

          <div className="card-toolbar">
            <span className={`badge badge-light-${badgeColor} fw-bolder me-auto px-4 py-3`}>{status}</span>
          </div>
        </div>

        <div className="d-flex border-0  justify-content-end mx-9">
          <div>
            <span className={`badge badge-light fw-bolder me-auto px-4 py-3`}>
              {intl.formatMessage({ id: "Progress" })} : {progress}%
            </span>
          </div>
        </div>

        <div className="card-body p-9">
          <div className="fs-3 fw-bolder text-dark">{title}</div>

          <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">{description}</p>

          <div className="d-flex flex-wrap mb-5">
            <div className="border border-gray-300 border rounded min-w-125px py-3 px-4 me-7 mb-3">
              <div className="fw-bold text-gray-400 mb-1">{intl.formatMessage({ id: "ProjectDuration" })}</div>
              <div className="fs-6 text-gray-800 fw-bolder">{duration}</div>
            </div>

            <div className="border border-gray-300 border rounded min-w-125px py-3 px-4 mb-3">
              <div className="fw-bold text-gray-400 mb-1">{intl.formatMessage({ id: "OutgoingValue" })}</div>
              <div className="fs-6 text-gray-800 fw-bolder">{outgoingValue}</div>
            </div>
          </div>

          <div className="d-flex flex-wrap mb-5">
            <div className="border border-gray-300 border rounded min-w-125px py-3 px-4 me-7 mb-3">
              <div className="fw-bold text-gray-400 mb-1">{intl.formatMessage({ id: "StartDate" })}</div>
              <div className="fs-6 text-gray-800 fw-bolder">{StartDate}</div>
            </div>

            <div className="border border-gray-300 border rounded min-w-125px py-3 px-4 mb-3">
              <div className="fw-bold text-gray-400">{intl.formatMessage({ id: "ProjectBudget" })}</div>
              <div className="fs-6 text-gray-800 fw-bolder">{budget}</div>
            </div>
          </div>

          <UsersList users={users} />
        </div>
      </Link>
    </>
  );
};

export { ProjectCard };
