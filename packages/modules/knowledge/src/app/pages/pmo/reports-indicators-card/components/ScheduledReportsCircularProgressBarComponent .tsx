import * as React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';

const ScheduledReportsCircularProgressBarComponent  = () => {
  const percentage = 77;

  return (
    <React.Fragment>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </React.Fragment>
  );
};

export default ScheduledReportsCircularProgressBarComponent ;
