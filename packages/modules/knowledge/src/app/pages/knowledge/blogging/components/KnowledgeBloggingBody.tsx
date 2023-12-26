import React, { FC } from "react";
import { KnowledgeBloggingTextArea } from "./KnowledgeBloggingTextArea";
import { KnowledgeBloggingCard } from "./KnowledgeBloggingCard";
import { useIntl } from "react-intl";

const KnowledgeBloggingBody: FC = () => {
  const intl = useIntl();

  return (
    <div>
      <div className="card card-custom card-stretch gutter-b">
        <div className="card-body">
          <KnowledgeBloggingTextArea />
        </div>
      </div>
      <div className="card card-custom card-stretch gutter-b mt-5">
        <div className="card-body">
          <KnowledgeBloggingCard />
          <KnowledgeBloggingCard />
        </div>
      </div>
      <div className="d-flex justify-content-center my-4 py-1">
        <div className="btn btn-outline-primary border border-primary bg-white w-250px">{intl.formatMessage({ id: "MorePosts" })}</div>
      </div>
    </div>
  );
};

export { KnowledgeBloggingBody };
