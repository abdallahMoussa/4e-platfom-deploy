import "./App.css";
import store from "./app/features/store";
import { Provider } from "react-redux";
import ToolbarProvider from "./app/layout/core/ToolbarProvider";
import { AdminPanelHierararchy } from "./app/admin-panel-hierararchy";

function App() {
  return (
    <div className="App">
    
<Provider store={store}>
      <ToolbarProvider>
        <AdminPanelHierararchy />
      </ToolbarProvider>
</Provider>
  
     
    </div>
  );
}

export default App;
