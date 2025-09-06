import InputForm from "../elements/input";
import Button from "../elements/button";

const FormRegister = () => {
  return (
    <form action="">
      <div className="mb-4">
        <InputForm
          label="Full Name"
          type="fullname"
          placeholder="Enter Your Full Name"
          name="fullname"
        />
        <InputForm
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          name="password"
        />
      </div>
      <Button classname="bg-gray-600 w-full">Login</Button>
    </form>
  );
};

export default FormRegister;
