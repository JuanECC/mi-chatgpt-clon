import React from 'react';
import { useChat } from '../context/ChatContext';

function MessageList() {
  const { messages } = useChat();

  if (messages.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No hay mensajes todavía.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-4 max-w-[80%] ${
            msg.sender === 'user' ? 'message-user' : 'message-bot'
          }`}
        >
          <span className="font-bold">
            {msg.sender === 'user' ? 'Tú' : 'DevSeek'}:{' '}
          </span>
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default MessageList;