import Button from "../Element/Button";
import InputFrom from "../Element/Input";
const FormRegister = () => {
  return (
    <form action="">
      <div className="mb-6">
        <label
          htmlFor="Fullname"
          className="block text-slate-700 text-sm font-bold mb-2"
        >
          Fullname
        </label>
        <InputFrom
          type="text"
          placeholder="insert your name..."
          name="Fullname"
        />
      </div>
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
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-slate-700 text-sm font-bold mb-2"
        >
          Confirm Password
        </label>
        <InputFrom
          type="password"
          placeholder="********"
          name="confirmpassword"
        />
      </div>
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
