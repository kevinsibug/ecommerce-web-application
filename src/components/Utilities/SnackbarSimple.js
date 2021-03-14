import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const SnackbarSimple = ({open}) => {
  console.log(open)
    const [openState, setOpen] = React.useState(open);

    // const handleClick = () => {
    //   setOpen(true);
    // };

    // let openState = open
  
    const handleClose = (event, reason) => {
      console.log("here")
      console.log(reason)
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
      console.log(open)
    };

  return (
    <div>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openState}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Item already in cart"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
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
        }
      />
    </div>
  );
};


export default SnackbarSimple
