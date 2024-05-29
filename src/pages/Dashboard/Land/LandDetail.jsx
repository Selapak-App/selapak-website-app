import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const LandDetail = () => {
  const navigate = useNavigate();
  const { land } = useSelector((state) => state.land);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const businessRecommendType = land.businessTypes.map((item) => item.name);
  const businessRecommend = businessRecommendType.join(",");

  const openModal = (imageURL) => {
    setSelectedImage(imageURL);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="pt-4 px-4 w-full h-full shadow-md bg-white">
      <div className="flex flex-col pt-4 px-4 pb-4 gap-6">
        <div className="flex gap-4 items-center">
          <ArrowLeftIcon
            className="h-6 w-6 cursor-pointer font-extrabold text-dark"
            onClick={() => navigate(-1)}
          />
          <p className="font-extrabold text-dark text-xl">Detail Lahan</p>
        </div>
        <div className="">
          <p className="text-xl font-extrabold text-dark mb-2">Pemilik Lahan</p>
          <div className="flex w-1/2 justify-between">
            <div className="gap-2">
              <p className="font-bold text-lg text-dark">Nama</p>
              <p className="font-semibold text-lg text-slate-400">
                {land.landOwner.name}
              </p>
            </div>
            <div className="gap-2">
              <p className="font-bold text-lg text-dark">Email</p>
              <p className="font-semibold text-lg text-slate-400">
                {land.landOwner.email}
              </p>
            </div>
            <div className="gap-2">
              <p className="font-bold text-lg text-dark">Nomor HP</p>
              <p className="font-semibold text-lg text-slate-400">
                {land.landOwner.phoneNumber}
              </p>
            </div>
          </div>
        </div>

        {/* <div className="w-full border border-solid border-gray-300 mt-2 mb-2" /> */}

        <div className="">
          <p className="text-xl font-extrabold text-dark">Alamat</p>
          <p className="font-semibold text-xl text-gray-400">{`${
            land.address
          },${land.village ? `${land.village},` : ""}${
            land.district ? `${land.district},` : ""
          }${land.postalCode}`}</p>
        </div>

        {/* <div className="w-full border border-solid border-gray-300 mt-2 mb-2" /> */}

        <div className="w-1/2 text-wrap">
          <p className="text-xl font-extrabold text-dark">Deskripsi</p>
          <p className="font-semibold text-xl text-gray-400 text-justify indent-px">
            {land.description}
          </p>
        </div>

        {/* <div className="w-full border border-solid border-gray-300 mt-2 mb-2" /> */}

        <div className="">
          <p className="text-xl font-extrabold text-dark mb-2">Info Lahan</p>
          <div className="flex w-1/2 justify-between">
            <div className="gap-2">
              <p className="font-bold text-lg text-dark">Luas Per SLot</p>
              <p className="font-semibold text-lg text-slate-400">
                {land.slotArea}m
              </p>
            </div>
            <div className="gap-2">
              <p className="font-bold text-lg text-dark">Total Slot</p>
              <p className="font-semibold text-lg text-slate-400">
                Rp.{land.landPrice.price}
              </p>
            </div>
            <div className="gap-2">
              <p className="font-bold text-lg text-dark">Total Slot</p>
              <p className="font-semibold text-lg text-slate-400">
                {land.totalSlot}
              </p>
            </div>
            <div className="gap-2">
              <p className="font-bold text-lg text-dark">Slot Tersedia</p>
              <p className="font-semibold text-lg text-slate-400">
                {land.slotAvailable}
              </p>
            </div>
          </div>
        </div>

        {/* <div className="w-full border border-solid border-gray-300 mt-2 mb-2" /> */}

        <div className="">
          <p className="text-xl font-extrabold text-dark">Rekomendasi Bisnis</p>
          <p className="font-bold text-xl text-gray-400 text-justify indent-px">
            {businessRecommend}
          </p>
        </div>

        {/* <div className="w-full border border-solid border-gray-300 mt-2 mb-2" /> */}

        <div className="">
          <p className="text-xl font-extrabold text-dark">Foto Lahan</p>
          <div className="flex flex-wrap gap-4">
            {land.landPhotos.map((item, idx) => {
              return (
                <div key={idx}>
                  <img
                    src={item.imageURL}
                    alt="foto-lahan"
                    className="w-36 h-36 object-cover cursor-pointer"
                    onClick={() => openModal(item.imageURL)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Gambar Lebih Besar"
        className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto my-8 outline-none z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="foto besar"
            className="w-full h-auto object-contain"
          />
        </div>
      </Modal>
    </div>
  );
};

export default LandDetail;
