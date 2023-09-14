import React, { useState, useEffect } from "react";
import MessagesList from "./components/MessagesList";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch all messages from the backend
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="App">
      <h1>Messages from Server</h1>
      <MessagesList messages={messages} />
    </div>
  );
}

export default App;
