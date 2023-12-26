import React, { FC } from 'react'
import { useIntl } from 'react-intl'

const TaskOverTime: FC = () => {

    const intl = useIntl()

  return (
<div className="col-md-6">
<div>
<div className="my-5">
    <div className="card card-xl-stretch h-350px  py-3  ">
        <div className="card-header px-0 border-0 pb-2 mb-4 mx-5 ">
            <h3 className="card-title align-items-start flex-column">
                <span className=" fw-bolder fs-4 mb-1  mx-0">Task Over Time</span>

                <div className='d-flex justify-content-between w-100'>
                <span className="mt-1 fw-semibold fs-6 text-success">مكتمل</span>
                <span className="mt-1 fw-semibold fs-6 text-primary">غير مكتمل</span>
                </div>
            </h3>
            <div className="card-toolbar card-diff-toolbar w-150px">
                <select className="form-select form-select-lg mb-3 bg-light" aria-label=".form-select-lg example">
                <option selected>الأختيار الأول</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
       
    </div>
    </div>
</div>
</div>
  )
}
export { TaskOverTime }
