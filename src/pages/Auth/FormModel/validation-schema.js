import * as Yup from "yup";

const validationSchema = [
  Yup.object().shape({
    // Login values
    username: Yup.string()
      .min(3, "Nombre de usuario muy corto")
      .required("Escriba un nombre de usuario"),
    password: Yup.string()
      .min(5, "Contrasena muy corta")
      .required("Escriba una contrasena"),
  }),
  //Register values
  Yup.object().shape({
    username: Yup.string()
      .min(3, "Nombre de usuario muy corto")
      .required("Escriba un nombre de usuario"),
    email: Yup.string().required("Introduzca un nombre de usuario o email"),
    password: Yup.string()
      .min(5, "Contrasena muy corta")
      .required("Escriba una contrasena"),
  }),
];

const initialValues = {
  username: "",
  password: "",
  email: "",
};

export { initialValues, validationSchema };
