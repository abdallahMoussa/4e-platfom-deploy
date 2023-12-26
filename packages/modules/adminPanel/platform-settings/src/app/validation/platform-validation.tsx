import {object, string, InferType, ref, number} from 'yup'
import differenceInDays from 'date-fns/differenceInDays'

export const platformSchema = object({
  websiteTitle: string().required('websiteTitleIsRequired'),
  websiteUrl: string().required('websiteUrlIsRequired'),
  websiteDescription: string().required('websiteDescriptionIsRequired'),
  startDate: string()
  .required('startDateIsRequired')
  .test({
  test: (startDate) => {
    if (startDate == null || startDate == 'Invalid Date') return true
    else if (differenceInDays(new Date(), new Date(startDate)) < 1) return true
    else return false
  },
  message: 'startDateMustBeValid',
}),
endDate: string()
  .required('endDateIsRequired')
  .test({
  test: (endDate) => {
    if (endDate == null || endDate == 'Invalid Date') return true
    else if (differenceInDays(new Date(), new Date(endDate)) < 1) return true
    else return false
  },
  message: 'endDateMustBeValid',
}),
})

export type platformProps = InferType<typeof platformSchema>
