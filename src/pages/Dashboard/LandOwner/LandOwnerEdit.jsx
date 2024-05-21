import { useNavigate } from "react-router-dom";

const LandOwnerEdit = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };
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
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primaryDark text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primaryDark text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Nomor Handphone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="phoneNumber"
              placeholder="phoneNumber"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-primaryDark text-sm font-bold mb-2"
              htmlFor="nik"
            >
              NIK
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nik"
              type="nik"
              placeholder="nik"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
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

export default LandOwnerEdit;
