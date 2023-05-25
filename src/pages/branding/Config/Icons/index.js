import { DropZone, AlphaStack } from '@shopify/polaris';
import React from 'react';

const Icons = () => {
  return (
    <AlphaStack gap='12' fullWidth>
      <DropZone label='Rewards Icon'>
        <DropZone.FileUpload />
      </DropZone>

      <DropZone label='Ways To Earn Icon'>
        <DropZone.FileUpload />
      </DropZone>

      <DropZone label='Ways To Redeem Icon'>
        <DropZone.FileUpload />
      </DropZone>
    </AlphaStack>
  );
};

export default Icons;
