import axiosInstance from "./axiosInstance";

const LandOwnerService = () => {
  const getAll = async (payload) => {
    try {
      const res = await axiosInstance.get(`/land-owners?page=${payload}`);
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

  const create = async (payload) => {
    try {
      const res = await axiosInstance.post("/land-owners", payload);
      if (res.status == 201) {
        console.log("res from api: ", res.data);
        return res.data.data;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in service:", e.message);
      throw new Error(e.message);
    }
  };
  const update = async (payload) => {
    try {
      const res = await axiosInstance.put(
        `/land-owners/${payload.id}`,
        payload.data
      );
      if (res.status == 201 || res.status == 200) {
        return res.data.data;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in service:", e.message);
      throw new Error(e.message);
    }
  };

  const deleteOwner = async (id) => {
    try {
      const res = await axiosInstance.delete(`/land-owners/${id}`);
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
    create,
    update,
    deleteOwner,
  };
};

export default LandOwnerService;
