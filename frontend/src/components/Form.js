import { useDispatch } from "react-redux";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import useStyle from "../styles/FormStyles";

import { incomeCategories, expenseCategories } from "../constants/categories";

import formatDate from "../utils/formatDate";
import { useState } from "react";
import { createTransaction } from "../actions/transactionAction";
// import CustomizedSnackbar from "../../Snackbar/Snackbar";

const Form = () => {
  const classes = useStyle();

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("Income");
  const [date, setDate] = useState(formatDate(new Date()));

  const dispatch = useDispatch();
  const selectedCatergories =
    type === "Income" ? incomeCategories : expenseCategories;

  const createTransactionHandler = () => {
    dispatch(createTransaction({ amount, category, type, date }));
    setAmount("");
    setCategory("");
    setType("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="subtitle2"
          gutterBottom
        ></Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setCategory("");
            }}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {selectedCatergories.map((c) => (
              <MenuItem type={c.type} key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransactionHandler}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
