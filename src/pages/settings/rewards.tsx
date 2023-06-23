import {
  AlphaCard,
  Banner,
  Box,
  Button,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { FlagMajor } from "@shopify/polaris-icons";

const RewardSettings = () => {
  return (
    <Page
      divider
      title="Reward For Past Actions"
      backAction={{
        id: "Settings",
        url: "/settings",
      }}
    >
      <Layout>
        <Layout.Section secondary>
          <div style={{ marginTop: 12 }}>
            <Text as="h6" variant="headingLg">
              Reward members for past actions
            </Text>
          </div>
        </Layout.Section>
        <Layout.Section>
          <AlphaCard>
            <div style={{ margin: "12px 0px" }}>
              <Text as="h6">
                Retroactively grant points for actions performed before the app
                was installed.
              </Text>
            </div>
            <Button>Reward for Past Actions</Button>
            <Box paddingBlockStart="4">
              <Banner icon={FlagMajor} status="success" title="Note">
                <ul>
                  <li>
                    <Text as="p">
                      We will backfill points for the Sign Up and Place an Order
                      ways to earn.
                    </Text>
                  </li>
                  <li>
                    <Text as="p">
                      Points will only be awarded if the Way to Earn is
                      currently enabled.
                    </Text>
                  </li>
                </ul>
              </Banner>
            </Box>
          </AlphaCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default RewardSettings;
