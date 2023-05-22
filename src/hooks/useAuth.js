import { useState } from "react";
import { useFormik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../pages/Auth/FormModel/validation-schema";

export default function useAuth({ pathname }) {
  //const [msgError, setMsgError] = useState("");
  const [loading, setLoading] = useState(false);

  const currentSchema = validationSchema[pathname === "login" ? 0 : 1];

  const formik = useFormik({
    initialValues,
    validationSchema: currentSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setLoading(true);
    },
  });

  return {
    //msgError,
    loading,
    formik,
  };
}
