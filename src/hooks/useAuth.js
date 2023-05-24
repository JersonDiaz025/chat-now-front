//import { useState } from "react";
import { useFormik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../pages/Auth/FormModel/validation-schema";
import useLogin from "./useLogin";
import auth from "../constants/auth";

export default function useAuth({ pathname }) {
  //const [msgError, setMsgError] = useState("");
  //const [loading, setLoading] = useState(false);
  const { loading, message, login, msgError } = useLogin()

  const currentSchema = validationSchema[pathname === "login" ? 0 : 1];

  const formik = useFormik({
    initialValues,
    validationSchema: currentSchema,
    onSubmit: async (values) => {
      //alert(JSON.stringify(values, null, 2));
      await login(auth.LOGIN, values)
      
    },
  });

  return {
    message,
    msgError,
    loading,
    formik,
  };
}
