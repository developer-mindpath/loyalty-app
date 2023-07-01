import { Text, Divider } from "@shopify/polaris";
import ColorPickerWrapper from "./ColorPickerWrapper";

const Colors = () => {
  return (
    <>
      <Text variant="headingMd" as="h2">
        Header
      </Text>
      <ColorPickerWrapper label="Background" configItem="headerBg" />
      <ColorPickerWrapper label="Text Color" configItem="headerText" />
      <Divider />
      <br />
      <Text variant="headingMd" as="h2">
        Texts
      </Text>
      <ColorPickerWrapper label="Title" configItem="textsTitle" />
      <ColorPickerWrapper label="Description" configItem="textsDescription" />
      <Divider />
      <br />
      <Text variant="headingMd" as="h2">
        Button
      </Text>
      <ColorPickerWrapper label="Background" configItem="buttonBg" />
      <ColorPickerWrapper label="Text Color" configItem="buttonColor" />
      <Divider />
      <br />
      <Text variant="headingMd" as="h2">
        Launcher Button
      </Text>
      <ColorPickerWrapper label="Background" configItem="widgetBg" />
      <ColorPickerWrapper label="Text Color" configItem="widgetColor" />
      <Divider />
      <br />
      <Text variant="headingMd" as="h2">
        Others
      </Text>
      <ColorPickerWrapper label="Link Color" configItem="linkColor" />
      <ColorPickerWrapper label="Icon Color" configItem="iconColor" />
    </>
  );
};
export default Colors;
