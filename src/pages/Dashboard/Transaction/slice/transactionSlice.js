import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TransactionService from "../../../../services/TransactionService";

const service = TransactionService();

export const getAllTrxAction = createAsyncThunk(
  "trx/getAll",
  async (payload, thunkAPI) => {
    try {
      const res = await service.getAllTrx();
      if (res) {
        return res;
      } else {
        throw new Error("Error get all data");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTrxAction = createAsyncThunk(
  "trx/delete",
  async (payload, thunkAPI) => {
    try {
      const res = await service.deleteTrx(payload);
      if (res) {
        await thunkAPI.dispatch(getAllTrxAction()).unwrap();
        return res;
      } else {
        throw new Error("Error delete data");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const approveTrxAction = createAsyncThunk(
  "trx/approve",
  async (payload, thunkAPI) => {
    try {
      const res = await service.approveTrx(payload);
      if (res) {
        await thunkAPI.dispatch(getAllTrxAction()).unwrap();
        return res;
      } else {
        throw new Error("Error approve transaction");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const rejectTrxAction = createAsyncThunk(
  "trx/reject",
  async (payload, thunkAPI) => {
    try {
      const res = await service.rejectTrx(payload);
      if (res) {
        await thunkAPI.dispatch(getAllTrxAction()).unwrap();
        return res;
      } else {
        throw new Error("Error reject transaction");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const doneSurveyTrxAction = createAsyncThunk(
  "trx/survey",
  async (payload, thunkAPI) => {
    try {
      const res = await service.doneSurvey(payload);
      if (res) {
        await thunkAPI.dispatch(getAllTrxAction()).unwrap();
        return res;
      } else {
        throw new Error("Error survey transaction");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const verifyPaymentAction = createAsyncThunk(
  "trx/verifPay",
  async (payload, thunkAPI) => {
    try {
      const res = await service.verifyPayment(payload);
      if (res) {
        await thunkAPI.dispatch(getAllTrxAction()).unwrap();
        return res;
      } else {
        throw new Error("Error verify payment transaction");
      }
    } catch (e) {
      console.error("Thunk error:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    isLoading: false,
    message: "",
    transactions: [],
    transaction: [],
  },
  reducers: {
    selectedTrx: (state, { payload }) => {
      state.transaction = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTrxAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTrxAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.transactions = payload.data.content;
      state.message = payload.message;
    });
    builder.addCase(getAllTrxAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteTrxAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTrxAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteTrxAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(approveTrxAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(approveTrxAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
    });
    builder.addCase(approveTrxAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(rejectTrxAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(rejectTrxAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
    });
    builder.addCase(rejectTrxAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(doneSurveyTrxAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doneSurveyTrxAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
    });
    builder.addCase(doneSurveyTrxAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(verifyPaymentAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(verifyPaymentAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
    });
    builder.addCase(verifyPaymentAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { selectedTrx } = transactionSlice.actions;

export default transactionSlice;
