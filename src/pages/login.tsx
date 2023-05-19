import { useState, useCallback } from "react";
import {
  Page,
  AlphaCard,
  PageActions,
  FormLayout,
  TextField,
  Form,
  Loading,
  Frame,
  Toast,
  Text,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/authService";

const Login = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const loadingMarkup = isLoading ? <Loading /> : null;

  const toastMarkup = status ? (
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
      setStatus(true);
      navigate("/");
      sessionStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, [navigate, values]);

  return (
    <Frame>
      {loadingMarkup}
      <Form onSubmit={() => ({})}>
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
      </Form>
    </Frame>
  );
};

export default Login;
