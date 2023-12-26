/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from "react";
import { useAuth } from "../../../../app/modules/auth";
import { Languages } from "./Languages";
import { useIntl } from "react-intl";
import { toAbsoluteUrl } from "../../../helpers";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../providers/user-provider";

type MenuProps = {
  show?: any;
  handleShow?: any;
};
const HeaderUserMenu: FC<MenuProps> = ({ show, handleShow }) => {
  let { logoutUser } = useUser();

  const navigate = useNavigate();
  const intl = useIntl();
  const { currentUser, logout } = useAuth();
  let [active, setActive] = useState(false);
  // const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("Theme")) {
      setActive(false);
    } else {
      setActive(localStorage.getItem("Theme") == "dark" ? true : false);
    }
  }, [localStorage.getItem("Theme")]);
  useEffect(() => {
    if (active) {
      import(`../../../../app/assets/sass/style.${active ? "dark" : ""}.scss`)
        .then(() => {
          localStorage.setItem("Theme", "dark");
          console.log("Dynamic SCSS dark import successful!");
        })
        .catch((error) => {
          console.error("Error importing SCSS:", error);
        });
    } else {
      import(`../../../../app/assets/sass/style${!active ? "" : "dark"}.scss`)
        .then(() => {
          localStorage.setItem("Theme", "light");
          console.log("Dynamic SCSS light import successful!");
        })
        .catch((error) => {
          console.error("Error importing SCSS:", error);
        });
    }
  }, [active]);

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <img alt="Logo" src={toAbsoluteUrl("/media/avatars/300-3.jpg")} />
          </div>

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              {currentUser?.first_name} {currentUser?.last_name}
            </div>
            <a href="#" className="fw-bold text-muted text-hover-primary fs-7">
              {currentUser?.email}
            </a>
          </div>
        </div>
      </div>

      <div className="separator my-2"></div>

      <div className="menu-item px-5">
        <Link to={{ pathname: "/user-profile" }} className="menu-link px-5">
          {intl.formatMessage({ id: "MyProfile" })}
        </Link>
      </div>

      <div className="menu-item px-5">
        <a href="#" className="menu-link px-5">
          <span className="menu-text">
            {" "}
            {intl.formatMessage({ id: "MyRequests" })}
          </span>
          <span className="menu-badge">
            <span className="badge badge-light-danger badge-circle fw-bolder fs-7">
              3
            </span>
          </span>
        </a>
      </div>

      <div className="menu-item px-5">
        <a href="#" className="menu-link px-5">
          {intl.formatMessage({ id: "MyFavourite" })}
        </a>
      </div>

      <div className="separator my-2"></div>

      <Languages />

      <div className="menu-item px-5 my-1">
        <a href="#" className="menu-link px-5">
          {intl.formatMessage({ id: "AccountSettings" })}
        </a>
      </div>
      <div className="menu-item px-3">
        <div className="menu-content px-3">
          <label className="form-check form-switch form-check-custom form-check-solid">
            <input
              className="form-check-input w-30px h-20px"
              type="checkbox"
              value="1"
              defaultChecked={false}
              checked={show}
              name="showList"
              onClick={() => handleShow()}
            />
            <span className="form-check-label text-muted fs-7">
              {intl.formatMessage({ id: "ShowSystemsMenu" })}
            </span>
          </label>
        </div>
      </div>
      {/* <div className="menu-item px-5">
        <a onClick={logout} className="menu-link px-5">
          {intl.formatMessage({ id: "SignOut" })}
        </a>
      </div> */}

      <div className="menu-item px-5">
        <a
          onClick={async () => {
            logoutUser();
            window.location.href = "/auth/login";
            // navigate("/auth/login");
          }}
          className="menu-link px-5"
        >
          {intl.formatMessage({ id: "SignOut" })}
        </a>
      </div>

      {/*<div className="separator my-2"></div>

      {/*<div className="menu-item px-3">*/}
      {/*  <div className="menu-content px-3">*/}
      {/*    <label className="form-check form-switch form-check-custom form-check-solid">*/}
      {/*      <input*/}
      {/*        className="form-check-input w-30px h-20px"*/}
      {/*        type="checkbox"*/}
      {/*        value="1"*/}
      {/*        defaultChecked={false}*/}
      {/*        checked={active}*/}
      {/*        name="nightmode"*/}
      {/*        onClick={() => {*/}
      {/*          setActive(!active);*/}
      {/*        }}*/}
      {/*      />*/}
      {/*      <span className="form-check-label text-muted fs-7">*/}
      {/*        {intl.formatMessage({ id: "NightMode" })}*/}
      {/*      </span>*/}
      {/*    </label>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export { HeaderUserMenu };
