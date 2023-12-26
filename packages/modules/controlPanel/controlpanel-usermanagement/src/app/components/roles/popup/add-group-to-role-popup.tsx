import { ChangeEvent, FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import Swal from "sweetalert2";
import { RootState } from "../../../features/store";
import { UsersNotInRoleModel } from "../../../models/role-user/users-not-in-role-model";
//import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AddUsersToRoleModel } from "../../../models/role-user/add-user-to-role-model";
import { Modal } from "react-bootstrap";
import { AddGroupToRole, fetchGroupNotRole } from "../../../features/role-group/roleGroup";
import { RoleNotGroup } from "../../../models/role-group/group-not-in-role-mode";
import { AddGroupsToRoleModel } from "../../../models/role-group/add-group-to-role-model";

type AddGroupToRolePopupProps = {
  handleClose: () => void;
  id: string;
};

const AddGroupToRolePopup: FC<AddGroupToRolePopupProps> = ({
  handleClose,
  id,
}) => {
  const intl = useIntl();

  const showAlert = (messageAddFail:boolean,text:string) => {
    //dispatch(restMassge());

    Swal.fire({
      text: text,
      icon: messageAddFail ? "error" : "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: `btn ${messageAddFail ? "btn-danger" : "btn-primary"}`,
      },
    }).then((result) => {
      if (!messageAddFail && result.isConfirmed) {
      
          handleClose();
        
      }
    });;
  
    
  };
  

  const [recordsTableData, setRecordsTableData] = useState<
  RoleNotGroup[]
  >([]);
  const [checkedUserIds, setCheckedUserIds] = useState<string[]>([]);
  function handleSelectRecord(input: RoleNotGroup) {
    const newCheckedUserIds = checkedUserIds.includes(input.groupId)
      ? checkedUserIds.filter((id) => id !== input.groupId)
      : [...checkedUserIds, input.groupId];

    setCheckedUserIds(newCheckedUserIds);
  }

  let GroupNOInRole = useSelector((state: RootState) => {
    return state?.groupRole;
  });

  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();
  const handleSearchChangePramas = (fieldName: string, value: string) => {
    setSearchParams((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };
  const handleResetSearch = () => {
    // setSearch("");
    handleSearchChangePramas("search", "");
  };
  const handleReset = () => {
    handleResetSearch();
    setRecordsTableData([]);
    setCheckedUserIds([]);
  };
  function selectAllRecord(e: ChangeEvent<HTMLInputElement>) {
    let isChecked = e.target.checked;
    let items: RoleNotGroup[] = recordsTableData.map(
      (item: RoleNotGroup): RoleNotGroup => {
        item.isChecked = isChecked;
        return item;
      }
    );
    setRecordsTableData(items);
  }
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false);
  const submit = () => {
    var result = recordsTableData?.filter((x) => x.isChecked == true);
    var groupIds = result.map((group) => group.groupId);
    if(groupIds?.length > 0) {
    let data: AddGroupsToRoleModel = {
      roleId: id,
      groupsIds: groupIds,
    };
   dispatch(AddGroupToRole(data) as any).then((result:any) => {
    if(result.payload.statusEnum===4){
      showAlert(true,result.payload.message);
    }
    else  {
      showAlert(false,result.payload.message);
    }
  }).catch((err:any) => {
  });
}
else {
  showAlert(true,'يجب اختيار مجموعه ')
}
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
      search: searchParams.get("search"),
    };
    //let id: string = "4f30c792-e771-4710-3bf9-08dbf0c0d963";

    dispatch(fetchGroupNotRole({ id, params }) as any);
  }, [searchParams.get("search")]);

  useEffect(() => {
    const updatedRecords = recordsTableData.map((user) => ({
      ...user,
      isChecked: checkedUserIds.includes(user.groupId),
    }));

    setRecordsTableData(updatedRecords);
  }, [checkedUserIds, recordsTableData]);

  useEffect(() => {
    // if (UserNOInRole?.UserNoInRoles?.data?.length > 0) {
    setRecordsTableData(GroupNOInRole.GroupNotInRole.data);
    // }
  }, [GroupNOInRole]);
  useEffect(() => {
    // Cleanup when the component is unmounted
    return () => {
      handleReset();
    };
  }, []);

  return (
    <div
      className="modal  fade  show"
      role="dialog"
      style={{ paddingRight: "10px", display: "block" }}
    >
      <div className="modal-dialog modal-xl" style={{ width: "80%" }}>
        <Modal
          centered
          show
          onHide={() => {
            handleClose();
            handleResetSearch();
          }}
          size="xl"
        >
          <Modal.Header
            closeButton
            style={{
              alignItems: intl.locale == "ar" ? "flex-start" : "center",
              flexDirection: intl.locale == "en" ? "column-reverse" : "row",
            }}
          >
            <Modal.Title></Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="fw-bolder  pb-8">
              <h1 className="mb-3 text-center ">
                {intl.formatMessage({ id: "AddUser" })}
              </h1>
            </div>

            <div className="mb-10">
              <div className="py-3">
                <div className="position-relative w-100 ms-md-0">
                  <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                    {/* <KTSVG path="/media/icons/duotune/general/gen065.svg" /> */}
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-solid ps-10"
                    name="search"
                    onChange={(e) =>
                      handleSearchChangePramas("search", e.target.value)
                    }
                    placeholder={intl.formatMessage({
                      id: "TypeYourSearchHere",
                    })}
                  />
                </div>
              </div>
              <div className="table-responsive fs-6 ">
                <table className="table table-borderless align-middle">
                  <thead className="p-2 text-center fw-bolder border">
                    <tr>
                      <td className="p-2">
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
                          id: "Name",
                        })}
                      </td>
                    </tr>
                  </thead>
                  <tbody className="p-4  text-center border">
                    {recordsTableData?.map((group) => (
                      <tr key={group.groupId} className="text-center fw-lighter">
                        <td className="p-2">
                          <div className="form-check form-check-success form-check-lg form-check-custom form-check-solid form-check-md d-flex align-items-center text-center justify-content-center">
                            <input
                              className="form-check-input widget-9-check xCheckBg"
                              type="checkbox"
                              defaultValue={0}
                              name={group.groupName}
                              checked={group?.isChecked}
                              onClick={() => handleSelectRecord(group)}
                            />
                          </div>
                        </td>
                        <td className="d-flex  py-4">
                          <div className="d-flex">
                            <div className="symbol symbol-45px symbol-circle ms-2">
                              <img
                                alt="Pic"
                                src={`https://ncvc.4explain.net:7152/${group?.imageUrl}`}
                              />
                            </div>
                            <div>
                              <div className="fs-5 fw-bolder mb-2 d-flex justify-content-start">
                                {group?.groupName}
                              </div>
                              <div className="fw-bold text-muted">
                                {group?.description}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-center mt-5">
                  <button
                    type="reset"
                    onClick={() => {
                      handleClose();
                    }}
                    aria-hidden="true"
                    className="btn btn-secondary px-15 me-5"
                  >
                    {intl.formatMessage({ id: "Cancel" })}
                  </button>
                  <button
                    onClick={() => {
                      submit();
                    }}
                    className="btn btn-success px-15 ms-5"
                  >
                    {intl.formatMessage({ id: "Add" })}
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default AddGroupToRolePopup;
