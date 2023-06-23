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
import PrecentageRedeem from "@/pages/programs/points/redeem/percentage";
import CouponActivity from "@/pages/programs/points/redeem/coupon";
// Referral
import ReferralPage from "@/pages/programs/referral";

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

const DashboardRoutes = (): JSX.Element => (
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
    <Route path="/programs/points/referral/:id" element={<ReferalActivity />} />
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
    <Route path="/programs/points/coupon/:id" element={<CouponActivity />} />
    <Route
      path="/programs/points/redeem/precentage/:id"
      element={<PrecentageRedeem />}
    />
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

export default DashboardRoutes;
