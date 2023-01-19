import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send a message
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h2>Hello from React 🚀!</h2>

      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button disabled={!input} type="submit" onClick={sendMessage}>
          Send Message
        </Button>
      </form>

      {/* messages */}
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}

export default App;
