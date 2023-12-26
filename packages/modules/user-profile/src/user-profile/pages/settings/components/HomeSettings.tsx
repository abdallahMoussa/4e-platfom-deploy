import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function HomeSettings() {
  let intl = useIntl();
  let [draggedItems, setDraggedItems] = useState<any>([
    {
      id: "1",
      content: (
        <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
          <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
            <input
              className="form-check-input widget-9-check xCheckBg"
              type="checkbox"
              id="Checkbox1"
            />
          </div>
          <div
            className="p-4 px-5 fs-5 w-1100px"
            style={{ backgroundColor: "#F9F9F9" }}
          >
            {intl.formatMessage({ id: "LatestNews" })}
          </div>
          <div className="w-50px">
            <i className="fa-solid fa-bars text-muted fs-3"></i>
          </div>
        </div>
      ),
    },
    {
      id: "2",
      content: (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
            <input
              className="form-check-input widget-9-check xCheckBg"
              type="checkbox"
              id="Checkbox2"
            />
          </div>
          <div
            className="p-4 px-5 fs-5 w-1100px"
            style={{ backgroundColor: "#F9F9F9" }}
          >
            {intl.formatMessage({ id: "QuickAccess" })}
          </div>
          <div className="w-50px">
            <i className="fa-solid fa-bars text-muted fs-3"></i>
          </div>
        </div>
      ),
    },
    {
      id: "3",
      content: (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
            <input
              className="form-check-input widget-9-check xCheckBg"
              type="checkbox"
              id="Checkbox3"
            />
          </div>
          <div
            className="p-4 px-5 fs-5 w-1100px"
            style={{ backgroundColor: "#F9F9F9" }}
          >
            {intl.formatMessage({ id: "TaskList" })}
          </div>
          <div className="w-50px">
            <i className="fa-solid fa-bars text-muted fs-3"></i>
          </div>
        </div>
      ),
    },
    {
      id: "4",
      content: (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
            <input
              className="form-check-input widget-9-check xCheckBg"
              type="checkbox"
              id="Checkbox4"
            />
          </div>
          <div
            className="p-4 px-5 fs-5 w-1100px"
            style={{ backgroundColor: "#F9F9F9" }}
          >
            {intl.formatMessage({ id: "Requests" })}
          </div>
          <div className="w-50px">
            <i className="fa-solid fa-bars text-muted fs-3"></i>
          </div>
        </div>
      ),
    },
    {
      id: "5",
      content: (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
            <input
              className="form-check-input widget-9-check xCheckBg"
              type="checkbox"
              id="Checkbox5"
            />
          </div>
          <div
            className="p-4 px-5 fs-5 w-1100px"
            style={{ backgroundColor: "#F9F9F9" }}
          >
            {intl.formatMessage({ id: "Meetings" })}
          </div>
          <div className="w-50px">
            <i className="fa-solid fa-bars text-muted fs-3"></i>
          </div>
        </div>
      ),
    },
    {
      id: "6",
      content: (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className=" d-inline ms-2 form-check form-check-success form-check-md form-check-custom form-check-solid form-check-md">
            <input
              className="form-check-input widget-9-check xCheckBg"
              type="checkbox"
              id="Checkbox6"
            />
          </div>
          <div
            className="p-4 px-5 fs-5 w-1100px"
            style={{ backgroundColor: "#F9F9F9" }}
          >
            {intl.formatMessage({ id: "AuthorityCommunity" })}
          </div>
          <div className="w-50px">
            <i className="fa-solid fa-bars text-muted fs-3"></i>
          </div>
        </div>
      ),
    },
    {
      id: "7",
      content: (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
            <input
              className="form-check-input widget-9-check xCheckBg"
              type="checkbox"
              id="Checkbox7"
            />
          </div>
          <div
            className="p-4 px-5 fs-5 w-1100px"
            style={{ backgroundColor: "#F9F9F9" }}
          >
            {intl.formatMessage({ id: "InteractionChannels" })}
          </div>
          <div className="w-50px">
            <i className="fa-solid fa-bars text-muted fs-3"></i>
          </div>
        </div>
      ),
    },
  ]);
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  let [state, setState] = useState({
    items: draggedItems,
  });

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      state?.items,
      result.source.index,
      result.destination.index
    );

    setState({
      items,
    });
  }

  return (
    <Fragment>
      <div className="card shadow p-7 mb-9">
        <p className="fw-bolder text-black fs-4 mb-5">
          {intl.formatMessage({ id: "HomeSettings" })}
        </p>
        <hr />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {state?.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </Fragment>
  );
}

export default HomeSettings;
