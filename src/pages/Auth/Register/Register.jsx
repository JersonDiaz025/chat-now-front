import {
  CenterBox,
  FormContainer,
  SubmitButton,
  CardContainerForm,
  NavLink,
} from "../../../components/index";
import { Typography } from "@mui/material";
import { auth } from "../../../constants/index";
import { useAuth } from "../../../hooks";
import FormRegister from "../FormRegister/FormRegister";

const Register = () => {
  const { loading, formik } = useAuth({ pathname: auth?.REGISTER });

  return (
    <CenterBox>
      <CardContainerForm>
        <FormContainer onSubmit={formik?.handleSubmit} title="Regístrarse">
          <FormRegister formik={formik} />
          <SubmitButton
            isDisabled={!(formik.dirty && formik.isValid)}
            isSubmitting={formik.isSubmitting}
            messages={{
              default: "Regístrate",
              submitting: loading && "Registrando",
            }}
          />
          <NavLink
            to={`/${auth.LOGIN}`}
            text={<Typography>{"Ya tienes una cuenta?"}</Typography>}
          />
        </FormContainer>
      </CardContainerForm>
    </CenterBox>
  );
};

export default Register;
