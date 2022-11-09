import * as React from "react";
import { Box, Button, Stack } from "@mui/material";
import "../../styles/index.css";
import {
  PlusCircleFilled,
  PrinterOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
export default function Remarks({ values }) {
  return (
    <Box sx={{ height: 80, Width: "100%" }}>
      <Stack direction="column" spacing={1} alignItems="center">
        <Button
          size="sm"
          color="warning"
          sx={{ width: "100%", marginX: 1, height: 35 }}
          variant="outlined"
          startIcon={
            <ReloadOutlined style={{ fontSize: "16px" }} />
            // <PlusCircleFilled color="#205081" style={{ fontSize: "16px" }} />
          }
        >
          RESET PAGE
        </Button>
        <Button
          size="sm"
          sx={{ width: "100%", marginX: 1, height: 35 }}
          variant="contained"
          color="success"
          type="submit"
          // onSubmit={() => props.handleSubmit()}
          // onClick={() => handleSubmit(props.values)}
          startIcon={
            <PrinterOutlined color="#205081" style={{ fontSize: "16px" }} />
          }
        >
          SAVE AND PRINT
        </Button>
      </Stack>
    </Box>
  );
}
