import { useState, useCallback } from "react";
import {
  Page,
  AlphaCard,
  PageActions,
  FormLayout,
  TextField,
  Loading,
  Frame,
  Toast,
  Text,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/authService";

const Login = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const loadingMarkup = isLoading ? <Loading /> : null;

  const toastMarkup = toast ? (
    <Toast content="Redirecting.." duration={3000} onDismiss={() => ({})} />
  ) : null;

  const handleInputChange = (name: string) => (value: string) => {
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleLogin = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await AuthService.login(values);
      sessionStorage.setItem("token", response.token);
      setToast(true);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, [navigate, values]);

  return (
    <Frame>
      {loadingMarkup}
      <Page narrowWidth title="Login">
        <AlphaCard>
          <FormLayout>
            <Text as="p" variant="headingMd">
              Account
            </Text>
            <TextField
              autoComplete="email"
              value={values.email}
              type="email"
              name="email"
              label="Account email"
              onChange={handleInputChange("email")}
            />
            <TextField
              autoComplete="password"
              label="Password"
              value={values.password}
              name="password"
              onChange={handleInputChange("password")}
              type="password"
            />
          </FormLayout>
        </AlphaCard>
        <PageActions
          primaryAction={{
            loading: isLoading,
            content: "Login",
            onAction: handleLogin,
            disabled: isLoading,
          }}
        />
        {toastMarkup}
      </Page>
    </Frame>
  );
};

export default Login;
