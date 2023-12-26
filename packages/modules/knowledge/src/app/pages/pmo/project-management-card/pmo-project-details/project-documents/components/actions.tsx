import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { DeletePopup } from "../../../../../partials/DeletePopup";
import { KTSVG } from "../../../../../../helpers";
import EditDocumentPopup from "../popup/edit-documents-popup";
import Dropdown from 'react-bootstrap/Dropdown';
import { ButtonGroup } from "react-bootstrap";

type ActionProps = {
  id: Number;
};

export const Actions: FC<ActionProps> = ({ id }) => {
  const intl = useIntl();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalDShow, setModalDShow] = useState<boolean>(false);

  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle split variant="none" className=" p-0 text-center" id="dropdown-custom-2">
          <i className="bi bi-three-dots fs-2" style={{color: "#7e8299"}}></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="button">
            <a
              className="menu-link px-3 text-primary"
              onClick={(event) => {
                event.preventDefault();
                setModalShow(true);
              }}
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_edit_document"
            >
              <span className="svg-icon svg-icon-3 mx-2">
                <KTSVG path="/media/icons/duotune/general/gen087.svg" />
              </span>
              {intl.formatMessage({ id: "Edit" })}
            </a>
          </Dropdown.Item>

          <Dropdown.Item as="button">
            <a
              className="menu-link px-3 text-danger"
              onClick={(event) => {
                event.preventDefault();
                setModalDShow(true);
              }}
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_Delete"
            >
              <span className="svg-icon svg-icon-3 mx-2">
                <KTSVG path="/media/icons/duotune/general/gen088.svg" />
              </span>
              {intl.formatMessage({ id: "Delete" })}
            </a>
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      <div className="modal fade" aria-hidden="true">
        <DeletePopup
          handleCloseDelete={() => setModalDShow(false)}
          showDelete={modalDShow}
        />
        <EditDocumentPopup
          show={modalShow}
          handleClose={() => setModalShow(false)}
        />
      </div>
    </>
  );
};
