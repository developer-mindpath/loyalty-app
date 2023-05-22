import { useState } from "react";
import { NoteMinor } from "@shopify/polaris-icons";
import {
  IconSource,
  DropZone,
  AlphaCard,
  VerticalStack,
  Box,
  HorizontalStack,
  RadioButton,
  Icon,
  Thumbnail,
  Text,
} from "@shopify/polaris";

const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

export interface IProgramIconProps {
  title?: string;
  defaultIcon: IconSource;
  onChange: (
    files: File[],
    acceptedFiles: File[],
    rejectedFiles: File[]
  ) => void;
}

const ProgramIcon = (props: IProgramIconProps) => {
  const { title = "Icon", defaultIcon, onChange } = props;
  const [files, setFiles] = useState<File[]>([]);
  const [selected, setSelected] = useState<string>("default");

  const onDrop = (
    files: File[],
    acceptedFiles: File[],
    rejectedFiles: File[]
  ) => {
    setFiles(acceptedFiles);
    onChange(files, acceptedFiles, rejectedFiles);
  };

  return (
    <DropZone
      outline={false}
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
              {selected === "default" && <Icon source={defaultIcon} />}
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
              <VerticalStack>
                {files.map((file: File, index: number) => (
                  <VerticalStack align="center" key={file.name}>
                    <Thumbnail
                      size="small"
                      alt={file.name}
                      source={
                        validImageTypes.indexOf(file.type) > -1
                          ? window.URL.createObjectURL(file)
                          : NoteMinor
                      }
                    />
                    <div>
                      {file.name}
                      <Text variant="bodySm" as="p">
                        {file.size} bytes
                      </Text>
                    </div>
                  </VerticalStack>
                ))}
              </VerticalStack>
              <DropZone.FileUpload actionTitle="Upload Icon" />
            </DropZone>
          )}
        </VerticalStack>
      </AlphaCard>
    </DropZone>
  );
};

export default ProgramIcon;
