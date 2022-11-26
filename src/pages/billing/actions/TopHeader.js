import { PlusCircleFilled, PrinterOutlined } from "@ant-design/icons";
import { Stack, Typography, Button } from "@mui/material";
import React from "react";

const TopHeader = ({ handleSubmit, values }) => {
  return (
    <div>
      <Stack
        sx={{ backgroundColor: "#216b8b", padding: 1 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          fontWeight="bold"
          color="white"
          variant="p"
          alignSelf="left"
          ml={1}
        >
          NEW BILL
        </Typography>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="right"
          alignItems="center"
        >
          <Button
            size="sm"
            color="warning"
            sx={{ height: 30 }}
            variant="contained"
            startIcon={
              <PlusCircleFilled color="#205081" style={{ fontSize: "16px" }} />
            }
          >
            ADD NEW
          </Button>
          <Button
            size="sm"
            sx={{ height: 30 }}
            variant="contained"
            color="success"
            type="submit"
            onClick={handleSubmit}
            onSubmit={handleSubmit}
            // onClick={() => handleSubmit(props.values)}
            startIcon={
              <PrinterOutlined color="#205081" style={{ fontSize: "16px" }} />
            }
          >
            SAVE AND PRINT
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default TopHeader;
