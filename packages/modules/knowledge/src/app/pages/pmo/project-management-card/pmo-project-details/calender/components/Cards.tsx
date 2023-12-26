import React, { Fragment } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
const Cards: React.FC = () => {
  let intl = useIntl();
  let cardsInfo = [
    {
      title: intl.formatMessage({ id: "WebsiteDevelopment" }),
      subtitle: intl.formatMessage({ id: "InterfaceDesignStage" }),
      status: intl.formatMessage({ id: "Latest" }),
      beginningDate: "12 مارس 2023",
      endDate: "14 ابريل,2023",
    },
    {
      title: intl.formatMessage({ id: "DataReview" }),
      subtitle: intl.formatMessage({ id: "InterfaceDesignStage"}),
      status: intl.formatMessage({ id: "Underway" }),
      beginningDate: "12 مارس 2023",
      endDate: "14 ابريل,2023",
    },
    {
      title: intl.formatMessage({ id: "IconsDevelopment" }),
      subtitle: intl.formatMessage({ id:  "InterfaceDesignStage" }),
      status: intl.formatMessage({ id: "Completed" }),
      beginningDate: "12 مارس 2023",
      endDate: "14 ابريل,2023",
    },
  ];
  return (
    <Fragment>
      <Row className="mb-5">
        {cardsInfo.map((cardInfo) => {
          return (
            <Fragment key={Math.random()}>
              <Card cardInfo={cardInfo} />
            </Fragment>
          );
        })}
      </Row>
    </Fragment>
  );
};

export default Cards;
