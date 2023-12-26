import './App.css';
import { Routes , Route } from 'react-router-dom';
import { TechnicalSupportWorkSpace } from './app/pages/technical-support/work-space/technical-support-workspace';
import { TechnicalSupportFeedbacksManager } from './app/pages/technical-support/technical-support-feedback-manager/technical-support-feedbacks-manager';

import {TechnicalSupportServiceLevelAgreementDetails}from './app/pages/technical-support/service-level-agreement/technical-support-service-level-agreement-details';
import TechnicalSupportServiceLevelAgreementDetailsSla from './app/pages/technical-support/service-level-agreement/technical-support-service-level-agreement-details-sla';
import { AddEditTechnicalAgreement } from './app/pages/technical-support/service-level-agreement/components/addEditTechnicalAgreement';
import { AddEscalationLevel } from './app/pages/technical-support/service-level-agreement/add-escalation-level';

import { NewServiceRequest } from "./app/pages/technical-support/new-service-request/new-service-request";
import { AddNewServiceRequest } from "./app/pages/technical-support/new-service-request/new-service-request-add-new-request";
import { CurrentServiceReport } from "./app/pages/technical-support/current-service-report/current-service-report";
import {  TechnicalSupportFeedbacksEmployee } from "./app/pages/technical-support/technical-support-feedback-employee/technical-support-feedbacks-Employee";
import { TechnicalSupportFeedbacksManagerDetails } from './app/pages/technical-support/technical-support-feedback-manager/technical-support-feedbacks-manager-details';
import { TechnicalSupportFeedbacksManagerApprovalRequestDetails } from './app/pages/technical-support/technical-support-feedback-manager/technical-support-feedbacks-manager-request-approval-details';
import { TechnicalSupportFeedbacksEmployeeDetails } from './app/pages/technical-support/technical-support-feedback-employee/technical-support-feedbacks-employee-details';
import { TechnicalSupportFeedbacksEmployeeApprovalRequestDetails } from './app/pages/technical-support/technical-support-feedback-employee/technical-support-feedbacks-employee-approval-request-details';
import { TechnicalSupportReports } from './app/pages/technical-support/technical-support-reports/technical-support-reports';
import { EditService } from './app/pages/technical-support/create-new-service/edit-service';
import { TechnicalReportsSolutions } from './app/pages/technical-support/technical-reports-solutions/technical-reports-solutions';
import AddCurrentServiceReport from './app/pages/technical-support/current-service-report/add-current-service-report';
import { TechnicalReportsSolutionsDetails } from './app/pages/technical-support/technical-reports-solutions/technical-reports-solutions-details';
import { AddingNewSolutionToTechnicalSupportReports } from './app/pages/technical-support/technical-reports-solutions/technical-reports-solutions-add-new-solution';
import { EditingSolutionToTechnicalSupportReports } from './app/pages/technical-support/technical-reports-solutions/technical-reports-solutions-edit-solution';
import { TechnicalSupportFeedbacksAdminstrationManager } from './app/pages/technical-support/technical-support-feedback-administration-manager/technical-support-feedbacks-manager';
import { TechnicalSupportFeedbacksAdministrationEmployee } from './app/pages/technical-support/technical-support-feedback-administration-employee/technical-support-feedbacks-administration-employee';
import { ManagementCommunicationsReports } from './app/pages/technical-support/technical-support-reports/management-communications-reports';
import { CommunicationsSolved } from './app/pages/technical-support/technical-support-reports/communications-solved';
import { CommunicationsEmployees } from './app/pages/technical-support/technical-support-reports/communications-emloyees';
import { ReportsEmployees } from './app/pages/technical-support/technical-support-reports/reports-employee';
import { RealEstateInstitute } from './app/pages/technical-support/technical-support-reports/Real-estate-institute';
import { TechnicalSupportFeedbacksAdministrationEmployeeDetails } from './app/pages/technical-support/technical-support-feedback-administration-employee/technical-support-feedbacks-administration-employee-details';
import { TechnicalSupportFeedbacksAdminstrationManagerDetails } from './app/pages/technical-support/technical-support-feedback-administration-manager/technical-support-feedbacks-manager-details';
import { TechnicalSupportFeedbacksAdminstrationManagerApprovalRequestDetails } from './app/pages/technical-support/technical-support-feedback-administration-manager/technical-support-feedbacks-manager-request-approval-details';
import { CreateNewService } from './app/pages/technical-support/create-new-service/create-new-service';



