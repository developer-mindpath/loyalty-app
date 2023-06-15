import {
  AlphaCard,
  Box,
  HorizontalStack,
  Layout,
  Page,
  Spinner,
  Text,
} from "@shopify/polaris";
import { FavoriteMajor } from "@shopify/polaris-icons";
import ProgramSummary from "./activities/programSummary";
import ProgramStatus from "./activities/programStatus";
import ProgramIcon from "./activities/programIcon";
import { memo } from "react";
import PointDetailProvider, {
  usePointDetail,
} from "../../../contexts/pointsDetail";
import ProgramPointAmount from "./activities/programPointAmount";
import LimitPointEarning from "./activities/limitPointEarning";

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
              <ProgramIcon onChange={() => {}} defaultIcon={FavoriteMajor} />
            </Box>
          </Layout.Section>
        </Layout>
      </div>
    </Page>
  );
};

const component = () => (
  <PointDetailProvider>
    <ReferalActivity />
  </PointDetailProvider>
);

export default memo(component);
