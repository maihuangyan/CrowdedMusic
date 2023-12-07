import { Alert, Button, Dialog, DialogActions, DialogTitle, Modal, Snackbar } from "@mui/material";
import { createContext, useEffect, useState } from "react"
import loader from 'assets/images/back-trans.svg';
import useJwt from "utils/jwt/useJwt";
import { useSelector } from "react-redux";

const LoaderContext = createContext()
let confirmCallback = null;
const images = [];

const ProgressLoader = ({ children }) => {

  const [open, setOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [confirmDialogMessage, setConfirmDialogMessage] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState({
    text: "",
    type: "error",
  });

  const showProgress = () => {
    setOpen(true);
  };

  const hideProgress = () => {
    setOpen(false);
  };

  const showToast = (type, message) => {
    setSnackBarMsg({
      text: message,
      type: type,
    });
    setSnackBarOpen(true);
  }

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false);
  };

  const showConfirmDialog = (message, callback) => {
    setConfirmDialogOpen(true);
    setConfirmDialogMessage(message);
    confirmCallback = callback;
  }

  const handleConfirm = () => {
    setConfirmDialogOpen(false);
    if (confirmCallback) {
      confirmCallback();
      confirmCallback = null;
    }
  }

  const handleConfirmDialogClose = () => {
    setConfirmDialogOpen(false);
  }


  ////////////////////////////////////////////////
  /////////////////// Image //////////////////////
  ////////////////////////////////////////////////

  const addImage = (url, data) => {
    images.push({ url, data })
  }

  const getImage = (url) => {
    for (const image of images) {
      if (image.url === url) {
        return image.data
      }
    }
    return null;
  }

  return (
    <LoaderContext.Provider value={{
      showProgress,
      hideProgress,
      showToast,
      showConfirmDialog,
      addImage,
      getImage,
    }}>{children}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        open={open}
      >
        <div style={{ backgroundColor: "transparent", outline: 0 }}>
          <img src={loader} alt="" style={{ width: '100px', height: '100px' }} />
        </div>
      </Modal>
      <Dialog
        open={confirmDialogOpen}
        onClose={handleConfirmDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {confirmDialogMessage}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleConfirmDialogClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleConfirm();
            }}
            autoFocus
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackBarClose}
          severity={snackBarMsg.type}
          sx={{ width: "100%", opacity: "1 !important", fontSize: "18px", "& .MuiAlert-icon": { alignItems: "center" } }}
        >
          {snackBarMsg.text}
        </Alert>
      </Snackbar>
    </LoaderContext.Provider>
  );
};

export { LoaderContext, ProgressLoader }
