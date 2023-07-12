import PreviewPage from "./PreviewPage/PreviewPage";
import React, { useState } from "react";
import ConfigPage from "./Config";
import "./styles/Widget.css";

const FloatingWidget = () => {
  return (
    <>
      <ConfigPage></ConfigPage>
      <PreviewPage />
    </>
  );
};

export default FloatingWidget;
