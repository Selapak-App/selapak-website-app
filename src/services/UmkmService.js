import axiosInstance from "./axiosInstance";

const UmkmService = () => {
  const getAll = async (payload) => {
    try {
      const res = await axiosInstance.get(`/customers?page=${payload}`);
      if (res.status == 200) {
        return res.data;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in login service:", e.message);
      throw new Error(e.message);
    }
  };
  const update = async (payload) => {
    try {
      const res = await axiosInstance.put(
        `/customers/${payload.id}`,
        payload.data
      );
      if (res.status == 200) {
        return res.data;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in login service:", e.message);
      throw new Error(e.message);
    }
  };

  const deleteUmkm = async (payload) => {
    try {
      const res = await axiosInstance.delete(`/customers/${payload}`);
      if (res.status == 200) {
        res.data.message;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in service:", e.message);
      throw new Error(e.message);
    }
  };

  return {
    getAll,
    update,
    deleteUmkm,
  };
};

export default UmkmService;
