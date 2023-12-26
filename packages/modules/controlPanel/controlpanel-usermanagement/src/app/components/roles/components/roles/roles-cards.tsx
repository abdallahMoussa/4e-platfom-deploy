import { FC, useEffect, useState } from "react";
import UserRoleCard from "./role-card";
import { useIntl } from "react-intl";
import AddUserRolePopup from "../../popup/add-user-role-popup";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../../../features/store";
import { fetchRoles } from "../../../../features/role/rolesSlice";
import { role } from "../../../../models/role/role-model";
const UserRoles: FC = () => {
  const [isShowAdd, setShowAdd] = useState<boolean>(false);
  const intl = useIntl();


  let [searchParams, setSearchParams] = useSearchParams();

  let roles = useSelector((state: RootState) => {
    return state?.roles;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchParams.get("pageNumber")) {
      searchParams.set("pageNumber", "1");
      setSearchParams(searchParams);
    }

    if (!searchParams.get("pageSize")) {
      searchParams.set("pageSize", "10");
      setSearchParams(searchParams);
    }

    let params: any = {
      pageSize: searchParams.get("pageSize"),
      pageNumber: searchParams.get("pageNumber"),
    };

    dispatch(fetchRoles(params) as any);

  }, [searchParams.get("pageSize"), searchParams.get("pageNumber")]);



  
  return (
    <div className="row g-10">
      {roles?.data.data.map((item :role, index) => (
        <div className="col-lg-4">
          <UserRoleCard role={item} key={index} />
        </div>
      ))}
      <div
        className="col-lg-4"
        onClick={() => {
          setShowAdd(true);
        }}
      >
        <div className="card shadow-sm p-4 rounded pb-1 cursor-pointer h-100 cursor-pointer">
          <div className="card-body d-flex justify-content-center flex-column align-items-center h-100">
            <i className="fa-solid fa-plus icon-size-lg text-muted "></i>
            <p className="text-muted fs-5 fw-bolder">
              {intl.formatMessage({ id: "AddNewRole" })}
            </p>
          </div>
        </div>
      </div>
      {isShowAdd ? (
        <AddUserRolePopup
          cancelFun={() => {
            setShowAdd(false);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default UserRoles;
