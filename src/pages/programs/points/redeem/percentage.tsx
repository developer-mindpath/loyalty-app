import { FC, ReactNode, memo } from "react";
import {
  AlphaCard,
  Button,
  Checkbox,
  ChoiceList,
  HorizontalStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import TextField from "../../../../components/textField";
import ProgramStatus from "../activities/status";
import ProgramIcon from "../activities/programIcon";
import RewardTitleActivity from "../activities/rewardTitle";
import ReawrdProvider from "../activities/rewardProvider";

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
  return (
    <Page
      title="Percentage"
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
            <Card title="Point Type">
              <ChoiceList
                title=""
                choices={[
                  { label: "Fixed amount of points", value: "fixedAmount" },
                  { label: "Incremented points", value: "incremental" },
                ]}
                selected={["fixedAmount"]}
                onChange={(e) => console.log(e)}
              />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card title="Reward">
              <HorizontalStack gap="4">
                <TextField
                  label="Points amount"
                  autoComplete="off"
                  value="500"
                  suffix="points"
                />
                <TextField
                  prefix="$"
                  label="Discount"
                  autoComplete="off"
                  value="5"
                />
              </HorizontalStack>
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card title="Minimum Cart Requirement">
              <ChoiceList
                title=""
                choices={[
                  { label: "None", value: "none" },
                  { label: "Minimum cart value", value: "incremental" },
                ]}
                selected={["fixedAmount"]}
                onChange={(e) => console.log(e)}
              />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card title="Apply to">
              <ChoiceList
                title=""
                choices={[
                  { label: "Entire Order", value: "entire" },
                  { label: "Collection", value: "collection" },
                ]}
                selected={["entire"]}
                onChange={(e) => console.log(e)}
              />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card title="Purchase Type (optional)">
              <ChoiceList
                title=""
                choices={[
                  { label: "One-time Purchase", value: "one-time" },
                  { label: "Subscription", value: "subscription" },
                  { label: "Both", value: "both" },
                ]}
                selected={[]}
                onChange={(e) => console.log(e)}
              />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card title="Reward Expiration">
              <Checkbox
                label="Set issued reward to expire after a certain amount of time"
                checked
                onChange={() => ({})}
              />
            </Card>
          </Layout.Section>
        </Layout.Section>
        <Layout.Section secondary>
          <Layout.Section>
            <Card title="Reward Summary">
              <ul>
                <li>$5 off coupon</li>
                <li>Applies to all orders</li>
              </ul>
            </Card>
          </Layout.Section>

          <Layout.Section>
            <ProgramStatus />
          </Layout.Section>

          <Layout.Section>
            <ProgramIcon />
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
