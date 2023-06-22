import {
  AlphaCard,
  Box,
  HorizontalStack,
  Layout,
  Page,
  Spinner,
  Text,
} from "@shopify/polaris";
import ProgramSummary from "../activities/programSummary";
import ProgramStatus from "../activities/status";
import ProgramIcon from "../activities/programIcon";
import { memo } from "react";
import { usePointDetail } from "../../../../contexts/pointsDetail";
import ProgramPointAmount from "../activities/programPointAmount";
import LimitPointEarning from "../activities/limitPointEarning";
import EarnProvider from "../activities/earnProvider";

const title = "Complete a Referral";
const parentURL = "/programs/points";

const ReferalActivity = () => {
  const { loading } = usePointDetail();

  return (
    <Page
      title={title}
      divider
      backAction={{
        url: parentURL,
      }}
    >
      <div style={{ display: loading ? "block" : "none" }}>
        <Box padding="6">
          <HorizontalStack align="center" blockAlign="center">
            <Spinner />
          </HorizontalStack>
        </Box>
      </div>

      <div style={{ display: loading ? "none" : "block" }}>
        <Layout>
          <Layout.Section>
            <Box paddingBlockEnd="5">
              <AlphaCard>
                <Text as="h6" variant="headingMd">
                  Earning Points
                </Text>

                <Box paddingBlockStart="4">
                  <ProgramPointAmount />
                </Box>

                <Box paddingBlockStart="4">
                  <LimitPointEarning />
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
              <ProgramStatus />
            </Box>

            <Box paddingBlockEnd="5">
              <ProgramIcon />
            </Box>
          </Layout.Section>
        </Layout>
      </div>
    </Page>
  );
};

const component = () => (
  <EarnProvider>
    <ReferalActivity />
  </EarnProvider>
);

export default memo(component);
