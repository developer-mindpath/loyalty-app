import { Navigate } from "react-router-dom";

interface IAuthWrapperProps {
  reverseGuard?: boolean;
  children: JSX.Element;
}

const AuthWrapper = ({
  children,
  reverseGuard,
}: IAuthWrapperProps): JSX.Element => {
  const token = sessionStorage.getItem("token");

  if (reverseGuard) {
    if (token) {
      return <Navigate to="/" />;
    }

    return children;
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthWrapper;
