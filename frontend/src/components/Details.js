import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import useStyle from "../styles/DetailsStyles";
import useTransactions from "../useTransaction";

ChartJS.register(ArcElement, Tooltip, Legend);

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyle();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} align="center" subheader={subheader} />
      <CardContent>
        <Typography align="center" variant="h5">
          ${total}
        </Typography>
        {total === 0 ? (
          <Typography align="center" variant="h5">
            No {title} found.
          </Typography>
        ) : (
          <Doughnut data={chartData} />
        )}
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
