import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";
const InputForm = forwardRef((props, ref) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-3">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
      ></Input>
    </div>
  );
});

export default InputForm;
