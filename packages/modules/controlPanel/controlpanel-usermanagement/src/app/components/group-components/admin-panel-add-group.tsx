import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
//import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Link } from "react-router-dom";
import { AddNewItemToolbar } from "../user-components/popups/AddNewItemToolbar";
import { AddPopup } from "../user-components/popups/AddPopup";
// import { AddPopup } from "../../partials/AddPopup";
// import { AddNewItemToolbar } from "./toolbar/AddNewItemToolbar";
// import { RightToolbar } from "../partials/RightToolbar";

export const AdminPanelAddGroup: FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const intl = useIntl();

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "احمد محمد عبدالله خالد",
      title: "الاداره المالية",
      avatar: "blank.png",
      isChecked: true,
      isDisabled: true,
    },
    {
      id: 2,
      name: "احمد محمد عبدالله خالد",
      title: "الاداره المالية",
      avatar: "blank.png",
      isChecked: false,
      isDisabled: false,
    },
    {
      id: 3,
      name: "احمد محمد عبدالله خالد",
      title: "الاداره المالية",
      avatar: "blank.png",
      isChecked: true,
      isDisabled: false,
    },
    {
      id: 4,
      name: "احمد محمد عبدالله خالد",
      title: "الاداره المالية",
      avatar: "blank.png",
      isChecked: false,
      isDisabled: false,
    },
    {
      id: 5,
      name: "احمد محمد عبدالله خالد",
      title: "الاداره المالية",
      avatar: "blank.png",
      isChecked: true,
      isDisabled: false,
    },
  ]);

  const handleChange = () => {
    setUsers([...users]);
  };

  const [userItems, setUserItems] = useState([1, 2, 3, 4, 5]);

  const handleItemClick = (item:any) => {
    const updatedItems = userItems.filter((i) => i !== item);
    setUserItems(updatedItems);
  };

  return (
    <>
      <AddNewItemToolbar
        title="AddGroup"
        prevTabTitle="Groups"
        prevTabLink="/admin-panel-users-workspace/admin-panel-users/groups"
      />
      {/* <RightToolbar /> */}

      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div
            className="flex-lg-row-fluid"
            data-select2-id="select2-data-129-tmo1"
          >
            <div className="card mb-5 mb-xl-8 pt-5">
              <div>
                <div className="card-header px-1 pb-2 mb-5 mt-5 px-2 px-3">
                  <p className="card-title align-items-start flex-column px-5 pb-5">
                    <span className="card-label fw-bolder fs-3 mb-2 ">
                      <bdi>
                        {intl.formatMessage({
                          id: "AddNewGroup",
                        })}
                      </bdi>
                    </span>
                    <span className="mt-1 fw-semibold fs-5 text-muted">
                      {intl.formatMessage({
                        id: "PleaseEnterTheData",
                      })}
                    </span>
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="row d-flex align-items-center">
                  <div className="col-12 col-lg-1 col-md-1 col-sm-1">
                    <label
                      className="position-relative"
                      role="button"
                      htmlFor="image_file"
                    >
                      <i className="bi bi-file-earmark-image fa-4x text-muted"></i>
                      <i
                        className="bi bi-plus fa-2x bg-white text-success rounded-pill shadow-sm px-1 position-absolute bottom-0"
                        style={{ right: "25px" }}
                      ></i>
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image_file"
                      className="d-none"
                    />
                  </div>
                  <div className="col-12 col-lg-11 col-md-11 col-sm-11">
                    <div className="row">
                      <div className="col-12 col-md-4 col-lg-4">
                        <div className="mb-2 pt-2 pb-3 ">
                          <label className="form-label px-2  fs-6 text-gray-700 required">
                            {intl.formatMessage({
                              id: "GroupName",
                            })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="special fas fa-users"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({
                                id: "GroupName",
                              })}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4">
                        <div className="mb-2 pt-2 pb-3 ">
                          <label className="form-label px-2  fs-6 text-gray-700 required">
                            {intl.formatMessage({
                              id: "GroupManagementName",
                            })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="special fas fa-layer-group"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({
                                id: "ManagementName",
                              })}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4">
                        <div className="mb-2 pt-2 pb-3 ">
                          <label className="form-label px-2  fs-6 text-gray-700 required">
                            {intl.formatMessage({
                              id: "GroupManagerName",
                            })}
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="special fas fa-users-cog"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={intl.formatMessage({
                                id: "ManagerName",
                              })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label className="form-label px-2  fs-6 text-gray-700 required">
                        {intl.formatMessage({
                          id: "RoleName",
                        })}
                      </label>
                      <select
                        id="RoleName"
                        className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                        data-kt-select2="true"
                        data-placeholder={intl.formatMessage({ id: "Choose" })}
                        data-dropdown-parent="#kt_menu_62775e8642438"
                        data-allow-clear="true"
                        data-select2-id="select2-data-4-vqtd"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option disabled selected>
                          {intl.formatMessage({ id: "Choose" })}
                        </option>
                        <option value="1">Role Name 1</option>
                        <option value="2">Role Name 2</option>
                        <option value="3">Role Name 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label className="form-label px-2  fs-6 text-gray-700 required">
                        {`${intl.formatMessage({
                          id: "Description",
                        })} - ${intl.formatMessage({
                          id: "CreatingGroupPurpose",
                        })}`}
                      </label>
                      <textarea
                        className="form-control form-control-lg form-control-solid mb-3 mb-lg-2 min-h-100px"
                        placeholder={intl.formatMessage({
                          id: "PermissionsAndCreatingPurpose",
                        })}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label
                        className="form-label px-2  fs-6 text-gray-700 d-flex align-items-center"
                        role="button"
                      >
                        <i className="bi bi-plus fa-2x fw-bolder text-success border-dashed border-2 border-success px-2 rounded-3"></i>
                        <span className="mx-3">
                          {intl.formatMessage({
                            id: "AddPeopleToGroup",
                          })}
                        </span>
                      </label>
                      <div className="border border-1 rounded-3">
                        <div>
                          <div className="position-relative w-md-600px mt-5 mx-auto">
                            <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                              {/* <KTSVG path="/media/icons/duotune/general/gen065.svg" /> */}
                            </span>
                            <input
                              type="text"
                              className="form-control form-control-solid ps-10"
                              name="search"
                              value=""
                              placeholder={intl.formatMessage({
                                id: "TypeYourSearchHere",
                              })}
                            />
                          </div>
                          <div className="my-8 text-center">
                            <div className="symbol position-relative  symbol-circle symbol-35px">
                              {userItems.map((item) => (
                                <span
                                  key={item}
                                  className="position-relative symbol position-relative symbol-circle symbol-35px"
                                >
                                  <img
                                    alt="Pic"
                                    className="mx-4"
                                    // src={toAbsoluteUrl(
                                    //   `/media/avatars/blank.png`
                                    // )}
                                    src={''}
                                  />
                                  <span
                                    className="position-absolute bg-danger rounded-pill w-15px h-15px d-flex justify-content-center align-items-center"
                                    style={{
                                      right: "8px",
                                      bottom: "-5px",
                                    }}
                                    onClick={() => handleItemClick(item)}
                                    role="button"
                                  >
                                    <i className="bi bi-x text-light fa-md"></i>
                                  </span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="border-top border-1 h-200px overflow-auto px-8">
                          {users.map((user) => (
                            <div className="d-flex justify-content-between my-8">
                              <div className="d-flex align-items-center">
                                <div className="symbol position-relative  symbol-circle symbol-35px">
                                  <img
                                    alt="Pic"
                                    className="mx-4"
                                    // src={toAbsoluteUrl(
                                    //   `/media/avatars/${user.avatar}`
                                    // )}
                                    src=""
                                  />
                                </div>

                                <div>
                                  <p className="mb-0">{user.name}</p>
                                  <p className="mb-0 text-muted fw-lighter">
                                    {user.title}
                                  </p>
                                </div>
                              </div>
                              <div className="form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                                <input
                                  className="form-check-input widget-9-check xCheckBg"
                                  type="checkbox"
                                  defaultValue={0}
                                  name="getMyToolsList"
                                  checked={user.isChecked}
                                  disabled={user.isDisabled}
                                  onChange={() => {
                                    user.isChecked = !user.isChecked;
                                    handleChange();
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 text-center pb-5">
                  <Link
                    className="btn btn-secondary m-3 px-5 py-3"
                    style={{ width: "125px" }}
                    to="/admin-panel-users/users"
                  >
                    {intl.formatMessage({
                      id: "Cancel",
                    })}
                  </Link>

                  <button
                    className="btn btn-success m-3 px-5 py-3"
                    style={{ width: "125px" }}
                    // data-bs-toggle="modal"
                    // data-bs-target="#Rega_modal_add"
                    onClick={() => setModalShow(true)}
                  >
                    {intl.formatMessage({
                      id: "Add",
                    })}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
    </>
  );
};
