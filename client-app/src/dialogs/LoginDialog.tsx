import Dialog from "@mui/material/Dialog/Dialog";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import Zoom from "@mui/material/Zoom/Zoom";
// import LoginForm from "./LoginForm";

export interface Props {
  open: boolean;
  onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

export default function LoginDialog({ open, onClose }: Props) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} TransitionComponent={Transition}>
      {/* <LoginForm /> */}
    </Dialog>
  );
}
