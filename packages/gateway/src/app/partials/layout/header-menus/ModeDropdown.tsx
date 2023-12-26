/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";

const ModeDropdown: FC = () => {
  const [darkMode, setDarkMode] = useState<any>(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("Theme") == "dark" ? true : false);
  }, []);

  useEffect(() => {
    if (!darkMode) {
      import(`../../../../app/assets/sass/style${!darkMode ? "" : "dark"}.scss`)
        .then(() => {
          localStorage.setItem("Theme", "light");
        })
        .catch((error) => {
          console.error("Error importing SCSS:", error);
        });
    } else {
      import(`../../../../app/assets/sass/style.${darkMode ? "dark" : ""}.scss`)
        .then(() => {
          localStorage.setItem("Theme", "dark");
        })
        .catch((error) => {
          console.error("Error importing SCSS:", error);
        });
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(true);
  };

  const handleLightMode = () => {
    setDarkMode(false);
    window.location.reload();
  };

  const intl = useIntl();

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3 my-1">
        <div
          className="menu-link px-3"
          onClick={() => {
            // setIsDarkMode(false);
            handleLightMode();
          }}
        >
          <span className="menu-icon">
            <KTSVG path="/media/icons/duotune/general/gen062.svg" />
          </span>
          <span className="menu-title">
            {intl.formatMessage({ id: "Light" })}
          </span>
        </div>
      </div>
      <div className="menu-item px-3 my-1">
        <div
          className="menu-link px-3"
          onClick={() => {
            // setIsDarkMode(true);
            handleDarkMode();
          }}
        >
          <span className="menu-icon">
            <KTSVG path="/media/icons/duotune/general/gen063.svg" />
          </span>
          <span className="menu-title">
            {intl.formatMessage({ id: "Dark" })}
          </span>
        </div>
      </div>
    </div>
  );
};

export { ModeDropdown };
