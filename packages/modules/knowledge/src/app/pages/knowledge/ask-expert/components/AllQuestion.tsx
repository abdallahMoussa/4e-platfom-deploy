import { useIntl } from 'react-intl'
import { QuestionCard } from "./QuestionsCard";
import { Link } from "react-router-dom";

const AllQuestion = () => {
    const intl = useIntl()
return(
    <div className="my-10">
    <div className="card card-xl-stretch mb-xl-8">
        <div className="card-body py-3">
        <div className='d-flex justify-content-end align-items-center mb-5'>
        <div className='border-0 w-150px'>
          <Link
                  to="/knowledge-expert"
              className="btn btn-success mx-1 text-center me-1"
            >
              {intl.formatMessage({ id: "ViewExperts" })}
            </Link>
        </div>
        </div>
        <div className="row g-4">
        <Link to="/knowledge-question-details" >
        <div className='d-flex flex-column'>
            <div className='d-flex justify-content-between align-items-start mb-3'>
            <div className='d-flex'>
                <div className='h-45px w-45px'>
                    <img  
                        src="/media/avatars/300-3.jpg"
                    className='w-100' alt="profilePicture" />
                </div>
                <div className='d-flex flex-column mx-3'>
                        <div className='fs-4 text-gray-800 fw-bolder mb-0'
                        >سعودي الشهري</div>
                        <span className='text-start text-gray-500'>
                        25 مارس - 2.45 مساء
                        </span>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-between align-items-start align-items-md-center flex-column flex-md-row my-2'>
            <div 
            className='fs-4 text-gray-800 fw-bolder mb-0'>
                ما هي عوامل النجاح المنظمه وكيفيه التغلب علي المشاكل ؟
            </div>
            <div className='d-flex mt-3 mt-md-0'>
                <div className='border border-1  mx-md-2 px-2 py-1 d-flex align-items-center text-gray-500 cursor-pointer'>
                    <span className='mx-1'> <i className="fa-regular fa-comments mx-1 fs-4 fa-fw"></i>
                    </span> 
                    <span className='mx-1'>15</span>
                </div>
                <div className='border border-1 mx-3 mx-md-2 px-2 py-1 d-flex align-items-center text-gray-500 cursor-pointer'>
                    <span 
                    className='mx-1'> <i className="fa-solid fa-print mx-1 fs-3 fa-fw"></i>
                    </span>
                    <span className='mx-1'>15</span>
                </div>
                <div className='border border-1 mx-3 mx-md-2 px-2 py-1 d-flex align-items-center text-gray-500 cursor-pointer'>
                    <span 
                    className='mx-1'> <i className="fa-solid fa-share mx-1 fs-3 fa-fw"></i>
                    </span>
                    <span className='mx-1'>15</span>
                </div>
            </div>
        </div>
        </div>
        </Link>
      </div>
    </div> 
  </div>
  <QuestionCard />
  </div>
);
}

export {AllQuestion}