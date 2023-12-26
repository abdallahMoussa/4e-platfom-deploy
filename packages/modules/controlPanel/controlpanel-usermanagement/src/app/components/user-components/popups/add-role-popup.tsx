import React, { ChangeEvent, FC, useEffect } from "react";
import { useIntl } from "react-intl";
//import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import Swal from "sweetalert2";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { useParams } from "react-router-dom";
import { addRoleToUser } from "../../../features/users-slice/addRoleToUser";
import { fetchUserRoles } from "../../../features/users-slice/userRolesSlice";

type rolesTableDataType = {
  id: number;
  name: string;
  isChecked: boolean;
  isDisable: boolean;
  code: number;
  role: string;
  onChange: (input: rolesTableDataType) => void;
};

type AddRolePopupProps = {
  showAddRole?: any;
  handleCloseAddRole?: any;
};

export const AddRolePopup: FC<AddRolePopupProps> = ({
  showAddRole,
  handleCloseAddRole,
}) => {
  const intl = useIntl();
  let { id } = useParams();
  let dispatch = useDispatch();
  let [selectedRoleIds, setSelectedRoleIds] = useState<any>([]);
  let [message, setMessage] = useState<string>("");

  let roles = useSelector((state: RootState) => {
    return state?.roles?.data;
  });

  console.log("roles", roles);

  // const [rolesTableData, setRolesTableData] = useState<any>([
  //   {
  //     id: 1,
  //     isChecked: false,
  //     isDisable: true,
  //     name: "1",
  //     code: 1,
  //     role: "مدير مكتب المشروعات",
  //     onChange: handleSelectRecord,
  //   },
  //   {
  //     id: 2,
  //     isChecked: false,
  //     isDisable: false,
  //     name: "2",
  //     code: 2,
  //     role: "اخصائي المشروعات",
  //     onChange: handleSelectRecord,
  //   },
  //   {
  //     id: 3,
  //     isChecked: false,
  //     isDisable: true,
  //     name: "3",
  //     code: 3,
  //     role: "مدير النظام",
  //     onChange: handleSelectRecord,
  //   },
  // ]);
  let [rolesTableData, setRolesTableData] = useState<any>([]);

  useEffect(() => {
    setRolesTableData(
      roles?.data?.map((role) => {
        return {
          id: role?.id,
          isChecked: false,
          isDisable: true,
          name: role?.nameAr,
          code: role?.code,
          role: role?.nameAr,
          onChange: handleSelectRecord,
        };
      })
    );
  }, [roles]);

  // function handleSelectRecord(input: rolesTableDataType) {
  //   input.isChecked = !input.isChecked;
  //   setRolesTableData([...rolesTableData, input]);
  //   if (input.isChecked) {
  //     setSelectedRoleIds((prev: any) => {
  //       return [...prev, input?.id];
  //     });
  //   } else {

  //   }
  // }
  function handleSelectRecord(input: rolesTableDataType) {
    setRolesTableData((prevRolesTableData: any) =>
      prevRolesTableData.map((roleData: rolesTableDataType) =>
        roleData.id === input.id
          ? { ...roleData, isChecked: !roleData.isChecked }
          : roleData
      )
    );

    setSelectedRoleIds((prev: any) => {
      if (input.isChecked) {
        // If checked, remove the id from the array
        return prev.filter((id: any) => id !== input?.id);
      } else {
        // If unchecked, add the id to the array
        return [...prev, input?.id];
      }
    });
  }

  // function selectAllRecord(e: ChangeEvent<HTMLInputElement>) {
  //   let isChecked = e.target.checked;
  //   let items: rolesTableDataType[] = rolesTableData.map(
  //     (item: rolesTableDataType): rolesTableDataType => {
  //       item.isChecked = isChecked;
  //       return item;
  //     }
  //   );
  //   setRolesTableData(items);
  //   if (isChecked) {
  //     setSelectedRoleIds(
  //       roles?.data?.map((role) => {
  //         return role?.id;
  //       })
  //     );
  //   } else {
  //     setSelectedRoleIds([]);
  //   }
  // }
  function selectAllRecord(e: ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;

    setRolesTableData((prevRolesTableData: any) =>
      prevRolesTableData.map((roleData: rolesTableDataType) => ({
        ...roleData,
        isChecked: isChecked,
      }))
    );

    if (isChecked) {
      setSelectedRoleIds(roles?.data?.map((role) => role?.id) || []);
    } else {
      setSelectedRoleIds([]);
    }
  }

  console.log("roles table data", rolesTableData);

  let showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "AddedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };
  console.log("message", message);
  console.log("selected ids", selectedRoleIds);
  let AddHandler = (data: any) => {
    dispatch(addRoleToUser(data) as any).then((res: any) => {
      setMessage(res?.payload?.message);
    });
  };
  useEffect(() => {
    if (message == "userRoleAddedSuccessfully") {
      showSuccessAlert();
      handleCloseAddRole();
      dispatch(
        fetchUserRoles({
          pageSize: 1000,
          pageNumber: 1,
          id,
        }) as any
      ) as any;
    }
    return () => {
      setMessage("");
    };
  }, [message]);
  return (
    <>
      <div className="modal fade" aria-hidden="true">
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showAddRole}
          onHide={handleCloseAddRole}
        >
          <div className="card">
            <Modal.Header
              closeButton
              style={{
                alignItems: intl.locale == "ar" ? "flex-start" : "center",
                flexDirection: intl.locale == "en" ? "column-reverse" : "row",
              }}
            >
              <div className="card-header w-100 px-1 d-flex justify-content-center pb-2  border-bottom-0 mt-10">
                <Modal.Title>
                  <h2 className="card-title flex-column align-items-center py-4">
                    <span className="fw-bolder mb-2 fs-3">
                      {intl.formatMessage({
                        id: "AddRole",
                      })}
                    </span>
                  </h2>
                  <span className="text-muted fw-lighter">
                    {intl.formatMessage({
                      id: "PleaseChooseTheData",
                    })}
                  </span>
                </Modal.Title>
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="card card-xl-stretch mb-xl-0 py-4">
                  <div className="card-body py-3 px-3 mx-8">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="REGA_table_widget_5_tab_1"
                      >
                        <div className="table-responsive fs-6 ">
                          <table className="table table-borderless align-middle mt-5">
                            <thead className="p-4 text-center fw-bolder border">
                              <tr>
                                <td className="p-5">
                                  <div className="form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md d-flex align-items-center text-center justify-content-center">
                                    <input
                                      className="form-check-input widget-9-check xCheckBg"
                                      type="checkbox"
                                      defaultValue={0}
                                      onChange={selectAllRecord}
                                    />
                                  </div>
                                </td>
                                <td className="p-5">
                                  {intl.formatMessage({
                                    id: "Code",
                                  })}
                                </td>
                                <td className="p-5">
                                  {intl.formatMessage({
                                    id: "Role",
                                  })}
                                </td>
                              </tr>
                            </thead>
                            <tbody className="p-4  text-center border">
                              {rolesTableData?.map((data: any) => (
                                <tr
                                  key={data.id}
                                  className="text-center fw-lighter"
                                >
                                  <td className="p-5">
                                    <div className="form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md d-flex align-items-center text-center justify-content-center">
                                      <input
                                        className="form-check-input widget-9-check xCheckBg"
                                        type="checkbox"
                                        defaultValue={0}
                                        name={data.name}
                                        checked={data.isChecked}
                                        onChange={() => data.onChange(data)}
                                      />
                                    </div>
                                  </td>
                                  <td className="p-5">
                                    <bdi>{data.code}</bdi>
                                  </td>
                                  <td className="p-5">{data.role}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-center py-2">
              <div className="mt-8 mb-5 col-12 col-lg-7 mx-auto">
                <div className="text-center">
                  <button
                    type="reset"
                    className="btn btn-light me-3"
                    onClick={handleCloseAddRole}
                  >
                    {intl.formatMessage({ id: "Cancel" })}
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => {
                      AddHandler({ rolesId: selectedRoleIds, userId: id });
                    }}
                  >
                    <span className="indicator-label">
                      {intl.formatMessage({ id: "Add" })}
                    </span>
                    <span className="indicator-progress">
                      {intl.formatMessage({ id: "PleaseWait" })}
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </>
  );
};
