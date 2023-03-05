import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("El campo debe ser de tipo email")
    .required("El campo email es requerido"),
  password: Yup.string().required("El campo password es requerido"),
});
const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };
  return (
    <div>
      <h1>Formulario formik</h1>
      <Formik
        initialValues={initialCredentials}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => {
            setTimeout(r, 1000);
          });
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {/* Obtener props de formik */}
        {(props) => {
          const { isSubmitting, touched, errors } = props;
          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="Tu email..." />
              {errors.email && touched.email && (
                <div>
                  <p>{errors.email}</p>
                </div>
              )}
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
              />
              {errors.password && touched.password && (
                <div>
                  <p>{errors.password}</p>
                </div>
              )}
              <button type="submit">Submit</button>
              {isSubmitting ? <p>"Enviando formulario"</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFormik;
