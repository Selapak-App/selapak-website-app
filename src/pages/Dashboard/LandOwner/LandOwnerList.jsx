import { useNavigate } from "react-router-dom";
import Td from "../../../components/Element/Td";
import Th from "../../../components/Element/Th";
// import dummyData from "../../../data/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteOwnerAction,
  getAllOwnerAction,
  selectedOwner,
} from "./slice/LandOwnerSlice";
import Loading from "../../../components/Element/Loading";

const LandOwnerList = () => {
  const navigate = useNavigate();
  const { isLoading, owners } = useSelector((state) => state.owner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOwnerAction());
  }, [dispatch]);

  const navToForm = () => {
    navigate("/dashboard/owner/form");
  };
  const handleDelete = async (id) => {
    try {
      const res = await dispatch(deleteOwnerAction(id)).unwrap();
      if (res) {
        console.log(res);
      } else {
        console.log("error di func delete");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleSendEditToForm = (data) => {
    console.log("data to edit: ", data);
    dispatch(selectedOwner(data));
    navigate("/dashboard/owner/edit");
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!Array.isArray(owners) || owners.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-dark">Data Belum ada</h1>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-dark font-bold">Pemilik Lahan</h1>
        <button
          onClick={navToForm}
          className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-primary hover:bg-blue-700 focus:bg-neutral-700"
        >
          <span>Add</span>
        </button>
      </div>
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
              <Th>Nomor HP</Th>
              <Th>NIK</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </tr>
            {owners?.map((data, idx) => {
              return (
                <tr key={idx}>
                  <Td>{++idx}</Td>
                  <Td>{data.name}</Td>
                  <Td>{data.email}</Td>
                  <Td>{data.phoneNumber}</Td>
                  <Td>{data.nik}</Td>
                  <Td>{data.isActive ? "active" : "inactive"}</Td>
                  <Td>
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        onClick={() => handleSendEditToForm(data)}
                        className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-secondary hover:bg-secondary-darker focus:bg-secondary-darker focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                      >
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-600 hover:bg-red-700 focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                      >
                        <span>Delete</span>
                      </button>
                    </div>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LandOwnerList;
