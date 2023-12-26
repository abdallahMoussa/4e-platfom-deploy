import React, { Fragment } from "react";
import TrackRequestsToolToolbar from "./toolbar/TrackRequestsToolToolbar";
import TrackRequestsTool from "./components/TrackRequestsTool";
import { RightToolbar } from "../../pmo/partials/RightToolbar";
export function PmotrackRequestsTool() {
  return (
    <Fragment>
      <TrackRequestsToolToolbar />
      <TrackRequestsTool />
      <RightToolbar />
    </Fragment>
  );
}
