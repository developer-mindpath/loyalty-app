import { AppProvider, Frame } from "@shopify/polaris";
import SetRule from "./referal";

export default function App() {
  return (
    <AppProvider i18n={{}}>
      <Frame>
        <SetRule />
      </Frame>
    </AppProvider>
  );
}
