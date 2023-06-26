import { FC, ReactNode, memo } from "react";
import { AlphaCard, Button, Layout, Page, Text } from "@shopify/polaris";
import ProgramStatus from "@/pages/programs/points/activities/status";
import ProgramIcon from "@/pages/programs/points/activities/programIcon";
import RewardTitleActivity from "@/pages/programs/points/activities/rewardTitle";
import ReawrdProvider from "@/pages/programs/points/activities/rewardProvider";
import RewardActivity from "../activities/reward";
import MinimumRequirement from "../activities/mininmumRequirement";
import ApplyTo from "../activities/applyTo";
import PurchaseType from "../activities/purchaseType";
import Expiration from "../activities/expiration";
import { useRewardDetail } from "@/contexts/reawardDetail";
import { useSearchParams } from "react-router-dom";

export interface ICardHeading {
  title: string;
}

const CardHeading: FC<ICardHeading> = ({ title }) => (
  <Text as="h2" variant="headingMd">
    {title}
  </Text>
);

interface ICard extends ICardHeading {
  children?: ReactNode;
}

const Card: FC<ICard> = ({ title, children }) => (
  <AlphaCard>
    <CardHeading title={title} />
    {children}
  </AlphaCard>
);

function PrecentageRedeem() {
  const { details } = useRewardDetail();
  const { pointRedeem } = details;
  const [searchParams] = useSearchParams();
  const defaultName = searchParams.get("name");
  const defaultImage = searchParams.get("img");

  return (
    <Page
      title={defaultName ?? pointRedeem?.reward_key_key_display_text}
      divider
      primaryAction={<Button primary>Create Reward</Button>}
      backAction={{ content: "Settings", url: "/programs/points" }}
    >
      <Layout>
        <Layout.Section>
          <Layout.Section>
            <Card title="Reawrd Title">
              <RewardTitleActivity />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card title="Reward">
              <RewardActivity />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card title="Minimum Cart Requirement">
              <MinimumRequirement />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card title="Apply to">
              <ApplyTo />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card title="Purchase Type (optional)">
              <PurchaseType />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card title="Reward Expiration">
              <Expiration />
            </Card>
          </Layout.Section>
        </Layout.Section>
        <Layout.Section secondary>
          <Layout.Section>
            <Card title="Reward Summary">
              <ul>
                <li>5.0% off entire order</li>
                <li>Applies to all orders</li>
              </ul>
            </Card>
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
}

const component = () => (
  <ReawrdProvider>
    <PrecentageRedeem />
  </ReawrdProvider>
);

export default memo(component);
