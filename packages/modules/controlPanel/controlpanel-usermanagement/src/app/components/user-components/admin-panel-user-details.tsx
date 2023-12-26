import React, { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { UserSummary } from "./UserSummary";
import { UserProtection } from "./UserProtection";
import { UserEventsAndRecords } from "./UserEventAndRecords";
import { UserRolesTab } from "./UserRolesTab";
import { AdminPanelUserDetailsToolbar } from "./toolbars/AdminPanelUserDetailsToolbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/users-slice/userSlice";
import { RootState } from "../../features/store";
import { usersRootUrl } from "../../requests";
import moment from "moment";
import { fetchRoles } from "../../features/role/rolesSlice";

type UserInfoTypes = {
  name: string;
  role: string;
  avatar: string;
  details: {
    title: string;
    value: string;
  }[];
};

type ButtonTypes = {
  id: number;
  name: string;
};

export const AdminPanelUserDetails: FC = () => {
  let { id } = useParams();
  let language = localStorage?.getItem("selectedLang");
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(id as string) as any);
  }, [id]);
  let user = useSelector((state: RootState) => {
    return state?.user?.data;
  });
  console.log("user", user);

  const intl = useIntl();
  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    setUserInfo({
      name: user?.userName,
      
      role: language == "Ar" ?user?.jobNameAr:user?.jobNameEn,
      avatar: user?.imageUrl
        ? `${usersRootUrl}${user?.imageUrl}`
        : user?.userGender == 0
        ? "/packages/modules/controlPanel/controlpanel-usermanagement/public/media/arab.png"
        : "/packages/modules/controlPanel/controlpanel-usermanagement/public/media/woman.jpg",
      details: [
        {
          title: intl.formatMessage({ id: "AccountID" }),
          value: user?.nationalId,
        },
        {
          title: intl.formatMessage({ id: "Email" }),
          value: user?.email,
        },
        {
          title: intl.formatMessage({ id: "Address" }),
          value: user?.address,
        },
        {
          title: intl.formatMessage({ id: "Language" }),
          value: language == "Ar" ? user?.languageAr : user?.languageEn,
        },
        {
          title: intl.formatMessage({ id: "LastSignIn" }),
          value: moment(user?.lastLoginTime).format("YYYY-MM-DD"),
        },
      ],
    });
  }, [user]);
  const buttons: ButtonTypes[] = [
    {
      id: 1,
      name: intl.formatMessage({
        id: "Summary",
      }),
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "Protection" }),
    },
    {
      id: 3,
      name: intl.formatMessage({
        id: "EventsAndRecords",
      }),
    },
    {
      id: 4,
      name: intl.formatMessage({
        id: "Roles",
      }),
    },
  ];

  const [activeButton, setActiveButton] = useState<ButtonTypes>(buttons[0]);

  const handleButtonClick = (button: ButtonTypes) => {
    setActiveButton(button);
  };

  const ActivatedUserDetailsTab = () => {
    switch (activeButton.id) {
      case 1:
        return <UserSummary />;
      case 2:
        return <UserProtection />;
      case 3:
        return <UserEventsAndRecords />;
      case 4:
        return <UserRolesTab />;
    }
  };
  useEffect(() => {
    dispatch(fetchRoles({ pageSize: 1000, pageNumber: 1 }) as any);
  }, []);
  return (
    <>
      <AdminPanelUserDetailsToolbar />
      {/* <RightToolbar /> */}

      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="d-flex flex-column flex-lg-row gap-5">
            <div className="flex-column flex-lg-row-auto w-lg-350px w-100 mb-10 mb-lg-0">
              <div className="card card-xl-stretch mb-xl-3">
                <div className="card-body scroll-y mh-600px">
                  <div>
                    {/* <i
                      className="bi bi-pencil-square d-block text-end fs-2x"
                      role="button"
                    ></i> */}
                    
                    <div className="d-flex flex-column align-items-center mt-5">
                      <img
                        className="w-100px h-100px symbol position-relative symbol-circle"
                        src={userInfo?.avatar}
                      />
                      <span className="fw-bolder">{userInfo?.name}</span>
                      <span className="text-primary">{userInfo?.role}</span>
                    </div>
                    <div>
                      {userInfo?.details?.map((item: any, index: number) => (
                        <div key={index} className="my-4">
                          <p className="fw-bolder mb-1">{item?.title}</p>
                          <span className="text-muted">{item?.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-xl-0 pb-4 w-100 w-lg-850px ms-lg-7 ms-0 position-relative">
              <div
                className="mb-5 p-4 mx-lg-4 mx-md-4 mx-sm-4 mx-0 position-absolute"
                style={{ zIndex: 50 }}
              >
                {buttons.map((button) => (
                  <button
                    key={button.id}
                    className={`btn btn-active-color-primary rounded-0 bg-transparent border-0 p-5 fs-6  fw-bolder  border border-bottom border-white border-2 ${
                      activeButton.id === button.id ? "text-dark active" : ""
                    } px-5`}
                    onClick={() => handleButtonClick(button)}
                  >
                    {intl.formatMessage({
                      id: button.name,
                    })}
                  </button>
                ))}
              </div>
              {ActivatedUserDetailsTab()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
