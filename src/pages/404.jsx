import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold"> Oops!</h1>
      <p className="my-5 text-xl"> Sorry, an unexpeteced erro has occured</p>
      <p>{error.statusText || error.massage} </p>
    </div>
  );
};
export default Errorpage;
