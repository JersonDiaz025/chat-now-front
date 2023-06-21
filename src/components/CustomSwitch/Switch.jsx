import { sunIcon, moonIcon } from "../../assets";
//import { Switch } from "@mui/material";
import { StyledSwitch } from "./styles";
import { useTheme } from "../../hooks/index";

const ControlledSwitches = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <StyledSwitch>
      {/*<span className="span-icon">*/}
        <img src={darkMode ? sunIcon : moonIcon} onClick={toggleDarkMode} />
      {/*</span>*/}
      {/*<Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        inputProps={{ "aria-label": "controlled" }}
      />*/}
    </StyledSwitch>
  );
};

export default ControlledSwitches;
