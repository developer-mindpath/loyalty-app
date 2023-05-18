import { memo, useState } from "react";
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

const PointListItem = (props: any) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <AlphaCard>
      <HorizontalStack align="space-between" blockAlign="center">
        <HorizontalStack>
          <Avatar customer shape="square" />
          <Box paddingInlineStart="4">
            <Text as="p" variant="headingSm">
              Post a product review
            </Text>
            <Badge>250 Points</Badge>
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
                  setChecked((old) => !old);
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

        <div data-movable-handle style={{ cursor: "pointer" }}>
          <Box>
            <Icon source={DragHandleMinor} />
          </Box>
        </div>
      </HorizontalStack>
    </AlphaCard>
  );
};

export default memo(PointListItem);
