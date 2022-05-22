type Message = {
  messageId: string;
  message: string;
  timeDate: string;
  received: boolean;
};

type ChatType = {
  chatId: string;
  name: string;
  image: string;
  messages: Message[];
};

type UserData = {
  message: string;
  userId: string | null;
  token: string | null;
};

export type { Message, ChatType, UserData };
