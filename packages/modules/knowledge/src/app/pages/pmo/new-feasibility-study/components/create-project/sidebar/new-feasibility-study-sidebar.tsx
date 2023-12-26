import { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom';

interface INewFeasibilityStudySidebar {
    card_number: string,
    page_size: number;
}
export const NewFeasibilityStudySidebar: FC<INewFeasibilityStudySidebar> = ({ card_number, page_size }) => {
    const intl = useIntl();
    const [getList, setList] = useState([
        {
            card_number: "1",
            title: intl.formatMessage({ id: 'ProjectInformation' }),
            body: intl.formatMessage({ id: 'TheBasicDataOfTheProject' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/project-information',
        },
        {
            card_number: "2",
            title: intl.formatMessage({ id: 'ProjectFeasibility' }),
            body: intl.formatMessage({ id: 'AddressesAndDatesRelatedToTheProject' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/project-feasibility',
        },
        {
            card_number: "3",
            title: intl.formatMessage({ id: 'ProjectDetails' }),
            body: intl.formatMessage({ id: 'ProjectFeasibilityInformation' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/project-details',
        },
        {
            card_number: "4",
            title: intl.formatMessage({ id: 'AddressesAndAppointments' }),
            body: intl.formatMessage({ id: 'ProjectDetailData' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/addresses-and-appointments',
        },
        {
            card_number: "5",
            title: intl.formatMessage({ id: 'ClassificationField' }),
            body: intl.formatMessage({ id: 'TheFieldOfClassificationAndTheSiteOfImplementationAndSubmission' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/classification-field',
        },
        {
            card_number: "6",
            title: intl.formatMessage({ id: 'QuantitiesAreWorthIt' }),
            body: intl.formatMessage({ id: 'SuppliesToBeUsed' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/quantities-are-worth-it',
        },
        {
            card_number: "7",
            title: intl.formatMessage({ id: 'GeneralProvisions' }),
            body: intl.formatMessage({ id: 'GeneralProvisionsAndInformationOfTheRepresentativeOfTheEntity' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/general-provisions',
        },
        {
            card_number: "8",
            title: intl.formatMessage({ id: 'DocumentationAndPreparationOfOffers' }),
            body: intl.formatMessage({ id: 'GeneralProvisionsDocumentsAndPreparationOfOffers' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/documentation-and-preparation-of-offers',
        },
        {
            card_number: "9",
            title: intl.formatMessage({ id: 'OfferEvaluationCriteria' }),
            body: intl.formatMessage({ id: 'EvaluationOfOffersAndTheirCriteria' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/offer-evaluation-criteria',
        },
        {
            card_number: "10",
            title: intl.formatMessage({ id: 'TechnicalDefinitions' }),
            body: intl.formatMessage({ id: 'TermsAndTheirDefinitionSeparately' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/technical-definitions',
        },
        {
            card_number: "11",
            title: intl.formatMessage({ id: 'BusinessAndServices' }),
            body: intl.formatMessage({ id: 'HowWhereAndConditionsForPerformingServices' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/business-and-services',
        },
        {
            card_number: "12",
            title: intl.formatMessage({ id: 'BusinessAndServiceSpecifications' }),
            body: intl.formatMessage({ id: 'ConditionsForTheImplementationOfServices' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/business-and-service-specifications',
        },
        {
            card_number: "13",
            title: intl.formatMessage({ id: 'TeamSpecification' }),
            body: intl.formatMessage({ id: 'JobDataForTheWorkTeam' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/team-specification',
        },
        {
            card_number: "14",
            title: intl.formatMessage({ id: 'FinesCalculationMechanism' }),
            body: intl.formatMessage({ id: 'MechanismAndPercentageOfFines' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/fines-calculation-mechanism',
        },
        {
            card_number: "15",
            title: intl.formatMessage({ id: 'Milestones' }),
            body: intl.formatMessage({ id: 'ProgrammeOfAction' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/milestones',
        },
        {
            card_number: "16",
            title: intl.formatMessage({ id: 'Accessories' }),
            body: intl.formatMessage({ id: 'NamesAndImportanceOfAttachedAccessories' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/accessories',
        },
        {
            card_number: "17",
            title: intl.formatMessage({ id: 'Credits' }),
            body: intl.formatMessage({ id: 'ApprovalsOfManagersAndOwners' }),
            isDone: false,
            isSelect: false,
            link: '/pmo-new-feasibility-study/credits',
        },
    ])

    useEffect(() => {
        if (card_number) {
            const index = getList.findIndex(item => item.card_number === card_number);
            const newMyToolsList = [...getList];
            for (let i = 0; i < index; i++) {
                newMyToolsList[i].isDone = true;
            }
            newMyToolsList[index].isSelect = true;
            setList(newMyToolsList);
        }
    }, []);

    // setTimeout(() => {
    //     document.getElementById(card_number).scrollIntoView({ behavior: 'smooth' })
    // }, 700);

    return (
        <div className={`flex-column flex-lg-row-auto w-lg-350px w-100 mb-10 mb-lg-0`}>
            <div className="card card-xl-stretch mb-xl-3">

                <div className="card-header border-1 pt-3 pb-2">
                    <h3 className="card-title align-items-start flex-column">
                        <h2 className="text-dark mb-2 fs-3 mt-3">{intl.formatMessage({ id: 'List' })}</h2>
                        <span className="text-muted fs-7">{intl.formatMessage({ id: 'NewFeasibilityStudyAndProjectBrochure' })}</span>
                    </h3>
                </div>

                <div className="card-body scroll-y" style={{ /* maxHeight: page_size + 'px' */ maxHeight: '622px' }}>
                    {getList.map((item => (
                        <div key={item.card_number} className="d-flex align-items-center mb-8">
                            <div className="form-check form-check-custom form-check-solid mx-4">
                                {item.isDone ? <button disabled={true} className="active btn btn-icon btn-sm btn-light-success" style={{ width: "28px", height: "28px", fontSize: '20px' }}>&#10003;</button>
                                    : <Link to={item.link} className={`btn btn-icon btn-sm btn-light-primary pb-1 ${item.isSelect ? 'active' : ''}`} style={{ width: "28px", height: "28px", fontSize: '18px' }}>{item.card_number}</Link>}
                            </div>
                            <div id={item.card_number} className="d-flex flex-column flex-grow-1">
                                <Link to={item.link} className="text-dark text-hover-primary fw-bolder fs-6 mb-1">{item.title}</Link>
                                <span className="text-muted fw-bold d-block">{item.body}</span>
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}