import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../partials/SystemPagination";
import { AttachmentItem } from "./components/AttachmentItem";
import { PmoAttachmentsToolbar } from "./toolbar/PmoAttachmentsToolbar";
import { RightToolbar } from "../partials/RightToolbar";
import { AddAttachmentsPopup } from "./popup/AddAttachmentsPopup";

type AttachmentTableHeaderTypes = {
  name: string;
  className: string;
};

export type AttachmentTableTypes = {
  id: number;
  name: string;
  type: string;
  size: string;
  participants: string[];
  owner: string;
  date: string;
  review: number;
};

const WORD_ATTACHMENT = "Word";
const EXCEL_ATTACHMENT = "Excel";
const ONE_NOTE_ATTACHMENT = "OneNote";
const POWER_POINT_ATTACHMENT = "PowerPoint";
const PDF_ATTACHMENT = "PDF";
const FOLDER_ATTACHMENT = "Folder";

export const AttachmentSvgPath = {
  [WORD_ATTACHMENT]: "/media/icons/duotune/general/gen089_word.svg",
  [EXCEL_ATTACHMENT]: "/media/icons/duotune/general/gen090_excel.svg",
  [ONE_NOTE_ATTACHMENT]:
    "/media/icons/duotune/general/gen092_microsoft-onenote.svg",
  [POWER_POINT_ATTACHMENT]:
    "/media/icons/duotune/general/gen091_powerpoint.svg",
  [PDF_ATTACHMENT]: "/media/icons/duotune/general/gen094_PDF.svg",
  [FOLDER_ATTACHMENT]: "/media/icons/duotune/general/gen093_folder.svg",
};

export const PmoAttachmentsDetails: FC = () => {
  const [modalAShow, setModalAShow] = useState<boolean>(false);
  const intl = useIntl();

  const [attachments, setAttachments] = useState<AttachmentTableTypes[]>([
    {
      id: 1,
      name: "اسم الملف",
      type: WORD_ATTACHMENT,
      size: "25 ميجابايت",
      participants: ["اسم المشارك 1", "اسم المشارك 2", "اسم المشارك 3"],
      owner: "اسم المالك",
      date: "22 مايو 2023",
      review: 3,
    },
    {
      id: 2,
      name: "اسم الملف",
      type: EXCEL_ATTACHMENT,
      size: "25 ميجابايت",
      participants: ["اسم المشارك 1", "اسم المشارك 2", "اسم المشارك 3"],
      owner: "اسم المالك",
      date: "22 مايو 2023",
      review: 5,
    },
    {
      id: 3,
      name: "اسم الملف",
      type: ONE_NOTE_ATTACHMENT,
      size: "25 ميجابايت",
      participants: ["اسم المشارك 1", "اسم المشارك 2"],
      owner: "اسم المالك",
      date: "22 مايو 2023",
      review: 3,
    },
    {
      id: 4,
      name: "اسم الملف",
      type: POWER_POINT_ATTACHMENT,
      size: "25 ميجابايت",
      participants: ["اسم المشارك 1"],
      owner: "اسم المالك",
      date: "22 مايو 2023",
      review: 5,
    },
    {
      id: 5,
      name: "اسم الملف",
      type: PDF_ATTACHMENT,
      size: "25 ميجابايت",
      participants: ["اسم المشارك 1", "اسم المشارك 2", "اسم المشارك 3"],
      owner: "اسم المالك",
      date: "22 مايو 2023",
      review: 2,
    },
    {
      id: 6,
      name: "اسم الملف",
      type: FOLDER_ATTACHMENT,
      size: "25 ميجابايت",
      participants: ["اسم المشارك 1", "اسم المشارك 2", "اسم المشارك 3"],
      owner: "اسم المالك",
      date: "22 مايو 2023",
      review: 1,
    },
  ]);

  const attachmentsTableHeader: AttachmentTableHeaderTypes[] = [
    {
      name: "FileName",
      className: "ps-4 min-w-150px",
    },
    {
      name: "AttachmentType",
      className: "min-w-150px",
    },
    {
      name: "WorkParticipants",
      className: "min-w-150px",
    },
    {
      name: "AttachmentOwner",
      className: "min-w-150px",
    },
    {
      name: "AttachmentDate",
      className: "min-w-150px",
    },
    {
      name: "Review",
      className: "min-w-150px",
    },
    {
      name: "Actions",
      className: "min-w-50px",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <PmoAttachmentsToolbar />
          <RightToolbar />
        </div>
        <div>
          <a
            onClick={(event) => {
              event.preventDefault();
              setModalAShow(true);
            }}
            className="btn btn-bg-white btn-active-color-primary"
            // data-bs-toggle="modal"
            // data-bs-target="#rega_modal_add_attachments"
          >
            {intl.formatMessage({ id: "AddNewAttachment" })}
          </a>
        </div>
      </div>

      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div
            className="flex-lg-row-fluid"
            data-select2-id="select2-data-129-tmo1"
          >
            <div className="card mb-5 mb-xl-8">
              <div className="card-body py-3">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="all-cases"
                    role="tabpanel"
                  >
                    <div className="table-responsive ">
                      <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                        <thead>
                          <tr className="fw-bolder text-muted">
                            {attachmentsTableHeader.map((header, index) => {
                              return (
                                <th key={index} className={header.className}>
                                  {intl.formatMessage({
                                    id: header.name,
                                  })}
                                </th>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {attachments.map((attachment) => (
                            <AttachmentItem
                              key={attachment.id}
                              attachment={attachment}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <SystemPagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="rega_modal_add_attachments"
        aria-hidden="true"
      >
        <AddAttachmentsPopup
          show={modalAShow}
          handleClose={() => setModalAShow(false)}
        />
      </div>
    </>
  );
};
