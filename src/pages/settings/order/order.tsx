import {
  AlphaCard,
  Box,
  Checkbox,
  Divider,
  HorizontalStack,
  Layout,
  Page,
  RadioButton,
  Spinner,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { OrderController } from "./order.controller";

const OrdersSettings = () => {
  const { getters, handlers } = OrderController();
  const { rewardChannel, points, include, loading } = getters;
  const { handleChangeInclude, handleChangeRefund, handleChangeRewardChannel } =
    handlers;

  if (loading) {
    return (
      <Page
        title="Email"
        divider
        backAction={{
          id: "Settings",
          url: "/settings",
        }}
      >
        <HorizontalStack align="center">
          <Spinner />
        </HorizontalStack>
      </Page>
    );
  }

  return (
    <Page
      divider
      title="Order Settings"
      backAction={{
        id: "Settings",
        url: "/settings",
      }}
    >
      <Layout sectioned>
        <Layout>
          <Layout.Section secondary>
            <Box>
              <div style={{ marginTop: 12 }}>
                <Text as="h6" variant="headingLg">
                  Define order total
                </Text>
              </div>
              <div style={{ marginTop: 16 }}>
                <Text as="h6">
                  Select how order totals are calculated for rewards
                </Text>
              </div>
            </Box>
          </Layout.Section>
          <Layout.Section>
            <AlphaCard>
              <Checkbox
                label="Subtotal"
                helpText={
                  <p style={{ color: "var(--p-color-text-subdued)" }}>
                    The price of the order in the shop currency after discounts
                    but before shipping, duties, taxes and tips.
                  </p>
                }
                checked={Boolean(include.subTotal)}
                onChange={handleChangeInclude("orders_subtotal")}
              />
              <Checkbox
                label="Exclude coupon discounts used"
                helpText={
                  <p style={{ color: "var(--p-color-text-subdued)" }}>
                    The price of the order in the shop currency after discounts
                    but before shipping, duties, taxes and tips.
                  </p>
                }
                checked={Boolean(include.couponDiscount)}
                onChange={handleChangeInclude(
                  "orders_exclude_subtoken_discount"
                )}
              />
              <Checkbox
                label="Include taxes"
                helpText={
                  <p style={{ color: "var(--p-color-text-subdued)" }}>
                    The sum of all the taxes applied to the order in the shop
                    currency
                  </p>
                }
                checked={Boolean(include.taxes)}
                onChange={handleChangeInclude("orders_include_tax")}
              />
              <Checkbox
                label="Include shipping"
                helpText={
                  <p style={{ color: "var(--p-color-text-subdued)" }}>
                    The total shipping price of the order, excluding discounts
                    and returns, in shop and presentment currencies.
                  </p>
                }
                checked={Boolean(include.shipping)}
                onChange={handleChangeInclude("orders_include_shipping")}
              />
            </AlphaCard>
          </Layout.Section>
        </Layout>
        <div style={{ margin: "24px 0px" }}>
          <Divider />
        </div>
        <Layout>
          <Layout.Section secondary>
            <Box paddingBlockStart="6">
              <Text as="h6" variant="headingLg">
                Define order total
              </Text>
              <Box paddingBlockStart="6">
                <Text as="h6">
                  Select how order totals are calculated for rewards
                </Text>
              </Box>
            </Box>
          </Layout.Section>
          <Layout.Section>
            <AlphaCard>
              <Box paddingBlockEnd="4">
                <Text as="h6" variant="headingXs">
                  Deduct points awarded throughb an order if the order's
                  financial status changes to any of the following
                </Text>
              </Box>
              <VerticalStack>
                <Checkbox
                  label="Refunded"
                  checked={Boolean(points.refunded)}
                  onChange={handleChangeRefund("points_cancelation_refunde")}
                />
                <Box paddingBlockEnd="4" />
                <Checkbox
                  label="Partially Refunded"
                  checked={Boolean(points.partially)}
                  onChange={handleChangeRefund(
                    "orders_include_partialy_refunded"
                  )}
                />
                <Box paddingBlockEnd="4" />
                <Checkbox
                  label="Voided"
                  checked={Boolean(points.voided)}
                  onChange={handleChangeRefund("orders_include_voided")}
                />
              </VerticalStack>
            </AlphaCard>
          </Layout.Section>
        </Layout>
        <div style={{ margin: "24px 0px" }}>
          <Divider />
        </div>
        <Layout>
          <Layout.Section secondary>
            <Box paddingBlockStart="6">
              <Text as="h6" variant="headingLg">
                Order Channels to Reward Customers
              </Text>
              <Box paddingBlockStart="6">
                <Text as="h6">
                  Select the channels that customer should be rewarded through
                </Text>
              </Box>
            </Box>
          </Layout.Section>
          <Layout.Section>
            <AlphaCard>
              <VerticalStack>
                <Box paddingBlockEnd="4">
                  <RadioButton
                    label="Online and POS (Default)"
                    checked={rewardChannel === "online-pos"}
                    value="online-pos"
                    onChange={handleChangeRewardChannel("online-pos")}
                  />
                </Box>
                <Box paddingBlockEnd="4">
                  <RadioButton
                    label="Online"
                    onChange={handleChangeRewardChannel("online")}
                    value="online"
                    checked={rewardChannel === "online"}
                  />
                </Box>
                <Box paddingBlockEnd="4">
                  <RadioButton
                    label="POS"
                    onChange={handleChangeRewardChannel("POS")}
                    checked={rewardChannel === "POS"}
                    value="POS"
                  />
                </Box>
              </VerticalStack>
            </AlphaCard>
          </Layout.Section>
        </Layout>
      </Layout>
    </Page>
  );
};

export default OrdersSettings;
