import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

import "./Message.css";

const Message = ({ message, id, username }) => {
  const isUser = username === message.username;
  return (
    <Card key={id} className={`message__card ${isUser && `message__user`}`}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {message.username}: {message.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Message;
