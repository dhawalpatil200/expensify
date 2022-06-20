import { configureStore } from "@reduxjs/toolkit";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import {
  createTransactionReducer,
  deleteTransactionReducer,
} from "./reducers/transactionReducers";
import { transactionListReducer } from "./reducers/transactionListReducers";
import { snackbarReducer } from "./reducers/snackbarReducers";
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const transactionsFromStorage = localStorage.getItem("transactions")
  ? JSON.parse(localStorage.getItem("transactions"))
  : [];

const preLoadedState = {
  userLogin: { userInfo: userInfoFromStorage },
  transactionList: { transactions: transactionsFromStorage },
};

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    createTransaction: createTransactionReducer,
    deleteTransaction: deleteTransactionReducer,
    transactionList: transactionListReducer,
    snackbar: snackbarReducer,
  },
  preloadedState: preLoadedState,
});

export default store;
