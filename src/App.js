import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./Components/Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Sonny", text: "hey guys" },
    { username: "qazi", text: "whats up" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send a message
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello from React 🚀!</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button disabled={!input} type="submit" onClick={sendMessage}>
            Send Message
          </Button>
        </FormControl>
      </form>

      {/* messages */}
      {messages.map((message, index) => (
        <Message id={index} username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
