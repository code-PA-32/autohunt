import { Switch } from "Components/UserComponents";
import "./signUp.scss";
import * as Yup from "yup";

import { Form, Field, Formik, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import { useSignUp } from "./useSignUp";
import { MessagePopup } from "Components/MessagePopup/MessagePopup";

export const SignUp = () => {
  const { handleOnSubmit, open, setClose, message } = useSignUp();

  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
        name: "",
        phone: Number(),
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(4).required(),
        email: Yup.string().email().required(),
        phone: Yup.number()
          .test(
            "len",
            "Number must be at least 9 digits",
            (val) => val?.toString().length! >= 9
          )
          .required(),
        password: Yup.string().min(6).required(),
      })}
      onSubmit={(values, { resetForm }) => {
        handleOnSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched, getFieldProps }) => (
        <Form className="login_form" name="login">
          <Field
            {...getFieldProps("name")}
            label="Name"
            as={TextField}
            error={errors.name && touched.name}
            helperText={<ErrorMessage name="name" />}
          />
          <Field
            {...getFieldProps("email")}
            label="Email"
            as={TextField}
            error={errors.email && touched.email}
            helperText={<ErrorMessage name="email" />}
          />
          <MessagePopup
            message={message}
            open={open}
            setClose={setClose}
            severity="success"
          />
          <Field
            {...getFieldProps("phone")}
            label="Phone Number"
            as={TextField}
            error={errors.phone && touched.phone}
            helperText={<ErrorMessage name="phone" />}
          />
          <Field
            {...getFieldProps("password")}
            label="Password"
            as={TextField}
            error={errors.password && touched.password}
            helperText={<ErrorMessage name="password" />}
          />
          <button type="submit">SignUp</button>

          <Switch to="/login" text="Have an account?" link="Login" />
        </Form>
      )}
    </Formik>
  );
};
