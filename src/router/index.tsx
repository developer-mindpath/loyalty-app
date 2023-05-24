import {
  Route,
  Routes,
  BrowserRouter,
  Link as ReactRouterLink,
} from "react-router-dom";
import { AppProvider, Frame } from "@shopify/polaris";
import { LinkLikeComponentProps } from "@shopify/polaris/build/ts/latest/src/utilities/link";
import AuthWrapper from "../components/guards/auth";
import Login from "../pages/login";
import MainLayout from "../layouts/mainLayout";
import DashboardRoutes from "./auth";
import ContextualSaveProvider from "../contexts/contextualSave";
import { Provider } from "react-redux";
import store from "../redux/store";

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
    <Provider store={store}>
      <BrowserRouter>
        <AppProvider linkComponent={Link} i18n={{}}>
          <Frame>
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
                <Route
                  path="/login"
                  element={
                    <AuthWrapper reverseGuard>
                      <Login />
                    </AuthWrapper>
                  }
                />
              </Routes>
            </ContextualSaveProvider>
          </Frame>
        </AppProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default RouterComponent;
