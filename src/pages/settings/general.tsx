import { useCallback, useState } from "react";
import {
  AlphaCard,
  Box,
  Button,
  Layout,
  Page,
  RadioButton,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { RefreshMinor } from "@shopify/polaris-icons";
import SectionedLayout from "@/components/layouts/sectionedLayout";
import SectionDivider from "@/components/layouts/sectionDivider";

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
      backAction={{
        id: "Settings",
        url: "/settings",
      }}
      title="General Settings"
      subtitle="Grow your customer base and reward existing customers for referring thier friend, family, and anyone else!"
    >
      <Layout sectioned>
        <SectionedLayout
          title="Troubleshooting Section"
          description="Sync your store"
        >
          <AlphaCard>
            <Box paddingBlockStart="3">
              <Text as="p" variant="bodyMd">
                Experiencing issues? Please click the button to ensure the app
                is synced.
              </Text>
            </Box>
            <Button onClick={handleSync} icon={RefreshMinor}>
              Sync Store
            </Button>
          </AlphaCard>
        </SectionedLayout>
        <SectionDivider />
        <SectionedLayout
          title="Program Participants"
          description="Manage who can earn points in your loyalty program."
        >
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
        </SectionedLayout>
      </Layout>
    </Page>
  );
};

export default GeneralSettings;
