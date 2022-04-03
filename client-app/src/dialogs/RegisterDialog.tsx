import Dialog from "@mui/material/Dialog/Dialog";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import Zoom from "@mui/material/Zoom/Zoom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setRegisterOpen } from "../features/dialog/dialogSlice";
import RegisterForm from "./RegisterForm";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

export default function LoginDialog() {
  const open = useAppSelector((x) => x.dialog.registerOpen);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setRegisterOpen(false));
  };

  return (
    <Dialog onClose={handleClose} open={open} TransitionComponent={Transition}>
      <RegisterForm />
    </Dialog>
  );
}
