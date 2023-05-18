import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string().min(3, "Nombre de usuario muy corto").required("Escriba un nombre de usuario"),
  password: yup.string().strict(true).required("Escriba una contrasena"),
});

const initialValues = {
  username: "",
  password: "",
};

export { initialValues, validationSchema };
