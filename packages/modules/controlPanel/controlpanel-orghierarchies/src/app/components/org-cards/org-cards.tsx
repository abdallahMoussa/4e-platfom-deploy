import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { OrgActions } from "../org-actions";
import { OrgCard } from "./org-card";
import { OrgHierarchyModel } from "../../../../../models/org-hierarchy/org-hierarchy-model";
import { OrgSeondaryActions } from "../org-secondary-actions";

type ActionProps = {
  org: OrgHierarchyModel;
};

export const OrgCards: FC<ActionProps> = ({ org }) => {
  const intl = useIntl();
  let [showHierarchy, setShowHierarchy] = useState<{ [key: number]: boolean }>({});
  const { updateSelectedOrgHieraracy, selectedOrgHieraracy, updateMembers, setDeleteDepartmentShow } = useOrgHieraracy();
  const toggleShowChildHierarchy = (id: number) => {
    setShowHierarchy((prevState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  };
  useEffect(() => updateMembers([]), [selectedOrgHieraracy]);
  useEffect(() => {
  if (selectedOrgHieraracy) {
    setDeleteDepartmentShow(false)
  }}, 
  [selectedOrgHieraracy]);

  return (
    <>
      <div className="  tree tree3 list-unstyled" key={org?.id}>
        <ul id={org?.id.toString()} className="tree tree3 list-unstyled" style={{ marginBottom: showHierarchy[org.id] ? "4.5rem" : "" }}>
          <div className={" fs-5 mb-7 d-flex justify-content-between align-items-center hierarcyBtn " + (org?.id == selectedOrgHieraracy?.id ? " active" : "")}>
            <div
              role="button"
              onClick={() => {
                toggleShowChildHierarchy(org.id);

                updateSelectedOrgHieraracy(org);
              }}
            >
              <i className="bi bi-diagram-3 mx-3 fs-1"></i>
              <a className="basic-item" role="button">
                {intl.locale == "ar" ? org.nameAr : org.nameEn} -{" "}
               {intl.locale == "ar" ? org.categoryNameAr : org.categoryNameEn}

              </a>
            </div>
            {org?.parentId == null ? <OrgActions parentOrgId={org?.parentId} orgId={org?.id} /> : <OrgSeondaryActions parentOrgId={org?.parentId} orgId={org?.id} />}
          </div>
          {showHierarchy[org?.id] && (
            <>
              {org?.children.map((child: any) => {
                return (
                  <>
                    <li className="basic-branch fs-5 mb-7">
                      <ul className="list-unstyled">
                        <OrgCards org={child} key={"org" + child?.id} />
                      </ul>
                    </li>
                  </>
                );
              })}
            </>
          )}
        </ul>
      </div>
    </>
  );
};
