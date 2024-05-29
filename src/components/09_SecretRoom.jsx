import { useState } from "react";
import PropTypes from "prop-types";

const SecretRoom = ({ message1, onReply }) => {
  const [reply, setReply] = useState("");

  const handleSendReply = () => {
    onReply(reply);
  };
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1>SecretRoom</h1>
      <p>Message for JSD7: {message1}</p>
      <textarea
        className="mt-4 p-2 w-full text-white bg-transparent border"
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

SecretRoom.propTypes = {
  message1: PropTypes.string,
  onReply: PropTypes.func,
};

export default SecretRoom;
