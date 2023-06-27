import { useState, useMemo, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { EarnPoint, RedeemRewards } from "@/redux/actions/programActions";
import {
  getEarnList,
  getEarnLoading,
  getRedeemList,
  getRedeemLoading,
} from "@/redux/reducers/pointsProgram";

const PointsController = () => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
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

  const handleToggleChange = () => {
    setActive(!active);
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

  const handleOrderChange = (type: "earn" | "redeem") => {
    
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
    },
    handlers: {
      handleToggleChange,
      handleModalClose1,
      handleModalClose2,
      handleModalOpen1,
      handleModalOpen2,
    },
  };
};

export default PointsController;
