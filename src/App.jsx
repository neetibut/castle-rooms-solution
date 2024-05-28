import { useState } from "react";
import "./App.css";
import Castle from "./components/01_Castle";

// This is a Kingdom Component
function App() {
  const [replyMessage, setReplyMessage] = useState("");

  const handleReply = (message) => {
    setReplyMessage(message);
  };
  const message1 = "Do you love React?";
  return (
    <div>
      <p>Message for JSD7: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Castle message1={message1} onReply={handleReply} />
    </div>
  );
}

export default App;
