import "./App.css";
import CpanelUsersRoutes from "./CpanelUsersRoutes";
import { Provider } from "react-redux";
import store from "./app/features/store";
function CpanelUsers() {
  return (
    <Provider store={store}>
      <CpanelUsersRoutes />
    </Provider>
  );
}

export default CpanelUsers;
