import { FC } from 'react';
import { RightToolbar } from "../partials/RightToolbar";
import ServiceLevelDetails from './components/ServiceLevelDetails';
import ServiceLevelAgreementSlaToolbar from './toolbar/ServiceLevelAgreementSlaToolbar';

const TechnicalSupportServiceLevelAgreementDetailsSla: FC = () => {
  return (
    <>
      <ServiceLevelAgreementSlaToolbar />
      <RightToolbar />
      <ServiceLevelDetails />
    </>
  )
}

export default TechnicalSupportServiceLevelAgreementDetailsSla