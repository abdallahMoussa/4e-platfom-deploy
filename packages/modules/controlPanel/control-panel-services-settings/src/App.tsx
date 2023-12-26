import "./App.css";
import CpanelRoutes from "./Routes/CpanelRoutes";
import ToolbarProvider from "./layout/core/ToolbarProvider";
import { Provider } from "react-redux";
import store from "./store/workspaceStore";

function ControlPanelServicesSettings() {
  return (
    <Provider store={store}>
      <ToolbarProvider>
        <CpanelRoutes />
      </ToolbarProvider>
    </Provider>
  );
}

export default ControlPanelServicesSettings;
