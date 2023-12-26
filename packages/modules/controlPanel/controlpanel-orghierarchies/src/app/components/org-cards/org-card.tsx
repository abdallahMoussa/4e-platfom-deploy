import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { OrgActions } from "../org-actions";
import { OrgHierarchyModel } from "../../app/models/org-model";

type ActionProps = {
  org: OrgHierarchyModel;
};

export const OrgCard: FC<ActionProps> = ({ org }) => {
  const intl = useIntl();

  let [showHierarchy, setShowHierarchy] = useState<{ [key: number]: boolean }>({});

  const toggleShowChildHierarchy = (id: number) => {
    setShowHierarchy((prevState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  };
  return (
    <>
      {org?.children.map((child: any) => {
        return (
          <li
            className="branch fs-5 mb-7"
            onClick={() => {
              toggleShowChildHierarchy(child?.id);
            }}
            key={child.id}
          >
            <label className="bg-light w-100 px-2 position-relative d-flex justify-content-between align-items-center my-3">
              {intl.locale == "ar" ? child.nameAr : child.nameEn}
              <OrgActions parentOrgId={child?.parentId} orgId={child?.id} />
            </label>
            {showHierarchy[child?.id] && (
              <ul>
                {child?.children.map((nestedchild: any) => {
                  return <OrgCard org={nestedchild} key={"org" + nestedchild?.id} />;
                })}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};
