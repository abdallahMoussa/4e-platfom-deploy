import { ChangeEvent, FC } from "react";
import { useIntl } from "react-intl";
import { Modal, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { RootState } from "../../../features/store";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWorkspacePermissionForRole,
  fetchWorkspaceTreePermision,
  postPermisionRole,
} from "../../../features/role-workspace-permision/RoleWorkspacePermisionSlice";
import React, { useEffect, useState } from "react";
import {
  PermissionModel,
  PermissionModelDto,
} from "../../../models/role-workspace-permision/WorkspacePermissionForRoleModel";
import { useSearchParams } from "react-router-dom";
import { postPermisionRoleMolde } from "../../../models/role-workspace-permision/post-permision-role";

type PopupProps = {
  show: boolean;
  handleClose: any;
  RoleId: string;
  workSpaceKey: number;
  WorkSpaceId: string;
};
export const EditRoleServicePopup: FC<PopupProps> = ({
  show,
  handleClose,
  RoleId,
  WorkSpaceId,
  workSpaceKey,
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

  let roleWorkspacePermision = useSelector((state: RootState) => {
    return state?.roleWorkspacePermision.PermissionForRole;
  });

  const [checkedUserIds, setCheckedUserIds] = useState<string[]>([]);
  const [recordsTableData, setRecordsTableData] = useState<PermissionModel[]>(
    []
  );
  function handleSelectRecord(input: PermissionModel) {
    setRecordsTableData((prevData) =>
      prevData.map((permission) => {
        if (permission.permissionId === input.permissionId) {
          return {
            ...permission,
            isPermissionChecked: !permission.isPermissionChecked,
          };
        }
        return permission;
      })
    );
  }

  function selectAllRecord(e: ChangeEvent<HTMLInputElement>) {
    let isChecked = e.target.checked;
    let items: PermissionModel[] = recordsTableData.map(
      (item: PermissionModel): PermissionModel => {
        item.isPermissionChecked = isChecked;
        return item;
      }
    );
    setRecordsTableData(items);
  }

  let [searchParams, setSearchParams] = useSearchParams();
  const handleSearchChangePramas = (fieldName: string, value: string) => {
    setSearchParams((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("roleWorkspacePermision", roleWorkspacePermision);

    //debugger;
    const prams = {
      RoleId: RoleId,
      WorkSpaceKey: workSpaceKey,
      WorkSpaceId: WorkSpaceId,
      SearchTerm: searchParams.get("SearchTerm"),
    };
    dispatch(fetchWorkspacePermissionForRole({ params: prams }) as any);
  }, [searchParams.get("SearchTerm")]);

  const roleSubmit = () => {
    debugger;
    var result = recordsTableData?.filter((x) => x.isPermissionChecked == true);
    var permissionIds = result.map((peromisin) => peromisin.permissionId);
    const data: postPermisionRoleMolde = {
      roleId: RoleId,
      workSpaceId: WorkSpaceId,
      workSpaceKey: workSpaceKey,
      permissionIds: permissionIds,
    };
    dispatch(postPermisionRole(data) as any)
    .then((result:any) => {
      if(result.payload.statusEnum===1){
      
         showAlert(false,result.payload.message);
      }
      else  {
        console.log("result.payload",result.payload.message)
         showAlert(true,result.payload.message);
      }
    }).catch((err:any) => {
    });;
    // navigate(`/admin-panel-users-workspace/admin-panel-users/roles`);
  };
  useEffect(() => {
    const updatedRecords = recordsTableData.map((user) => ({
      ...user,
      isChecked: checkedUserIds.includes(user.permissionId),
    }));

    setRecordsTableData(updatedRecords);
  }, [checkedUserIds]);

  useEffect(() => {
    setRecordsTableData(
      roleWorkspacePermision.map((permission) => ({
        ...permission,
        // isPermissionChecked:permission.isPermissionChecked,
      }))
    );
  }, [roleWorkspacePermision]);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{
            alignItems: intl.locale === "ar" ? "flex-start" : "center",
            flexDirection: intl.locale === "en" ? "column-reverse" : "row",
          }}
          className="pb-0 border-bottom-0"
        >
          <div className="card-header mt-10 d-flex justify-content-center w-100 px-4 border-bottom-0">
            <Row className="justify-content-center mt-5 mb-10">
              <Modal.Title id="contained-modal-title-vcenter">
                <div className="text-center">
                  <h3> {intl.formatMessage({ id: "EditPermissions" })}</h3>
                </div>
              </Modal.Title>
            </Row>
          </div>
        </Modal.Header>

        <Modal.Body className="pb-0">
          {recordsTableData?.map((permission) => (
            <Row className="mb-5" key={permission?.permissionId}>
              <div className="row gap-3">
                <div className="col-12">
                  <div className="form-check form-check-success form-check-custom form-check-solid d-flex">
                    <input
                      className="form-check-input widget-9-check xCheckBg mx-2"
                      type="checkbox"
                      // id={permission?.permissionId}
                      name={
                        intl?.locale.toLowerCase() == "ar"
                          ? permission.nameAr
                          : permission.nameEn
                      }
                      checked={permission.isPermissionChecked}
                      onClick={() => handleSelectRecord(permission)}
                    />
                    <label>
                      {intl?.locale.toLowerCase() == "ar"
                        ? permission.nameAr
                        : permission.nameEn}
                    </label>
                  </div>
                </div>
              </div>
            </Row>
          ))}
        </Modal.Body>

        <div className="row">
          <div className="col-12 col-lg-7 mx-auto mb-12 mt-5">
            <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
              <Modal.Footer className="w-100 justify-content-center pb-0 pt-2 border-top-0">
                <div className="d-flex justify-content-center align-items-center w-100">
                  <button
                    type="reset"
                    className="btn btn-secondary me-5 w-100"
                    onClick={handleClose}
                  >
                    {intl.formatMessage({ id: "Cancel" })}
                  </button>

                  <button
                    type="submit"
                    onClick={() => {
                      roleSubmit();
                    }}
                    className="btn btn-success me-5 w-100 "
                  >
                    {intl.formatMessage({ id: "Agree" })}
                  </button>
                </div>
              </Modal.Footer>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
