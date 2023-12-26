import React, { FC } from "react";
import { AllProjectsToolbar } from "./toolbar/AllProjectsToolbar";
import { HeaderCards } from "./components/header-cards";
import { ProjectCard } from "./components/project-card";
import { useIntl } from "react-intl";
import { RightToolbar } from "../../partials/RightToolbar";
import { IconUserModel } from "../../../../modules/profile/ProfileModels";

const PmoProjectsManagement: FC = () => {
  const intl = useIntl();

  const users1: Array<IconUserModel> = [
    { name: "Emma Smith", avatar: "/media/avatars/300-3.jpg" },
    { name: "Rudy Stone", avatar: "/media/avatars/300-1.jpg" },
    { name: "Susan Redwood", initials: "S", color: "primary" },
  ];

  return (
    <>
      <div>
        <AllProjectsToolbar />
        <RightToolbar />
        <HeaderCards />

        <div className="row g-6 g-xl-9">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div className="col-md-6 col-xl-4">
              <ProjectCard
                icon="/media/theme-img/logo-sm.png"
                badgeColor="primary"
                status={intl.formatMessage({ id: "InProgress" })}
                statusColor="primary"
                title={intl.formatMessage({ id: "ProjectName" })}
                description="وصف مختصر المشروع وصف مختصر المشروع وصف مختصر وصف مختصر المشروع ....................."
                duration="3 شهور   "
                outgoingValue="$284,900.00"
                progress={10}
                StartDate="12 مارس 2023"
                budget="$384,900.00"
                users={users1}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { PmoProjectsManagement };
