import "@shopify/polaris/build/esm/styles.css";
import * as ReactDOMClient from "react-dom/client";
import App from "./app";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOMClient.createRoot(rootElement);

root.render(<App />);
