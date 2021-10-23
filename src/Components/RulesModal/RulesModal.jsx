import React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function RulesModal({ open, handleClose }) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="rules"
        open={open}
      >
        <BootstrapDialogTitle id="rules" onClose={handleClose}>
          Rules
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img src="/images/rules.svg" width="100%" height="100%" alt="rules" />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
