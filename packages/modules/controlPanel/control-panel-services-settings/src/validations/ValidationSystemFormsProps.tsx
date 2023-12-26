import {object, string, InferType, ref, number} from 'yup'
import differenceInDays from 'date-fns/differenceInDays'
import * as Yup from 'yup';

export const ValidationSFormsSchema = Yup.object({
  noteNameAr: string().required('noteNameArIsRequired'),
  noteNameEn: string().required('noteNameEnIsRequired'),
  // organizationHierarchyId: string().required(),
  description: string().required('descriptionIsRequired'),
  icon: string().required('iconIsRequired'), 
  url: string().required('urlIsRequired'),
  color:number().required('colorIsRequired')
})


export type ValidationSystemFormsProps = InferType<typeof ValidationSFormsSchema>