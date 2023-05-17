import { Grid, TextField } from "@mui/material";
import { StyledLogin } from "./styles";

const FormLogin = () => {
  return (
    <StyledLogin>
      <Grid  spacing={2} marginTop={2}>
        {/*<Grid xs={12} sm={6} item>*/}
          <TextField
            id="firstName"
            type="text"
            label="Username"
            fullWidth
            margin="dense"
            //value={formik.values.firstName}
            //onBlur={formik.handleBlur}
            //onChange={formik.handleChange}
            //error={!!formik.touched.firstName && !!formik.errors.firstName}
            //helperText={
            //  formik.touched.firstName &&
            //  ((t(formik.errors.firstName) ?? '') as string)
          />
        {/*</Grid>*/}
        {/*<Grid xs={12} sm={6} item>*/}
          <TextField
            id="firstName"
            type="text"
            label="Username"
            fullWidth
            margin="dense"
            //value={formik.values.firstName}
            //onBlur={formik.handleBlur}
            //onChange={formik.handleChange}
            //error={!!formik.touched.firstName && !!formik.errors.firstName}
            //helperText={
            //  formik.touched.firstName &&
            //  ((t(formik.errors.firstName) ?? '') as string)
          />
        {/*</Grid>*/}
      </Grid>
    </StyledLogin>
  );
};

export default FormLogin;
