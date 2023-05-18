//import { useState } from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./FormModel/validation-schema";

export default function useLogin() {
  //const [msgError, setMsgError] = useState("");
  //const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return {
    //msgError,
    //loading,
    formik,
  };
}
