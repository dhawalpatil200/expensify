import asyncHandler from "express-async-handler";
import Transaction from "../models/transactionModel.js";

// @desc   Fetch all transactions
// @route  GET /api/transactions
// @access  private
const getAllTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({ user: req.user._id });
  res.status(200).json({
    status: "success",
    data: {
      transactions,
    },
  });
});

// @desc   create transactions
// @route  GET /api/transactions
// @access  private
const createTransaction = asyncHandler(async (req, res) => {
  const { type, category, date, amount } = req.body;
  const newTransaction = {
    user: req.user._id,
    type,
    category,
    date,
    amount,
  };
  const createdTransaction = await Transaction.create(newTransaction);
  res.status(200).json({
    type: createdTransaction.type,
    category: createdTransaction.category,
    amount: createdTransaction.amount,
    date: createdTransaction.date,
    _id: createdTransaction._id,
  });
});

// @desc   create transactions
// @route  GET /api/transactions
// @access  private
const deleteTransactionById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const transaction = await Transaction.findByIdAndDelete(id);

  if (!transaction) {
    throw new Error("No transaction found with that id");
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});

export { getAllTransactions, createTransaction, deleteTransactionById };
