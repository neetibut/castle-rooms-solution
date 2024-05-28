// import Nook from "./07_Nook";

import { useState } from "react";

const SecretRoom = ({ message1, onReply }) => {
  const [reply, setReply] = useState("");

  const handleSendReply = () => {
    onReply(reply);
  };
  return (
    <div>
      <h1>SecretRoom</h1>
      <p>Message for JSD7: {message1}</p>
      <textarea
        className="mt-4 p-2 w-full text-white"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Type your reply here..."
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSendReply}
      >
        Send Reply
      </button>
    </div>
  );
};

export default SecretRoom;
