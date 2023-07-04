import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { parseInt } from "lodash";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  getRedeemDetails,
  programPointActions,
} from "@/redux/reducers/pointsProgram";
import { RedeemRewards } from "@/redux/actions/programActions";
import ObjectUtil from "@/utils/object";
import useContextualSave from "@/hooks/useContextualSave";
import {
  IRewardRedeemAction,
  IRewardRedeemWithAction,
} from "@/types/program/points/redeemRewards";
import { IValidValue } from "@/types/program";
import { parseStringToObject } from "@/utils/string";

export type ChangeHandlerType = (key: string) => (value: IValidValue) => void;

export interface IRewardDetailContext {
  error: boolean;
  loading: boolean;
  details: IRewardRedeemWithAction;
  handleChange: ChangeHandlerType;
}

const RewardDetailContext = createContext<IRewardDetailContext>({
  error: false,
  loading: true,
  details: {
    id: 0,
    point_redeem_id: 0,
    points_type: "",
    fixed_points_amount: 0,
    fixed_points_discount: 0,
    fixed_points_discount_type: "",
    apply_to_maximum_shipping_amount: 0,
    incremented_points_amount: 0,
    incremented_points_money_customer_received: 0,
    incremented_points_is_set_minimum_points: 0,
    incremented_points_is_set_maximum_points: 0,
    incremented_points_minimum_points: 0,
    incremented_points_maximum_points: 0,
    is_minimum_cart_requirement: 0,
    minimum_cart_value: 0,
    apply_to: "",
    collection_id: "",
    purchase_type: "",
    reward_expiry: 0,
    products: "",
    status: "",
    user_id: 0,
    admin_ref: 0,
    created_by: 0,
    updated_by: 0,
    created_at: "",
    updated_at: "",
    pointRedeem: {} as IRewardRedeemAction,
  },
  handleChange: () => () => ({}),
});

const RewardDetailProvider = ({ children }: PropsWithChildren) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const details = useAppSelector(getRedeemDetails);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [initalState, setIntialState] = useState<IRewardRedeemWithAction>();

  const addNew = useCallback(async () => {
    try {
      const response = await dispatch(
        RedeemRewards.add({
          reward_key: searchParams.get("id") as string,
          reward_icon: searchParams.get("img") as string,
          reward_key_key_display_text:
            details.pointRedeem.reward_key_key_display_text ??
            (searchParams.get("name") as string),
          reward_description: "Testing Description",
          ...details,
        })
      ).unwrap();

      const currentAction = searchParams.get("id") as string;
      setIntialState(details);
      navigate(`/programs/points/${currentAction}/${response.id}`);
    } catch (e) {
      console.error(e);
    }
  }, [details, dispatch, navigate, searchParams]);

  const handleSave = useCallback(async () => {
    if (!id) return;

    if (id === "new") {
      addNew();
      return;
    }

    try {
      const payload = ObjectUtil.getChanges(initalState!, details);
      const payloadAction = ObjectUtil.getChanges(
        initalState?.pointRedeem!,
        details.pointRedeem
      );
      await dispatch(
        RedeemRewards.update({ id, data: payload, dataAction: payloadAction })
      );
      setIntialState(details);
    } catch (e) {
      console.error(e);
    }
  }, [addNew, details, dispatch, id, initalState]);

  const handleDiscard = useCallback(async () => {
    await dispatch(programPointActions.setRedeemDetails(initalState!));
  }, [dispatch, initalState]);

  useContextualSave(
    initalState,
    details,
    {
      handleSave,
      handleDiscard,
    },
    loading
  );

  const getData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await dispatch(RedeemRewards.getDetail(id!)).unwrap();
      setIntialState(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  }, [dispatch, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChange = useCallback(
    (key: string) => (value: string | boolean | number) => {
      const object = parseStringToObject<IRewardRedeemWithAction>(key, value);
      dispatch(
        programPointActions.setRedeemDetails({
          ...details,
          ...object,
          pointRedeem: { ...details.pointRedeem, ...object.pointRedeem },
        })
      );
    },
    [details, dispatch]
  );

  const value: IRewardDetailContext = useMemo(
    () => ({
      loading,
      error,
      details,
      handleChange,
    }),
    [details, error, handleChange, loading]
  );

  return (
    <RewardDetailContext.Provider value={value}>
      {children}
    </RewardDetailContext.Provider>
  );
};

export const useRewardDetail = () => useContext(RewardDetailContext);

export default RewardDetailProvider;
