import React, {Fragment} from 'react'
const Progressbar: React.FC = () => {
  return (
    <Fragment>
      <div className='progress mb-4 mt-4' style={{height: '18px'}}>
        <div className='progress-bar' role='progressbar' style={{width: '40%'}}>
          60%
        </div>
      </div>
    </Fragment>
  )
}

export default Progressbar
