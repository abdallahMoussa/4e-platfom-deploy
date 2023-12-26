import { useEffect, useState } from "react";
import { OrgActions } from "../org-actions";
import { useDispatch, useSelector } from "react-redux";
import { OrgHierarchyModel } from "../../models/org-model";
import { fetchOrgManager } from "../../features/orghierarchies-slice/org-manager-slice";

const OrgTree: React.FC<{ org: OrgHierarchyModel }> = ({ org }) => {
    const [showHierarchy, setShowHierarchy] = useState<boolean>(false);
 
    const toggleHierarchy = () => {
      setShowHierarchy((prevState:boolean) => !prevState);
    };
    const dispatch = useDispatch();
    useEffect(() => {
     
    //  dispatch(fetchOrgManager(org.id) as any);
    }, [org]);

    return (
      <div key={org.id} className="tree_main mb-5">
        <ul
          id={`tree${org.id}`}
          className="tree tree3 list-unstyled"
        >
          <div
            className="bg-light fs-5 mx-2 mb-7 d-flex justify-content-between align-items-center"
            onClick={toggleHierarchy}
          >
            <div>
              <i className="bi bi-diagram-3 mx-3 fs-1"></i>
              <a className="basic-item" role="button">
                {org.nameAr}
              </a>
            </div>
            {/* Assuming OrgActions requires an 'id' prop */}
            <OrgActions id={org.id} />
          </div>
          {showHierarchy && org.children.length > 0 && (
            <li className="basic-branch">
              <ul className="list-unstyled">
                {org.children.map((subOrg) => (
                  <OrgTree key={subOrg.id} org={subOrg} />
                ))}
              </ul>
            </li>
          )}
        </ul>
      </div>
    );
  };
  export default OrgTree;