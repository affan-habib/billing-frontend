import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectToast } from "../reducers/toastSlice";
import { Alert } from "@mui/material";
export default function Toaster() {
  const [open, setOpen] = React.useState(true);
  const { counter, type, message } = useSelector(selectToast);
  const a = Array.from(Array(counter), (v, i) => i + 1);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {a.map((v, i) => (
        <Snackbar
          key={i}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          //   action={action}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ))}
    </div>
  );
}
