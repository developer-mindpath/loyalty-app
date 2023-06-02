import { useCallback, useEffect, useState } from "react";
import {
  getEmailSettings,
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

export interface IOrderControllerResponse {
  getters: {
    rewardChannel: string | null;
    points: {
      refunded: number | null;
      partially: number | null;
      voided: number | null;
    };
    include: {
      subTotal: number;
      couponDiscount: number;
      taxes: number;
      shipping: number | null;
    };
  };
  handlers: {
    handleChangeRefund: (key: string) => (_: boolean, newValue: string) => void;
    handleChangeRewardChannel: (
      value: string
    ) => (_: boolean, newValue: string) => void;
    handleChangeInclude: (
      key: string
    ) => (_: boolean, newValue: string) => void;
  };
}

/**
 * Email controller
 * @returns {IOrderControllerResponse}
 */
export const OrderController = (): IOrderControllerResponse => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getOrderSettings);
  const Loading = useAppSelector(getIsLoading);
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

  return {
    getters: {
      rewardChannel,
      points,
      include,
    },
    handlers: {
      handleChangeRefund,
      handleChangeRewardChannel,
      handleChangeInclude,
    },
  };
};
