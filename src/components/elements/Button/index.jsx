const Button = (props) => {
  const {
    children = "....",
    classname = "bg-black",
    textcolor = "text-white",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-8 px-2 text-sm font-semibold rounded-md ${classname} ${textcolor}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
