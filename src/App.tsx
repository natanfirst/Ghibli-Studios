import React from "react";
import { AppRoutes } from "./routes/routes";
import GlobalStyles from "./styles/global";

import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
      <GlobalStyles />
    </Provider>
  );
};

export default App;
