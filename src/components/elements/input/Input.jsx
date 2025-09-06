import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type = "text", placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border border-slate-300 rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-80 font-semibold "
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
