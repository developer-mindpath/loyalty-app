import ReactDOMClient from "react-dom/client";
import "@shopify/polaris/build/esm/styles.css";
import "react-toggle/style.css";
import RouterComponent from "./router";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOMClient.createRoot(rootElement);

root.render(<RouterComponent />);
