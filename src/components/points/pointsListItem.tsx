import { memo } from "react";
import Toggle from "react-toggle";
import {
  Badge,
  Box,
  Button,
  HorizontalStack,
  Icon,
  IconSource,
  Text,
} from "@shopify/polaris";
import { DragHandleMinor, EditMinor } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";

interface IPointListItemProps {
  name?: string;
  icon: IconSource;
  path: string;
  checked: boolean;
  points?: string | number;
}

const PointListItem = ({
  name,
  icon,
  checked,
  points,
  path,
}: IPointListItemProps) => {
  const navigate = useNavigate();

  return (
    <Box paddingBlockStart="4" paddingBlockEnd="4">
      <HorizontalStack align="space-between" blockAlign="center">
        <div style={{ width: "50%" }}>
          <div style={{ width: "fit-content" }}>
            <HorizontalStack>
              <Icon source={icon} color="base" />
              <Box paddingInlineStart="4">
                <Text as="p" variant="headingSm">
                  {name}
                </Text>
                {points && <Badge>{`${points} Points`}</Badge>}
              </Box>
            </HorizontalStack>
          </div>
        </div>

        <Box paddingInlineStart="4">
          <HorizontalStack blockAlign="center">
            <Button icon={EditMinor} onClick={() => navigate(path)}>
              Edit
            </Button>
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

        <div style={{ width: "5%" }}>
          <div
            data-movable-handle
            style={{ cursor: "grab", width: "fit-content" }}
          >
            <Box>
              <Icon source={DragHandleMinor} />
            </Box>
          </div>
        </div>
      </HorizontalStack>
    </Box>
  );
};

export default memo(PointListItem);
