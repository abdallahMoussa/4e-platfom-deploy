import { FC } from "react";
import { AdminPanelViewallcardsToolbarAdd } from "./toolbar/AdminPanelViewallcardsToolbarAdd";
import { RightToolbar } from "./partials/RightToolbar";
import { ViewAllcardsAddCard } from "./components/AddCard";

const AdminPanelViewallcardsAddCard: FC = () => {
  return (
    <>
      <AdminPanelViewallcardsToolbarAdd />
      <ViewAllcardsAddCard />
      <RightToolbar />
    </>
  );
};

export { AdminPanelViewallcardsAddCard };
