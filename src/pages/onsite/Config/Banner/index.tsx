import React, { useCallback, useState } from "react";
import {
  DropZone,
  HorizontalStack,
  LegacyStack,
  Thumbnail,
  Text,
} from "@shopify/polaris";
import { NoteMinor } from "@shopify/polaris-icons";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  floatingWidget,
  getWidgetSettings,
} from "@/redux/reducers/floatingWidget";

//TODO - refactor dropzone code
const Banner = () => {
  const widget = useAppSelector(getWidgetSettings);
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File>();
  const [iconFile, setIconFile] = useState<File>();

  const handleBannerImageDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) => {
      setImageFile(acceptedFiles[0]),
        dispatch(
          floatingWidget.setWidget({
            ...widget,
            widget_banner_image: acceptedFiles[0],
          })
        );
    },
    []
  );

  const handleBannerIconDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) => {
      setIconFile(acceptedFiles[0]);
      dispatch(
        floatingWidget.setWidget({
          ...widget,
          widget_brand_icon: acceptedFiles[0],
        })
      );
    },
    []
  );

  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
  const uploadedIconFile = iconFile && (
    <LegacyStack>
      <Thumbnail
        size="small"
        alt={iconFile.name}
        source={
          validImageTypes.includes(iconFile.type)
            ? window.URL.createObjectURL(iconFile)
            : NoteMinor
        }
      />
      <div>
        {iconFile.name}{" "}
        <Text variant="bodySm" as="p">
          {iconFile.size} bytes
        </Text>
      </div>
    </LegacyStack>
  );
  const uploadedImageFile = imageFile && (
    <LegacyStack>
      <Thumbnail
        size="small"
        alt={imageFile.name}
        source={
          validImageTypes.includes(imageFile.type)
            ? window.URL.createObjectURL(imageFile)
            : NoteMinor
        }
      />
      <div>
        {imageFile.name}{" "}
        <Text variant="bodySm" as="p">
          {imageFile.size} bytes
        </Text>
      </div>
    </LegacyStack>
  );
  return (
    <HorizontalStack gap="12">
      <DropZone
        allowMultiple={false}
        label="Banner Image"
        onDrop={handleBannerImageDrop}
      >
        {imageFile ? uploadedImageFile : <DropZone.FileUpload />}
      </DropZone>

      <DropZone
        allowMultiple={false}
        label="Brand Icon"
        onDrop={handleBannerIconDrop}
      >
        {iconFile ? uploadedIconFile : <DropZone.FileUpload />}
      </DropZone>
    </HorizontalStack>
  );
};

export default Banner;
