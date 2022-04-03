import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import MyTextInput from "../app/common/MyTextInput";
import { useAppDispatch } from "../app/hooks";
import { setLoginOpen } from "../features/dialog/dialogSlice";
// import MyTextInput from "../../app/common/form/MyTextInput";
import { signInUser } from "../features/user/userSlice";

export default function LoginForm() {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{ username: "", password: "", error: null }}
      onSubmit={async (values, { setErrors }) => {
        try {
          await dispatch(
            signInUser({ username: values.username, password: values.password })
          );
          dispatch(setLoginOpen(false));
        } catch (error) {
          setErrors({ error: "Invalid username/email or password" });
          // console.log(error);
        }
      }}
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form
          onSubmit={handleSubmit}
          autoComplete="off"
          style={{ padding: "2rem" }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ marginBottom: "1rem" }}
          >
            Login
          </Typography>
          <MyTextInput name="username" placeholder="Username or email" />
          <MyTextInput name="password" placeholder="Password" type="password" />
          <ErrorMessage
            name="error"
            render={() => (
              <Typography style={{ margin: ".5rem 0", color: "red" }}>
                {errors.error}
              </Typography>
            )}
          />
          <Button
            sx={{
              width: "100%",
              marginTop: "1rem",
            }}
            variant="outlined"
            disabled={isSubmitting}
            type="submit"
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}
