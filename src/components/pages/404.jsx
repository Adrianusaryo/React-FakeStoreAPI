import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="font-bold text-6xl py-3">Oops !</h1>
      <p className="text-2xl font-medium py-3">
        Sorry, an unexpected error has occured
      </p>
      <p className="text-lg font-extrabold">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
