import React, { useCallback, useState } from "react";
import {
  DropZone,
  HorizontalStack,
  LegacyStack,
  Thumbnail,
  Text,
} from "@shopify/polaris";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import {
  getWidgetSettings,
  floatingWidget,
} from "@/redux/reducers/floatingWidget";
import { NoteMinor } from "@shopify/polaris-icons";

const Icons = () => {
  const widget = useAppSelector(getWidgetSettings);
  const dispatch = useAppDispatch();
  const [rewardIconFile, setrewardIconFile] = useState<File>();
  const [earnIconFile, setEarnIconFile] = useState<File>();
  const [redeemIconFile, setRedeemIconFile] = useState<File>();

  const handleRewardIconDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) => {
      setrewardIconFile(acceptedFiles[0]),
        dispatch(
          floatingWidget.setWidget({
            ...widget,
            widget_custom_icon_rewards: acceptedFiles[0],
          })
        );
    },
    []
  );

  const handleEarnIconDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) => {
      setEarnIconFile(acceptedFiles[0]);
      dispatch(
        floatingWidget.setWidget({
          ...widget,
          widget_custom_icon_ways_to_earn: acceptedFiles[0],
        })
      );
    },
    []
  );

  const handleRedeemIconDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) => {
      setRedeemIconFile(acceptedFiles[0]);
      dispatch(
        floatingWidget.setWidget({
          ...widget,
          widget_custom_icon_ways_to_redeem: acceptedFiles[0],
        })
      );
    },
    []
  );

  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

  const uploadedearnIconFile = earnIconFile && (
    <LegacyStack>
      <Thumbnail
        size="small"
        alt={earnIconFile.name}
        source={
          validImageTypes.includes(earnIconFile.type)
            ? window.URL.createObjectURL(earnIconFile)
            : NoteMinor
        }
      />
      <div>
        {earnIconFile.name}{" "}
        <Text variant="bodySm" as="p">
          {earnIconFile.size} bytes
        </Text>
      </div>
    </LegacyStack>
  );
  const uploadedrewardIconFile = rewardIconFile && (
    <LegacyStack>
      <Thumbnail
        size="small"
        alt={rewardIconFile.name}
        source={
          validImageTypes.includes(rewardIconFile.type)
            ? window.URL.createObjectURL(rewardIconFile)
            : NoteMinor
        }
      />
      <div>
        {rewardIconFile.name}{" "}
        <Text variant="bodySm" as="p">
          {rewardIconFile.size} bytes
        </Text>
      </div>
    </LegacyStack>
  );
  const uploadedredeemIconFile = redeemIconFile && (
    <LegacyStack>
      <Thumbnail
        size="small"
        alt={redeemIconFile.name}
        source={
          validImageTypes.includes(redeemIconFile.type)
            ? window.URL.createObjectURL(redeemIconFile)
            : NoteMinor
        }
      />
      <div>
        {redeemIconFile.name}{" "}
        <Text variant="bodySm" as="p">
          {redeemIconFile.size} bytes
        </Text>
      </div>
    </LegacyStack>
  );

  return (
    <HorizontalStack gap="12">
      <DropZone label="Rewards Icon" onDrop={handleRewardIconDrop}>
        <DropZone.FileUpload />
      </DropZone>

      <DropZone label="Ways To Earn Icon" onDrop={handleEarnIconDrop}>
        <DropZone.FileUpload />
      </DropZone>

      <DropZone label="Ways To Redeem Icon" onDrop={handleRedeemIconDrop}>
        <DropZone.FileUpload />
      </DropZone>
    </HorizontalStack>
  );
};

export default Icons;
