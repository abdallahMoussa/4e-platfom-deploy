import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG, toAbsoluteUrl } from "../helpers";
import AddItemPopup from "../popup/AddItemPopup";
import { DeleteDepartmentPopup } from "../popup/DeleteDepartmentPopup";
import EditItemPopup from "../popup/EditItemPopup";
import { Dropdown } from "react-bootstrap";

type ActionProps = {
  id: string;
};

export const OrgActions: FC<ActionProps> = ({ id }) => {
  const intl = useIntl();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => {setShowEdit(true)
  console.log(`this is edit ${id}`);
  };



  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => 
  {
    setShowDelete(true)
    console.log(id)
      };

      const handleAddSecondaryItem=()=>
      {
        handleShow();
        console.log(`delete for id : ${id}`)
      }
    
  return (
    <>
      <div className="card-toolbar text-center">
        <div className="me-n3">
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              size="sm"
              className="btn-icon btn-light"
            >
              <i className="bi bi-three-dots fs-2"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold  py-3" style={{width:"fit-content"}} >
              <Dropdown.Item
                className="menu-link fs-6 px-3 text-success"
                onClick={handleShow}
              >
                <i className="bi bi-plus-lg fs-4 mx-1"></i>
                {intl.formatMessage({ id: "AddMainItem" })}
              </Dropdown.Item>
              <Dropdown.Item
                className="menu-link fs-6 px-3 text-muted"
                onClick={handleAddSecondaryItem}
              >
                <i className="bi bi-plus-lg fs-3 mx-1"></i>{" "}
                {intl.formatMessage({ id: "AddSecondaryItem" })}
              </Dropdown.Item>
              <Dropdown.Item
                className="menu-link fs-6 px-3 text-primary"
                onClick={handleShowEdit}
              >
                <span className="svg-icon svg-icon-3 mx-2">
                  <KTSVG path="/media/icons/duotune/general/gen087.svg" />
                </span>{" "}
                {intl.formatMessage({ id: "Edit" })}
              </Dropdown.Item>
              <Dropdown.Item
                className="menu-link fs-6 px-3 text-danger"
                onClick={handleShowDelete}
              >
                <span className="svg-icon svg-icon-3 mx-2">
                  <KTSVG path="/media/icons/duotune/general/gen088.svg" />
                </span>{" "}
                {intl.formatMessage({ id: "Delete" })}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <DeleteDepartmentPopup
      OrgId={id}
      handleCloseDelete={handleCloseDelete}
      showDelete={showDelete}
      />
      <AddItemPopup handleClose={handleClose} show={show} parentId={id} />
      <EditItemPopup handleCloseEdit={handleCloseEdit} showEdit={showEdit} orgId={id} />
    </>
  );
};
