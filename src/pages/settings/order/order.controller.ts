import { useCallback, useEffect, useState } from "react";
import {
  getIsLoading,
  getOrderSettings,
  settingsActions,
} from "../../../redux/reducers/settings";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import SettingsAction from "../../../redux/actions/settingsAction";
import useContextualSave from "../../../hooks/useContextualSave";
import {
  IGetOrderSettingsResponse,
  IUpdateOrderSettingsRequest,
} from "../../../types";
import ObjectUtil from "../../../utils/object";

/**
 * Email controller
 */
export const OrderController = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getOrderSettings);
  const loading = useAppSelector(getIsLoading);
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
    const userId = "1";
    const getData = async () => {
      const response = await dispatch(
        SettingsAction.getOrders(userId)
      ).unwrap();
      setInital(response.body);
    };

    getData();
  }, [dispatch]);

  /**
   * Handle Reward Change
   */
  const handleChangeRewardChannel = useCallback(
    (value: string) => () => {
      dispatch(
        settingsActions.updateOrderState({ key: "reward_channel", value })
      );
    },
    [dispatch]
  );

  /**
   * Handle Refund Change
   */
  const handleChangeRefund = useCallback(
    (key: string) => () => {
      const value = data[key as keyof IGetOrderSettingsResponse] !== 0 ? 0 : 1;
      dispatch(settingsActions.updateOrderState({ key, value }));
    },
    [data, dispatch]
  );

  /**
   * Handle Include Change
   */
  const handleChangeInclude = useCallback(
    (key: string) => () => {
      const value = data[key as keyof IGetOrderSettingsResponse] !== 0 ? 0 : 1;
      dispatch(settingsActions.updateOrderState({ key, value }));
    },
    [data, dispatch]
  );

  /**
   * Handle Data discard
   */
  const handleDiscard = () => {
    dispatch(settingsActions.setOrderState(initalState));
    setInital(initalState);
  };

  const handleSave = async () => {
    const payload = ObjectUtil.getChanges(initalState, data);
    //TODO the request type is incompatible with response type with different types for same value hence giving empty object fo now
    try {
      await dispatch(
        SettingsAction.updateOrder({
          id: "1",
          ...payload,
        } as IUpdateOrderSettingsRequest)
      );
      setInital(data);
    } catch (e) {
      console.error(e);
    }
  };

  useContextualSave(initalState, data, {
    handleSave,
    handleDiscard,
  });

  return {
    getters: {
      points,
      include,
      loading,
      rewardChannel,
    },
    handlers: {
      handleChangeRefund,
      handleChangeRewardChannel,
      handleChangeInclude,
    },
  };
};
