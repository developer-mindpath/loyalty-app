import Launcher from "@/pages/onsite/Widg/Launcher";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import {
  getWidgetButtonSetting,
  floatingWidget,
} from "@/redux/reducers/floatingWidget";
import {
  Select,
  TextField,
  Divider,
  Text,
  Checkbox,
  VerticalStack,
  HorizontalStack,
  DropZone,
  Thumbnail,
} from "@shopify/polaris";
import { NoteMinor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";

export const DesktopWidgetButton = () => {
  const widgetButton = useAppSelector(getWidgetButtonSetting);
  const dispatch = useAppDispatch();
  const {
    desktop_placement,
    desktop_padding_side_padding,
    desktop_padding_bottom_padding,
    desktop_widget_button_type,
    desktop_widget_button_shape,
  } = widgetButton;

  //TODO - add this from api
  const [text, setText] = useState("");
  const [icon, setIcon] = useState("");
  const [file, setFile] = useState<File>();
  const [customIcon, setCustomIcon] = useState(false);

  const handlePlacement = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetButton({
        ...widgetButton,
        desktop_placement: value,
      })
    );
  }, []);

  const handlePaddingSide = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetButton({
        ...widgetButton,
        desktop_padding_side_padding: parseInt(value),
      })
    );
  }, []);
  const handlePaddingBottom = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetButton({
        ...widgetButton,
        desktop_padding_bottom_padding: parseInt(value),
      })
    );
  }, []);

  const handleType = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetButton({
        ...widgetButton,
        desktop_widget_button_type: value,
      })
    );
  }, []);

  const handleText = useCallback((value: string) => {
    setText(value);
    // setConfig((prev) => ({ ...prev, launcherText: value }));
  }, []);

  const handleRadius = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetButton({
        ...widgetButton,
        desktop_widget_button_shape: value,
      })
    );
  }, []);

  const handleChangeIconType = useCallback(
    (key: string) => () => {
      setCustomIcon(key === "custom");
    },
    []
  );
  const handleChangeIcon = useCallback(
    (key: string) => () => {
      setIcon(key);
    },
    []
  );

  const handleDropZoneDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) => {
      setFile(acceptedFiles[0]);
      // dispatch(
      //     floatingWidget.setWidgetButton({
      //       ...widgetButton,
      //       desktop_widget_icon: acceptedFiles[0],
      //     })
      //   );
    },
    []
  );
  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

  const fileUpload = !file && (
    <DropZone.FileUpload actionHint="Recommended Size: 32px by 32px" />
  );
  const uploadedFile = file && (
    <VerticalStack>
      <Thumbnail
        size="small"
        alt={file.name}
        source={
          validImageTypes.includes(file.type)
            ? window.URL.createObjectURL(file)
            : NoteMinor
        }
      />
      <div>
        {file.name}{" "}
        <Text variant="bodySm" as="p">
          {file.size} bytes
        </Text>
      </div>
    </VerticalStack>
  );

  const placementOptions = [
    { label: "Left", value: "left" },
    { label: "Right", value: "right" },
  ];
  const typeOptions = [
    { label: "Icon with text", value: "icontext" },
    { label: "Icon", value: "icon" },
    { label: "Text", value: "text" },
  ];
  const shapeOptions = [
    { label: "Circle", value: "50" },
    { label: "Rounded", value: "10" },
    { label: "Square", value: "0" },
  ];
  return (
    <>
      <Select
        label="Placement"
        options={placementOptions}
        onChange={handlePlacement}
        value={desktop_placement}
      />
      <Text variant="bodyMd" as="p" color="subdued">
        Set the widget button to the left or right of the screen.
      </Text>
      <br />
      <TextField
        autoComplete="off"
        label="Side Padding"
        type="number"
        value={desktop_padding_side_padding + ""}
        onChange={handlePaddingSide}
        helpText="Adjust the position of the widget button from the edge of the screen."
      />
      <TextField
        autoComplete="off"
        label="Bottom Padding"
        type="number"
        value={desktop_padding_bottom_padding + ""}
        onChange={handlePaddingBottom}
        helpText="Adjust the position of the widget button from the edge of the screen."
      />
      <br />
      <Divider />
      <br />
      <Select
        label="Widget Button Type"
        options={typeOptions}
        onChange={handleType}
        value={desktop_widget_button_type}
      />
      <Text variant="bodyMd" as="p" color="subdued">
        Customize your widget button type to match your brand.
      </Text>
      <br />
      {(desktop_widget_button_type === "icontext" ||
        desktop_widget_button_type === "text") && (
        <TextField
          autoComplete="off"
          label="Text"
          type="text"
          value={text}
          onChange={handleText}
        />
      )}

      <br />
      <Divider />
      <br />
      <Select
        label="Widget Button Shape"
        options={shapeOptions}
        onChange={handleRadius}
        value={desktop_widget_button_shape}
      />
      <Text variant="bodyMd" as="p" color="subdued">
        Set the widget button container shape.
      </Text>
      <br />
      <Divider />
      <Text variant="headingMd" as="p" color="subdued">
        Icon
      </Text>
      <VerticalStack>
        <Checkbox
          label="Default Icon"
          checked={!customIcon}
          onChange={handleChangeIconType("default")}
        />
        <HorizontalStack>
          {!customIcon && (
            <>
              <Checkbox
                label="Gift"
                checked={icon === "gift"}
                onChange={handleChangeIcon("gift")}
              />
              <Checkbox
                label="star"
                checked={icon === "star"}
                onChange={handleChangeIcon("star")}
              />
            </>
          )}
        </HorizontalStack>
        <Checkbox
          label="Custom Icon"
          checked={customIcon}
          onChange={handleChangeIconType("custom")}
        />
        {customIcon && (
          <DropZone onDrop={handleDropZoneDrop}>
            {uploadedFile}
            {fileUpload}
          </DropZone>
        )}
      </VerticalStack>
      <br />
      <Text variant="bodyLg" as="p">
        Preview:
      </Text>
      <br />
      <Launcher preview />
    </>
  );
};

export default DesktopWidgetButton;
