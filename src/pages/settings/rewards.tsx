import { AlphaCard, Button, Icon, Layout, Page, Text } from "@shopify/polaris";
import { FlagMajor } from "@shopify/polaris-icons";
import { styled } from "styled-components";

const Alert = styled.div({
  margin: "16px 0px",
  padding: 12,
  borderTop: "2px solid #47c1bf",
  backgroundColor: "#e0f5f5",
  borderRadius: "4px",
  boxShadow:
    "inset 0 3px 0 0 #47c1bf, inset 0 0 0 0 transparent, 0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)",

  ".Polaris-Icon": {
    svg: {
      fill: "white",
    },
  },
});

const RewardSettings = () => {
  return (
    <Page divider title="Reward For Past Actions">
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
            <Alert>
              <div style={{ display: "flex", alignItems: "start" }}>
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "50%",
                    width: "fit-content",
                    backgroundColor: "#b7ecec",
                  }}
                >
                  <Icon source={FlagMajor} color="primary" />
                </div>
                <div style={{ margin: "8px 16px" }}>
                  <Text variant="headingMd" as="p">
                    Note
                  </Text>
                  <ul>
                    <li>
                      <Text as="p">
                        We will backfill points for the Sign Up and Place an
                        Order ways to earn.
                      </Text>
                    </li>
                    <li>
                      <Text as="p">
                        Points will only be awarded if the Way to Earn is
                        currently enabled.
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
            </Alert>
          </AlphaCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default RewardSettings;
