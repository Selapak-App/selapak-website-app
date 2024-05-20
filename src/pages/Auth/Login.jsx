import images from "../../assets/images";

const Login = () => {
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
            <p className="font-bold text-4xl text-primaryDark">Login</p>
          </div>
          <form className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
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
