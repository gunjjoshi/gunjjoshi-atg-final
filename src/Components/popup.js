import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles(() => ({
  dialogWrapper: {
    position: "absolute",
    width: "73.6rem",
  },
  dialogTitle: {
    background: "#EFFFF4",
  },
}));

export default function Popup(props) {
  const { children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="lg"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle
        className={classes.dialogTitle}
        style={{ paddingBottom: "0" }}
      >
        <div style={{ display: "flex" }}>
          <b style={{ flexGrow: 1, color: "#008A45" }}>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </b>
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "black",
            }}
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CancelIcon fontSize="large" />
          </button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
