import { useState } from "react";
import Td from "../../../components/Element/Td";
import dummyData from "../../../data/dummyData";
import Th from "../../../components/Element/Th";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Element/Loading";
import { registerAdminAction } from "./slice/adminSlice";

const registerAdminSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Email must be right")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const AdminMenu = () => {
  const [show, setShow] = useState(false);
  const { isLoading, admins } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerAdminSchema),
  });
  const actionBtnStyle = (status) => {
    const style =
      status.toLowerCase() === "active"
        ? "bg-red-600 hover:bg-red-700 focus:bg-red-700"
        : "bg-primary hover:bg-blue-700 focus:bg-blue-700";
    return style;
  };
  const onSubmit = async (data) => {
    try {
      const res = await dispatch(registerAdminAction(data)).unwrap();
      if (res) {
        console.log("data admin di store: ", admins);
        setShow(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full pt-8 px-6 flex flex-row">
      <div
        className={`${
          !show ? "hidden" : "basis-2/5 flex justify-center items-center"
        }`}
      >
        <div
          className={`flex flex-col gap-6 w-full max-w-lg bg-white shadow-md rounded-md`}
        >
          <h1 className="font-bold pt-6 px-8 text-primaryDark">
            Formulir Daftar Admin
          </h1>
          <form action="" className="px-8 py-2">
            <div className="mb-4">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="name"
                    placeholder="Name"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="name"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
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
                    type="email"
                    placeholder="Email"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
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
            <div className="mb-4">
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
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => {
                  setShow(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`${!show ? "flex-grow" : "basis-3/5"}`}>
        {!show && (
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-primaryDark font-bold">Admin</h1>
            <button
              onClick={() => setShow(true)}
              className="inline-flex items-center justify-center h-10 gap-2 px-4 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-primary hover:bg-blue-700 focus:bg-neutral-700"
            >
              <span>Add</span>
            </button>
          </div>
        )}
        <div className="w-full overflow-x-auto">
          <table
            className="w-full border border-collapse rounded sm:border-separate border-slate-200 text-center"
            cellSpacing="0"
          >
            <tbody>
              <tr>
                <Th>No</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </tr>
              {dummyData.adminData.map((data, idx) => {
                return (
                  <tr key={idx}>
                    <Td>{++idx}</Td>
                    <Td>{data.name}</Td>
                    <Td>{data.email}</Td>
                    <Td>{data.status}</Td>
                    <Td>
                      <div className="flex gap-2 justify-center items-center">
                        <button
                          className={`inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap ${actionBtnStyle(
                            data.status
                          )} focus-visible:outline-none`}
                        >
                          <span>
                            {data.status === "active" ? "Deactive" : "Active"}
                          </span>
                        </button>
                      </div>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
