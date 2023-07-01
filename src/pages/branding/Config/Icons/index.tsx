import React from "react";
import { DropZone, HorizontalStack } from "@shopify/polaris";

const Icons = () => {
  return (
    <HorizontalStack gap="12">
      <DropZone label="Rewards Icon">
        <DropZone.FileUpload />
      </DropZone>

      <DropZone label="Ways To Earn Icon">
        <DropZone.FileUpload />
      </DropZone>

      <DropZone label="Ways To Redeem Icon">
        <DropZone.FileUpload />
      </DropZone>
    </HorizontalStack>
  );
};

export default Icons;
