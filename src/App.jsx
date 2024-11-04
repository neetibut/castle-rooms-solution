import { useContext } from "react";
import Castle from "./components/01_Castle";
import { MessageContext } from "./context/MessageContext";

function App() {
  const { replyMessage2, message2 } = useContext(MessageContext);

  return (
    <div className="py-10 flex flex-col justify-center items-center min-h-screen bg-[#242424] text-white">
      <p>Message for JSD8: {message2}</p>
      <p className="text-red-500">
        Reply from the Secret Room:{" "}
        <span className="text-blue-500">
          {replyMessage2 ? replyMessage2 : "Waiting for a reply..."}
        </span>
      </p>
      <Castle />
    </div>
  );
}

export default App;
