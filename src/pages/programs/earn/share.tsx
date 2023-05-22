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

const ShareActivity = () => {
  return (
    <Page
      title="Share our link on Facebook"
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
                Social Settings
              </Text>

              <Box paddingBlockStart="4" paddingBlockEnd="1">
                <TextField
                  label="URL to share"
                  type="text"
                  value="250"
                  placeholder="100"
                  onChange={() => ({})}
                  autoComplete="off"
                />
              </Box>
            </AlphaCard>
          </Box>

          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Earning Points
              </Text>

              <Box paddingBlockStart="4" paddingBlockEnd="1">
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
            </AlphaCard>
          </Box>
        </Layout.Section>
        <Layout.Section secondary>
          <Box paddingBlockEnd="5">
            <ProgramSummary
              title="Summary"
              description="Points granted to member who shares link on facebook"
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

export default ShareActivity;
