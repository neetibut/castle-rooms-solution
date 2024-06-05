/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [replyMessage2, setReplyMessage2] = useState("");

  const handleReply2 = (message) => {
    setReplyMessage2(message);
  };

  const message2 = "Do you love React 2?";

  return (
    <MessageContext.Provider value={{ replyMessage2, handleReply2, message2 }}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
