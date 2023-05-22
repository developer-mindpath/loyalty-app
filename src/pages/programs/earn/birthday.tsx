import {
  AlphaCard,
  Box,
  Layout,
  Page,
  Text,
  TextField,
} from "@shopify/polaris";
import { FavoriteMajor } from "@shopify/polaris-icons";
import ProgramSummary from "./activities/programSummary";
import ProgramStatus from "./activities/programStatus";
import ProgramIcon from "./activities/programIcon";

const BirthdayActivity = () => {
  return (
    <Page
      title="Celebrate a Birthday"
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
                Earning points
              </Text>

              <Box paddingBlockStart="4" paddingBlockEnd="1">
                <TextField
                  label="Points Granted"
                  type="text"
                  value="2"
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
            </AlphaCard>
          </Box>
        </Layout.Section>
        <Layout.Section secondary>
          <Box paddingBlockEnd="5">
            <ProgramSummary
              title="Summary"
              description={
                <ul style={{ padding: "0px 0px 0px 24px", margin: 0 }}>
                  <li>300 points/s for completing action</li>
                  <li>Limit of 1 per year</li>
                </ul>
              }
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

export default BirthdayActivity;
