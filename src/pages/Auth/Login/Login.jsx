import { Typography } from "@mui/material";
import FormLogin from "../FormLogin/FormLogin";
import { CenterBox } from "../../../components/index";
import { StyledCardContainer } from "./styles";

const Login = () => {
  return (
    <CenterBox>
      <StyledCardContainer>
        <Typography variant="h5">Login</Typography>
        <FormLogin />
      </StyledCardContainer>
    </CenterBox>
  );
};

export default Login;
