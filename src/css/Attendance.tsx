import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

export const Title = styled("div")`
  margin-top: 100px;
  margin-left: 20px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: bold;
`;

export const Container = styled(TableContainer)`
  &.MuiTableContainer-root {
    width: 90%;
    margin: 0 auto;
  }
  border: 1px solid #a451b1;
`;

export const StyledTable = styled(Table)``;

export const THead = styled(TableHead)`
  background: rgba(164, 81, 177, 0.15);
`;

export const TBody = styled(TableBody)``;

export const TRow = styled(TableRow)``;

export const TCell = styled(TableCell)<{ check?: boolean }>`
  &.MuiTableCell-root {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #a451b1;
  }

  &.MuiTableCell-root.head_cell {
    font-size: 16px;
    font-weight: bold;
  }

  &.MuiTableCell-root.weekly {
    width: 60px;
    span {
      padding: 5px 10px;
      background: #f2e5f4;
      border-radius: 10px;
      color: #a451b1;
      font-weight: bold;
    }
  }

  &.MuiTableCell-root.info {
    text-align: left;

    .date {
      font-weight: bold;
    }

    .place {
      font-size: 12px;
      color: #685a5a;
    }
  }

  &.MuiTableCell-root.check {
    width: 70px;
    div {
      width: 50px;
      height: 30px;
      margin: 0 auto;
      border-radius: 10px;

      background:
        ${(props) =>
            props.check
              ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15' fill='none'%3E%3Cpath d='M2 7L7.07725 13.3032' stroke='%233C66F9' stroke-width='2.5' stroke-linecap='round'/%3E%3Cpath d='M13 2L7.07727 13.3032' stroke='%233C66F9' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E")`
              : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2 2.16754L9.77817 9.94572' stroke='%23FF0000' stroke-width='2.5' stroke-linecap='round'/%3E%3Cpath d='M9.96371 2L2.18554 9.77817' stroke='%23FF0000' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E")`}
          no-repeat center center,
        #f2e5f4;
    }
  }
`;
