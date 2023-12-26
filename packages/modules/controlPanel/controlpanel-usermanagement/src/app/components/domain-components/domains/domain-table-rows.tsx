import { FC, useEffect, useState } from "react";
import { DomainsTableRow } from "./domain-table-row";
import { useSearchParams } from "react-router-dom";
import { RootState, useAppSelector } from "../../../features/store";
import { fetchDomains } from "../../../features/domains-slice/domainsSlice";
import { useDispatch,useSelector } from "react-redux";
import { DomainsModel } from "../../../models/domain/domain-model";

 
export const DomainsTableRows: FC = () => {

 let [searchParams,setSearchParams]=useSearchParams()
 let domains=useSelector((state:RootState)=>{return state?.domains})
 const dispatch = useDispatch();

 useEffect(()=>{
    if (!searchParams.get("pageNumber")) {
       searchParams.set("pageNumber", "1");
       setSearchParams(searchParams);
     }
     if (!searchParams.get("pageSize")) {
       searchParams.set("pageSize", "10");
       setSearchParams(searchParams);
     }
     let params: any = {
       pageSize: searchParams.get("pageSize"),
       pageNumber: searchParams.get("pageNumber"),
     };
     dispatch(fetchDomains(params) as any);
 },[searchParams.get("pageSize"), searchParams.get("pageNumber")])

    return (
        <>
          <tbody>
               {domains?.data?.map((item:DomainsModel) => (
               <DomainsTableRow domain={item} />
               ))}
            </tbody>
        </>
    )
}