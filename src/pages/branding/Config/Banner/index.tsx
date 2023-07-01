import React from "react";
import { DropZone, HorizontalStack } from "@shopify/polaris";

const Banner = () => {
  return (
    <HorizontalStack gap="12" >
      <DropZone label="Banner Image">
        <DropZone.FileUpload />
      </DropZone>

      <DropZone label="Brand Icon">
        <DropZone.FileUpload />
      </DropZone>
    </HorizontalStack>
  );
};

export default Banner;
