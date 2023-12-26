import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import { useIntl } from "react-intl";

interface Iprop {
  cardInfo: {
    title: string;
    subtitle: string;
    status: string;
    beginningDate: string;
    endDate: string;
  };
}
const Card: React.FC<Iprop> = (props) => {
    const intl = useIntl();

  let { title, subtitle, status, beginningDate, endDate } = props.cardInfo;
  return (
    <Fragment>
      <Col md={4}>
        <div
          className={`card shadow py-4 px-2`}
          style={{ backgroundColor: "#F7F7F7A6" }}
        >
          <div className="d-flex align-items-center justify-content-between px-2">
            <div className="cardHeader w-50">
              <p className="h-50 fw-bolder text-primary">{title}</p>
              <p className="subtitle h-50">{subtitle}</p>
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "40%" }}
            >
              <div
                className={` w-50 h-50 d-flex  align-items-center justify-content-center  min-w-100px ${
                  status ==intl.formatMessage({ id: "Latest" })

                    ? "badgex badge-light-danger"
                    : status == intl.formatMessage({ id: "Underway" })
                    ? "badgex badge-light-warning"
                    : " badgex badge-light-success"
                }`}
              >
                {status}
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between px-2">
            <div
              style={{ width: "40%"}}
              className="px-2 pt-3 border border-1"
            >
              <p className="text-muted">{ intl.formatMessage({ id: "StageStartDate" })}</p>
              <p className="fw-bold">{beginningDate}</p>
            </div>
            <div
              style={{ width: "40%"}}
              className="px-2 pt-3 border border-1"
            >
              <p className="text-muted">{ intl.formatMessage({ id: "StageEndDate" })}</p>
              <p className="fw-bold">{endDate}</p>
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default Card;
