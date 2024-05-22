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

  // const getAll = async () => {
  //     try{
  //         const res = await axiosInstance.get()
  //     }
  // }

  return {
    register,
  };
};
