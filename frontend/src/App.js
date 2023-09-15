import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/") // Replace with your API endpoint if different
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Messages from API</h1>
        <ul>
          {messages.map((msg) => (
            <li key={msg._id}>{msg.message}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
