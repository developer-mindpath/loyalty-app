import { useState, useContext } from "react";

import {
  Page,
  Card,
  Layout,
  Button,
  Icon,
  ActionList,
  Text,
} from "@shopify/polaris";
import {
  MobileChevronMajor,
  ChevronRightMinor,
  ColorsMajor,
  SidebarLeftMajor,
  SlideshowMajor,
  CodeMajor,
  CircleInformationMajor,
  HideMinor,
  DragHandleMinor,
  TypeMinor,
  ButtonMinor,
  FaviconMajor,
} from "@shopify/polaris-icons";

import Widget from "../Widg";
import Colors from "./Colors";
import Fonts from "./Fonts";
import Hide from "./Hide";
import Icons from "./Icons";
import Banner from "./Banner";
import Corners from "./Corners";
import CustomCSS from "./CustomCSS";
import RemoveBranding from "./RemoveBranding";
import Order from "./Order";
import WidgetText from "./WidgetText";
import "../styles/Widget.css";

import { ConfigContext } from "../../../../App";
// import { ConfigContext } from '../../Widget';
import WidgetButton from "./WidgetButton";

const pageHeaders = {
  nav: "Floating Widget",
  colors: "Colors",
  corners: "Corners",
  banner: "Banner Images",
  css: "Custom CSS",
  icons: "Custom Icons",
  hide: "Hide Widget",
  hideBranding: "Remove Branding",
  order: "Rearrange Panels Order",
  fonts: "Fonts",
  text: "Widget Text",
  button: "Widget Button",
};

const ConfigPage = () => {
  const [activePage, setActivePage] = useState("nav");
  const { config, setConfig } = useContext(ConfigContext);

  return (
    <Page
      title={
        <>
          {activePage !== "nav" && (
            <Button onClick={() => setActivePage("nav")}>
              <Icon source={MobileChevronMajor} color="base" />
            </Button>
          )}{" "}
          &nbsp; {pageHeaders[activePage]}
        </>
      }
      fullWidth
    >
      <Layout>
        <Layout.Section oneHalf>
          {activePage === "nav" && (
            <Card>
              <Card.Section>
                <Text variant="headingMd" as="h2">
                  Widget configuration
                </Text>
                <ActionList
                  actionRole="menuitem"
                  items={[
                    {
                      content: "Colors",
                      prefix: <Icon source={ColorsMajor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("colors"),
                    },
                    {
                      content: "Corners",
                      prefix: <Icon source={SidebarLeftMajor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("corners"),
                    },
                    {
                      content: "Banner Images",
                      prefix: <Icon source={SlideshowMajor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("banner"),
                    },
                    {
                      content: "Custom CSS",
                      prefix: <Icon source={CodeMajor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("css"),
                    },
                    {
                      content: "Custom Icons",
                      prefix: <Icon source={CircleInformationMajor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("icons"),
                    },
                    {
                      content: "Hide Widget",
                      prefix: <Icon source={HideMinor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("hide"),
                    },
                    {
                      content: "Remove Branding",
                      prefix: <Icon source={FaviconMajor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("hideBranding"),
                    },
                    {
                      content: "Rearrange Panels Order",
                      prefix: <Icon source={DragHandleMinor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("order"),
                    },
                    {
                      content: "Fonts",
                      prefix: <Icon source={TypeMinor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("fonts"),
                    },
                  ]}
                />
              </Card.Section>
              <Card.Section>
                <Text variant="headingMd" as="h2">
                  Additional settings
                </Text>
                <Text variant="bodyMd" as="p" color="subdued">
                  Update the widget text or the design of the launcher button
                </Text>
                <ActionList
                  actionRole="menuitem"
                  items={[
                    {
                      content: "Widget Text",
                      prefix: <Icon source={TypeMinor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("text"),
                    },
                    {
                      content: "Widget Button",
                      prefix: <Icon source={ButtonMinor} />,
                      suffix: <Icon source={ChevronRightMinor} />,
                      onAction: () => setActivePage("button"),
                    },
                  ]}
                />
              </Card.Section>
            </Card>
          )}
          {activePage !== "nav" && (
            <Card sectioned>
              {activePage === "colors" && <Colors />}
              {activePage === "corners" && (
                <Corners config={config} setConfig={setConfig} />
              )}
              {activePage === "banner" && <Banner />}
              {activePage === "css" && <CustomCSS />}
              {activePage === "icons" && <Icons />}
              {activePage === "hide" && <Hide />}
              {activePage === "hideBranding" && <RemoveBranding />}
              {activePage === "order" && <Order />}
              {activePage === "fonts" && <Fonts />}
              {activePage === "text" && <WidgetText />}
              {activePage === "button" && <WidgetButton />}
            </Card>
          )}
        </Layout.Section>
        <Layout.Section oneHalf>
          <Widget config={config} setConfig={setConfig} />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default ConfigPage;
