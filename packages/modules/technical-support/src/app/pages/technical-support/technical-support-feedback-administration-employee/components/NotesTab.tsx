import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import AddNotesPopup from "../popups/AddNotesPopup";

function NotesTab() {
  let intl = useIntl();
  const [AddNotesShow, setAddNotesShow] = useState<boolean>(false);

  let [notes, setNotes] = useState([
    {
      id: 1,
      title: "تم رفض البلاغ بسبب وجود عطل فني تم حله مسبقا وننصح بإغلاق البلاغ",
    },
    {
      id: 2,
      title: "تم رفض البلاغ بسبب وجود عطل فني تم حله مسبقا وننصح بإغلاق البلاغ",
    },
    {
      id: 3,
      title: "تم رفض البلاغ بسبب وجود عطل فني تم حله مسبقا وننصح بإغلاق البلاغ",
    },
    {
      id: 4,
      title: "تم رفض البلاغ بسبب وجود عطل فني تم حله مسبقا وننصح بإغلاق البلاغ",
    },
  ]);
  return (
    <Fragment>
      <div
        className="tab-pane fade show active"
        id="notes"
        role="tabpanel"
        aria-labelledby="notes-tab"
      >
        {notes?.map((item) => {
          let { id, title } = item;
          return (
            <Fragment key={Math.random()}>
              <div className="h-70px bg-light text-muted mb-5 px-5 d-flex flex-column justify-content-center">
                {title}
              </div>
            </Fragment>
          );
        })}
        <div
          onClick={() => setAddNotesShow(true)}
          className=" cursor-pointer d-flex align-items-center"
        >
          <i className="fa-solid fa-plus fs-4 mx-2"></i>{" "}
          <span className="text-dark fs-4 text-decoration-underline">
            {" "}
            {intl.formatMessage({ id: "AddNote" })}
          </span>
        </div>
      </div>
      <AddNotesPopup
        show={AddNotesShow}
        handleClose={() => setAddNotesShow(false)}
      />
    </Fragment>
  );
}

export default NotesTab;
