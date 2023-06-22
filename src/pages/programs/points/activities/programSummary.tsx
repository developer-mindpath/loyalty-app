import { ReactNode } from "react";
import { AlphaCard, Box, Text } from "@shopify/polaris";

export interface IProgramSummaryProps {
  title: string;
  description: ReactNode;
}

const ProgramSummary = ({ title, description }: IProgramSummaryProps) => (
  <AlphaCard>
    <Text as="h6" variant="headingMd">
      {title}
    </Text>
    <Box padding="2">
      <Text as="h6" variant="bodyMd">
        {description}
      </Text>
    </Box>
  </AlphaCard>
);

export default ProgramSummary;
