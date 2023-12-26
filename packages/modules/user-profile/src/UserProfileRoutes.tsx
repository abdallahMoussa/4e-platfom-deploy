import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserProfileRequestPostingRequest } from "./user-profile/pages/requests/user-profile-request-posting-request";
import { UserProfileDelegationDetails } from "./user-profile/pages/delegation/user-profile-delegation-details";
import { UserProfileDelegation } from "./user-profile/pages/delegation/user-profile-delegation";
import { UserProfileNotifications } from "./user-profile/pages/notifications/user-profile-notifications";
import { UserProfileTasks } from "./user-profile/pages/tasks/user-profile-tasks";
import { UserProfileRequestDetails } from "./user-profile/pages/requests/user-profile-request-details";
import { UserProfileRequests } from "./user-profile/pages/requests/user-profile-requests";
import { UserProfileSettings } from "./user-profile/pages/settings/user-profile-settings";
import { UserProfileOverviewAddScientificData } from "./user-profile/pages/overview/user-profile-add-scientific-data";
import { UserProfileOverviewEditScientificData } from "./user-profile/pages/overview/user-profile-edit-scientific-data";
import { UserProfileOverviewEditJobData } from "./user-profile/pages/overview/user-profile-overview-edit-job-data";
import { UserProfileOverviewEditBasicInfo } from "./user-profile/pages/overview/user-profile-overview-edit-basic-info";
import { UserProfile } from "./user-profile/user-profile";
import { UserProfileOverview } from "./user-profile/pages/overview/user-profile-overview";

function UserProfileRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserProfile />} />
      <Route path="/overview" element={<UserProfileOverview />} />
      <Route
        path="/overview/edit-basic-info"
        element={<UserProfileOverviewEditBasicInfo />}
      />
      <Route
        path="/overview/edit-job-data"
        element={<UserProfileOverviewEditJobData />}
      />
      <Route
        path="/overview/:id/edit-scientific-data"
        element={<UserProfileOverviewEditScientificData />}
      />
      <Route
        path="/overview/add-scientific-data"
        element={<UserProfileOverviewAddScientificData />}
      />
      <Route path="/settings" element={<UserProfileSettings />} />
      <Route path="/requests" element={<UserProfileRequests />} />
      <Route
        path="/requests/:id/details"
        element={<UserProfileRequestDetails />}
      />
      <Route path="/tasks" element={<UserProfileTasks />} />
      <Route path="/notifications" element={<UserProfileNotifications />} />
      <Route path="/delegation" element={<UserProfileDelegation />} />
      <Route
        path="/delegation/details"
        element={<UserProfileDelegationDetails />}
      />
      <Route
        path="/requests/:id/posting-request"
        element={<UserProfileRequestPostingRequest />}
      />
    </Routes>
  );
}

export default UserProfileRoutes;
