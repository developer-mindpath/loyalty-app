import { ChangeEvent, useState } from "react";
import Toggle from "react-toggle";
import { AlphaCard, HorizontalStack, Badge, Box, Text } from "@shopify/polaris";

export interface IProgramStatusProps {
  active?: boolean;
  onChange: (arg: ChangeEvent<HTMLInputElement>) => void;
}

const ProgramStatus = (props: IProgramStatusProps) => {
  const { active = false, onChange } = props;
  const [state, setState] = useState<boolean>(active);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setState(checked);
    onChange(e);
  };

  return (
    <AlphaCard>
      <HorizontalStack align="space-between" blockAlign="center">
        <Text as="h6" variant="headingMd">
          Status
        </Text>

        <Badge status={state ? "success" : "critical"}>
          {state ? "Active" : "Inactive"}
        </Badge>
      </HorizontalStack>
      <Box paddingBlockStart="4">
        <Toggle checked={state} onChange={handleChange} />
      </Box>
    </AlphaCard>
  );
};

export default ProgramStatus;
