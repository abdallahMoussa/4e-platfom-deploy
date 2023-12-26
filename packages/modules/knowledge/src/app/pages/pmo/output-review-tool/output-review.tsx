import { FC } from "react";
import { OutputReviewToolbar } from "./toolbar/OutputReviewToolbar";
import OutputReviewTable from "./components/output-review-table";
import { RightToolbar } from "../../pmo/partials/RightToolbar";

const OutputReview: FC = () => {
  return (
    <>
      <OutputReviewToolbar />
      <OutputReviewTable />
      <RightToolbar />
    </>
  );
};

export default OutputReview;
