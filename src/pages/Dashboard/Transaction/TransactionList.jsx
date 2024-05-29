import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  doneSurveyTrxAction,
  getAllTrxAction,
  selectedTrx,
  verifyPaymentAction,
} from "./slice/transactionSlice";
import Loading from "../../../components/Element/Loading";
import Th from "../../../components/Element/Th";
import Td from "../../../components/Element/Td";
import dayjs from "dayjs";
import { Pagination } from "flowbite-react";

const TransactionList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, transactions, paging } = useSelector(
    (state) => state.transaction
  );
  const [currentPage, setCurrentPage] = useState(1);
  // const [survey,setSurvey] = useState([])
  // const [validTrx,setValidTrx] = useState([])

  useEffect(() => {
    dispatch(getAllTrxAction(currentPage));
  }, [dispatch, currentPage]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    dispatch(getAllTrxAction(currentPage));
  };

  const trxYetToSurvey = transactions.filter(
    (transaction) =>
      transaction.isSurveyed === false &&
      transaction.verifyStatus === "APPROVED"
  );
  const trxWaitPayment = transactions.filter(
    (transaction) =>
      transaction.isSurveyed === true && transaction.paymentStatus === "UNPAID"
  );

  const handleVerifySurvey = async (data) => {
    try {
      const res = await dispatch(doneSurveyTrxAction(data)).unwrap();
      if (res) {
        console.log(res);
      } else {
        console.log("Error to change survey status");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleVerifyPayment = async (data) => {
    try {
      const res = await dispatch(verifyPaymentAction(data)).unwrap();
      if (res) {
        console.log(res);
      } else {
        console.log("Error to change payment status");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const navToDetail = (data) => {
    console.log("data trx ke detail: ", data);
    dispatch(selectedTrx(data));
    // console.log("data trx di slice: ", transaction);
    navigate("/dashboard/transaction/detail");
  };

  const formattedToRp = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-dark">Data Belum ada</h1>
      </div>
    );
  }
  return (
    <div className="w-full pt-8 px-6">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <h1 className="text-dark font-bold">Transaksi Belum di Survey</h1>
        </div>
        {trxYetToSurvey.length === 0 ? (
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
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Nomor HP</Th>
                  <Th>Alamat Lahan Sewa</Th>
                  <Th>Periode Sewa</Th>
                  <Th>Tanggal Transaksi</Th>
                  <Th>Action</Th>
                </tr>
                {trxYetToSurvey.map((data, idx) => {
                  return (
                    <tr key={idx}>
                      <Td>{++idx}</Td>
                      <Td>
                        {data.customer.fullName ? data.customer.fullName : "-"}
                      </Td>
                      <Td>{data.customer.email ? data.customer.email : "-"}</Td>
                      <Td>
                        {data.customer.phoneNumber
                          ? data.customer.phoneNumber
                          : "-"}
                      </Td>
                      <Td>
                        {data.landPrice.land.address
                          ? data.landPrice.land.address
                          : "-"}
                      </Td>
                      <Td>
                        {data.rentPeriod.period
                          ? `${data.rentPeriod.period} Bulan`
                          : "-"}
                      </Td>
                      <Td>{dayjs(data.createdAt).format("DD-MM-YYYY")}</Td>
                      <Td>
                        <div className="flex gap-2 justify-center items-center">
                          <button
                            onClick={() => handleVerifySurvey(data.id)}
                            className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-primary hover:bg-primary-darker focus:bg-primary-darker focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                          >
                            <span>Verify</span>
                          </button>
                        </div>
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <h1 className="text-dark font-bold">
            Transaksi Menunggu Konfirmasi Bayar
          </h1>
        </div>
        {trxWaitPayment.length === 0 ? (
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-dark">Data Belum ada</h1>
          </div>
        ) : (
          <div className="w-full overflow-x-auto mb-4">
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
                  <Th>Alamat Lahan Sewa</Th>
                  <Th>Periode Sewa</Th>
                  <Th>Tanggal Transaksi</Th>
                  <Th>Action</Th>
                </tr>
                {trxWaitPayment.map((data, idx) => {
                  return (
                    <tr key={idx}>
                      <Td>{++idx}</Td>
                      <Td>
                        {data.customer.fullName ? data.customer.fullName : "-"}
                      </Td>
                      <Td>{data.customer.email ? data.customer.email : "-"}</Td>
                      <Td>
                        {data.customer.phoneNumber
                          ? data.customer.phoneNumber
                          : "-"}
                      </Td>
                      <Td>
                        {data.landPrice.land.address
                          ? data.landPrice.land.address
                          : "-"}
                      </Td>
                      <Td>
                        {data.rentPeriod.period
                          ? `${data.rentPeriod.period} Bulan`
                          : "-"}
                      </Td>
                      <Td>{dayjs(data.createdAt).format("DD-MM-YYYY")}</Td>
                      <Td>
                        <div className="flex gap-2 justify-center items-center">
                          <button
                            onClick={() => handleVerifyPayment(data.id)}
                            className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-primary hover:bg-primary-darker focus:bg-primary-darker focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                          >
                            <span>Verify</span>
                          </button>
                        </div>
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center mb-4">
          <h1 className="text-dark font-bold">Transaksi</h1>
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
                <Th>Alamat Lahan Sewa</Th>
                <Th>Periode Sewa</Th>
                <Th>Total Tagihan</Th>
                <Th>Tanggal Transaksi</Th>
                <Th>Status Pembayaran</Th>
                <Th>Status Verifikasi</Th>
                <Th>Action</Th>
              </tr>
              {transactions.map((data, idx) => {
                return (
                  <tr key={idx}>
                    <Td>{++idx}</Td>
                    <Td>
                      {data.customer.fullName ? data.customer.fullName : "-"}
                    </Td>
                    <Td>{data.customer.email ? data.customer.email : "-"}</Td>
                    <Td>
                      {data.customer.phoneNumber
                        ? data.customer.phoneNumber
                        : "-"}
                    </Td>
                    <Td>
                      {data.landPrice.land.address
                        ? data.landPrice.land.address
                        : "-"}
                    </Td>
                    <Td>{formattedToRp(data.totalPayment)}</Td>
                    <Td>
                      {data.rentPeriod.period
                        ? `${data.rentPeriod.period} Bulan`
                        : "-"}
                    </Td>
                    <Td>{dayjs(data.createdAt).format("DD-MM-YYYY")}</Td>
                    <Td>{data.paymentStatus}</Td>
                    <Td>{data.verifyStatus}</Td>
                    <Td>
                      <div className="flex gap-2 justify-center items-center">
                        <button
                          onClick={() => navToDetail(data)}
                          className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-primary hover:bg-primary-darker focus:bg-primary-darker focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:shadow-none"
                        >
                          <span>Detail</span>
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
      </div>
    </div>
  );
};

export default TransactionList;
