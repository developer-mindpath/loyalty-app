import { ChangeEvent, useMemo } from "react";
import Toggle from "react-toggle";
import { AlphaCard, HorizontalStack, Badge, Box, Text } from "@shopify/polaris";
import { usePointDetail, IPointDetailContext } from "@/contexts/pointsDetail";
import { IRewardDetailContext } from "@/contexts/reawardDetail";
import { IEarnPointWithAction } from "@/types/program/points/earnPoint";
import { IRewardRedeemWithAction } from "@/types/program/points/redeemRewards";

function isEarnItem(item: any): item is IEarnPointWithAction {
  return "pointAction" in item;
}

export interface IProgramStatusProps {
  handler?: () => IRewardDetailContext | IPointDetailContext;
}

function ProgramStatus({ handler = usePointDetail }: IProgramStatusProps) {
  const { details, handleChange } = handler();
  const status = useMemo(() => {
    if (isEarnItem(details)) {
      return details?.pointAction?.is_action_enabled === 1;
    }

    return details?.pointRedeem?.is_reward_enabled === 1;
  }, [details]);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const updateString = isEarnItem(details)
      ? "pointAction.is_action_enabled"
      : "pointRedeem.is_reward_enabled";
    handleChange(updateString)(checked ? 1 : 0);
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
