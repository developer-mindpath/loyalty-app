import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Customers from "@/pages/customer";

// Programs
import Points from "@/pages/programs/points/points";
// Points
import ShareActivity from "@/pages/programs/points/earn/share";
import OrderActivity from "@/pages/programs/points/earn/order";
import SignUpActivity from "@/pages/programs/points/earn/signUp";
import FollowActivity from "@/pages/programs/points/earn/follow";
import ReferalActivity from "@/pages/programs/points/earn/referral";
import BirthdayActivity from "@/pages/programs/points/earn/birthday";
import ProductReviewActivity from "@/pages/programs/points/earn/productReview";
// Redeeming
import CouponActivity from "@/pages/programs/points/redeem/coupon";
import DiscountActivity from "@/pages/programs/points/redeem/discount";
import PrecentageActivity from "@/pages/programs/points/redeem/percentage";
import FreeProductActivity from "@/pages/programs/points/redeem/freeProduct";
import FreeShippingActivity from "@/pages/programs/points/redeem/freeShipping";
// Referral
import ReferralPage from "@/pages/programs/referral";

//branding
import Translations from "@/pages/branding/translations/translations";
import EmailDesign from "@/pages/branding/emailDesign";

// Pages
import FeedbackPage from "@/pages/feedback";
import EmailProgram from "@/pages/programs/emails/emails";
import LikeActivity from "@/pages/programs/points/earn/like";
import EditEmailProgram from "@/pages/programs/emails/edit";

// Settings
import Settings from "@/pages/settings/settings";
import GeneralSettings from "@/pages/settings/general";
import BillingSettings from "@/pages/settings/billing";
import ImportSettings from "@/pages/settings/import";
import RewardSettings from "@/pages/settings/rewards";
import OrdersSettings from "@/pages/settings/order/order";
import EmailSettings from "@/pages/settings/email/email";

// Others
import CommingSoon from "@/components/commingSoon";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "@/redux/hook";
import { ProgramActions } from "@/redux/actions/programActions";

const DashboardRoutes = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(ProgramActions.getStatus());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      {/* Programs */}
      <Route path="/programs/referrals" element={<ReferralPage />} />
      <Route path="/programs/points" element={<Points />} />
      <Route path="/programs/email" element={<EmailProgram />} />
      <Route path="/programs/email/:id" element={<EditEmailProgram />} />
      <Route
        path="/programs/points/review/:id"
        element={<ProductReviewActivity />}
      />
      <Route
        path="/programs/points/referral/:id"
        element={<ReferalActivity />}
      />
      <Route path="/programs/points/share/:id" element={<ShareActivity />} />
      <Route path="/programs/points/sign_up/:id" element={<SignUpActivity />} />
      <Route
        path="/programs/points/birthday/:id"
        element={<BirthdayActivity />}
      />
      <Route path="/programs/points/like/:id" element={<LikeActivity />} />
      <Route
        path="/programs/points/place_order/:id"
        element={<OrderActivity />}
      />
      <Route path="/programs/points/follow/:id" element={<FollowActivity />} />
      {/* Redeem Reward */}
      <Route
        path="/programs/points/discount/:id"
        element={<DiscountActivity />}
      />
      <Route path="/programs/points/coupon/:id" element={<CouponActivity />} />
      <Route
        path="/programs/points/free-product/:id"
        element={<FreeProductActivity />}
      />
      <Route
        path="/programs/points/free-shipping/:id"
        element={<FreeShippingActivity />}
      />
      <Route
        path="/programs/points/percentage-off/:id"
        element={<PrecentageActivity />}
      />
      {/* Branding */}
      <Route path="/branding/translations" element={<Translations />} />
      <Route path="/branding/emails" element={<EmailDesign />} />

      {/* <Route path="/display/widget" element={<ConfigPage />} /> */}
      {/* Settings */}
      <Route path="/settings" element={<Settings />} />
      <Route path="settings/general" element={<GeneralSettings />} />
      <Route path="settings/billing" element={<BillingSettings />} />
      <Route path="settings/import" element={<ImportSettings />} />
      <Route path="settings/rewards" element={<RewardSettings />} />
      <Route path="settings/orders" element={<OrdersSettings />} />
      <Route path="settings/email" element={<EmailSettings />} />
      <Route path="settings/integrations" element={<CommingSoon />} />
      <Route path="settings/webhooks" element={<CommingSoon />} />
      <Route path="settings/toolkit" element={<CommingSoon />} />
    </Routes>
  );
};

export default DashboardRoutes;
