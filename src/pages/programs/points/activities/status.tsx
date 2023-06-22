import { ChangeEvent, useMemo } from "react";
import Toggle from "react-toggle";
import { AlphaCard, HorizontalStack, Badge, Box, Text } from "@shopify/polaris";
import {
  usePointDetail,
  IPointDetailContext,
} from "../../../../contexts/pointsDetail";
import { IRewardDetailContext } from "../../../../contexts/reawardDetail";

export interface IProgramStatusProps {
  handler?: () => IRewardDetailContext | IPointDetailContext;
}

function ProgramStatus({ handler = usePointDetail }: IProgramStatusProps) {
  const { details, handleChange } = handler();
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
}

export default ProgramStatus;
