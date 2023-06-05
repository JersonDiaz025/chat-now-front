import { Typography } from "@mui/material";
import { StyledForm } from "./styles";

const FormContainer = ({ onSubmit, children, title }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Typography variant="h5" fontWeight='bold' marginBottom={3}>{title}</Typography>
      {children}
    </StyledForm>
  );
};

export default FormContainer;
