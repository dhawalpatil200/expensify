import { useDispatch, useSelector } from "react-redux";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  ListItemText,
  CircularProgress,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyle from "../styles/ListStyles";
import formatDate from "../utils/formatDate";
import {
  deleteTransaction,
  getTransactionList,
} from "../actions/transactionAction";
import { useEffect } from "react";

const List = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const transactionList = useSelector((state) => state.transactionList);
  const { transactions, loading } = transactionList;

  useEffect(() => {
    dispatch(getTransactionList());
  }, [dispatch]);

  return (
    <div>
      {loading && <CircularProgress />}
      <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => {
          return (
            <Slide
              direction="down"
              in
              mountOnEnter
              unmountOnExit
              key={transaction._id}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className={
                      transaction.type === "Income"
                        ? classes.avatarIncome
                        : classes.avatarExpense
                    }
                  >
                    <MoneyOff />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={transaction.category}
                  secondary={`$${transaction.amount} - ${formatDate(
                    transaction.date
                  )}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => dispatch(deleteTransaction(transaction._id))}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>
          );
        })}
      </MUIList>
    </div>
  );
};

export default List;
