import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useChat } from '../context/ChatContext';

function Chat({ onToggleSidebar }) {
  const { clearChat, saveHistory } = useChat();

  return (
    <div className="flex flex-col h-screen">
      <header className="chat-header">
        <button
          onClick={onToggleSidebar}
          className="btn-secondary rounded-full w-10 h-10 flex items-center justify-center text-xl"
        >
          ☰
        </button>
        <h1 className="chat-header-title">DevSeek Chat</h1>
      </header>

      <div className="messages-area">
        <MessageList />
      </div>

      <div className="input-area">
        <MessageInput />
        <div className="actions-row">
          <button className="btn-secondary" onClick={clearChat}>
            🗑️ Limpiar chat
          </button>
          <button className="btn-primary" onClick={saveHistory}>
            💾 Guardar historial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;