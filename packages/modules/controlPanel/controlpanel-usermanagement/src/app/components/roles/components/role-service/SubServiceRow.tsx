import { RoleServicesActions } from "../RoleServicesActions";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import React, { FC, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import {
  LK_NoteTypesDto,
  WorkspaceTreeModel,
} from "../../../../models/role-workspace-permision/WorkspaceTreeModel";
import { useIntl } from "react-intl";

// ... other imports

interface SubServiceRowProps {
  subService: WorkspaceTreeModel;
  index: number;
  // parentService: any;
  roleId: string;
}

const SubServiceRow: React.FC<SubServiceRowProps> = ({
  subService,
  index,
  roleId,
  // parentService,
}) => {
  const [rowsState, setRowsState] = useState<boolean[]>([]);
  const intl = useIntl();

  const handleExpandRow = (currentIndex: number) => {
    rowsState[currentIndex] = !rowsState[currentIndex];
    setRowsState([...rowsState]);
  };

  return (
    <>
      <tr key={index} className="align-middle">
        <td className="" onClick={() => handleExpandRow(index)}>
          {rowsState[index] ? (
            <IoIosArrowDown size={22} className="text-muted cursor-pointer" />
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
                  subService.color == 0
                    ? `danger`
                    : subService.color == 1
                    ? `success`
                    : subService.color == 2
                    ? `warning`
                    : ``
                }`}
              >
                <span
                  className={`svg-icon svg-icon-4x svg-icon-${
                    subService.color == 0
                      ? `danger`
                      : subService.color == 1
                      ? `success`
                      : subService.color == 2
                      ? `warning`
                      : ``
                  }`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(subService.icon as string),
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
                  ? subService.noteNameAr
                  : subService.noteNameEn}
              </span>
              <span className="text-gray-600">
                {/* وصف الكارت, وصف الكارت, وصف الكارت, */}
                {subService.description}
              </span>
            </div>
          </div>
        </td>
        <td className="text-center">
          {" "}
          {intl?.locale.toLowerCase() == "ar"
            ? subService.lkNoteTypes?.nameAr
            : subService.lkNoteTypes?.nameEn}
        </td>
        {/* <td className="text-center">{subService.system}</td> */}
        <td className="p-5">
          <RoleServicesActions
            WorkSpaceId={subService.id}
            workSpaceKey={subService.workSpaceKey}
            RoleId={roleId}
          />
        </td>
      </tr>

      {rowsState[index] &&
        subService?.workspaceTreeDtos.length > 0 &&
        subService?.workspaceTreeDtos?.map(
          (nestedService: any, nestedIndex: number) => (
            <SubServiceRow
              key={nestedIndex}
              subService={nestedService}
              index={nestedIndex}
              roleId={roleId}
              // parentService={subService}
            />
          )
        )}
    </>
  );
};

export default SubServiceRow;