function App() {
  return (
    <Routes>
        <Route path="/technical-support-workspace" element={<TechnicalSupportWorkSpace />} />
        <Route path="/technical-support-feedbacks" element={<TechnicalSupportFeedbacksManager />} />
      
        <Route path="/technical-support-service-level-agreement-details" element={<TechnicalSupportServiceLevelAgreementDetails />} />
        <Route path="/technical-support-service-level-agreement-details-sla" element={<TechnicalSupportServiceLevelAgreementDetailsSla />} />
        <Route path="/addNewTechnicalAgreement" element={<AddEditTechnicalAgreement />} />
        <Route path="/editTechnicalAgreement/:id" element={<AddEditTechnicalAgreement />} />
        <Route path="/add-escalation-level" element={<AddEscalationLevel />} />
      
      <Route path="/technical-support-feedbacks-manager" element={<TechnicalSupportFeedbacksManager />} />
      <Route path="/technical-support-feedbacks-manager/:id/request-approval-details" element={<TechnicalSupportFeedbacksManagerApprovalRequestDetails />} />
      <Route path="/technical-support-feedbacks-manager/:id/details" element={<TechnicalSupportFeedbacksManagerDetails />} />
      <Route path="/technical-support-feedbacks-Employee" element={<TechnicalSupportFeedbacksEmployee />} />
      <Route path="/technical-support-feedbacks-employee/:id/details" element={<TechnicalSupportFeedbacksEmployeeDetails />} />
      <Route path="/technical-support-feedbacks-employee/:id/approval-details" element={<TechnicalSupportFeedbacksEmployeeApprovalRequestDetails />} />
     
      <Route path="/create-new-service" element={<CreateNewService />} />

      <Route path="/new-service-request" element={<NewServiceRequest />} />
      <Route path="/new-service-request/add-new-service" element={<AddNewServiceRequest />} />
      <Route path="/current-service-report" element={<CurrentServiceReport />} />


        <Route path="/technical-support-reports" element={<TechnicalSupportReports />} />
        <Route path="/edit-service/:id" element={<EditService />} />
        <Route path="/technical-reports-solutions" element={<TechnicalReportsSolutions />} />
        <Route path="/current-service-report/add-current-service" element={<AddCurrentServiceReport />} />
        <Route path="/technical-reports-solutions/:id/details" element={<TechnicalReportsSolutionsDetails />} />
        <Route path="/technical-reports-solutions/add-new-solution" element={<AddingNewSolutionToTechnicalSupportReports />} />
        <Route path="technical-reports-solutions/:id/edit-solution" element={<EditingSolutionToTechnicalSupportReports />} />
        <Route path="/technical-support-feedbacks-adminstration-manager" element={<TechnicalSupportFeedbacksAdminstrationManager />} />
        <Route path="/technical-support-reports-manager" element={<TechnicalSupportReports />} />
        <Route path="/technical-support-feedbacks-administration-employee" element={<TechnicalSupportFeedbacksAdministrationEmployee />} />
        <Route path="/management-communications-reports" element={<ManagementCommunicationsReports />} />
        <Route path="/communications-solved" element={<CommunicationsSolved />} />
        <Route path="/communications-emloyees" element={<CommunicationsEmployees />} />
        <Route path="/reports-emloyees" element={<ReportsEmployees />} />
        <Route path="/Real-estate-institute" element={<RealEstateInstitute />} />
        <Route path="/technical-support-feedbacks-administration-employee/:id/details" element={<TechnicalSupportFeedbacksAdministrationEmployeeDetails />} />
        <Route path="/technical-support-feedbacks-adminstration-manager/:id/details" element={<TechnicalSupportFeedbacksAdminstrationManagerDetails />} />
      <Route path="/technical-support-feedbacks-adminstration-manager/:id/request-approval-details" element={<TechnicalSupportFeedbacksAdminstrationManagerApprovalRequestDetails />} />


    </Routes>
  );
}

export default App;
