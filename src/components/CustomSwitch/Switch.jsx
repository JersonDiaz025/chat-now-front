import { sunIcon, moonIcon } from "../../assets";
import * as React from 'react';
import { Switch } from "@mui/material";
import { StyledSwitch } from "./styles";

const ControlledSwitches = () => {

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <StyledSwitch>
      <img src={moonIcon}/>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </StyledSwitch>
  );
};

export default ControlledSwitches;
