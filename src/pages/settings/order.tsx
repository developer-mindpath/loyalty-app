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

interface IPoints {
  refunded: boolean;
  partially: boolean;
  voided: boolean;
}

const OrdersSettings = () => {
  const [rewardChannel, setRewardChannel] = useState<string>("online");
  const [points, setPoints] = useState<IPoints>({
    refunded: true,
    partially: false,
    voided: false,
  });

  const include = {
    subTotal: true,
    couponDiscount: true,
    taxes: true,
    shipping: true,
  };

  const handleChangeRewardChannel = useCallback(
    (key: string) => (_: boolean, newValue: string) => {
      setRewardChannel(key);
    },
    []
  );

  const handleChangeRefund = useCallback(
    (key: string) => (_: boolean, newValue: string) => {
      setPoints({ ...points, [key]: !points[key as keyof IPoints] });
    },
    [points]
  );

  const handleChangeInclude = useCallback(
    (key: string) => (_: boolean, newValue: string) => {
      setPoints({ ...points, [key]: !points[key as keyof IPoints] });
    },
    [points]
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
                  onChange={handleChangeRefund("refunded")}
                />
                <Box paddingBlockEnd="4" />
                <Checkbox
                  label="Partially Refunded"
                  checked={points.partially}
                  onChange={handleChangeRefund("partially")}
                />
                <Box paddingBlockEnd="4" />
                <Checkbox
                  label="Voided"
                  checked={points.voided}
                  onChange={handleChangeRefund("voided")}
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
