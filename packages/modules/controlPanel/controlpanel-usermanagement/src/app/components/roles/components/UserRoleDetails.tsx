import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import RoleGroupsTable from "./RoleGroupsTable";
import RoleServicesAndToolsTable from "./role-service/RoleServicesAndToolsTable";
import RoleUsersTable from "./RoleUsersTable";
//import { UserEventsAndRecords } from "./UserEventAndRecords";
import UserRoleDetailsCard from "./UserRoleDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { fetchDetailsRolesById } from "../../../features/role/rolesSlice";
import { useParams, useNavigate } from "react-router-dom";

type ButtonTypes = {
  id: number;
  name: string;
};

const UserRoleDetails = () => {
  const intl = useIntl();
  const buttons: ButtonTypes[] = [
    {
      id: 1,
      name: intl.formatMessage({
        id: "ServicesAndRoles",
      }),
    },
    {
      id: 2,
      name: intl.formatMessage({
        id: "Users",
      }),
    },
    {
      id: 3,
      name: intl.formatMessage({
        id: "Groups",
      }),
    },
  ];
  let role = useSelector((state: RootState) => {
    return state?.roles;
  });
  const dispatch = useDispatch();
  const parms = useParams();
  const [activeButton, setActiveButton] = useState<ButtonTypes>(buttons[0]);

  const handleButtonClick = (button: ButtonTypes) => {
    setActiveButton(button);
  };

  const ActivatedUserDetailsTab = () => {
    switch (activeButton.id) {
      case 1:
     
        return (
          <RoleServicesAndToolsTable
            roleId={`${parms.id}`}
          />
        );
      case 2:
        let id = `${parms.id}`;
        return (
          <RoleUsersTable
            id={id}
          
          />
        );
      case 3:
        // return <RoleGroupsTable roleGroups={roleStatic?.roleGroups} />;
       
        return <RoleGroupsTable   id={`${parms.id}`} />;
    }
  };

  useEffect(() => {
    let id = `${parms.id}`;
    dispatch(fetchDetailsRolesById({ id }) as any);
  }, []);
  return (
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <UserRoleDetailsCard roleId={`${parms.id}`} />
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-12">
        <div className="w-100 w-100 position-relative">
          <div
            className="mb-5 position-absolute p-4 ms-4"
            style={{ zIndex: 100 }}
          >
            {buttons.map((button) => (
              <button
                key={button.id}
                className={`btn  btn-active-color-primary rounded-0 bg-transparent border-0 p-5 fs-6  fw-bolder  border border-bottom border-white border-2 ${
                  activeButton.id === button.id ? "active text-dark" : ""
                }   px-5`}
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
  );
};

export default UserRoleDetails;
