import axiosInstance from "./axiosInstance";

export const AdminService = () => {
  const register = async (payload) => {
    try {
      const res = await axiosInstance.post("/auth/admin/register", payload);
      if (res.status == 201 || res.status == 200) {
        return res.data.data;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in login service:", e.message);
      throw new Error(e.message);
    }
  };

  const getAll = async () => {
    try {
      const res = await axiosInstance.get("/admins");
      if (res.status == 200) {
        return res.data.data.content;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in login service:", e.message);
      throw new Error(e.message);
    }
  };

  const setActive = async (id) => {
    try {
      const res = await axiosInstance.put(`/admins/active/${id}`);
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

  const setIncative = async (id) => {
    try {
      const res = await axiosInstance.put(`/admins/deactive/${id}`);
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

  const createNewBusinessType = async (payload) => {
    try {
      const res = await axiosInstance.post("/business-types", payload);
      if (res.status == 201) {
        return res.data;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in login service:", e.message);
      throw new Error(e.message);
    }
  };

  const getAllBusinessType = async () => {
    try {
      const res = await axiosInstance.get("/business-types");
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

  return {
    register,
    getAll,
    setActive,
    setIncative,
    getAllBusinessType,
    createNewBusinessType,
  };
};
