import { FC } from 'react'
import { ReportsToolsBoxToggleDrawer } from './tools-box/ReportsToolsBoxToggleDrawer'
import { ReportsToolsBoxDrawer } from './tools-box/ReportsToolsBoxDrawer'

const ReportsIndicatorsRightToolbar: FC<any> = ({ removeFromCardList, removeFromTableList }) => {

  return (
    <>
      <div className='engage-toolbar d-flex position-fixed px-5 fw-bolder zindex-2 top-50 end-0 transform-90 mt-20 gap-2'>
        <ReportsToolsBoxToggleDrawer />
      </div>

      <ReportsToolsBoxDrawer removeFromCardList={removeFromCardList} removeFromTableList={removeFromTableList} />
    </>
  )
}

export { ReportsIndicatorsRightToolbar }
