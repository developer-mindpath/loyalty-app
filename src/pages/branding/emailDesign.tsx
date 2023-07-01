import PreviewPage from "./PreviewPage/PreviewPage";
import React, { useState } from "react";
import ConfigPage from "./Config";
import "./styles/Widget.css";

export const ConfigContext = React.createContext(null);

const App = () => {
  return (
    // <ConfigContext.Provider value={{ config: config, setConfig: setConfig }}>
    <>
      <ConfigPage></ConfigPage>
      <PreviewPage />
    </>
    // </ConfigContext.Provider>
  );
};

export default App;
