import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

import "./Message.css";

const Message = ({ message, id, username }) => {
  const isUser = username === message.username;
  return (
    <div key={id} className={`message__card ${isUser && `message__user`}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
