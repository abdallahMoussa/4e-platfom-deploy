import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { ClosePopup } from "../../../../partials/ClosePopup";
import { AddPopup } from "../../../../partials/AddPopup";
import { RightToolbar } from "../../../partials/RightToolbar";
import { NewFeasibilityStudySidebar } from "./sidebar/new-feasibility-study-sidebar";
import { NewFeasibilityStudyPopup } from "../popup/new-feasibility-study-popup";
import {
  NewFeasibilityStudyToolbar,
  NewFeasibilityStudyToolbarLinkType,
} from "../../toolbar/NewFeasibilityStudyToolbar";
import { AccessoriesActions } from "./accessories-actions";

export const Accessories: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);

  const intl = useIntl();
  const [getIsDone, setIsDone] = useState<Boolean>(false);

  const [items, setItems] = useState([
    {
      id: 1,
      m: 1,
      attachmentType: "doc",
      attachmentName: "المتطلبات الفنية للمشروع",
      attachmentDuration: "منذ يومين",
    },
    {
      id: 2,
      m: 2,
      attachmentType: "doc",
      attachmentName: "المتطلبات الفنية للمشروع",
      attachmentDuration: "منذ يومين",
    },
    {
      id: 3,
      m: 3,
      attachmentType: "pdf",
      attachmentName: "المتطلبات الفنية للمشروع",
      attachmentDuration: "منذ يومين",
    },
  ]);

  const handleEdit = (updatedItem) => {
    setItems(
      items.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        }
        return item;
      })
    );
  };

  const handelIsDone = () => {
    setIsDone(true);
    setModalShow(true);
  };

  return (
    <>
      <NewFeasibilityStudyToolbar
        isNewFeasibilityStudy={false}
        type={NewFeasibilityStudyToolbarLinkType.ProjectBrochure}
        title="Accessories"
      />
      <RightToolbar />
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl p-0"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="d-flex flex-column flex-lg-row">
            <NewFeasibilityStudySidebar card_number={"16"} page_size={485} />
            <div className="w-100 w-lg-850px w-sm-100 me-lg-5">
              <div className="card card-xl-stretch mb-xl-0">
                <div className="card-header border-1 pt-3 pb-2 d-flex flex-stack flex-wrap">
                  <h3 className="card-title align-items-start d-flex flex-column">
                    <h2 className="text-dark mb-2 fs-3 mt-3">
                      {intl.formatMessage({ id: "Accessories" })}
                    </h2>
                    <span className="text-muted fs-7">
                      {intl.formatMessage({
                        id: "NamesAndImportanceOfAttachedAccessories",
                      })}
                    </span>
                  </h3>
                  <div className="mt-auto mb-auto">
                    <span
                      className="text-muted fs-7"
                      style={{ fontWeight: "bold" }}
                    >
                      {intl.formatMessage({ id: "NumberOfClause" })} :{" "}
                    </span>
                    <div
                      className="btn btn-icon btn-sm btn-light-primary pb-1 me-9"
                      style={{
                        width: "25px",
                        height: "25px",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      2
                    </div>
                  </div>
                </div>
                <div className="card-body py-3 px-3 mx-8">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="REGA_table_widget_5_tab_1"
                    >
                      <form noValidate className="form outputForm">
                        <div className="row">
                          <div className="col-lg-6 mb-2 pt-2 pb-3">
                            <label
                              htmlFor="outputName"
                              className="form-label px-2 fontSz-6"
                            >
                              {intl.formatMessage({ id: "AttachmentName" })}
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="fas fa-paperclip special"></i>
                                </span>
                              </div>
                              <input
                                id="outputName"
                                type="text"
                                className="form-control"
                                placeholder={intl.formatMessage({
                                  id: "AttachmentName",
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-2 pt-2 pb-3 ">
                            <label className="form-label px-2  fontSz-6">
                              {intl.formatMessage({ id: "AddFile" })}
                            </label>
                            <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-1 h-50px">
                              <label
                                htmlFor="outputAttachment"
                                className="form-label  dropzone-select  uploadFile-style inputAreaHeight"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="py-auto ps-3">
                                    <img
                                      style={{ width: "25px" }}
                                      src="/media/pmo/uploadFile.png"
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="row py-auto">
                                    <span className="text-primary fw-bolder">
                                      {intl.formatMessage({
                                        id: "QuickFileUploader",
                                      })}
                                    </span>
                                    <span>
                                      {" "}
                                      {intl.formatMessage({
                                        id: "DragAndDropOrChooseFilesFromComputer",
                                      })}
                                    </span>
                                  </div>
                                </div>
                              </label>
                              <div
                                className="dropzone dropzone-queue "
                                id="kt_dropzonejs_example_3"
                              >
                                <div className="dropzone-panel">
                                  <input
                                    multiple
                                    type="file"
                                    accept="image/*"
                                    id="outputAttachment"
                                    name="attachments"
                                    placeholder={intl.formatMessage({
                                      id: "FileUpload",
                                    })}
                                    className="dropzone-select  uploadFile-style inputAreaHeight d-none"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            // data-bs-toggle="modal"
                            // data-bs-target="#Rega_modal_add"
                            onClick={() => setModalShow(true)}
                            className="col-lg-12 mb-2 mt-12 pb-3"
                          >
                            <i className="w-100 text-center fa-solid fa-plus text-success py-4 px-4 border rounded border-dashed border-success fw-bolder fs-4 border-2">
                              {" "}
                            </i>
                          </div>
                          <div className="col-lg-12 mb-2 mt-12 pb-3">
                            <table className="table table-rounded border table-row-gray-200 align-middle gs-0 gy-4 text-center">
                              <thead>
                                <tr className="text-dark fw-bold fs-6 bg-light">
                                  <th className="px-2 pb-3 min-w-60px max-w-200px">
                                    {intl.formatMessage({ id: "M" })}
                                  </th>
                                  <th className="px-2 pb-3 min-w-60px max-w-350px">
                                    {intl.formatMessage({
                                      id: "AttachmentType",
                                    })}
                                  </th>
                                  <th className="px-2 pb-3 min-w-60px max-w-350px">
                                    {intl.formatMessage({
                                      id: "AttachmentType",
                                    })}
                                  </th>
                                  <th className="px-2 pb-3 min-w-60px max-w-350px">
                                    {intl.formatMessage({ id: "Actions" })}
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-muted">
                                {items.map((item) => (
                                  <tr className="h-60px">
                                    <td>{item.id}</td>
                                    <td>{item.attachmentType}</td>
                                    <td className="d-flex justify-content-center">
                                      <img
                                        src="/media/pmo/docIcon.png"
                                        className="w-40px h-40px"
                                        alt={item.attachmentType}
                                      />
                                      <div className="d-flex flex-column mx-2 mb-3 align-items-start">
                                        <span className="text-dark">
                                          {item.attachmentName}
                                        </span>
                                        <span className="text-muted">
                                          {item.attachmentDuration}
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <AccessoriesActions
                                        data={item}
                                        handleEdit={handleEdit}
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-12 col-lg-12 mx-auto mb-10">
                          <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                            <div className="d-flex justify-content-center align-items-center w-50">
                              <div
                                onClick={() => handelIsDone()}
                                className="btn btn-success mx-1 text-center w-100"
                                // data-bs-toggle="modal"
                                // data-bs-target="#Rega_modal_add"
                              >
                                {intl.formatMessage({ id: "Save" })}
                              </div>
                              <Link
                                to={"/pmo-new-feasibility-study/milestones"}
                                className="btn btn-secondary mx-1 text-center w-100" /* data-bs-toggle="modal" data-bs-target="#Rega_modal_Delete" */
                              >
                                {intl.formatMessage({ id: "ThePrevious" })}
                              </Link>
                              <Link
                                to={"/pmo-new-feasibility-study/credits"}
                                className="btn btn-primary mx-1 text-center w-100"
                              >
                                {intl.formatMessage({ id: "Next" })}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="modal fade" id="Rega_modal_close" aria-hidden="true">
        <ClosePopup />
      </div> */}
      <div className="modal fade" id="Rega_modal_add" aria-hidden="true">
        <AddPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      <div
        className="modal fade"
        id="rega_modal_filter_projects"
        aria-hidden="true"
      >
        <NewFeasibilityStudyPopup
          show={modalFShow}
          handleClose={() => setModalFShow(false)}
        />
      </div>
    </>
  );
};
