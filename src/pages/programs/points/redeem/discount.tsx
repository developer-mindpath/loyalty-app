import { memo } from "react";
import { Page, Layout, AlphaCard, Text } from "@shopify/polaris";
import RewardDetailProvider, {
  useRewardDetail,
} from "@/contexts/reawardDetail";
import ApplyTo from "../activities/applyTo";
import ProgramStatus from "../activities/status";
import RewardActivity from "../activities/reward";
import Expiration from "../activities/expiration";
import ProgramIcon from "../activities/programIcon";
import PurchaseType from "../activities/purchaseType";
import ProgramSummary from "../activities/programSummary";
import RewardTitleActivity from "../activities/rewardTitle";
import MinimumRequirement from "../activities/mininmumRequirement";
import RewardPointTypeActivity from "../activities/pointType";
import { useSearchParams } from "react-router-dom";

const DiscountRedeem = () => {
  const [searchParams] = useSearchParams();
  const defaultImage = searchParams.get("img");
  const { details } = useRewardDetail();
  const { pointRedeem } = details;

  return (
    <Page
      title={pointRedeem?.reward_key_key_display_text ?? "Reward Title"}
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
              <RewardPointTypeActivity />
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
            <ProgramIcon defaultIcon={defaultImage} />
          </Layout.Section>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

const component = () => (
  <RewardDetailProvider>
    <DiscountRedeem />
  </RewardDetailProvider>
);

export default memo(component);
