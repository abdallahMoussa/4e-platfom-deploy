import { FC } from 'react';
import { RightToolbar } from "../../pmo/partials/RightToolbar";
import ServiceLevelDetails from './components/ServiceLevelDetails';
import ServiceLevelAgreementSlaToolbar from './toolbar/ServiceLevelAgreementSlaToolbar';

const ServiceLevelAgreementDetailsSla: FC = () => {
  return (
    <>
      <ServiceLevelAgreementSlaToolbar />
      <RightToolbar />
      <ServiceLevelDetails />
    </>
  )
}

export default ServiceLevelAgreementDetailsSla