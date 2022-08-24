import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { createDataOrder } from "../../dataOrders";
import { userRows } from "../../datatablesource";
import "./orderstable.scss";

export function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.id}</TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">{row.client}</TableCell>
        <TableCell align="center">
          <div className="status">
            <span className={row.status === "Completed" ? "active" : "passive"}>
              {row.status}
            </span>
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>ID Customer</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="center">{historyRow.amount}</TableCell>
                      <TableCell align="center">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    client: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createDataOrder(
    "Frozen yoghurt",
    159,
    "2020-01-05",
    userRows[0].username,
    "Pending",
    3099
  ),
  createDataOrder(
    "Ice cream sandwich",
    237,
    "2020-01-05",
    userRows[1].username,
    "Completed",
    4199
  ),
  createDataOrder(
    "Eclair",
    262,
    "2020-01-05",
    userRows[2].username,
    "Completed",
    3.79
  ),
  createDataOrder(
    "Cupcake",
    305,
    "2020-01-05",
    userRows[3].username,
    "Pending",
    120
  ),
  createDataOrder(
    "Gingerbread",
    356,
    "2020-01-05",
    userRows[4].username,
    "Completed",
    125
  ),
];

const OrdersTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Client</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
