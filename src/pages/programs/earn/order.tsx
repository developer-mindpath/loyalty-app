import {
  AlphaCard,
  Box,
  Checkbox,
  Layout,
  Page,
  RadioButton,
  Select,
  Text,
  TextField,
  VerticalStack,
} from "@shopify/polaris";
import { FavoriteMajor } from "@shopify/polaris-icons";
import ProgramSummary from "./activities/programSummary";
import ProgramStatus from "./activities/programStatus";
import ProgramIcon from "./activities/programIcon";
import { useState } from "react";

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
                <TextField
                  label="Points Amount"
                  type="number"
                  value="250"
                  placeholder="100"
                  onChange={() => ({})}
                  autoComplete="off"
                  connectedRight={
                    <Text variant="bodyMd" alignment="center" as={"h1"}>
                      Points
                    </Text>
                  }
                />
              </Box>

              <Box paddingBlockStart="4" paddingBlockEnd="2">
                <Checkbox
                  label="Limit how many times each customer can earn points for completing this action"
                  checked
                  onChange={() => ({})}
                />
              </Box>

              <Box paddingBlockEnd="1">
                <TextField
                  label=""
                  type="number"
                  value="5"
                  placeholder="10"
                  onChange={() => ({})}
                  autoComplete="off"
                  connectedRight={
                    <Select
                      label=""
                      options={["week"]}
                      value="week"
                      onChange={() => ({})}
                    />
                  }
                />
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
            <ProgramStatus active onChange={() => ({})} />
          </Box>

          <Box paddingBlockEnd="5">
            <ProgramIcon onChange={() => {}} defaultIcon={FavoriteMajor} />
          </Box>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default OrderActivity;
