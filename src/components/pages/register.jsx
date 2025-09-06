import { Link } from "react-router-dom";
import FormRegister from "../fragments/FormRegister";
import AuthLayout from "../layouts/AuthLayouts";
const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
