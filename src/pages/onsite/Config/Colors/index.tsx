import { Text, Divider } from "@shopify/polaris";
import ColorPickerWrapper from "./ColorPickerWrapper";

const Colors = () => {
  return (
    <>
      <Text variant="headingMd" as="h2">
        Header
      </Text>
      <ColorPickerWrapper
        label="Background"
        configItem="widget_color_header_background"
      />
      <ColorPickerWrapper
        label="Text Color"
        configItem="widget_color_header_text"
      />
      <Divider />
      <br />
      <Text variant="headingMd" as="h2">
        Texts
      </Text>
      <ColorPickerWrapper label="Title" configItem="widget_color_text_title" />
      <ColorPickerWrapper
        label="Description"
        configItem="widget_color_text_description"
      />
      <Divider />
      <br />
      <Text variant="headingMd" as="h2">
        Button
      </Text>
      <ColorPickerWrapper
        label="Background"
        configItem="widget_color_button_background"
      />
      <ColorPickerWrapper
        label="Text Color"
        configItem="widget_color_button_text"
      />
      <Divider />
      <br />
      <Text variant="headingMd" as="h2">
        Launcher Button
      </Text>
      <ColorPickerWrapper
        label="Background"
        configItem="widget_color_widget_button_background"
      />
      <ColorPickerWrapper
        label="Text Color"
        configItem="widget_color_widget_button_text"
      />
      <Divider />
      <br />
      <Text variant="headingMd" as="h2">
        Others
      </Text>
      <ColorPickerWrapper
        label="Link Color"
        configItem="widget_color_others_link_color"
      />
      <ColorPickerWrapper
        label="Icon Color"
        configItem="widget_color_others_icon_color"
      />
    </>
  );
};
export default Colors;
