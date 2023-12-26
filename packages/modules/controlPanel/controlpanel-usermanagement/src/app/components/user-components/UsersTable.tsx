import React, { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router";
import { ElementStatus } from "../domain-components/ElementStatus";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useSearchParams } from "react-router-dom";
import { fetchUsers } from "../../features/users-slice/usersSlice";
import { UsersModel } from "../../models/users/users";
import moment from "moment";
import { usersRootUrl } from "../../requests";
import { UserActions } from "./components/UserActions";
import { AuthorsSystemPagination } from "../../shared/SystemPagination";

type TableDataTypes = {
  id: Number;
  name: string;
  email: string;
  avatar: string;
  source: string;
  unifiedEntry: boolean;
  hasPermission: boolean;
  lastSignIn: string;
};

type TableHeadersTypes = {
  name: string;
  className: string;
};

export const UsersTable: FC = () => {
  const intl = useIntl();
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let data = useSelector((state: RootState) => {
    return state.users?.data;
  });
  let totalPages = useSelector((state: RootState) => {
    return state.users?.totalPages;
  });
  const usersTableData: TableDataTypes[] = [
    {
      id: 1,
      name: "ايمي حداد",
      email: "emy@kpmg.com",
      avatar: "arab.png",
      source: "نطاق1",
      unifiedEntry: true,
      hasPermission: true,
      lastSignIn: "22 مايو 2023",
    },
    {
      id: 2,
      name: "احمد علي",
      email: "ahmed@kpmg.com",
      avatar: "arab.png",
      source: "نطاق1",
      unifiedEntry: false,
      hasPermission: false,
      lastSignIn: "22 مايو 2023",
    },
    {
      id: 3,
      name: "ايمي حداد",
      email: "emy@kpmg.com",
      avatar: "arab.png",
      source: "نطاق1",
      unifiedEntry: true,
      hasPermission: true,
      lastSignIn: "22 مايو 2023",
    },
    {
      id: 4,
      name: "احمد علي",
      email: "ahmed@kpmg.com",
      avatar: "arab.png",
      source: "نطاق1",
      unifiedEntry: true,
      hasPermission: true,
      lastSignIn: "22 مايو 2023",
    },
    {
      id: 5,
      name: "ايمي حداد",
      email: "emy@kpmg.com",
      avatar: "arab.png",
      source: "نطاق1",
      unifiedEntry: false,
      hasPermission: false,
      lastSignIn: "22 مايو 2023",
    },
    {
      id: 6,
      name: "احمد علي",
      email: "ahmed@kpmg.com",
      avatar: "arab.png",
      source: "نطاق1",
      unifiedEntry: true,
      hasPermission: true,
      lastSignIn: "22 مايو 2023",
    },
    {
      id: 7,
      name: "ايمي حداد",
      email: "emy@kpmg.com",
      avatar: "arab.png",
      source: "نطاق1",
      unifiedEntry: false,
      hasPermission: false,
      lastSignIn: "22 مايو 2023",
    },
    {
      id: 8,
      name: "احمد علي",
      email: "ahmed@kpmg.com",
      avatar: "arab.png",
      source: "نطاق1",
      unifiedEntry: true,
      hasPermission: true,
      lastSignIn: "22 مايو 2023",
    },
    {
      id: 9,
      name: "ايمي حداد",
      email: "emy@kpmg.com",
      avatar: "arab.png",
      source: "نطاق1",
      unifiedEntry: true,
      hasPermission: true,
      lastSignIn: "22 مايو 2023",
    },
    {
      id: 10,
      name: "احمد علي",
      email: "ahmed@kpmg.com",
      avatar: "arab.png",
      source: "نطاق1",
      unifiedEntry: false,
      hasPermission: false,
      lastSignIn: "22 مايو 2023",
    },
  ];
  const usersTableHeader: TableHeadersTypes[] = [
    {
      name: "Username",
      className: "ps-4 min-w-150px",
    },
    {
      name: "Source",
      className: "min-w-150px",
    },
    {
      name: "UnifiedEntry",
      className: "min-w-150px",
    },
    {
      name: "Permission",
      className: "min-w-150px",
    },
    {
      name: "LastSignIn",
      className: "min-w-150px",
    },
    {
      name: "Actions",
      className: "min-w-50px",
    },
  ];

  // const [data, setData] = useState<TableDataTypes[]>(usersTableData);
  const [headers, setHeaders] = useState<TableHeadersTypes[]>(usersTableHeader);
  useEffect(() => {
    if (!searchParams.get("pageNumber")) {
      searchParams.set("pageNumber", "1");
      setSearchParams(searchParams);
    }
    if (!searchParams.get("pageSize")) {
      searchParams.set("pageSize", "10");
      setSearchParams(searchParams);
    }
    // if (!searchParams.get("userName")) {
    //   searchParams.set("userName", "");
    //   setSearchParams(searchParams);
    // }
    // if (!searchParams.get("isNafaz")) {
    //   searchParams.set("isNafaz", "");
    //   setSearchParams(searchParams);
    // }
    // if (!searchParams.get("lastLoginTime")) {
    //   searchParams.set("lastLoginTime", moment().toISOString());
    //   setSearchParams(searchParams);
    // }
    // if (!searchParams.get("isExpired")) {
    //   searchParams.set("isExpired", "");
    //   setSearchParams(searchParams);
    // }
    let params: any = {
      pageSize: searchParams.get("pageSize"),
      pageNumber: searchParams.get("pageNumber"),
      // userName: searchParams.get("userName"),
      // isExpired: searchParams.get("isExpired"),
      // isNafaz: searchParams.get("isNafaz"),
      // lastLoginTime: searchParams.get("lastLoginTime"),
    };
    dispatch(fetchUsers(params) as any);
  }, [
    searchParams.get("pageSize"),
    searchParams.get("pageNumber"),
    // searchParams.get("userName"),
    // searchParams.get("isExpired"),
    // searchParams.get("isNafaz"),
    // searchParams.get("lastLoginTime"),
  ]);
  return (
    <div className="table-responsive">
      <table
        className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
        id="REGA-WS-caseList"
      >
        <thead>
          <tr className="fw-bolder text-muted">
            {headers.map((item, index) => (
              <th key={index} className={item.className}>
                {intl.formatMessage({
                  id: item.name,
                })}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: UsersModel) => (
            <tr key={`${item?.id}`}>
              <td>
                <div>
                  <div className="ms-5 d-flex align-items-center">
                    <div className="symbol position-relative  symbol-circle">
                      <img
                        alt="Pic"
                        src={
                          item?.imageUrl
                            ? `${usersRootUrl}${item?.imageUrl}`
                            : item?.userGender == 0
                            ? "/packages/modules/controlPanel/controlpanel-usermanagement/public/media/arab.png"
                            : "/packages/modules/controlPanel/controlpanel-usermanagement/public/media/woman.jpg"
                        }
                      />
                    </div>
                    <div
                      className="ms-3"
                      onClick={() => {
                        // navigate(`details/${item?.id}`)
                        window.location.href = `/admin-panel-users-workspace/admin-panel-users/details/${item?.id}`;
                      }}
                      role="button"
                    >
                      <p className="h4 fw-bolder mb-1">{item?.userName}</p>
                      <p className="text-muted mb-0 fw-lighter">
                        {item?.email}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className="fw-bolder">
                  {item?.domain ? item?.domain : "--"}
                </span>
              </td>
              <td>
                <ElementStatus
                  text={intl.formatMessage({
                    id: item?.isNafaz ? "Enabled" : "Disabled",
                  })}
                  isActive={item?.isNafaz}
                />
              </td>
              <td>
                <ElementStatus
                  text={intl.formatMessage({
                    id: item?.isExpired ? "Enabled" : "Disabled",
                  })}
                  isActive={item?.isExpired}
                />
              </td>
              <td>
                <span>{moment(item?.lastLoginTime).format("YYYY-MM-DD")}</span>
              </td>
              <td>
                <div>
                  <UserActions
                    id={item.id}
                    detailsLink={`/admin-panel-users-workspace/admin-panel-users/details/${item?.id}`}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data?.length ? (
        <AuthorsSystemPagination
          totalPages={totalPages}
          page={searchParams?.get("pageNumber") as unknown as number}
        />
      ) : (
        <div className="d-flex fw-bolder justify-content-center align-items-center">
          {intl.formatMessage({ id: "No_data_yet" })}
        </div>
      )}
    </div>
  );
};
