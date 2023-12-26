import React from 'react'
import Question from "./Question"
import { useIntl } from 'react-intl'
import { SystemPagination } from '../../../partials/SystemPagination'

const Questions = () => {
  const intl = useIntl()
  const questions = [
    {
      avatar: "300-3.jpg",
      name: "سعودى الشهرى",
      job: "مهندس برمجيات",
      managmentType: "اداره الشئون القانونيه",
      questionType: "new",
      questionContent: "ما هي عوامل نجاح المنظومه و كيفية التغلب علي المشاكل؟",
      questionDate: "25 مارس - 2:45 مساء",
    },
    {
      avatar: "300-3.jpg",
      name: "سعودى الشهرى",
      job: "مهندس برمجيات",
      managmentType: "اداره الشئون القانونيه",
      questionType: "new",
      questionContent: "ما هي عوامل نجاح المنظومه و كيفية التغلب علي المشاكل؟",
      questionDate: "25 مارس - 2:45 مساء",
    },
    {
      avatar: "300-3.jpg",
      name: "سعودى الشهرى",
      job: "مهندس برمجيات",
      managmentType: "اداره الشئون القانونيه",
      questionType: "new",
      questionContent: "ما هي عوامل نجاح المنظومه و كيفية التغلب علي المشاكل؟",
      questionDate: "25 مارس - 2:45 مساء",
    },
    {
      avatar: "300-3.jpg",
      name: "سعودى الشهرى",
      job: "مهندس برمجيات",
      managmentType: "اداره الشئون القانونيه",
      questionType: "answered",
      questionContent: "ما هي عوامل نجاح المنظومه و كيفية التغلب علي المشاكل؟",
      questionDate: "25 مارس - 2:45 مساء",
    },
    {
      avatar: "300-3.jpg",
      name: "سعودى الشهرى",
      job: "مهندس برمجيات",
      managmentType: "اداره الشئون القانونيه",
      questionType: "answered",
      questionContent: "ما هي عوامل نجاح المنظومه و كيفية التغلب علي المشاكل؟",
      questionDate: "25 مارس - 2:45 مساء",
    },
    {
      avatar: "300-3.jpg",
      name: "سعودى الشهرى",
      job: "مهندس برمجيات",
      managmentType: "اداره الشئون القانونيه",
      questionType: "new",
      questionContent: "ما هي عوامل نجاح المنظومه و كيفية التغلب علي المشاكل؟",
      questionDate: "25 مارس - 2:45 مساء",
    },
  ]

  return (
    <div className="card card-custom card-stretch gutter-b">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-5">
          <span className="text-dark  card-label fw-bolder fs-5">{intl.formatMessage({ id: "Questions"})}</span>
          <span className="text-primary  card-label fw-bolder fs-5">{intl.formatMessage({ id: "QuestionsTotalNumber"})} : 50 </span>
        </div>
        <div className="row gx-10 gy-10">
          {questions?.map((question, index) => (
            <div key={index} className="col-md-6">
              <Question question={question}/>
            </div>
          ))}
        </div>
        <SystemPagination/>
      </div>
    </div>
  )
}

export default Questions