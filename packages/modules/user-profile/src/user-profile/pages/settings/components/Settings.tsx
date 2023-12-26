import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import HomeSettings from "./HomeSettings";
import LanguageAndForm from "./LanguageAndForm";
import QuickAccess from "./QuickAccess";
function Settings() {
  let intl = useIntl();
  return (
    <Fragment>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  mt-4 "
      >
        <div className="content flex-row-fluid" id="kt_content">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <HomeSettings />
            <LanguageAndForm />
            <QuickAccess />
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Settings;
