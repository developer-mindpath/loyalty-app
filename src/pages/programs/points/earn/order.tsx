import { memo, useState } from "react";
import {
  AlphaCard,
  Box,
  Layout,
  Page,
  RadioButton,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import ProgramSummary from "../activities/programSummary";
import ProgramStatus from "../activities/status";
import ProgramIcon from "../activities/programIcon";
import ProgramPointAmount from "../activities/programPointAmount";
import LimitPointEarning from "../activities/limitPointEarning";
import EarnProvider from "../activities/earnProvider";

const OrderActivity = () => {
  const [selected, setSelected] = useState<string>("incemental");

  return (
    <Page
      title="Place Order -> Earn Credit Per & Spent"
      divider
      backAction={{
        url: "/programs/points",
        content: "Program",
      }}
    >
      <Layout>
        <Layout.Section>
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Review Settings
              </Text>

              <Box paddingBlockStart="5">
                <VerticalStack>
                  <RadioButton
                    checked={selected === "incemental"}
                    value="incremental"
                    onChange={() => setSelected("incemental")}
                    label="Incremented points (recommended)"
                  />
                  <Box paddingBlockStart="2">
                    <RadioButton
                      checked={selected === "fixed"}
                      value="fixed"
                      onChange={() => setSelected("fixed")}
                      label="Fixed amount of points"
                    />
                  </Box>
                </VerticalStack>
              </Box>
            </AlphaCard>
          </Box>

          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Earning points
              </Text>

              <Box paddingBlockStart="4">
                <ProgramPointAmount />
              </Box>

              <Box paddingBlockStart="4" paddingBlockEnd="2">
                <LimitPointEarning />
              </Box>
            </AlphaCard>
          </Box>
        </Layout.Section>
        <Layout.Section secondary>
          <Box paddingBlockEnd="5">
            <ProgramSummary
              title="Summary"
              description="Customer earn 2 points/s for every 1$ spent"
            />
          </Box>

          <Box paddingBlockEnd="5">
            <ProgramStatus />
          </Box>

          <Box paddingBlockEnd="5">
            <ProgramIcon />
          </Box>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

const component = () => (
  <EarnProvider>
    <OrderActivity />
  </EarnProvider>
);

export default memo(component);
