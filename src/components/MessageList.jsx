import React from 'react';
import { useChat } from '../context/ChatContext';

function MessageList() {
  const { messages } = useChat();

  if (messages.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No hay mensajes todavía. Comienza la conversación.
      </div>
    );
  }

  return (
    <>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={msg.sender === 'user' ? 'message-user' : 'message-bot'}
        >
          <div className="message-sender">
            {msg.sender === 'user' ? '👤 Tú' : '🤖 DevSeek'}
          </div>
          {msg.text}
        </div>
      ))}
    </>
  );
}

export default MessageList;