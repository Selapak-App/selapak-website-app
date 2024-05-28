import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUmkmAction } from "./slice/umkmSlice";
import Loading from "../../../components/Element/Loading";

const updateUmkmSchema = yup
  .object({
    fullName: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Email must be right")
      .required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    nik: yup.string().required("NIK is required"),
    address: yup.string().required("Address is required"),
    gender: yup.string().required("Gender is required"),
  })
  .required();

const UmkmEditForm = () => {
  const navigate = useNavigate();
  const { isLoading, umkm } = useSelector((state) => state.umkm);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: umkm.fullName ? umkm.fullName : "",
      email: umkm.email ? umkm.email : "",
      phoneNumber: umkm.phoneNumber ? umkm.phoneNumber : "",
      nik: umkm.nik ? umkm.nik : "",
      address: umkm.address ? umkm.address : "",
      gender: umkm.gender ? umkm.address.toLowerCase() : "",
    },
    resolver: yupResolver(updateUmkmSchema),
  });
  const handleCancel = () => {
    navigate(-1);
  };
  const onSubmit = async (data) => {
    console.log("data form edit: ", data);
    try {
      const payload = { id: umkm.id, data: { ...data } };
      const res = await dispatch(updateUmkmAction(payload)).unwrap();
      if (res) {
        navigate("/dashboard/umkm");
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-6 w-full max-w-lg bg-white shadow-md rounded-md">
        <h1 className="font-bold pt-6 px-8 text-primaryDark">
          Formulir Edit Data Pemilik Lahan
        </h1>
        <form action="" className="px-8 py-2">
          <div className="mb-4">
            <label
              className="block text-primaryDark text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Name
            </label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullName"
                  type="fullName"
                  placeholder="fullName"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="fullName"
            />
            {errors.fullName && (
              <p className="text-sm text-red-500 mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-primaryDark text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                >
                  <option selected>Choose a gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
              )}
              name="gender"
            />
            {errors.gender && (
              <p className="text-sm text-red-500 mt-1">
                {errors.gender.message}
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
              htmlFor="address"
            >
              Alamat
            </label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="address"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="address"
            />
            {errors.address && (
              <p className="text-sm text-red-500 mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-primaryDark text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Nomor Handphone
            </label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="phoneNumber"
                  placeholder="Phone Number"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="phoneNumber"
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500 mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-primaryDark text-sm font-bold mb-2"
              htmlFor="nik"
            >
              NIK
            </label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nik"
                  type="text"
                  placeholder="NIK"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="nik"
            />
            {errors.nik && (
              <p className="text-sm text-red-500 mt-1">{errors.nik.message}</p>
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
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UmkmEditForm;
