import {
  AlphaCard,
  Box,
  Checkbox,
  Layout,
  Page,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { FavoriteMajor } from "@shopify/polaris-icons";
import ProgramSummary from "./activities/programSummary";
import ProgramStatus from "./activities/programStatus";
import ProgramIcon from "./activities/programIcon";

const ReferalActivity = () => {
  return (
    <Page
      title="Complete a Referral"
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
                Earning Points
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
              description="Points granted to member who generates a completed referral."
            />
          </Box>

          <Box paddingBlockEnd="5">
            <ProgramStatus onChange={() => ({})} />
          </Box>

          <Box paddingBlockEnd="5">
            <ProgramIcon onChange={() => {}} defaultIcon={FavoriteMajor} />
          </Box>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default ReferalActivity;
