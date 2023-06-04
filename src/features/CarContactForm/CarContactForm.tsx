import "./carContactForm.scss";
import * as Yup from "yup";

import { Form, Field, Formik, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import { useCarContactForm } from "./useCarContactForm";

export const CarContactForm = () => {
  const { handleOnSubmit } = useCarContactForm();

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        phone: Number(),
        subject: "",
        comment: "",
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
        subject: Yup.string().min(5).required(),
        comment: Yup.string().min(10).required(),
      })}
      onSubmit={handleOnSubmit}
    >
      {({ errors, touched, getFieldProps }) => (
          <Form className="contact_form" name="contact">
            <h3>Contact Seller</h3>

            <Field
              className="form_name"
              {...getFieldProps("name")}
              label="Name"
              as={TextField}
              error={errors.name && touched.name}
              helperText={<ErrorMessage name="name" />}
            />
            <Field
              className="form_email"
              {...getFieldProps("email")}
              label="Email"
              as={TextField}
              error={errors.email && touched.email}
              helperText={<ErrorMessage name="email" />}
            />
            <Field
              {...getFieldProps("phone")}
              label="Phone Number"
              as={TextField}
              error={errors.phone && touched.phone}
              helperText={<ErrorMessage name="phone" />}
            />
            <Field
              {...getFieldProps("subject")}
              label="Subject"
              as={TextField}
              error={errors.subject && touched.subject}
              helperText={<ErrorMessage name="subject" />}
            />
            <Field
              className="form_comment"
              {...getFieldProps("comment")}
              label="Comment"
              as={TextField}
              error={errors.comment && touched.comment}
              helperText={<ErrorMessage name="comment" />}
            />
            <button type="submit">Contact Seller</button>
          </Form>
      )}
    </Formik>
  );
};
