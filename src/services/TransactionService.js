import axiosInstance from "./axiosInstance";

const TransactionService = () => {
  const getAllTrx = async (payload) => {
    try {
      const res = await axiosInstance.get(
        `/transactions?page=${payload ? payload : 1}`
      );
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

  const getTrxWithPaging = async (payload) => {
    try {
      const res = await axiosInstance.get(`/transactions?page=${payload}`);
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

  const deleteTrx = async (payload) => {
    try {
      const res = await axiosInstance.delete(`/transactions/${payload}`);
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

  const approveTrx = async (payload) => {
    try {
      const res = await axiosInstance.put(
        `/transactions/approve/${payload.trxId}`,
        payload.body
      );
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

  const rejectTrx = async (payload) => {
    try {
      const res = await axiosInstance.put(
        `/transactions/reject/${payload.trxId}`,
        payload.body
      );
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

  const doneSurvey = async (payload) => {
    try {
      const res = await axiosInstance.put(`/transactions/survey/${payload}`);
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

  const verifyPayment = async (payload) => {
    try {
      const res = await axiosInstance.put(`/transactions/pay/${payload}`);
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

  return {
    getAllTrx,
    deleteTrx,
    approveTrx,
    rejectTrx,
    doneSurvey,
    verifyPayment,
    getTrxWithPaging,
  };
};

export default TransactionService;
