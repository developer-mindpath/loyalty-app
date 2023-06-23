import { memo } from "react";
import { AlphaCard, Box, Layout, Page, Text } from "@shopify/polaris";
import ProgramSummary from "@/pages/programs/points/activities/programSummary";
import ProgramStatus from "@/pages/programs/points/activities/status";
import ProgramIcon from "@/pages/programs/points/activities/programIcon";
import ProgramPointAmount from "@/pages/programs/points/activities/programPointAmount";
import LimitPointEarning from "@/pages/programs/points/activities/limitPointEarning";
import SelectReviewApp from "@/pages/programs/points/activities/selectReviewApp";
import EarnProvider from "@/pages/programs/points/activities/earnProvider";

const title = "Post a Product Review - Photo";
const parentURL = "/programs/points";

const ProductReviewActivity = () => (
  <Page
    title={title}
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
              Review Settings
            </Text>

            <Box paddingBlockStart="4" paddingBlockEnd="1">
              <SelectReviewApp />
            </Box>
          </AlphaCard>
        </Box>

        <Box paddingBlockEnd="5">
          <AlphaCard>
            <Text as="h6" variant="headingMd">
              Earning Points
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
            description="Points granted to member who write a product review"
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

const component = () => (
  <EarnProvider>
    <ProductReviewActivity />
  </EarnProvider>
);

export default memo(component);
