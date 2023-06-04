import { Switch } from "Components/UserComponents";
import "./login.scss";
import * as Yup from "yup";
import { useLogin } from "./useLogin";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
export const LoginContainer = () => {
  const { handleOnSubmit } = useLogin();

  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      })}
      onSubmit={handleOnSubmit}
    >
      {({ errors, touched, getFieldProps }) => (
        <Form className="login_form" name="login">
          <Field
            {...getFieldProps("email")}
            label="Email"
            as={TextField}
            error={errors.email && touched.email}
            helperText={<ErrorMessage name="email" />}
          />
          <Field
            {...getFieldProps("password")}
            label="Password"
            as={TextField}
            error={errors.password && touched.password}
            helperText={<ErrorMessage name="password" />}
          />
          <button type="submit">Login</button>

          <Switch
            to="/login/sign-up"
            text="Don't have an account?"
            link="SingUp"
          />
        </Form>
      )}
    </Formik>
  );
};
