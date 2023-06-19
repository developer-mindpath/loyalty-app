import { useEffect, useMemo, useState } from "react";
import { NoteMinor } from "@shopify/polaris-icons";
import {
  DropZone,
  AlphaCard,
  VerticalStack,
  Box,
  HorizontalStack,
  RadioButton,
  Thumbnail,
  Text,
} from "@shopify/polaris";
import { usePointDetail } from "../../../../../contexts/pointsDetail";
import { rewardType } from "../../../../../utils/constants/reward";
import { useLocation } from "react-router-dom";

const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
type IconTypes = "default" | "custom";

export interface IProgramIconProps {
  title?: string;
}

const ProgramIcon = (props: IProgramIconProps) => {
  const { title = "Icon" } = props;
  const location = useLocation();
  const { details } = usePointDetail();
  const [files, setFiles] = useState<File[]>([]);
  const [selected, setSelected] = useState<IconTypes>("default");
  const actionType = useMemo(
    () => location.pathname.split("/")[3],
    [location.pathname]
  );
  const defaultImage = useMemo(
    () => rewardType.find((e) => e.id === actionType)?.img,
    [actionType]
  );
  const isCustomImage = useMemo(
    () => defaultImage !== details?.pointAction?.action_icon,
    [defaultImage, details]
  );

  useEffect(() => {
    if (isCustomImage) {
      setSelected("custom");
      return;
    }

    setSelected("default");
  }, [isCustomImage]);

  const singleFile = useMemo(() => files[0], [files]);

  const onDrop = (
    files: File[],
    acceptedFiles: File[],
    rejectedFiles: File[]
  ) => {
    setFiles(acceptedFiles);
  };

  return (
    <DropZone
      outline={false}
      dropOnPage
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <AlphaCard>
        <Text as="h6" variant="headingMd">
          {title}
        </Text>
        <VerticalStack>
          <Box paddingBlockEnd="3" paddingBlockStart="3">
            <HorizontalStack>
              <RadioButton
                value="default"
                checked={selected === "default"}
                label="Default Icon"
                onChange={() => setSelected("default")}
              />
              {selected === "default" && (
                <Box paddingInlineStart="8">
                  <img src={defaultImage} alt="Icon" width={25} height={25} />
                </Box>
              )}
            </HorizontalStack>
          </Box>
          <Box paddingBlockEnd="3">
            <RadioButton
              value="custom"
              label="Custom Icon"
              checked={selected === "custom"}
              onChange={() => setSelected("custom")}
            />
          </Box>
          {selected === "custom" && (
            <DropZone
              accept="image/*"
              type="image"
              onDrop={onDrop}
              label="Upload Custom Icon"
            >
              {singleFile && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <VerticalStack inlineAlign="center">
                    <Thumbnail
                      size="small"
                      alt={singleFile?.name}
                      source={
                        validImageTypes.indexOf(singleFile?.type) > -1
                          ? window.URL.createObjectURL(singleFile)
                          : NoteMinor
                      }
                    />
                    <Text as="p" alignment="center">
                      {singleFile?.name}
                    </Text>
                  </VerticalStack>
                </div>
              )}
              <DropZone.FileUpload actionTitle="Upload Icon" />
            </DropZone>
          )}
        </VerticalStack>
      </AlphaCard>
    </DropZone>
  );
};

export default ProgramIcon;
