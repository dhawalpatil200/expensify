import express from "express";
import {
  getAllTransactions,
  createTransaction,
  deleteTransactionById,
} from "../controllers/transactionController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .get(protect, getAllTransactions)
  .post(protect, createTransaction);
router.route("/:id").delete(protect, deleteTransactionById);

export default router;
