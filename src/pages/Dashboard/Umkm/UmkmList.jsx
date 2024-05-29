import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../../../components/Element/Loading";
import {
  deleteUmkmAction,
  getAllUmkmAction,
  selectedUmkm,
} from "./slice/umkmSlice";
import Td from "../../../components/Element/Td";
import Th from "../../../components/Element/Th";
import { Pagination } from "flowbite-react";

const UmkmList = () => {
  const navigate = useNavigate();
  const { isLoading, umkmList, paging } = useSelector((state) => state.umkm);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllUmkmAction(currentPage));
  }, [dispatch, currentPage]);

  const handleDelete = async (id) => {
    try {
      const res = await dispatch(deleteUmkmAction(id)).unwrap();
      if (res) {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSendEditToForm = (data) => {
    dispatch(selectedUmkm(data));
    navigate("/dashboard/umkm/edit");
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
    dispatch(getAllUmkmAction(currentPage));
  };

  if (isLoading) {
    return <Loading />;
  }
  if (!Array.isArray(umkmList) || umkmList.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-dark">Data Belum ada</h1>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-dark font-bold">UMKM</h1>
      </div>
      <div className="w-full overflow-x-auto">
        <table
          className="w-full border border-collapse rounded sm:border-separate border-slate-200 text-center"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <Th>No</Th>
              <Th>Nama</Th>
              <Th>Gender</Th>
              <Th>Email</Th>
              <Th>Alamat</Th>
              <Th>Nomor HP</Th>
              <Th>NIK</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </tr>
            {umkmList?.map((data, idx) => {
              return (
                <tr key={idx}>
                  <Td>{++idx}</Td>
                  <Td>{data.fullName}</Td>
                  <Td>{data.gender === "MALE" ? "Laki-Laki" : "Perempuan"}</Td>
                  <Td>{data.email}</Td>
                  <Td>{data.address ? data.address : "-"}</Td>
                  <Td>{data.phoneNumber ? data.phoneNumber : "-"}</Td>
                  <Td>{data.nik ? data.nik : "-"}</Td>
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
      {paging.totalPage > 1 && (
        <div className="w-full mt-2 flex justify-center items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={paging.totalPage}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </>
  );
};

export default UmkmList;
