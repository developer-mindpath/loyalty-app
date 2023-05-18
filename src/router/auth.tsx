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

const DashboardRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/points/earning_rules" element={<SetRule />} />
    <Route path="/customers" element={<Customers />} />
    {/* Programs */}
    <Route path="/programs/points" element={<Points />} />
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
