import { memo } from "react";
import RewardDetailProvider, {
  useRewardDetail,
} from "@/contexts/reawardDetail";
import { Page, Layout, AlphaCard, Text } from "@shopify/polaris";
import { useSearchParams } from "react-router-dom";
import ApplyTo from "../activities/applyTo";
import Expiration from "../activities/expiration";
import RewardPointTypeActivity from "../activities/pointType";
import ProgramIcon from "../activities/programIcon";
import ProgramSummary from "../activities/programSummary";
import ProgramStatus from "../activities/status";
import RewardTitleActivity from "../activities/rewardTitle";
import RewardShipping from "../activities/rewardShipping";

export const ShippingRedeem = () => {
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
              <RewardShipping />
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
    <ShippingRedeem />
  </RewardDetailProvider>
);

export default memo(component);
