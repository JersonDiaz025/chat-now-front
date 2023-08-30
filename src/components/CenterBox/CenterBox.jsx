import { StyledCenterBox } from "./styles";
import Background from "../Background/Background";

const CenterBox = ({ children }) => {
  return (
    <StyledCenterBox>
      <Background />
      {children}
    </StyledCenterBox>
  );
};

export default CenterBox;
