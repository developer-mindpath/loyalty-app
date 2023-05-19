import {
  Route,
  Routes,
  BrowserRouter,
  Link as ReactRouterLink,
} from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import { LinkLikeComponentProps } from "@shopify/polaris/build/ts/latest/src/utilities/link";
import AuthWrapper from "../components/guards/auth";
import Login from "../pages/login";
import MainLayout from "../layouts/mainLayout";
import DashboardRoutes from "./auth";
import ContextualSaveProvider from "../contexts/contextualSave";

function Link({
  children,
  url = "",
  external,
  ref,
  ...rest
}: LinkLikeComponentProps) {
  const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;

  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = "_blank";
    rest.rel = "noopener noreferrer";
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <ReactRouterLink to={url} {...rest}>
      {children}
    </ReactRouterLink>
  );
}

function RouterComponent() {
  return (
    <BrowserRouter>
      <AppProvider linkComponent={Link} i18n={{}}>
        <ContextualSaveProvider>
          <Routes>
            <Route
              path="*"
              element={
                <AuthWrapper>
                  <MainLayout>
                    <DashboardRoutes />
                  </MainLayout>
                </AuthWrapper>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ContextualSaveProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default RouterComponent;
