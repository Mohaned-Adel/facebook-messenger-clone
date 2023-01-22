import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import Message from "./Components/Message";
import db from "./firebase";
import { doc, onSnapshot, collection, getDocs } from "firebase/firestore";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState();
  const [username, setUsername] = useState("");

  const getFirebaseData = async () => {
    const querySnapshot = await getDocs(collection(db, "messages"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  };

  useEffect(() => {
    // db.collection("messages").onSnapshot((snapshot) => {
    //   setMessages(snapshot.docs.map((doc) => doc.data()));
    // });
    // const unsub = onSnapshot(
    //   doc(db, "messages", "8F8qBTlysU6LDjsUOAMV"),
    //   (doc) => {
    //     console.log("Current data:", doc.data());
    //   }
    // );
    getFirebaseData();
  }, []);

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
      {/* {messages.map((message, index) => (
        <Message id={index} username={username} message={message} />
      ))} */}
    </div>
  );
}

export default App;
