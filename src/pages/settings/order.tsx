import { useCallback, useState } from "react";
import {
  AlphaCard,
  Box,
  Checkbox,
  Divider,
  Layout,
  Page,
  RadioButton,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { styled } from "styled-components";

const CheckBoxHelpText = styled.p`
  font-size: 12px;
  color: grey;
`;

const OrdersSettings = () => {
  const [value, setSectionValue] = useState<string>("online");
  const include = {
    subTotal: true,
    couponDiscount: true,
    taxes: true,
    shipping: true,
  };
  const points = {
    refunded: true,
    partially: true,
    voided: true,
  };

  const handleChange = useCallback(
    (_: boolean, newValue: string) => setSectionValue(newValue),
    []
  );

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
                  <CheckBoxHelpText>
                    The price of the order in the shop currency after discounts
                    but before shipping, duties, taxes and tips.
                  </CheckBoxHelpText>
                }
                checked={include.subTotal}
                onChange={() => ({})}
              />
              <Checkbox
                label="Exclude coupon discounts used"
                helpText={
                  <CheckBoxHelpText>
                    The price of the order in the shop currency after discounts
                    but before shipping, duties, taxes and tips.
                  </CheckBoxHelpText>
                }
                checked={include.couponDiscount}
                onChange={() => ({})}
              />
              <Checkbox
                label="Include taxes"
                helpText={
                  <CheckBoxHelpText>
                    The sum of all the taxes applied to the order in the shop
                    currency
                  </CheckBoxHelpText>
                }
                checked={include.taxes}
                onChange={() => ({})}
              />
              <Checkbox
                label="Include shipping"
                helpText={
                  <CheckBoxHelpText>
                    The total shipping price of the order, excluding discounts
                    and returns, in shop and presentment currencies.
                  </CheckBoxHelpText>
                }
                checked={include.shipping}
                onChange={() => ({})}
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
                  checked={points.refunded}
                  onChange={() => ({})}
                />
                <Box paddingBlockEnd="4" />
                <Checkbox
                  label="Partially Refunded"
                  checked={points.partially}
                  onChange={() => ({})}
                />
                <Box paddingBlockEnd="4" />
                <Checkbox
                  label="Voided"
                  checked={points.voided}
                  onChange={() => ({})}
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
                    checked={value === "online-pos"}
                    value="online-pos"
                    onChange={handleChange}
                  />
                </Box>
                <Box paddingBlockEnd="4">
                  <RadioButton
                    label="Online"
                    onChange={handleChange}
                    value="online"
                    checked={value === "online"}
                  />
                </Box>
                <Box paddingBlockEnd="4">
                  <RadioButton
                    label="POS"
                    onChange={handleChange}
                    checked={value === "POS"}
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
