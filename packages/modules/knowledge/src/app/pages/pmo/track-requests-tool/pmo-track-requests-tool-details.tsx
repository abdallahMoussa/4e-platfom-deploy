import React, { Fragment } from "react";
import TrackRequestsToolDetailsToolbar from "./toolbar/TrackRequestsToolDetailsToolbar";
import TrackRequestsToolDetails from "./components/TrackRequestsToolDetails";
import { RightToolbar } from "../../pmo/partials/RightToolbar";

export function PmotrackRequestsToolDetails() {
  return (
    <Fragment>
      <TrackRequestsToolDetailsToolbar />
      <TrackRequestsToolDetails/>
      <RightToolbar/>
    </Fragment>
  );
}
