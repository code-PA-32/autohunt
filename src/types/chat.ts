export type Message = {
  text?: string;
  textImage?: string;
  senderId: string;
  receiverId: string;
  timestamp?: string;
  status?: boolean;
  chatId: string;
  messageId: string;
  id: string;
};

export type Chat = {
  id: string;
  title: string;
  image: string;
  subject: string;
  unreadMessages: number;
};

export type CreateChat = {
  car: string;
  subject: string;
  users: string[];
  message: {
    text: string;
    senderId: string;
    receiverId: string;
  };
};
