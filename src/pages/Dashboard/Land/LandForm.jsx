import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Element/Loading";
import { useEffect, useState } from "react";
import { getAllBusinessTypeAction } from "../Admin/slice/adminSlice";
import { getAllOwnerAction } from "../LandOwner/slice/LandOwnerSlice";
import Select from "react-select";
import { createLandAction } from "./slice/landSlice";

const fileSchema = yup
  .mixed()
  .required("File is required")
  .test(
    "fileSize",
    "File is too large",
    (value) => value && value.size <= 2000000
  )
  .test(
    "fileType",
    "Unsupported File Format",
    (value) =>
      value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
  );

const createLandSchema = yup.object({
  landOwnerId: yup.string(),
  address: yup.string().required("Field is required"),
  district: yup.string(),
  village: yup.string(),
  postalCode: yup.string().required("Field is required"),
  description: yup.string(),
  slotArea: yup.string().required("Field is required"),
  slotAvailable: yup.string().required("Field is required"),
  totalSlot: yup.string().required("Field is required"),
  price: yup.string().required("Field is required"),
  businessTypes: yup.array().required(),
  landPhotos: yup
    .array()
    .of(fileSchema)
    .required("Files are required")
    .min(1, "At least one file is required"),
});

const LandForm = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.land);
  const { businessType } = useSelector((state) => state.admin);
  const { owners } = useSelector((state) => state.owner);
  // const [selectedOwner, setSelectedOwner] = useState(null);
  // const [selectedBusinessType, setSelectedBusinessType] = useState([]);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      landOwnerId: "",
      address: "",
      district: "",
      village: "",
      postalCode: "",
      description: "",
      slotArea: "",
      slotAvailable: "",
      totalSlot: "",
      price: "",
      businessTypes: [],
      landPhotos: [],
    },
    resolver: yupResolver(createLandSchema),
  });

  useEffect(() => {
    dispatch(getAllBusinessTypeAction());
    dispatch(getAllOwnerAction());
  }, [dispatch]);

  const ownerOptions = owners.map((owner) => ({
    value: owner.id,
    label: owner.name,
  }));
  const businessOptions = businessType.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const handleSelectOwner = (selectedOption) => {
    setValue("landOwnerId", selectedOption ? selectedOption.value : "");
  };
  const handleSelectBusiness = (selectedOptions) => {
    setValue(
      "businessTypes",
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  const onSubmit = async (data) => {
    console.log("data di form: ", data);
    const formData = new FormData();

    // Append other fields to FormData
    formData.append("landOwnerId", data.landOwnerId);
    formData.append("address", data.address);
    formData.append("district", data.district);
    formData.append("village", data.village);
    formData.append("postalCode", data.postalCode);
    formData.append("description", data.description);
    formData.append("slotArea", data.slotArea);
    formData.append("slotAvailable", data.slotAvailable);
    formData.append("totalSlot", data.totalSlot);
    formData.append("price", data.price);
    // data.businessTypes.forEach((type, index) => {
    //   formData.append(`businessTypes[${index}]`, type);
    // });
    const formattedBusinessTypes = data.businessTypes.map((businessTypeId) => ({
      businessTypeId: businessTypeId,
    }));
    formattedBusinessTypes.forEach((businessType, index) => {
      formData.append(
        `businessTypes[${index}].businessTypeId`,
        businessType.businessTypeId
      );
    });

    // Append files to FormData
    data.landPhotos.forEach((file, index) => {
      formData.append(`landPhotos[${index}]`, file);
    });
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    try {
      const res = await dispatch(createLandAction(formData)).unwrap();
      if (res) {
        navigate(-1);
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-6 w-full max-w-5xl bg-white shadow-md rounded-md">
        <h1 className="font-bold pt-6 px-8 text-primaryDark">
          Formulir Daftar Lahan
        </h1>
        <form className="px-8 py-2">
          <div className="mb-4 flex flex-row gap-1">
            <div className="basis-1/4">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="address"
              >
                Nama Jalan
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <input
                    className="appearance-none border border-[#CCCCCC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
                    id="address"
                    type="text"
                    placeholder="Nama Jalan"
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
            <div className="basis-1/4">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="district"
              >
                Kecamatan
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <input
                    className="appearance-none border border-[#CCCCCC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
                    id="district"
                    type="text"
                    placeholder="Kecamatan"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="district"
              />
              {errors.district && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.district.message}
                </p>
              )}
            </div>
            <div className="basis-1/4">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="village"
              >
                Desa
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <input
                    className="appearance-none border border-[#CCCCCC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
                    id="village"
                    type="text"
                    placeholder="Desa"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="village"
              />
              {errors.village && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.village.message}
                </p>
              )}
            </div>
            <div className="basis-1/4">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="postalCode"
              >
                Kode Pos
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <input
                    className="appearance-none border border-[#CCCCCC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
                    id="postalCode"
                    type="text"
                    placeholder="Kode Pos"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="postalCode"
              />
              {errors.postalCode && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.postalCode.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex mb-4 flex-row gap-1">
            <div className="basis-1/2">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="landOwnerId"
              >
                Pemilik Lahan
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, value, onChange } }) => (
                  <Select
                    id="landOwnerId"
                    name="landOwnerId"
                    onBlur={onBlur}
                    onChange={(option) => {
                      onChange(option ? option.value : "");
                      handleSelectOwner(option);
                    }}
                    options={ownerOptions}
                    value={ownerOptions.find(
                      (option) => option.value === value
                    )}
                  />
                )}
                name="landOwnerId"
              />
              {errors.landOwnerId && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.landOwnerId.message}
                </p>
              )}
            </div>
            <div className="basis-1/2">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="businessTypes"
              >
                Tipe Bisnis
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, value, onChange } }) => (
                  <Select
                    id="businessTypes"
                    name="businessTypes"
                    isMulti
                    onBlur={onBlur}
                    onChange={(options) => {
                      onChange(
                        options ? options.map((option) => option.value) : []
                      );
                      handleSelectBusiness(options);
                    }}
                    options={businessOptions}
                    value={businessOptions.filter((option) =>
                      value.includes(option.value)
                    )}
                  />
                )}
                name="businessTypes"
              />
              {errors.businessTypes && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.businessTypes.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-primaryDark text-sm font-bold mb-2"
              htmlFor="description"
            >
              Deskripsi
            </label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <input
                  className="appearance-none border border-[#CCCCCC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
                  id="description"
                  type="text"
                  placeholder="description"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="description"
            />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="mb-4 flex flex-row gap-1">
            <div className="basis-1/3">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="slotArea"
              >
                Slot Area
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <input
                    className="appearance-none border border-[#CCCCCC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
                    id="slotArea"
                    type="text"
                    placeholder="Slot Area"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="slotArea"
              />
              {errors.slotArea && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.slotArea.message}
                </p>
              )}
            </div>
            <div className="basis-1/3">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="slotAvailable"
              >
                Slot Tersedia
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <input
                    className="appearance-none border border-[#CCCCCC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
                    id="slotAvailable"
                    type="text"
                    placeholder="Slot Tersedia"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="slotAvailable"
              />
              {errors.slotAvailable && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.slotAvailable.message}
                </p>
              )}
            </div>
            <div className="basis-1/3">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="totalSlot"
              >
                Total Slot
              </label>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <input
                    className="appearance-none border border-[#CCCCCC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
                    id="totalSlot"
                    type="text"
                    placeholder="Total Slot"
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="totalSlot"
              />
              {errors.totalSlot && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.totalSlot.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4 w-1/2">
            <label
              className="block text-primaryDark text-sm font-bold mb-2"
              htmlFor="price"
            >
              Harga
            </label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <input
                  className="appearance-none border border-[#CCCCCC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
                  id="price"
                  type="text"
                  placeholder="Harga"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="price"
            />
            {errors.price && (
              <p className="text-sm text-red-500 mt-1">
                {errors.price.message}
              </p>
            )}
          </div>
          <div className="mb-4 w-1/2">
            <label
              className="block text-primaryDark text-sm font-bold mb-2"
              htmlFor="landPhotos"
            >
              Upload Foto
            </label>
            <Controller
              control={control}
              name="landPhotos"
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  className="appearance-none border border-[#CCCCCC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
                  id="landPhotos"
                  type="file"
                  multiple
                  onBlur={onBlur}
                  onChange={(e) => {
                    onChange(Array.from(e.target.files));
                  }}
                />
              )}
            />
            {errors.landPhotos && (
              <p className="text-sm text-red-500 mt-1">
                {errors.landPhotos.message}
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

export default LandForm;
