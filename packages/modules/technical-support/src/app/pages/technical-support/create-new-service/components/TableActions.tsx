import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import AddItemPopup from "../popup/AddItemPopup";
import { DeletePopup } from "../../../../../app/pages/partials/DeletePopup";
import { useNavigate } from "react-router";

type ActionProps = {
  id: Number;
};

export const TableActions: FC<ActionProps> = ({ id }) => {
  const intl = useIntl();
  let navigate=useNavigate()
  const [showDelete, setshowDelete] = useState<boolean>(false);

  return (
    <>
      <button
        className="btn btn-sm btn-icon btn-light fs-2 text-muted"
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
          <a className="dropdown-item menu-link fs-6 px-3 text-primary" 
          onClick={()=>{navigate("/edit-service")}}>
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
      <div className="modal fade" id="rega_modal_Delete" aria-hidden="true">
        <DeletePopup  handleCloseDelete={() => setshowDelete(false)}
          showDelete={showDelete}/>
      </div>
      <AddItemPopup />
    </>
  );
};
