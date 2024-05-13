import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fetchMessages = async () => {
    // Fetch messages from the backend (replace with actual API endpoint)
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/messages`);
    setMessages(response.data);
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;
    // Send message to the backend (replace with actual API endpoint)
    await axios.post(`${process.env.REACT_APP_API_URL}/messages`, { text: input });
    setInput('');
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <div className="bg-white p-2 rounded shadow">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white shadow">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="mt-2 w-full bg-blue-500 text-white p-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
