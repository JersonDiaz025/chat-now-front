import {TextField } from "@mui/material";
import { StyledRegister } from "./styles";

const FormRegister = ({ formik }) => {
  return (
    <StyledRegister>
      <TextField
        id="username"
        type="text"
        label="Username"
        fullWidth
        margin="dense"
        value={formik.values.username}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={!!formik.touched.username && !!formik.errors.username}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        id="email"
        type="text"
        label="email"
        fullWidth
        margin="dense"
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={!!formik.touched.email && !!formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
      />
        <TextField
        id="password"
        type="text"
        label="password"
        fullWidth
        margin="dense"
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={!!formik.touched.password && !!formik.errors.password}
        helperText={formik.touched.password && formik.errors.password}
      />
    </StyledRegister>
  );
}

export default FormRegister;
