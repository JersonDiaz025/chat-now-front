import useLogin from "./use-auth";
import FormLogin from "../FormLogin/FormLogin";
import { Typography } from "@mui/material";
import {
  CenterBox,
  FormContainer,
  SubmitButton,
  NavLink
} from "../../../components/index";
import { StyledCardContainer } from "./styles";

const Login = () => {
  const { formik } = useLogin();
  return (
    <CenterBox>
      <StyledCardContainer>
        <FormContainer onSubmit={formik?.handleSubmit} title="Sign in">
          <FormLogin formik={formik} />
          <SubmitButton
            isDisabled={!(formik.dirty && formik.isValid)}
            isSubmitting={formik.isSubmitting}
            messages={{
              default: "Iniciar sesion",
              submitting: "Iniciando",
            }}
          />
          <NavLink to="/register" text={<Typography>{"Don't have an account?"}</Typography>} />
        </FormContainer>
      </StyledCardContainer>
    </CenterBox>
  );
};

export default Login;
