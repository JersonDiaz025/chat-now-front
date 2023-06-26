import { StyledText } from "./styles";

const Typography = ({ text, variant, classes }) => {
  return (
    <StyledText variant={variant} sx={classes}>
      {text}
    </StyledText>
  );
};

export default Typography;
