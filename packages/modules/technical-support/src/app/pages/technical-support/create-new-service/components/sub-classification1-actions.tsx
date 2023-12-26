import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import AddItemPopup from "../popup/AddItemPopup";
import { DeletePopup } from "../../../partials/DeletePopup";
import AddSubCategoryPopup from "../popup/AddSubCategoryPopup";
import { useNavigate } from "react-router";
import EditServiceCatalogPopup from "../popup/EditServiceCatalogPopup";

type ActionProps = {
  id: Number;
};

export const SubClassification1Actions: FC<ActionProps> = ({ id }) => {
  const intl = useIntl();
  let navigate = useNavigate();
  const [showDelete, setshowDelete] = useState<boolean>(false);
  const [showServiceCatalog, setshowServiceCatalog] = useState<boolean>(false);
  const [showSubCategory,  setshowSubCategory] = useState<boolean>(false);

  return (
    <>
      <div className="d-flex w-fit">
        <button
          className="btn btn-sm border border-3 btn-icon btn-light fs-2 text-muted d-flex"
          type="button"
        >
          <i className="fa-solid fa-users"></i>{" "}
        </button>
        <button
          className="btn btn-sm btn-icon border border-3 btn-light fs-2 text-muted d-flex "
          type="button"
          id={`org-actions-${id}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-three-dots fs-2"></i>
        </button>
        <div
          className="dropdown-menu fw-bold w-200px py-3"
          aria-labelledby={`org-actions-${id}`}
        >
          <div className="menu-item px-3 ">
            <a
              className="dropdown-item menu-link fs-6 px-3 text-success"
              onClick={(event) => {
                event.preventDefault();
                setshowSubCategory(true)
              }}
            
            >
              <i className="bi bi-plus-lg fs-4 mx-1"></i>
              {intl.formatMessage({ id: "AddSub1Category" })}
            </a>
          </div>

          <div className="menu-item px-3 ">
            <a
              className="dropdown-item menu-link fs-6 px-3 text-primary"
              onClick={(event) => {
                event.preventDefault();
                setshowServiceCatalog(true)
              }}
            >
              <span className="svg-icon svg-icon-3 mx-2">
                <KTSVG path="/media/icons/duotune/general/gen087.svg" />
              </span>{" "}
              {intl.formatMessage({ id: "Edit" })}
            </a>
          </div>
          <div className="menu-item px-3">
            <a
              className="dropdown-item menu-link fs-6 px-3 text-danger"
             
              onClick={(event) => {
                event.preventDefault();
                setshowDelete(true)
              }}
            >
              <span className="svg-icon svg-icon-3 mx-2">
                <KTSVG path="/media/icons/duotune/general/gen088.svg" />
              </span>{" "}
              {intl.formatMessage({ id: "Delete" })}
            </a>
          </div>
        </div>
      </div>

      <div className="modal fade" id="rega_modal_Delete" aria-hidden="true">
        <DeletePopup handleCloseDelete={() => setshowDelete(false)}
          showDelete={showDelete}/>
      </div>
      <AddSubCategoryPopup  handleClose={() => setshowSubCategory(false)}
          show={showSubCategory}/>
      <EditServiceCatalogPopup  handleClose={() => setshowServiceCatalog(false)}
          show={showServiceCatalog}/>
    </>
  );
};
