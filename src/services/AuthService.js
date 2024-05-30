import axiosInstance from "./axiosInstance";

export const AuthService = () => {
  const login = async (payload) => {
    try {
      const res = await axiosInstance.post("/auth/admin/login", payload);
      if (res.status == 200) {
        const token = res.data.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("role", res.data.data.role);
        localStorage.setItem("adminId", res.data.data.id);
        return res.data.data;
      } else {
        throw new Error("Unexpected response status: " + res.status);
      }
    } catch (e) {
      console.error("Error in login service:", e.message);
      throw new Error(e.message);
    }
  };

  return { login };
};
