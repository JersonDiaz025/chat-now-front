import { StyledSubmitButton } from "./styles";

export default function SubmitButton({
  isSubmitting,
  messages,
  isDisabled = false,
}) {
  return (
    <StyledSubmitButton
      color="primary"
      variant="contained"
      type="submit"
      disabled={isSubmitting || isDisabled}
    >
      {isSubmitting ? messages.submitting : messages.default}
    </StyledSubmitButton>
  );
}
