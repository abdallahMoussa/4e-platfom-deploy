import React, { Fragment } from "react";
import "./App.css";
import UserProfileRoutes from "./UserProfileRoutes";
import { Provider } from "react-redux";
import store from "./user-profile/features/store";
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <UserProfileRoutes />
      </Provider>
    </Fragment>
  );
}

export default App;
