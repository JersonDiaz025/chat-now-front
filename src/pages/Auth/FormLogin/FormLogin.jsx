import { TextField } from "@mui/material";
import { StyledLogin } from "./styles";

const FormLogin = ({ formik }) => {
  return (
    <StyledLogin>
      <TextField
        id="username"
        type="text"
        label="Usuario"
        fullWidth
        margin="dense"
        value={formik.values.username}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={!!formik.touched.username && !!formik.errors.username}
        helperText={formik.touched?.username && formik.errors.username}
      />
      <TextField
        id="password"
        type="text"
        label="Contraseña"
        fullWidth
        margin="dense"
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={!!formik.touched.password && !!formik.errors.password}
        helperText={formik.touched.password && formik.errors.password}
      />
    </StyledLogin>
  );
};
export default FormLogin;
