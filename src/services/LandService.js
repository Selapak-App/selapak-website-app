import axiosInstance, { axiosInstanceFormData } from "./axiosInstance";

const LandService = () => {
  const getAll = async (payload) => {
    try {
      const res = await axiosInstance.get(`/lands?page=${payload}`);
      if (res.status == 200) {
        return res.data;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in service:", e.message);
      throw new Error(e.message);
    }
  };

  const createLand = async (payload) => {
    try {
      const res = await axiosInstanceFormData.post("/lands", payload);
      if (res.status == 200 || res.status == 201) {
        return res.data;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in service:", e.message);
      throw new Error(e.message);
    }
  };

  const editLand = async (payload) => {
    try {
      const res = await axiosInstance.put(`/lands/${payload.id}`, payload.data);
      if (res.status == 200) {
        return res.data;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in service:", e.message);
      throw new Error(e.message);
    }
  };

  const deleteLand = async (payload) => {
    try {
      const res = await axiosInstance.delete(`/lands/${payload.id}`);
      if (res.status == 200) {
        return res.data.message;
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
    createLand,
    editLand,
    deleteLand,
  };
};

export default LandService;
