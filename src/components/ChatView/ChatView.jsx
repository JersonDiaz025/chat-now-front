import { StyledChatView, StyledChatAppContainer } from "./styles";
import { HeaderChatView, ChatForm } from "../../components";

const ChatView = ({ data }) => {
  return (
    <StyledChatView>
      <HeaderChatView data={data} />
      <StyledChatAppContainer>
        {/*<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem porro modi sapiente recusandae odio, voluptates error delectus id blanditiis, quisquam consectetur repellendus explicabo deserunt rem, expedita ducimus excepturi vitae dignissimos?</div>*/}
      </StyledChatAppContainer>

      <div style={{padding: '6px'}}>
        <ChatForm />
      </div>
    </StyledChatView>
  );
};

export default ChatView;
