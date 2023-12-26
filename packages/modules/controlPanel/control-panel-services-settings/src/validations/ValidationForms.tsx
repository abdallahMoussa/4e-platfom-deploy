import {object, string, InferType, ref, number} from 'yup'
import differenceInDays from 'date-fns/differenceInDays'
import * as Yup from 'yup';

export const ValidationFormsSchema = Yup.object({
  noteNameAr: string().required('noteNameArIsRequired'),
  noteNameEn: string().required('noteNameEnIsRequired'),
  // organizationHierarchyId: string().required(),
  description: string().required('descriptionIsRequired'),
  icon: string().required('iconIsRequired'), 
  url: string().required('urlIsRequired'),
  color:number().required('colorIsRequired'),
  noteTypeId:string().required('urlIsRequired'),
  parentId:string().notRequired() 
})


export type ValidationFormsProps = InferType<typeof ValidationFormsSchema>