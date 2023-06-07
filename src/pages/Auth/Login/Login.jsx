import { useAuth } from "../../../hooks/index";
import { ROUTES } from "../../../constants";
import FormLogin from "../FormLogin/FormLogin";
import { Typography } from "@mui/material";
import {
  CenterBox,
  FormContainer,
  SubmitButton,
  NavLink,
  Loader,
  CardContainerForm,
} from "../../../components/index";

const Login = () => {
  const { message, msgError, loading, formik } = useAuth({ pathname: ROUTES?.LOGIN });

  if (loading) {
    return <Loader open={loading}/>
  }
  return (
    <CenterBox>
      <CardContainerForm>
        <FormContainer onSubmit={formik.handleSubmit} title="Iniciar sesión">
          <FormLogin formik={formik} />
          <Typography align="left" color='red' variant="body1">{message}</Typography>
          <SubmitButton
            isDisabled={!(formik.dirty && formik.isValid)}
            isSubmitting={formik.isSubmitting}
            messages={{
              default: "Iniciar sesion",
              submitting: loading && "Iniciando",
            }}
          />
          <NavLink
            to={ROUTES.REGISTER}
            text={<Typography>{"No tienes una cuenta?"}</Typography>}
          />
        </FormContainer>
      </CardContainerForm>
    </CenterBox>
  );
};

export default Login;
