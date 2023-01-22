import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import Message from "./Components/Message";
import db from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState();
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="Messanger logo"
      />
      <h1>Hello from React 🚀!</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Enter a message..."
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {/* messages */}
        {messages &&
          messages.map(({ message, id }) => (
            <Message key={id} username={username} message={message} />
          ))}
      </FlipMove>
    </div>
  );
}

export default App;
