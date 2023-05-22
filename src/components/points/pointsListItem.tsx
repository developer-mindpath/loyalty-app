import { memo } from "react";
import Toggle from "react-toggle";
import {
  AlphaCard,
  Avatar,
  Badge,
  Box,
  Button,
  HorizontalStack,
  Icon,
  Text,
} from "@shopify/polaris";
import { DragHandleMinor, EditMinor } from "@shopify/polaris-icons";

const PointListItem = ({ name, icon, checked, points, path }: any) => {
  return (
    <Box paddingBlockStart="4" paddingBlockEnd="4">
      <HorizontalStack align="space-between" blockAlign="center">
        <HorizontalStack>
          <Icon source={icon} color="base" />
          <Box paddingInlineStart="4">
            <Text as="p" variant="headingSm">
              {name}
            </Text>
            <Badge>{`${points} Points`}</Badge>
          </Box>
        </HorizontalStack>

        <Box paddingInlineStart="4">
          <HorizontalStack blockAlign="center">
            <Button icon={EditMinor}>Edit</Button>
            <Box paddingInlineStart="4">
              <Toggle
                checked={checked}
                onChange={(e) => {
                  console.log("Working");
                  e.stopPropagation();
                }}
                onClick={() => {
                  console.log("Working Click");
                }}
                onKeyDown={() => {
                  console.log("Working KeyDown");
                }}
              />
            </Box>
          </HorizontalStack>
        </Box>

        <div data-movable-handle style={{ cursor: "grab" }}>
          <Box>
            <Icon source={DragHandleMinor} />
          </Box>
        </div>
      </HorizontalStack>
    </Box>
  );
};

export default memo(PointListItem);
