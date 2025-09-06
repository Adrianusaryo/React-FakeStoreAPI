import { Link } from "react-router-dom";
import FormLogin from "../fragments/FormLogin";
import AuthLayout from "../layouts/AuthLayouts";
const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
