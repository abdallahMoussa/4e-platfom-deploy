import React, { FC, useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import AddServicesAndToolsToRole from "../../popup/add-services-and-tools-to-role";
import { RoleServicesActions } from "../RoleServicesActions";
import { DeletePopup } from "../../../domain-components/popups/DeletePopup";
import { RootState } from "../../../../features/store";
import { fetchWorkspaceTreePermision } from "../../../../features/role-workspace-permision/RoleWorkspacePermisionSlice";
import { WorkspaceTreeModel } from "../../../../models/role-workspace-permision/WorkspaceTreeModel";
import SubServiceRow from "./SubServiceRow";
import DOMPurify from "dompurify";
import { useSearchParams } from "react-router-dom";

interface Props {
  roleId: string;
}

const RoleServicesAndToolsTable: FC<Props> = ({ roleId }) => {
  const intl = useIntl();
  let roleWorkspacePermision = useSelector((state: RootState) => {
    return state?.roleWorkspacePermision.WorkspaceTree.data;
  });
  const dispatch = useDispatch();

  //const [serviceData, setServiceData] =useState<roleServicesAndTools[]>(roleServicesAndTools);

  const [showDeleteModel, setShowDeleteModel] = useState<boolean>(false);

  const [rowsState, setRowsState] = useState<boolean[]>([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const handleSearchChangePramas = (fieldName: string, value: string) => {
    setSearchParams((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };
  useEffect(() => {
    // debugger;
    const prams = {
      RoleId: roleId,
      SearchTerm: searchParams.get("SearchTerm"),
    };
    dispatch(fetchWorkspaceTreePermision({ params: prams }) as any)
      .then((result: any) => {})
      .catch((err: any) => {});
  }, [searchParams.get("SearchTerm")]);

  const handleExpandRow = (index: number) => {
    rowsState[index] = !rowsState[index];
    setRowsState([...rowsState]);
  };

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
                        handleSearchChangePramas("SearchTerm", e.target.value)
                      }
                      placeholder={intl.formatMessage({
                        id: "TypeYourSearchHere",
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className="table-responsive fs-6 mt-2">
                <table className="table text-center table-borderless align-middle mt-5">
                  <thead className="p-4 text-center fw-bolder border">
                    <tr className="fw-bolder text-muted">
                      <th className="min-w-250px text-center" colSpan={2}>
                        {intl.formatMessage({ id: "CardName" })}
                      </th>
                      <th className="min-w-130px text-center">
                        {intl.formatMessage({ id: "Category" })}
                      </th>
                      {/* <th className="min-w-130px text-center">
                        {intl.formatMessage({ id: "System" })}
                      </th> */}

                      <th className="min-w-130px text-center pe-2">
                        {intl.formatMessage({ id: "Actions" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="p-4 text-center border">
                    {roleWorkspacePermision?.map(
                      (service: WorkspaceTreeModel, index: number) => (
                        <>
                          <tr key={index} className="align-middle ">
                            <td
                              className=""
                              onClick={() => handleExpandRow(index)}
                            >
                              {rowsState[index] ? (
                                <IoIosArrowDown
                                  size={22}
                                  className="text-muted cursor-pointer"
                                />
                              ) : (
                                <IoIosArrowBack
                                  size={22}
                                  className="text-muted cursor-pointer"
                                  // style={{ transform: getCurrentSystemLanguage() == "ar" ? "" : "scale(-1)" }}
                                />
                              )}
                            </td>
                            <td>
                              <div className="d-flex justify-content-start align-items-center">
                                <div className="symbol symbol-50px mb-2 toolsIcon">
                                  <span
                                    className={`symbol-label ${
                                      service.color == 0
                                        ? `danger`
                                        : service.color == 1
                                        ? `success`
                                        : service.color == 2
                                        ? `warning`
                                        : ``
                                    }`}
                                  >
                                    <span
                                      className={`svg-icon svg-icon-4x svg-icon-${
                                        service.color == 0
                                          ? `danger`
                                          : service.color == 1
                                          ? `success`
                                          : service.color == 2
                                          ? `warning`
                                          : ``
                                      }`}
                                    >
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: DOMPurify.sanitize(
                                            service.icon as string
                                          ),
                                        }}
                                      />
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column align-items-start mx-3">
                                  <span
                                  // className={`text-${service.iconTextColor}`}
                                  >
                                    {intl?.locale.toLowerCase() == "ar"
                                      ? service.noteNameAr
                                      : service.noteNameEn}
                                  </span>
                                  <span className="text-gray-600">
                                    {/* وصف الكارت, وصف الكارت, وصف الكارت, */}
                                    {service.description}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">
                              {intl?.locale.toLowerCase() == "ar"
                                ? service.lkNoteTypes?.nameAr
                                : service.lkNoteTypes?.nameEn}
                            </td>
                            {/* <td className="text-center">{service.system}</td> */}

                            <td className="p-5">
                              <RoleServicesActions
                                WorkSpaceId={service.id}
                                workSpaceKey={service.workSpaceKey}
                                RoleId={roleId}
                              />
                            </td>
                          </tr>
                          {rowsState[index] &&
                            service?.workspaceTreeDtos.length > 0 &&
                            service?.workspaceTreeDtos?.map(
                              (subService: any, subIndex: number) => (
                                <SubServiceRow
                                  key={subIndex}
                                  subService={subService}
                                  index={subIndex}
                                  roleId={roleId}
                                  // parentService={service}
                                />
                              )
                            )}
                        </>
                      )
                    )}
                  </tbody>
                </table>
                {/* <SystemPagination /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddServicesAndToolsToRole />

      {/* <div className="modal fade" id="Rega_modal_Delete" aria-hidden="true">
        <DeletePopup
          showDelete={showDeleteModel}
          handleCloseDelete={() => setShowDeleteModel(false)}
        />
      </div> */}
    </>
  );
};

export default RoleServicesAndToolsTable;
