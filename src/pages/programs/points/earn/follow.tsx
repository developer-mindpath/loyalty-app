import { memo } from "react";
import {
  Page,
  Layout,
  Box,
  AlphaCard,
  Text,
  TextField,
} from "@shopify/polaris";
import { useSearchParams } from "react-router-dom";
import ProgramIcon from "../activities/programIcon";
import ProgramStatus from "../activities/status";
import ProgramPointAmount from "../activities/programPointAmount";
import EarnProvider from "../activities/earnProvider";

const title = "Follow on ";
const parentURL = "/programs/points";
const FollowActivity = () => {
  const [searchParam] = useSearchParams();

  return (
    <Page
      title={title + searchParam.get("platform")}
      divider
      backAction={{
        url: parentURL,
      }}
    >
      <Layout>
        <Layout.Section>
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Social settings
              </Text>

              <Box paddingBlockStart="5">
                <TextField
                  value="kodiakcoolers"
                  autoComplete="off"
                  label=""
                  prefix="@"
                />
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
            </AlphaCard>
          </Box>
        </Layout.Section>
        <Layout.Section secondary>
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
    <FollowActivity />
  </EarnProvider>
);

export default memo(component);
