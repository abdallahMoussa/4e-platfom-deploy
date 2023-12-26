import { FC, useState, } from 'react'
import { useIntl } from 'react-intl'
import { ProjectsList } from './projects-list'
import { SystemPagination } from '../../../../partials/SystemPagination'

export const ProjectsListDetails: FC = () => {
    const intl = useIntl()
    const [getProjectsList, setProjectsList] = useState([
        {
            id: '1',
            project_name: 'مشروع 1',
            project_owner: 'عبد الله',
            current_administration: 'إدارة 1',
            duration: '12 شهر',
            project_type: 'نوع 1',
            project_history: '20 Jun 2022',
            Procedures: 'ReviewTheTermsOfReference',
        },
        {
            id: '2',
            project_name: 'مشروع 2',
            project_owner: 'فهد محمد',
          current_administration: 'إدارة 2',
            duration: '18 شهر',
          project_type: 'نوع 2',
            project_history: '18 Jun 2022',
            Procedures: 'ReviewTheTermsOfReference',
        },
        {
            id: '3',
            project_name: 'مشروع 3',
            project_owner: 'اسامه احمد',
          current_administration: 'إدارة 3',
            duration: '14 شهر',
          project_type: 'نوع 3',
            project_history: '10 Jun 2022',
            Procedures: 'ReviewTheTermsOfReference',
        },
        {
            id: '4',
            project_name: 'مشروع 4',
            project_owner: 'خالد يوسف',
          current_administration: 'إدارة 4',
            duration: '13 شهر',
          project_type: 'نوع 4',
            project_history: '1 Jun 2022',
            Procedures: 'ReviewTheTermsOfReference',
        },
    ])

    return (
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl p-0">
            <div className="content flex-row-fluid" id="kt_content">
                <div className="flex-lg-row-fluid" data-select2-id="select2-data-129-tmo1">
                    <div className="card mb-5 mb-xl-8">
                        <div className="card-body py-3">
                            <h2 className="text-dark mb-3 fs-2 mt-10">{intl.formatMessage({ id: 'ProjectList' })}</h2>
                            <span className="text-muted fs-6">{intl.formatMessage({ id: 'ProjectsSchedule' })}</span>
                            <div className="table-responsive mt-8">
                                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
                                    id="REGA-WS-caseList">
                                    <thead>
                                        <tr className="fw-bolder text-muted">
                                            <th className="ps-4 min-w-100px text-center">{intl.formatMessage({ id: 'ProjectName' })}</th>
                                            <th className="min-w-150px text-center">{intl.formatMessage({ id: 'ProjectOwner' })}</th>
                                            <th className="min-w-150px text-center">{intl.formatMessage({ id: 'TheCurrentAdministration' })}</th>
                                            <th className="min-w-150px text-center">{intl.formatMessage({ id: 'Duration' })}</th>
                                            <th className="min-w-150px text-center">{intl.formatMessage({ id: 'ProjectType' })}</th>
                                            <th className="min-w-150px text-center">{intl.formatMessage({ id: 'ProjectHistory' })}</th>
                                            <th className="min-w-150px text-center">{intl.formatMessage({ id: 'Procedures' })}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getProjectsList.map((project => (
                                            <tr key={project.id}>
                                                <ProjectsList
                                                    id={project.id}
                                                    project_name={project.project_name}
                                                    project_owner={project.project_owner}
                                                    current_administration={project.current_administration}
                                                    duration={project.duration}
                                                    project_type={project.project_type}
                                                    project_history={project.project_history}
                                                    Procedures={project.Procedures}
                                                />
                                            </tr>
                                        )))}
                                    </tbody>
                                </table>
                            </div>
                            <SystemPagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}