import {
  ADD_TO_TRANSACTION_LIST,
  DELETE_FROM_TRANSACTION_LIST,
  TRANSACTION_LIST_REQUEST,
  TRANSACTION_LIST_SUCCESS,
  TRANSACTION_LIST_FAIL,
} from "../constants/transactionListConstants";

export const transactionListReducer = (
  state = { total: 0, transactions: [] },
  action
) => {
  switch (action.type) {
    case TRANSACTION_LIST_REQUEST:
      return { loading: true, ...state };
    case TRANSACTION_LIST_SUCCESS:
      let totalAmount = 0;
      action.payload.forEach((t) => {
        totalAmount += t.type === "Income" ? t.amount : -1 * t.amount;
      });
      return {
        ...state,
        total: totalAmount,
        loading: false,
        transactions: action.payload,
      };
    case TRANSACTION_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_TO_TRANSACTION_LIST:
      return {
        ...state,
        total:
          state.total +
          (action.payload.type === "Income"
            ? action.payload.amount
            : -1 * action.payload.amount),
        transactions: [...state.transactions, action.payload],
      };
    case DELETE_FROM_TRANSACTION_LIST:
      let [deletedTransaction] = state.transactions.filter(
        (t) => t._id === action.payload
      );

      let newTotal =
        state.total -
        (deletedTransaction.type === "Income"
          ? deletedTransaction.amount
          : -1 * deletedTransaction.amount);

      return {
        ...state,
        total: newTotal,
        transactions: state.transactions.filter(
          (t) => t._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
