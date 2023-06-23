import { memo } from "react";
import { AlphaCard, Layout, Page, Text } from "@shopify/polaris";
import ProgramSummary from "@/pages/programs/points/activities/programSummary";
import ProgramStatus from "@/pages/programs/points/activities/status";
import ProgramIcon from "@/pages/programs/points/activities/programIcon";
import ReawrdProvider from "@/pages/programs/points/activities/rewardProvider";
import RewardTitleActivity from "@/pages/programs/points/activities/rewardTitle";
import RewardPointActivity from "@/pages/programs/points/activities/pointType";
import RewardActivity from "@/pages/programs/points/activities/reward";
import MinimumRequirement from "@/pages/programs/points/activities/mininmumRequirement";
import ApplyTo from "@/pages/programs/points/activities/applyTo";
import Expiration from "@/pages/programs/points/activities/expiration";
import PurchaseType from "@/pages/programs/points/activities/purchaseType";
import { useRewardDetail } from "@/contexts/reawardDetail";

const CouponActivity = () => {
  const couponAmount = 20;

  return (
    <Page
      title={`$${couponAmount} off Cupon`}
      divider
      backAction={{
        url: "/programs/points",
        content: "Program",
      }}
    >
      <Layout>
        <Layout.Section>
          {/* Reawrds Title */}
          <Layout.Section>
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Rewards Title
              </Text>
              <RewardTitleActivity />
            </AlphaCard>
          </Layout.Section>

          {/* Point Type */}
          <Layout.Section>
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Points Type
              </Text>
              <RewardPointActivity />
            </AlphaCard>
          </Layout.Section>

          {/* Reward */}
          <Layout.Section>
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Reward
              </Text>
              <RewardActivity />
            </AlphaCard>
          </Layout.Section>

          {/* Reward */}
          {/* <Layout.Section>
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Reward
              </Text>

              <HorizontalStack align="start">
                <TextField
                  autoComplete="off"
                  label="Customer Redeems increment of"
                  suffix="points"
                />
                <Box paddingInlineStart="4">
                  <TextField
                    autoComplete="off"
                    label="Customer Gets Per Remption"
                    prefix="$"
                  />
                </Box>
              </HorizontalStack>

              <Box paddingBlockStart="4">
                <Checkbox
                  checked
                  label="Set a Minimum amount of points required to redeem this reward"
                />
                <TextField autoComplete="off" label="" labelHidden />
              </Box>

              <Box paddingBlockStart="4">
                <Checkbox
                  checked
                  label="Set a Maximum amount of points required to redeem this reward"
                />
                <TextField labelHidden autoComplete="off" label="" />
              </Box>
            </AlphaCard>
          </Layout.Section> */}

          {/* Minimum Cart Requirement */}
          <Layout.Section>
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Minimum Cart Requirement
              </Text>
              <MinimumRequirement />
            </AlphaCard>
          </Layout.Section>

          {/* Apply To */}
          <Layout.Section>
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Apply To:
              </Text>
              <ApplyTo />
            </AlphaCard>
          </Layout.Section>

          {/* Purchase Type */}
          <Layout.Section>
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Purchase Type (Optional)
              </Text>
              <PurchaseType />
            </AlphaCard>
          </Layout.Section>

          {/* Expiration */}
          <Layout.Section>
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Rewards Expiration
              </Text>
              <Expiration />
            </AlphaCard>
          </Layout.Section>
        </Layout.Section>
        <Layout.Section secondary>
          <Layout.Section>
            <ProgramSummary
              title="Summary"
              description="Points granted to member who generates a completed referral."
            />
          </Layout.Section>

          <Layout.Section>
            <ProgramStatus handler={useRewardDetail} />
          </Layout.Section>

          <Layout.Section>
            <ProgramIcon />
          </Layout.Section>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

const component = () => (
  <ReawrdProvider>
    <CouponActivity />
  </ReawrdProvider>
);

export default memo(component);
