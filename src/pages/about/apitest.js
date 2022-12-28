import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { TextField } from "@mui/material";

export default function DenseTable() {
  const [operationId, setOperationId] = React.useState("");
  const [arrayKey, setArrayKey] = React.useState("");
  const dispatch = useDispatch();
  const { mockData } = useSelector(selectApi);
  const handleApiFetch = () => {
    dispatch(
      callApi({
        operationId: operationId,
        output: "mockData",
      })
    );
  };
  // let arr = mockData?.data?.filter(item => typeof item !== "object");
  // console.log(Array.isArray(mockData?.data));

  return (
    <>
      <TextField onChange={(e) => setOperationId(e.target.value)} />
      <TextField onChange={(e) => setArrayKey(e.target.value)} />
      <button onClick={() => handleApiFetch()}>Fetch</button>
      <TableContainer component={Paper}>
        {mockData?.data?.length && (
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {Object.keys(mockData.data[0]).map((el) => (
                  <TableCell>{el}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {mockData.data.map((row) => (
                <TableRow>
                  {/* {JSON.stringify(mockData.data)} */}
                  {Object.keys(mockData.data[0]).map((el) => (
                    <TableCell>{typeof row[el] == 'object' ? JSON.stringify(row[el]) : row[el]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </>
  );
}
