import { Message } from "Components/UserComponents/Chat/Message";
import { useUserMessage } from "./useUserMessages";
import { ChatMessageForm } from "Components/UserComponents/ChatMessageForm";

export const MessagesBox = () => {
  const {
    messages,
    imageData,
    userId,
    onSetImage,
    onSetText,
    text,
    onSubmit,
  } = useUserMessage();

  return (
    <>
      <Message messages={messages} userId={userId} />
      <ChatMessageForm
        text={text}
        image={imageData}
        onSubmit={onSubmit}
        onImageSelect={onSetImage}
        onSetText={onSetText}
      />
    </>
  );
};
