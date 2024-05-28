import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Element/Loading";
import { FiCheckCircle, FiLoader } from "react-icons/fi";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdDoneAll } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GiOpenGate } from "react-icons/gi";
import { getDashboardDataAction } from "../Admin/slice/adminSlice";

const Overview = () => {
  const { dashboard, isLoading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hit api");
    dispatch(getDashboardDataAction());
  }, [dispatch]);
  console.log("data dashboard: ", dashboard);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full pt-12 px-12">
      <p className="font-dark font-extrabold text-3xl mb-4">Transaksi</p>
      <div className="flex flex-row gap-4 mb-10">
        <div className="shadown-lg basis-1/4 bg-primary rounded-md">
          <div className="p-6 flex justify-between items-center">
            <div className="text-white">
              <p className="font-bold text-3xl mb-2">
                {dashboard.totalTransactionSuccess}
              </p>
              <p className="font-bold text-xl tracking-wider">Berhasil</p>
            </div>
            <div className="bg-[#50c4ed] rounded-full">
              <FiCheckCircle className="p-2 h-16 w-16 text-white" />
            </div>
          </div>
        </div>
        <div className="shadown-lg basis-1/4 bg-secondary rounded-md">
          <div className="p-6 flex justify-between items-center">
            <div className="text-white">
              <p className="font-bold text-3xl mb-2">
                {dashboard.totalTransactionOnProgress}
              </p>
              <p className="font-bold text-xl tracking-wider">Sedang Proses</p>
            </div>
            <div className="bg-[#e55807] rounded-full">
              <FiLoader className="p-2 h-16 w-16 text-white" />
            </div>
          </div>
        </div>
        <div className="shadown-lg basis-1/4 bg-red-600 rounded-md">
          <div className="p-6 flex justify-between items-center">
            <div className="text-white">
              <p className="font-bold text-3xl mb-2">
                {dashboard.totalTransactionFail}
              </p>
              <p className="font-bold text-xl tracking-wider">Dibatalkan</p>
            </div>
            <div className="bg-[#ef4444] rounded-full">
              <RxCross2 className="p-2 h-16 w-16 text-white" />
            </div>
          </div>
        </div>
        <div className="shadown-lg basis-1/4 bg-green-600 rounded-md">
          <div className="p-6 flex justify-between items-center">
            <div className="text-white">
              <p className="font-bold text-3xl mb-2">
                {dashboard.totalTransaction}
              </p>
              <p className="font-bold text-xl tracking-wider">Total</p>
            </div>
            <div className="bg-[#4ade80] rounded-full">
              <MdDoneAll className="p-2 h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="basis-1/2">
          <p className="font-dark font-extrabold text-3xl mb-4">Lahan</p>
          <div className="flex flex-row gap-2">
            <div className="shadown-lg basis-1/3 bg-[#ff4800] rounded-md">
              <div className="p-6 flex justify-between items-center">
                <div className="text-white">
                  <p className="font-bold text-3xl mb-2">
                    {dashboard.totalLandOwner}
                  </p>
                  <p className="font-bold text-xl tracking-wide">
                    Pemilik Lahan
                  </p>
                </div>
                <div className="bg-[#ff8500] rounded-full">
                  <IoPeople className="p-2 h-16 w-16 text-white" />
                </div>
              </div>
            </div>
            <div className="shadown-lg basis-1/3 bg-[#fcca46] rounded-md">
              <div className="p-6 flex justify-between items-center">
                <div className="text-white">
                  <p className="font-bold text-3xl mb-2">
                    {dashboard.totalLand}
                  </p>
                  <p className="font-bold text-xl tracking-wider">Lahan</p>
                </div>
                <div className="bg-[#a1c181] rounded-full">
                  <HiOutlineOfficeBuilding className="p-2 h-16 w-16 text-white" />
                </div>
              </div>
            </div>
            <div className="shadown-lg basis-1/3 bg-[#ba5624] rounded-md">
              <div className="p-6 flex justify-between items-center">
                <div className="text-white">
                  <p className="font-bold text-3xl mb-2">
                    {dashboard.totalLandAvailable}
                  </p>
                  <p className="font-bold text-xl tracking-wider">Tersedia</p>
                </div>
                <div className="bg-[#381d2a] rounded-full">
                  <GiOpenGate className="p-2 h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <p className="font-dark font-extrabold text-3xl mb-4">UMKM</p>
          <div className="flex flex-row gap-2">
            <div className="shadown-lg basis-1/2 bg-[#333a73] rounded-md">
              <div className="p-6 flex justify-between items-center">
                <div className="text-white">
                  <p className="font-bold text-3xl mb-2">
                    {dashboard.totalBusinessOwner}
                  </p>
                  <p className="font-bold text-xl tracking-wider">
                    Pemilik UMKM
                  </p>
                </div>
                <div className="bg-primary rounded-full">
                  <IoPeople className="p-2 h-16 w-16 text-white" />
                </div>
              </div>
            </div>
            <div className="shadown-lg basis-1/2 bg-[#14213d] rounded-md">
              <div className="p-6 flex justify-between items-center">
                <div className="text-white">
                  <p className="font-bold text-3xl mb-2">
                    {dashboard.totalBusiness}
                  </p>
                  <p className="font-bold text-xl tracking-wider">
                    UMKM Terdaftar
                  </p>
                </div>
                <div className="bg-[#fca311] rounded-full">
                  <BsShopWindow className="p-2 h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
