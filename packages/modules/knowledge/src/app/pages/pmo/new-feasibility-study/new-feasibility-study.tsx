import { FC } from 'react'
import { RightToolbar } from '../partials/RightToolbar'
import { ProjectsListDetails } from './components/projects-list/projects-list-details'
import { NewFeasibilityStudyToolbar, NewFeasibilityStudyToolbarLinkType } from './toolbar/NewFeasibilityStudyToolbar'

export const NewFeasibilityStudy: FC = () => {

  return (
    <>
      <NewFeasibilityStudyToolbar isNewFeasibilityStudy={true} type={NewFeasibilityStudyToolbarLinkType.ProjectBrochure} />
      <RightToolbar />
      <ProjectsListDetails />
    </>
  )
}

