import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

export default function SecretRoom() {
  const { question, answer, handleAnswer } = useContext(MessageContext);

  return (
    <div className="flex flex-col justify-center items-center py-10 gap-y-4 bg-gray-700 w-[100%]">
      <h1>SecretRoom</h1>
      <p className="text-purple-300">
        Message for JSD9:{" "}
        <span className="text-yellow-300">
          {question ? question : "Waiting for a message..."}
        </span>
      </p>
      <textarea
        className="bg-white text-black rounded px-2 py-1"
        value={answer}
        onChange={handleAnswer}
        placeholder="Type your reply here..."
      />
      <p className="text-green-300">
        Reply to the outside:{" "}
        <span className="text-yellow-300">
          {answer ? answer : "Waiting for a reply..."}
        </span>
      </p>
    </div>
  );
}
