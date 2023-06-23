import { memo } from "react";
import { AlphaCard, Box, Layout, Page, Text } from "@shopify/polaris";
import ProgramSummary from "@/pages/programs/points/activities/programSummary";
import ProgramStatus from "@/pages/programs/points/activities/status";
import ProgramIcon from "@/pages/programs/points/activities/programIcon";
import ProgramPointAmount from "@/pages/programs/points/activities/programPointAmount";
import EarnProvider from "@/pages/programs/points/activities/earnProvider";

const SignUpActivity = () => {
  return (
    <Page
      title="Sign up to Loyalty Program"
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
                <ProgramPointAmount />
              </Box>
            </AlphaCard>
          </Box>
        </Layout.Section>
        <Layout.Section secondary>
          <Box paddingBlockEnd="5">
            <ProgramSummary
              title="Summary"
              description="Points earned for signing up tp our Loyalty rewards program"
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
    <SignUpActivity />
  </EarnProvider>
);

export default memo(component);
