import { useNavigate } from "react-router-dom";
import images from "../../assets/images";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { loginAction } from "./slice/AuthSlice";

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Email must be right")
      .required("Email is required"),
    password: yup.string().required("Password must be filled"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    console.log("data from form: ", data);
    try {
      const res = await dispatch(loginAction(data)).unwrap();
      if (res) {
        navigate("/dashboard");
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  return (
    <div className="w-full h-screen flex">
      <div className="flex-1 bg-primary flex items-center justify-center">
        <img
          src={images.skyBg}
          alt="login-bg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 bg-slate-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-md pt-6">
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={images.logo} alt="" className="h-20 w-20" />
            <p className="font-bold text-2xl text-primaryDark">Welcome Back!</p>
          </div>
          <form className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    type="email"
                    placeholder="Email"
                  />
                )}
                name="email"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Password"
                  />
                )}
                name="password"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit(onSubmit)}
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
