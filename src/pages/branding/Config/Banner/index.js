import { DropZone, AlphaStack } from '@shopify/polaris';
import React from 'react';

const Banner = () => {
  return (
    <AlphaStack gap='12' fullWidth>
      <DropZone label='Banner Image'>
        <DropZone.FileUpload />
      </DropZone>

      <DropZone label='Brand Icon'>
        <DropZone.FileUpload />
      </DropZone>
    </AlphaStack>
  );
};

export default Banner;
