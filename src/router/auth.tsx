import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import SetRule from "../referal";
import Customers from "../pages/customer";
// Settings
import Settings from "../pages/settings/settings";
import GeneralSettings from "../pages/settings/general";
import BillingSettings from "../pages/settings/billing";
import ImportSettings from "../pages/settings/import";
import RewardSettings from "../pages/settings/rewards";
import OrdersSettings from "../pages/settings/order";
import EmailSettings from "../pages/settings/email";
// Programs
import Points from "../pages/programs/points";
import ReferalActivity from "../pages/programs/earn/referal";
import ProductReviewActivity from "../pages/programs/earn/productReview";
import ShareActivity from "../pages/programs/earn/share";
import SignUpActivity from "../pages/programs/earn/signUp";
import BirthdayActivity from "../pages/programs/earn/birthday";
import OrderActivity from "../pages/programs/earn/order";
import FeedbackPage from "../pages/fedback";
import CouponActivity from "../pages/programs/earn/coupon";
import ConfigPage from "../pages/branding/Config";
import EmailProgram from "../pages/programs/emails/emails";
import EditEmailProgram from "../pages/programs/emails/edit";
import ReferralPage from "../pages/programs/referral";
import VipPage from "../pages/programs/vip/vip";

const DashboardRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/points/earning_rules" element={<SetRule />} />
    <Route path="/customers" element={<Customers />} />
    <Route path="/feedback" element={<FeedbackPage />} />
    {/* Programs */}
    <Route path="/programs/referrals" element={<ReferralPage />} />
    <Route path="/programs/points" element={<Points />} />
    <Route path="/programs/vip" element={<VipPage />} />
    <Route path="/programs/email" element={<EmailProgram />} />
    <Route path="/programs/email/:id" element={<EditEmailProgram />} />
    <Route
      path="/programs/points/product_review/:id"
      element={<ProductReviewActivity />}
    />
    <Route path="/programs/points/referal/:id" element={<ReferalActivity />} />
    <Route path="/programs/points/share/:id" element={<ShareActivity />} />
    <Route path="/programs/points/sign_up/:id" element={<SignUpActivity />} />
    <Route
      path="/programs/points/birthday/:id"
      element={<BirthdayActivity />}
    />
    <Route path="/programs/points/order/:id" element={<OrderActivity />} />
    <Route path="/programs/points/coupon/:id" element={<CouponActivity />} />
    {/* <Route path="/display/widget" element={<ConfigPage />} /> */}
    {/* Settings */}
    <Route path="/settings" element={<Settings />} />
    <Route path="settings/general" element={<GeneralSettings />} />
    <Route path="settings/billing" element={<BillingSettings />} />
    <Route path="settings/import" element={<ImportSettings />} />
    <Route path="settings/rewards" element={<RewardSettings />} />
    <Route path="settings/orders" element={<OrdersSettings />} />
    <Route path="settings/email" element={<EmailSettings />} />
  </Routes>
);

export default DashboardRoutes;
