import { useCallback, useEffect, useState } from "react";
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
import useContextualSave from "../../hooks/useContextualSave";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  getOrderSettings,
  getOrderlLoading,
  settingsActions,
} from "../../redux/reducers/settings";
import {
  IGetOrderSettingsResponse,
  IUpdateOrderSettingsRequest,
} from "../../types";
import SettingsAction from "../../redux/actions/settingsAction";

const CheckBoxHelpText = styled.p`
  font-size: 12px;
  color: grey;
`;

const OrdersSettings = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getOrderSettings);
  const Loading = useAppSelector(getOrderlLoading);
  const [initalState, setInital] = useState(data);

  const rewardChannel = data.reward_channel;
  const points = {
    refunded: data.points_cancelation_refunde,
    partially: data.orders_include_partialy_refunded,
    voided: data.orders_include_voided,
  };
  const include = {
    subTotal: data.orders_subtotal,
    couponDiscount: data.orders_exclude_subtoken_discount,
    taxes: data.orders_include_tax,
    shipping: data.orders_include_shipping,
  };

  useEffect(() => {
    // TODO - dummy user id to be replaced after login functionality
    const userId = "dummy id";
    dispatch(SettingsAction.getOrders(userId));
  }, [dispatch]);

  const handleChangeRewardChannel = useCallback(
    (value: string) => (_: boolean, newValue: string) => {
      dispatch(
        settingsActions.updateOrderState({ key: "reward_channel", value })
      );
    },
    [dispatch]
  );

  const handleChangeRefund = useCallback(
    (key: string) => (_: boolean, newValue: string) => {
      const value = data[key as keyof IGetOrderSettingsResponse] !== 0 ? 0 : 1;
      dispatch(settingsActions.updateOrderState({ key, value }));
    },
    [data, dispatch]
  );

  const handleChangeInclude = useCallback(
    (key: string) => (_: boolean, newValue: string) => {
      const value = data[key as keyof IGetOrderSettingsResponse] !== 0 ? 0 : 1;
      dispatch(settingsActions.updateOrderState({ key, value }));
    },
    [data, dispatch]
  );

  const handleDiscard = () => {
    dispatch(settingsActions.setOrderState(initalState));
    setInital(initalState);
  };

  const handleSave = () => {
    //TODO the request type is incompatible with response type with different types for same value hence giving empty object fo now
    dispatch(SettingsAction.updateOrder({} as IUpdateOrderSettingsRequest));
  };

  useContextualSave(initalState, data, {
    handleSave,
    handleDiscard,
  });

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
                checked={Boolean(include.subTotal)}
                onChange={handleChangeInclude("orders_subtotal")}
              />
              <Checkbox
                label="Exclude coupon discounts used"
                helpText={
                  <CheckBoxHelpText>
                    The price of the order in the shop currency after discounts
                    but before shipping, duties, taxes and tips.
                  </CheckBoxHelpText>
                }
                checked={Boolean(include.couponDiscount)}
                onChange={handleChangeInclude(
                  "orders_exclude_subtoken_discount"
                )}
              />
              <Checkbox
                label="Include taxes"
                helpText={
                  <CheckBoxHelpText>
                    The sum of all the taxes applied to the order in the shop
                    currency
                  </CheckBoxHelpText>
                }
                checked={Boolean(include.taxes)}
                onChange={handleChangeInclude("orders_include_tax")}
              />
              <Checkbox
                label="Include shipping"
                helpText={
                  <CheckBoxHelpText>
                    The total shipping price of the order, excluding discounts
                    and returns, in shop and presentment currencies.
                  </CheckBoxHelpText>
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
