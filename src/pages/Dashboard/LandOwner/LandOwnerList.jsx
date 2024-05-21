import { useNavigate } from "react-router-dom";
import Td from "../../../components/Element/Td";
import Th from "../../../components/Element/Th";
import dummyData from "../../../data/dummyData";

const LandOwnerList = () => {
  const navigate = useNavigate();
  const navToForm = () => {
    navigate("/dashboard/owner/form");
  };
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
            {dummyData.ownerData.map((data, idx) => {
              return (
                <tr key={idx}>
                  <Td>{++idx}</Td>
                  <Td>{data.name}</Td>
                  <Td>{data.email}</Td>
                  <Td>{data.phoneNumber}</Td>
                  <Td>{data.nik}</Td>
                  <Td>{data.status}</Td>
                  <Td>
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        onClick={() => navigate("/dashboard/owner/edit")}
                        className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-secondary hover:bg-secondary-darker focus:bg-secondary-darker focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                      >
                        <span>Edit</span>
                      </button>
                      <button className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-600 hover:bg-red-700 focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none">
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
