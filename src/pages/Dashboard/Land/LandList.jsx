import { useNavigate } from "react-router-dom";
import Td from "../../../components/Element/Td";
import Th from "../../../components/Element/Th";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteLandAction,
  getAllLandAction,
  selectedLand,
} from "./slice/landSlice";
import Loading from "../../../components/Element/Loading";
import { Modal, Pagination, Button } from "flowbite-react";

const LandList = () => {
  const navigate = useNavigate();
  const { isLoading, lands, paging } = useSelector((state) => state.land);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [idToDelete, setIdToDelete] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getAllLandAction(currentPage));
  }, [dispatch, currentPage]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    dispatch(getAllLandAction(currentPage));
  };

  const handleOpenModal = (id) => {
    setIdToDelete(id);
    setOpenModal(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleDelete = async (id) => {
    try {
      const res = await dispatch(deleteLandAction(id)).unwrap();
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

  const handleToDetailPage = (data) => {
    dispatch(selectedLand(data));
    navigate("/dashboard/land/detail");
  };

  // if (!Array.isArray(lands) || lands.length === 0) {
  //   return (
  //     <div className="flex justify-center items-center">
  //       <h1 className="font-bold text-dark">Data Belum ada</h1>
  //     </div>
  //   );
  // }
  const navToForm = () => {
    navigate("/dashboard/land/form");
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-dark font-bold">Lahan</h1>
        <button
          onClick={navToForm}
          className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-primary hover:bg-blue-700 focus:bg-neutral-700"
        >
          <span>Add</span>
        </button>
      </div>
      {!Array.isArray(lands) || lands.length === 0 ? (
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
                <Th>Pemilik Lahan</Th>
                <Th>Alamat</Th>
                <Th>Total Slot</Th>
                <Th>Slot tersedia</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </tr>
              {lands?.map((data, idx) => {
                return (
                  <tr key={idx}>
                    <Td>{++idx}</Td>
                    <Td>{data.landOwner.name}</Td>
                    <Td>{`${data.address},${
                      data.village ? `${data.village},` : ""
                    }${data.district}`}</Td>
                    <Td>{data.totalSlot}</Td>
                    <Td>{data.slotAvailable}</Td>
                    <Td>{data.isActive ? "active" : "inactive"}</Td>
                    <Td>
                      <div className="flex gap-2 justify-center items-center">
                        <button
                          onClick={() => handleToDetailPage(data)}
                          className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-primary hover:bg-primary-darker focus:bg-primary-darker focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                        >
                          <span>Detail</span>
                        </button>
                        {/* <button
                          // onClick={() => handleSendEditToForm(data)}
                          className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-secondary hover:bg-secondary-darker focus:bg-secondary-darker focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                        >
                          <span>Edit</span>
                        </button> */}
                        {data.isActive && (
                          <button
                            onClick={() => handleOpenModal(data.id)}
                            className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-600 hover:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                          >
                            <span>Delete</span>
                          </button>
                        )}
                      </div>
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
        <Modal.Header>Hapus lahan ini?</Modal.Header>
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

export default LandList;
