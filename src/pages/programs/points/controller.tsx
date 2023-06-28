import { useState, useMemo, useEffect, useCallback, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { EarnPoint, RedeemRewards } from "@/redux/actions/programActions";
import {
  getEarnList,
  getEarnLoading,
  getProgramState,
  getRedeemList,
  getRedeemLoading,
  programPointActions,
} from "@/redux/reducers/pointsProgram";

const PointsController = () => {
  const dispatch = useAppDispatch();
  const [showBanner, setShowBanner] = useState(false);
  const state = useAppSelector(getProgramState);
  const active = state?.is_point_program_enabled === 1;
  const resetPoints = state?.reset_points_to_zero === 1;

  // Modal
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const statusLabel = useMemo(() => (active ? "on" : "off"), [active]);
  const earnList = useAppSelector(getEarnList);
  const earnLoading = useAppSelector(getEarnLoading);
  const redeemList = useAppSelector(getRedeemList);
  const redeemLoading = useAppSelector(getRedeemLoading);

  const getReferralData = useCallback(async () => {
    try {
      await dispatch(EarnPoint.getList());
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  const getRedeemData = useCallback(async () => {
    try {
      await dispatch(RedeemRewards.getList());
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    getReferralData();
  }, [getReferralData]);

  useEffect(() => {
    getRedeemData();
  }, [getRedeemData]);

  const handleToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      programPointActions.updateProgramState({
        key: "is_point_program_enabled",
        value: event.target.checked ? 1 : 0,
      })
    );
    if (!active) {
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
      }, 30000);
    }
  };

  const handleModalOpen1 = () => {
    setIsModalOpen1(true);
  };

  const handleModalClose1 = () => {
    setIsModalOpen1(false);
  };

  const handleModalOpen2 = () => {
    setIsModalOpen2(true);
  };

  const handleModalClose2 = () => {
    setIsModalOpen2(false);
  };

  const handleOrderChange = () => {};

  const handleResetPoint = (selected: boolean) => {
    dispatch(
      programPointActions.updateProgramState({
        key: "reset_points_to_zero",
        value: selected ? 1 : 0,
      })
    );
  };

  return {
    getters: {
      active,
      showBanner,
      isModalOpen1,
      isModalOpen2,
      statusLabel,
      earnList,
      earnLoading,
      redeemList,
      redeemLoading,
      resetPoints,
    },
    handlers: {
      handleToggleChange,
      handleModalClose1,
      handleModalClose2,
      handleModalOpen1,
      handleModalOpen2,
      handleResetPoint,
    },
  };
};

export default PointsController;
