import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MessageProvider } from "./context/MessageProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MessageProvider>
    <App />
  </MessageProvider>
);
