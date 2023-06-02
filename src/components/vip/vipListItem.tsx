import { memo } from "react";
import {
  Box,
  Button,
  Divider,
  HorizontalStack,
  Icon,
  IconSource,
  Text,
} from "@shopify/polaris";
import { EditMinor } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

interface IPointListItemProps {
  tierName?: string;
  icon?: IconSource;
  path: string;
  points?: string | number;
}

const VipListItem = ({ tierName, icon, points, path }: IPointListItemProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Box padding="4">
        <HorizontalStack align="space-between" blockAlign="center">
          <div style={{ width: "50%" }}>
            <div style={{ width: "fit-content" }}>
              <HorizontalStack>
                {icon ? (
                  <Icon source={icon} color="base" />
                ) : (
                  <FontAwesomeIcon icon={faTrophy} size="2x" />
                )}
                <Box paddingInlineStart="4">
                  <Text as="p" variant="headingSm">
                    {tierName}
                  </Text>
                  <Text as="p" variant="bodySm">
                    {`Earn ${points} Points `}
                  </Text>
                </Box>
              </HorizontalStack>
            </div>
          </div>
          <Box paddingInlineStart="4" paddingInlineEnd="4">
            <Button icon={EditMinor} onClick={() => navigate(path)}>
              Edit
            </Button>
          </Box>
        </HorizontalStack>
      </Box>
      <Divider />
    </>
  );
};

export default memo(VipListItem);
