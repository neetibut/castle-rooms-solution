import { useContext, useState } from "react";
import { MessageContext } from "../context/MessageContext";

const SecretRoom = () => {
  const { message2, handleReply2 } = useContext(MessageContext);
  const [reply, setReply] = useState("");

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1>SecretRoom</h1>
      <p>Message for JSD8: {message2}</p>
      <textarea
        className="mt-4 p-2 w-full text-white bg-transparent border"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Type your reply here..."
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          handleReply2(reply);
        }}
      >
        Send Reply
      </button>
    </div>
  );
};

export default SecretRoom;
