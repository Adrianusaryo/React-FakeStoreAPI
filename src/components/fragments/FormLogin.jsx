import InputForm from "../elements/input";
import Button from "../elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setloginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/product";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        setloginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      {loginFailed && (
        <p className="text-red-500 capitalize font-semibold">{loginFailed}</p>
      )}
      <div className="mb-4">
        <InputForm
          label="Username"
          type="username"
          placeholder="Enter Your Username"
          name="username"
          ref={usernameRef}
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          name="password"
        />
      </div>
      <Button classname="bg-gray-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
