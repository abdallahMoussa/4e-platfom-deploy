import { FC } from "react";

const ViewallcardsCardDetailsTableDepartmentSettings: FC = () => {
  return (
    <tr>
      <td className="text-center">
        <span className="text-primary">ادارة المستخدمين</span>
      </td>
      <td className="text-center">
        {" "}
        <span className="text-gray-600">محمد احمد</span>
      </td>
      <td className="text-center">
        <div className="d-flex justify-content-center">
        <div className="mx-1 p-1"><i className="fas fa-check fa-fw fa-lg text-success"></i></div>
        </div>
      </td>
      <td className="text-center">
        <div className="d-flex justify-content-center">
        <div className="mx-1 p-1"><i className="fas fa-check fa-fw fa-lg text-success"></i></div>
        </div>
      </td>
      <td className="text-center">
        <div className="d-flex justify-content-center">
        <div className="mx-1 p-1"><i className="fas fa-times fa-fw fa-lg text-danger"></i></div>
        </div>
      </td>
      <td className="text-center">
        <div className="d-flex justify-content-center">
        <div className="mx-1 p-1"><i className="fas fa-check fa-fw fa-lg text-success"></i></div>
        </div>
      </td>
    </tr>
  );
};

export { ViewallcardsCardDetailsTableDepartmentSettings };
