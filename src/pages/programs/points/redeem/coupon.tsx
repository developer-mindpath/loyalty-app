import { memo } from "react";
import { AlphaCard, Layout, Page, Text } from "@shopify/polaris";
import ProgramSummary from "../activities/programSummary";
import ProgramStatus from "../activities/status";
import ProgramIcon from "../activities/programIcon";
import ReawrdProvider from "../activities/rewardProvider";
import RewardTitleActivity from "../activities/rewardTitle";
import RewardPointActivity from "../activities/pointType";
import RewardActivity from "../activities/reward";
import MinimumRequirement from "../activities/mininmumRequirement";
import ApplyTo from "../activities/applyTo";
import Expiration from "../activities/expiration";
import PurchaseType from "../activities/purchaseType";
import { useRewardDetail } from "../../../../contexts/reawardDetail";

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
