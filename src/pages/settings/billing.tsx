import { useCallback } from "react";
import {
  AlphaCard,
  Box,
  Button,
  HorizontalStack,
  Layout,
  Page,
  ProgressBar,
  Text,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import MathUtil from "../../utils/math";

const BillingSettings = () => {
  const navigate = useNavigate();
  const data = {
    plan: { name: "Growth", price: 149 },
    orders: {
      total: 1000,
      current: 1000,
    },
  };

  const handleRedirect = useCallback(() => navigate("/plans"), [navigate]);

  return (
    <Page
      divider
      title="Billing"
      subtitle="Grow your customer base and reward existing customers for referring thier friend, family, and anyone else!"
    >
      <Layout sectioned>
        <Layout>
          <Layout.Section secondary>
            <Box>
              <div style={{ marginTop: 12 }}>
                <Text as="h6" variant="headingLg">
                  Current Plan
                </Text>
              </div>
              <div style={{ marginTop: 16 }}>
                <Text as="h6">
                  Upgrade or downgrade any time to suit your buisness needs.
                  Chat with us at any time if you want to learn more.
                </Text>
              </div>
            </Box>
          </Layout.Section>
          <Layout.Section>
            <AlphaCard>
              <div style={{ marginBottom: 16 }}>
                <HorizontalStack align="space-between">
                  <Text as="p" variant="headingSm">
                    Your're on the {data.plan.name} Plan 🎉
                  </Text>
                  <Text as="p" variant="bodyMd">
                    ${data.plan.price}/mo
                  </Text>
                </HorizontalStack>
              </div>
              <Text as="h6">
                Orders processed: {data.orders.current}/{data.orders.total}
              </Text>
              <div style={{ margin: "8px 0px 16px" }}>
                <ProgressBar
                  progress={MathUtil.calculatePercentage(
                    data.orders.current,
                    data.orders.total
                  )}
                  color="primary"
                  size="small"
                />
              </div>
              <div style={{ margin: "12px 0px" }}>
                <Text as="p">
                  Upgrade now to unlock more orders and features to grow your
                  buisness
                </Text>
              </div>
              <Button primary onClick={handleRedirect}>
                View Plans
              </Button>
            </AlphaCard>
          </Layout.Section>
        </Layout>
      </Layout>
    </Page>
  );
};

export default BillingSettings;
