import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Loading from "../../../components/Element/Loading";
import { approveTrxAction, rejectTrxAction } from "./slice/transactionSlice";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";

const TransactionDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { transaction, isLoading } = useSelector((state) => state.transaction);
  const { id } = useSelector((state) => state.auth);
  const [openModalApprove, setOpenModalApprove] = useState(false);
  const [openModalReject, setOpenModalReject] = useState(false);
  const formattedToRp = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const handleApprove = async () => {
    try {
      const payload = { trxId: transaction.id, body: { adminId: id } };
      const res = await dispatch(approveTrxAction(payload)).unwrap();
      if (res) {
        navigate(-1);
      } else {
        console.log("Error approve");
      }
    } catch (e) {
      console.log(e);
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  const handleReject = async () => {
    try {
      const payload = { trxId: transaction.id, body: { adminId: id } };
      const res = await dispatch(rejectTrxAction(payload)).unwrap();
      if (res) {
        navigate(-1);
      } else {
        console.log("Error reject");
      }
    } catch (e) {
      console.log(e);
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="pt-4 px-4 w-full h-full shadow-md">
      <div className="flex flex-col pt-4 px-4 pb-4 gap-4">
        <div className="flex gap-4 items-center">
          <ArrowLeftIcon
            className="h-6 w-6 cursor-pointer font-extrabold"
            onClick={() => navigate(-1)}
          />
          <p className="font-extrabold text-dark text-xl">Detail Transaksi</p>
        </div>
        <div>
          <p className="text-xl font-extrabold text-dark mb-2">Customer</p>
          <div className="flex w-1/2 justify-between">
            <div className="gap-2">
              <p className="font-bold text-lg text-dark">Nama</p>
              <p className="font-semibold text-lg text-slate-400">
                {transaction.customer.fullName
                  ? transaction.customer.fullName
                  : "-"}
              </p>
            </div>
            <div className="gap-2">
              <p className="font-bold text-lg text-dark">Email</p>
              <p className="font-semibold text-lg text-slate-400">
                {transaction.customer.email ? transaction.customer.email : "-"}
              </p>
            </div>
            <div className="gap-2">
              <p className="font-bold text-lg text-dark">Nomor Hp</p>
              <p className="font-semibold text-lg text-slate-400">
                {transaction.customer.phoneNumber
                  ? transaction.customer.phoneNumber
                  : "-"}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border border-solid border-gray-300" />
        <div>
          <p className="text-xl font-extrabold text-dark mb-2">Detail Bisnis</p>
          <div className="flex flex-row">
            <div className="gap-2 basis-1/4">
              <p className="font-bold text-lg text-dark">Nama Bisnis</p>
              <p className="font-semibold text-lg text-slate-400">
                {transaction.business.businessName
                  ? transaction.business.businessName
                  : "-"}
              </p>
            </div>
            <div className="gap-2 basis-1/4">
              <p className="font-bold text-lg text-dark">Tipe Bisnis</p>
              <p className="font-semibold text-lg text-slate-400">
                {transaction.business.businessType
                  ? transaction.business.businessType
                  : "-"}
              </p>
            </div>
          </div>
          <div className="gap-2 mt-2 mb-2">
            <p className="font-bold text-lg text-dark">Deskripsi Bisnis</p>
            <p className="font-semibold text-lg text-slate-400 text-wrap text-justify">
              {transaction.business.descripttion
                ? transaction.business.descripttion
                : "-"}
            </p>
          </div>
        </div>
        <div className="w-full border border-solid border-gray-300" />
        <div>
          <p className="text-xl font-extrabold text-dark mb-2">Lahan</p>
          <div className="flex flex-row">
            <div className="gap-2 basis-1/4">
              <p className="font-bold text-lg text-dark">Alamat</p>
              <p className="font-semibold text-lg text-slate-400">
                {`${transaction.landPrice.land.address},${
                  transaction.landPrice.land.village
                    ? `${transaction.landPrice.land.village},`
                    : ""
                }${
                  transaction.landPrice.land.district
                    ? `${transaction.landPrice.land.district},`
                    : ""
                }${transaction.landPrice.land.postalCode}`}
              </p>
            </div>
            <div className="gap-2 basis-1/4">
              <p className="font-bold text-lg text-dark">Harga</p>
              <p className="font-semibold text-lg text-slate-400">
                {formattedToRp(transaction.landPrice.price)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border border-solid border-gray-300" />
        <div>
          <div className="flex w-1/2 justify-between">
            <div className="gap-2">
              <p className="font-extrabold text-lg text-dark">
                Tanggal Transaksi
              </p>
              <p className="font-semibold text-lg text-slate-400">
                {dayjs(transaction.createdAt).format("DD-MM-YYYY")}
              </p>
            </div>
            <div className="gap-2">
              <p className="font-extrabold text-lg text-dark">
                Jumlah Pembelian
              </p>
              <p className="font-semibold text-lg text-slate-400">
                {transaction.quantity}
              </p>
            </div>
            <div className="gap-2">
              <p className="font-extrabold text-lg text-dark">Total Tagihan</p>
              <p className="font-semibold text-lg text-slate-400">
                {formattedToRp(transaction.totalPayment)}
              </p>
            </div>
          </div>
        </div>
        {transaction.verifyStatus === "PENDING" && (
          <div className="flex justify-between">
            <button
              onClick={() => setOpenModalApprove(true)}
              className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-primary hover:bg-primary-darker focus:bg-primary-darker focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
            >
              <span>Approve</span>
            </button>
            <button
              onClick={() => setOpenModalReject(true)}
              className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-600 hover:bg-red-darker focus:bg-red-darker focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
            >
              <span>Reject</span>
            </button>
          </div>
        )}
      </div>
      <Modal show={openModalApprove} onClose={() => setOpenModalApprove(false)}>
        <Modal.Header>Are you sure?</Modal.Header>
        <Modal.Body className="flex items-center justify-center gap-4">
          <Button color="blue" className="w-20" onClick={() => handleApprove()}>
            Yes
          </Button>
          <Button
            color="red"
            className="w-20"
            onClick={() => setOpenModalApprove(false)}
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={openModalReject} onClose={() => setOpenModalReject(false)}>
        <Modal.Header>Are you sure?</Modal.Header>
        <Modal.Body className="flex items-center justify-center gap-4">
          <Button color="blue" className="w-20" onClick={() => handleReject()}>
            Yes
          </Button>
          <Button
            color="red"
            className="w-20"
            onClick={() => setOpenModalReject(false)}
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TransactionDetail;
