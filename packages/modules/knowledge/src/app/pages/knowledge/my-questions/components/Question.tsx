import { FC } from 'react'
import { toAbsoluteUrl } from '../../../../helpers'
import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom'

interface Props {
  question: any
}

const Question: FC<Props> = ({question}) => {
  const intl = useIntl()
  const navigate = useNavigate()
  return (
    <div className="card shadow-sm p-4 rounded pb-1 cursor-pointer" onClick={() => navigate('/knowledge-my-question-details') }>
      <div className="card-body p-0">
        <div className="d-flex justify-content-between mb-10">
          <div className="d-flex gap-5">
            <div className="symbol symbol-75px">
              <img alt="Pic" src={toAbsoluteUrl(`/media/avatars/${question?.avatar}`)}/>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span className="mb-1 fs-5">{question?.name}</span>
              <span className="mb-3 text-gray-400">{question?.job}</span>
              <span className="text-gray-700">{question?.managmentType}</span>
            </div>
          </div>
          <div className="h-auto">
            {question?.questionType === 'new' ? (
              <div className='text-success rounded badgex badge-light-success px-5 py-1'>{intl.formatMessage({ id: "New"})}</div>
              ) : (
              <p className='text-warning rounded badgex badge-light-warning px-3 py-1'>{intl.formatMessage({ id: "Answered"})}</p>
            )}
          </div>
        </div>
        <p className="fs-3">{question?.questionContent}</p>
        <p className="fs-5 text-end w-100 text-muted">{question?.questionDate}</p>
      </div>
    </div>
  )
}

export default Question