import { ChangeEvent, useMemo } from "react";
import Toggle from "react-toggle";
import { AlphaCard, HorizontalStack, Badge, Box, Text } from "@shopify/polaris";
import { usePointDetail } from "../../../../contexts/pointsDetail";

export interface IProgramStatusProps {
  active: boolean;
  onChange: (arg: ChangeEvent<HTMLInputElement>) => void;
}

const ProgramStatus = () => {
  const { details, handleChange } = usePointDetail();
  const status = useMemo(() => details?.status === "on", [details]);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    handleChange("status")(checked ? "on" : "off");
  };

  return (
    <AlphaCard>
      <HorizontalStack align="space-between" blockAlign="center">
        <Text as="h6" variant="headingMd">
          Status
        </Text>

        <Badge status={status ? "success" : "critical"}>
          {status ? "Active" : "Inactive"}
        </Badge>
      </HorizontalStack>
      <Box paddingBlockStart="4">
        <Toggle checked={status} onChange={handleClick} />
      </Box>
    </AlphaCard>
  );
};

export default ProgramStatus;
