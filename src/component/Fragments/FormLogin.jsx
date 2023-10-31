import Button from "../Element/Button";
import InputFrom from "../Element/Input";
const FormLogin = () => {
  return (
    <form action="">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-slate-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <InputFrom type="email" placeholder="example@gmail.com" name="email" />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-slate-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <InputFrom type="password" placeholder="********" name="password" />
      </div>
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
