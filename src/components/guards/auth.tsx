import { Navigate } from "react-router-dom";

interface IAuthWrapperProps {
  children: JSX.Element;
}

const AuthWrapper = ({ children }: IAuthWrapperProps): JSX.Element => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthWrapper;
