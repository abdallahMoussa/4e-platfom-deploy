import React, { Fragment, useInsertionEffect, useState } from "react";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from "react-calendar-timeline";
import { useIntl } from "react-intl";
import { format } from "date-fns";

let months = [
  "يناير",
  "فبراير",
  "مارس",
  "ابريل",
  "مايو",
  "يونيه",
  "يوليو",
  "اغسطس",
  "سبتمبر",
  "اكتوبر",
  "نوفمبر",
  "ديسمبر",
];
let weeks = [
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
  ["الاسبوع  1", "الاسبوع 2", "الاسبوع 3", "الاسبوع 4"],
];
function TimeTable2() {
  let intl = useIntl();
  const groups = [
    {
      id: 1,
      title: (
        <Fragment>
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="bg-primary mx-2"
              style={{ width: "10px", height: "10px", borderRadius: "50%" }}
            ></div>
            <span className="mx-1 d-inline-block h-100">
              {intl.formatMessage({ id: "InterfaceDesign" })}
            </span>
          </div>
        </Fragment>
      ),
      height: 50,
    },
    {
      id: 2,
      title: (
        <Fragment>
          <div style={{ lineHeight: "1.6" }}>
            <div
              className="d-flex pt-3 mb-4 align-items-center flex-row justify-content-between"
              style={{ height: "30px" }}
            >
              <div
                className="bg-primary mx-2"
                style={{ width: "10px", height: "10px", borderRadius: "50%" }}
              ></div>
              <span className="mx-1 d-inline-block h-100">
                {intl.formatMessage({ id: "WebsiteDevelopment" })}
              </span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div>
              <p className="text-center mb-6">
                {intl.formatMessage({ id: "InterfaceDesign" })}
              </p>
            </div>
          </div>
        </Fragment>
      ),
      height: 90,
    },
    {
      id: 3,
      title: (
        <Fragment>
          <div className="d-flex align-items-center justify-content-between">
            {intl.formatMessage({ id: "InterfaceDevelopment" })}
          </div>
        </Fragment>
      ),
      height: 50,
    },
    {
      id: 4,
      title: (
        <Fragment>
          <div className="d-flex align-items-center justify-content-between">
            {intl.formatMessage({ id: "LogoDesign" })}
          </div>
        </Fragment>
      ),
      height: 50,
    },
    {
      id: 5,
      title: (
        <Fragment>
          <div className="d-flex align-items-center justify-content-between">
            {intl.formatMessage({ id: "IconsDevelopment" })}{" "}
          </div>
        </Fragment>
      ),
      height: 50,
    },
    {
      id: 6,
      title: (
        <Fragment>
          <div className="d-flex align-items-center justify-content-between">
            {intl.formatMessage({ id: "CardsDesign" })}
          </div>
        </Fragment>
      ),
      height: 50,
    },
    {
      id: 7,
      title: (
        <Fragment>
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="bg-primary mx-2"
              style={{ width: "10px", height: "10px", borderRadius: "50%" }}
            ></div>
            <span className="mx-1 d-inline-block h-100">
              {intl.formatMessage({ id: "DataReview" })}
            </span>
          </div>
        </Fragment>
      ),
      height: 100,
    },
  ];

  const items = [
    {
      id: 1,
      group: 1,
      title: (
        <Fragment>
          <div
            className="progress"
            style={{
              backgroundColor: "#009EF7",
              marginTop: "0px",
              height: "22px",
            }}
          >
            <div
              className="progress-bar  px-2"
              role="progressbar"
              style={{
                width: "50%",
                backgroundColor: "#24ADB2",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <span>40%</span>
              <label>
                {intl.formatMessage({ id: "InterfaceDevelopment" })}
              </label>
            </div>
            <div className="px-3 text-white w-50 d-flex justify-content-end">
              12 فبراير - 25 مارس
            </div>
          </div>
        </Fragment>
      ),
      start_time: new Date("2023-01-3"),
      end_time: new Date("2023-02-28"),
      canMove: true,
      canResize: true,
      canChangeGroup: true,
      itemProps: {
        "data-custom-attribute": "Random content",
        "aria-hidden": true,
        onDoubleClick: () => {
          console.log("You clicked double!");
        },
        className: "bg-white ",
        style: {
          background: "white",
          border: "none",
        },
      },
    },
    {
      id: 2,
      group: 2,
      title: (
        <Fragment>
          <div style={{ height: "90px" }}>
            <div
              className=" bg-primary"
              style={{
                width: "3px",
                position: "absolute",
                right: "25%",
                top: "0",
                height: "50px",
              }}
            ></div>
            <div
              className="px-3 w-75 d-flex align-items-center justify-content-between mb-5"
              style={{ height: "50px", backgroundColor: "white" }}
            >
              <div className="d-flex align-items-center justify-content-center h-100">
                <i className="fa-solid fa-calendar-days"></i>
                <span className=" text-primary">11مارس-24ابريل</span>
              </div>
              <div style={{ width: "200px" }} className="h-100 pt-2 ">
                <p className="text-black fw-bolder my-0 text-end">
                  {intl.formatMessage({ id: "WebsiteDevelopment" })}
                </p>
                <p className="text-muted text-end">
                  6 {intl.formatMessage({ id: "Tasks" })}
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      ),
      start_time: new Date("2023-01-21"),
      end_time: new Date("2023-03-21"),
      canMove: true,
      canResize: false,
      canChangeGroup: false,
      itemProps: {
        "data-custom-attribute": "Random content",
        "aria-hidden": true,
        onDoubleClick: () => {
          console.log("You clicked double!");
        },
        style: {
          display: "block",
          background: "transperant",
          position: "relative",
          border: "0",
          height: "70px",
        },
      },
    },
    {
      id: 3,
      group: 3,
      title: (
        <Fragment>
         <div
            className="progress"
            style={{
              backgroundColor: "#009EF7",
              marginTop: "0px",
              height: "22px",
            }}
          >
            <div
              className="progress-bar  px-2"
              role="progressbar"
              style={{
                width: "50%",
                backgroundColor: "#24ADB2",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <span>40%</span>
              <label>
                {intl.formatMessage({ id: "InterfaceDevelopment" })}
              </label>
            </div>
            <div className="px-3 text-white w-50 d-flex justify-content-end">
              12 فبراير - 25 مارس
            </div>
          </div>
        </Fragment>
      ),
      start_time: new Date("2023-01-30"),
      end_time: new Date("2023-03-5"),
      canMove: true,
      canResize: false,
      canChangeGroup: false,
      itemProps: {
        "data-custom-attribute": "Random content",
        "aria-hidden": true,
        onDoubleClick: () => {
          console.log("You clicked double!");
        },
        style: {
          display: "block",
          background: "transperant",
          border: "0",
        },
      },
    },
    {
      id: 4,
      group: 4,
      title: (
        <Fragment>
          <div
            className="progress"
            style={{
              backgroundColor: "#009EF7",
              marginTop: "0px",
              height: "22px",
            }}
          >
            <div
              className="progress-bar  px-2"
              role="progressbar"
              style={{
                width: "50%",
                backgroundColor: "#24ADB2",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <span>40%</span>
              <label>
                {intl.formatMessage({ id: "InterfaceDevelopment" })}
              </label>
            </div>
            <div className="px-3 text-white w-50 d-flex justify-content-end">
              12 فبراير - 25 مارس
            </div>
          </div>
        </Fragment>
      ),
      start_time: new Date("2023-01-13"),
      end_time: new Date("2023-03-7"),
      canMove: true,
      canResize: true,
      canChangeGroup: true,
      itemProps: {
        "data-custom-attribute": "Random content",
        "aria-hidden": true,
        onDoubleClick: () => {
          console.log("You clicked double!");
        },
        className: "bg-white",
        style: {
          background: "transperant",
          border: "none",
        },
      },
    },
    {
      id: 5,
      group: 5,
      title: (
        <Fragment>
        <div
            className="progress"
            style={{
              backgroundColor: "#009EF7",
              marginTop: "0px",
              height: "22px",
            }}
          >
            <div
              className="progress-bar  px-2"
              role="progressbar"
              style={{
                width: "50%",
                backgroundColor: "#24ADB2",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <span>40%</span>
              <label>
                {intl.formatMessage({ id: "InterfaceDevelopment" })}
              </label>
            </div>
            <div className="px-3 text-white w-50 d-flex justify-content-end">
              12 فبراير - 25 مارس
            </div>
          </div>
        </Fragment>
      ),
      start_time: new Date("2023-01-21"),
      end_time: new Date("2023-03-21"),
      canMove: true,
      canResize: false,
      canChangeGroup: true,
      itemProps: {
        // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
        "data-custom-attribute": "Random content",
        "aria-hidden": true,
        onDoubleClick: () => {
          console.log("You clicked double!");
        },
        className: "bg-white",
        style: {
          background: "white",
          border: "none",
          marginTop: "200px",
        },
      },
    },
    {
        id: 6,
        group: 6,
        title: (
          <Fragment>
          <div
              className="progress"
              style={{
                backgroundColor: "#009EF7",
                marginTop: "0px",
                height: "22px",
              }}
            >
              <div
                className="progress-bar  px-2"
                role="progressbar"
                style={{
                  width: "50%",
                  backgroundColor: "#24ADB2",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <span>40%</span>
                <label>
                  {intl.formatMessage({ id: "InterfaceDevelopment" })}
                </label>
              </div>
              <div className="px-3 text-white w-50 d-flex justify-content-end">
                12 فبراير - 25 مارس
              </div>
            </div>
          </Fragment>
        ),
        start_time: new Date("2023-2-21"),
        end_time: new Date("2023-03-27"),
        canMove: true,
        canResize: false,
        canChangeGroup: true,
        itemProps: {
          // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          "data-custom-attribute": "Random content",
          "aria-hidden": true,
          onDoubleClick: () => {
            console.log("You clicked double!");
          },
          className: "bg-white",
          style: {
            background: "white",
            border: "none",
            marginTop: "200px",
          },
        },
      },
      {
        id: 7,
        group: 7,
        title: (
          <Fragment>
          <div
              className="progress"
              style={{
                backgroundColor: "#009EF7",
                marginTop: "0px",
                height: "22px",
              }}
            >
              <div
                className="progress-bar  px-2"
                role="progressbar"
                style={{
                  width: "50%",
                  backgroundColor: "#24ADB2",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <span>40%</span>
                <label>
                  {intl.formatMessage({ id: "InterfaceDevelopment" })}
                </label>
              </div>
              <div className="px-3 text-white w-50 d-flex justify-content-end">
                12 فبراير - 25 مارس
              </div>
            </div>
          </Fragment>
        ),
        start_time: new Date("2023-01-29"),
        end_time: new Date("2023-03-31"),
        canMove: true,
        canResize: false,
        canChangeGroup: true,
        itemProps: {
          // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          "data-custom-attribute": "Random content",
          "aria-hidden": true,
          onDoubleClick: () => {
            console.log("You clicked double!");
          },
          className: "bg-white",
          style: {
            background: "white",
            border: "none",
            marginTop: "200px",
          },
        },
      },
  ];
  const itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps,
  }) => {
    return (
      <div {...getItemProps(item.itemProps)} className="mt-4 mb-5">
        {" "}
        {item.title}
      </div>
    );
  };

  let groupRenderer = ({ group }) => {
    // let [showNested,setShowNested]=useState(false)
    return (
      <div className="d-flex align-items-center justify-content-center">
        <span>{group.title}</span>
      </div>
    );
  };

  return (
    <Fragment>
      <Timeline
        groups={groups}
        items={items}
        itemRenderer={itemRenderer}
        defaultTimeStart={new Date("2022-03-25")}
        defaultTimeEnd={new Date("2023-06-21")}
        visibleTimeStart={new Date("2023-01-1")}
        visibleTimeEnd={new Date("2023-04-21")}
        groupRenderer={groupRenderer}
      >
        <TimelineHeaders>
          <SidebarHeader
            headerData={{
              title: intl.formatMessage({ id: "ProjectDuration" }),
              subtitle: intl.formatMessage({ id: "AprilMonth" }),
            }}
          >
            {({ getRootProps, data }) => {
              return (
                <div
                  {...getRootProps()}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "white",
                    width: "150px",
                  }}
                >
                  <div
                    className="fw-bolder text-muted"
                    style={{ fontSize: "14px" }}
                  >
                    {data?.title}
                  </div>
                  <div
                    className="fw-bolder text-primary"
                    style={{ fontSize: "14px" }}
                  >
                    {data?.subtitle}
                  </div>
                </div>
              );
            }}
          </SidebarHeader>
          <DateHeader
            unit="month"
            labelFormat="MMMM"
            // intervalRenderer={intervalRenderer}
            intervalRenderer={({ getIntervalProps, intervalContext, data }) => {
              return (
                <div {...getIntervalProps()} className="h-100">
                  <p
                    className="text-center pt-1 h-100 border border-1 border-dark border-bottom-0 border-top-0"
                    style={{ backgroundColor: "#F5F8FA" }}
                  >
                    {intl.formatMessage({ id: intervalContext.intervalText })}
                  </p>
                </div>
              );
            }}
          />
          <DateHeader
            unit="week"
            labelFormat="ww"
            intervalRenderer={({ getIntervalProps, intervalContext, data }) => {
              return (
                <div {...getIntervalProps()} className="h-100">
                  <p
                    className="text-center h-100 border border-1 border-dark border-bottom-0 border-top-0"
                    style={{
                      backgroundColor: "#F5F8FA",
                      fontSize: "11px",
                      width: "80px",
                    }}
                  >
                    {intl.formatMessage({ id: intervalContext.intervalText })}
                  </p>
                </div>
              );
            }}
          />
          <DateHeader
            unit="day"
            // intervalRenderer={({ getIntervalProps, intervalContext, data }) => {
            //   return (
            //     <div {...getIntervalProps()} >
            //       <div style={{width:"1px",height:"100%"}}>{intervalContext.intervalText}</div>
            //     </div>
            //   );
            // }}
          />
        </TimelineHeaders>
      </Timeline>
    </Fragment>
  );
}

export default TimeTable2;
