import { FC, useEffect, useState } from "react";
//import { SystemPagination } from "../../../partials/SystemPagination";
import { useIntl } from "react-intl";
//import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import { RoleUsersActions } from "./RoleUsersActions";
import AddUserToRolePopup from "../popup/add-user-to-role-popup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { useSearchParams } from "react-router-dom";
import { fetchUserRoles } from "../../../features/role-user/roleUserSlice";
import { UserRole } from "../../../models/role-user/role-model-user";
import moment from "moment";
import { boolean } from "yargs";
import { any } from "prop-types";

interface Props {
  id: string;

}
const RoleUsersTable: FC<Props> = ({ id}) => {

  let [showAddUserToRole, setShowAddUserToRole] = useState<boolean>(false);
  
  let role = useSelector((state: RootState) => {
    return state?.roleUser;
  });
  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();
  const handleSearchChange = (fieldName: string, value: string) => {
    setSearchParams((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };
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
      searchText: searchParams.get("searchText"),
    };
    //  let id:string="4f30c792-e771-4710-3bf9-08dbf0c0d963";

    dispatch(fetchUserRoles({ id, params }) as any);
  }, [searchParams.get("searchText")]);
  const intl = useIntl();

  return (
    <>
      <div className="mb-10">
        <div className="card card-xl-stretch mb-xl-0 pb-4 pt-15">
          <div className="d-flex justify-content-between p-4 align-items-center"></div>
          <div className="card-body py-3 px-3 mx-8">
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="REGA_table_widget_5_tab_1"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="position-relative w-50 ">
                    <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                      {/* <KTSVG path="/media/icons/duotune/general/gen065.svg" /> */}
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-solid ps-10"
                      name="search"
                      onChange={(e) =>
                        handleSearchChange("searchText", e.target.value)
                      }
                      placeholder={intl.formatMessage({
                        id: "TypeYourSearchHere",
                      })}
                    />
                  </div>
                  <button
                    className="btn btn-primary "
                    data-bs-toggle="modal"
                    data-bs-target="#Rega_modal_add-user-to-role"
                    onClick={() => {
                      setShowAddUserToRole(true);
                    }}
                  >
                    {intl.formatMessage({
                      id: "AddUser",
                    })}
                  </button>
                </div>
              </div>
              <div className="table-responsive fs-6 mt-2">
                <table className="table text-center table-borderless align-middle mt-5">
                  <thead className="p-4 text-center fw-bolder border">
                    <tr className="fw-bolder text-muted">
                      <th className="fw-bolder pb-3 min-w-50px d-flex justify-contet-end px-20">
                        {" "}
                        {intl.formatMessage({ id: "Name" })}
                      </th>
                      <th className="fw-bolder pb-3 min-w-100px">
                        {intl.formatMessage({ id: "JoiningDate" })}
                      </th>
                      <th className="fw-bolder pb-3 min-w-50px">
                        {" "}
                        {intl.formatMessage({ id: "Actions" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="p-2  text-center border">
                    {role.data?.data.map((user, index: number) => (
                      <tr key={index} className="align-middle ">
                        <td className="d-flex  py-2">
                          <div className="d-flex">
                            <div className="symbol symbol-45px symbol-circle ms-2">
                              <img
                                alt="Pic"
                                src={
                                  `https://ncvc.4explain.net:7152/${user?.imageUrl}`
                                }
                              />
                            </div>
                            <div>
                              <div className="fs-5 fw-bolder mb-2 d-flex justify-content-start">
                                {user?.userName}
                              </div>
                              <div className="fw-bold text-muted">
                                {user?.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="fw-bolder fs-5 ">
                          {moment(user?.createdOn).format("YYYY-MM-DD")}
                        </td>
                        <td>
                          <RoleUsersActions
                            userId={user?.userId}
                            RoleId={id}
                            // refreshPageAfterDeleteFunch={refreshPageAfterDeleteFunch}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <SystemPagination /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddUserToRole? 
      <AddUserToRolePopup id={id}
        handleClose={() => {
          setShowAddUserToRole(false);
        }}
      />:""}
    </>
  );
};

export default RoleUsersTable;
