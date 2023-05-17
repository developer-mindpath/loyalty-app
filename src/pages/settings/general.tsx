import { useCallback, useState } from "react";
import {
  AlphaCard,
  Box,
  Button,
  Divider,
  Layout,
  Page,
  RadioButton,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { RefreshMinor } from "@shopify/polaris-icons";

const GeneralSettings = () => {
  const [value, setSortValue] = useState<string>("members");

  const handleSync = useCallback(() => {
    console.error("Sync Not Implemented");
  }, []);

  const handleChange = useCallback(
    (_: boolean, newValue: string) => setSortValue(newValue),
    []
  );

  return (
    <Page
      divider
      title="General Settings"
      subtitle="Grow your customer base and reward existing customers for referring thier friend, family, and anyone else!"
    >
      <Layout sectioned>
        <Layout>
          <Layout.Section secondary>
            <Box>
              <div style={{ marginTop: 12 }}>
                <Text as="h6" variant="headingLg">
                  Troubleshooting Section
                </Text>
              </div>
              <div style={{ marginTop: 16 }}>
                <Text as="h6">Sync your store</Text>
              </div>
            </Box>
          </Layout.Section>
          <Layout.Section>
            <AlphaCard>
              <div style={{ marginBottom: 16 }}>
                <Text as="p" variant="bodyMd">
                  Experiencing issues? Please click the button to ensure the app
                  is synced.
                </Text>
              </div>
              <Button onClick={handleSync} icon={RefreshMinor}>
                Sync Store
              </Button>
            </AlphaCard>
          </Layout.Section>
        </Layout>
        <div style={{ margin: "24px 0px" }}>
          <Divider />
        </div>
        <Layout>
          <Layout.Section secondary>
            <Box>
              <div style={{ marginTop: 12 }}>
                <Text as="h6" variant="headingLg">
                  Program Participants
                </Text>
              </div>
              <div style={{ marginTop: 16 }}>
                <Text as="h6">
                  Manage who can earn points in your loyalty program.
                </Text>
              </div>
            </Box>
          </Layout.Section>
          <Layout.Section>
            <AlphaCard>
              <div style={{ margin: "6px 0px" }}>
                <Text as="h5" variant="headingMd">
                  Purchase Type (Optional)
                </Text>
              </div>
              <VerticalStack>
                <div style={{ margin: "6px 0px" }}>
                  <RadioButton
                    label="Members (customers who have a store account enabled)"
                    checked={value === "member"}
                    id="member"
                    name="member"
                    onChange={handleChange}
                  />
                </div>
                <div style={{ margin: "6px 0px" }}>
                  <RadioButton
                    id="all"
                    label="All customers (members and guests)"
                    name="all-customers"
                    checked={value === "all"}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ margin: "6px 0px" }}>
                  <RadioButton
                    id="both"
                    label="Both"
                    name="both-customers"
                    checked={value === "both"}
                    onChange={handleChange}
                  />
                </div>
              </VerticalStack>
            </AlphaCard>
          </Layout.Section>
        </Layout>
      </Layout>
    </Page>
  );
};

export default GeneralSettings;
