import { useNavigate } from "react-router-dom";
import Td from "../../../components/Element/Td";
import Th from "../../../components/Element/Th";
// import dummyData from "../../../data/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteOwnerAction,
  getAllOwnerAction,
  selectedOwner,
} from "./slice/LandOwnerSlice";
import Loading from "../../../components/Element/Loading";
import { Pagination, Modal, Button } from "flowbite-react";

const LandOwnerList = () => {
  const navigate = useNavigate();
  const { isLoading, owners, paging } = useSelector((state) => state.owner);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [idToDelete, setIdToDelete] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getAllOwnerAction(currentPage));
    console.log(currentPage);
  }, [dispatch, currentPage]);

  const navToForm = () => {
    navigate("/dashboard/owner/form");
  };

  const handleOpenModal = (id) => {
    setIdToDelete(id);
    setOpenModal(true);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
    // dispatch(getAllOwnerAction(currentPage));
  };
  const handleDelete = async (id) => {
    try {
      const res = await dispatch(deleteOwnerAction(id)).unwrap();
      if (res) {
        console.log(res);
        setOpenModal(false);
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
      {!Array.isArray(owners) || owners.length === 0 ? (
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-dark">Data Belum ada</h1>
        </div>
      ) : (
        <div className="w-full overflow-x-auto">
          <table
            className="w-full border border-collapse rounded sm:border-separate border-slate-200 text-center"
            cellSpacing="0"
          >
            <tbody>
              <tr>
                <Th>No</Th>
                <Th>Nama</Th>
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
                      {!data.isActive ? (
                        "-"
                      ) : (
                        <div className="flex gap-2 justify-center items-center">
                          <button
                            onClick={() => handleSendEditToForm(data)}
                            className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-secondary hover:bg-secondary-darker focus:bg-secondary-darker focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                          >
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleOpenModal(data.id)}
                            className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-600 hover:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                          >
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {paging.totalPage > 1 && (
        <div className="w-full mt-2 flex justify-center items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={paging.totalPage}
            onPageChange={onPageChange}
          />
        </div>
      )}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Hapus pemilik lahan?</Modal.Header>
        <Modal.Body className="flex items-center justify-center gap-4">
          <Button
            color="blue"
            className="w-20"
            onClick={() => handleDelete(idToDelete)}
          >
            Ya
          </Button>
          <Button
            color="red"
            className="w-20"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LandOwnerList;
