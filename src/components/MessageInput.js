import React from 'react';

const MessageInput = ({ input, setInput, sendMessage }) => {
  return (
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
  );
};

export default MessageInput;
