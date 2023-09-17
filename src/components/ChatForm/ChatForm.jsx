import { StyledChatForm, StyledButtonContainer } from "./styles";
import { useRef } from "react";
import { BiSend } from "react-icons/bi";
import { BiSolidImage } from "react-icons/bi";

const ChatForm = () => {
  const inputRef = useRef(null);
  //const { sendMessage } = useChatActions();
  //const { currentRoom, userName } = useChat();

  const onSubmit = (e) => {
    e.preventDefault();

    //    sendMessage(
    //        inputRef.current.value,
    //        currentRoom.id,
    //        userName
    //    );

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <StyledChatForm onSubmit={onSubmit}>
      {/*<BiSolidImage fill="#fff"/>*/}
      <input type="text" placeholder="Escribe un mensage" ref={inputRef} />

      <StyledButtonContainer >
        <button>
          <BiSend fill="#fff" />
        </button>
      </StyledButtonContainer>
    </StyledChatForm>
  );
};

export default ChatForm;
