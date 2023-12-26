import { FC } from "react";
import { AdminPanelViewallcardsToolbarEdit } from "./toolbar/AdminPanelViewallcardsToolbarEdit";
import { RightToolbar } from "./partials/RightToolbar";
import { ViewAllcardsEditCard } from "./components/EditCard";

const AdminPanelViewallcardsEditCard: FC = () => {
  return (
    <>
      <AdminPanelViewallcardsToolbarEdit />
      <ViewAllcardsEditCard />
      <RightToolbar />
    </>
  );
};

export { AdminPanelViewallcardsEditCard };
