import React from "react";

function MessagesList({ messages }) {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message._id}>{message.message}</li>
      ))}
    </ul>
  );
}

export default MessagesList;
