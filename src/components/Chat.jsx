import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useChat } from '../context/ChatContext';

function Chat({ onToggleSidebar }) {
  const { clearChat, saveHistory } = useChat();

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center p-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <button
          onClick={onToggleSidebar}
          className="btn-secondary rounded-full w-10 h-10 flex items-center justify-center text-xl"
        >
          ☰
        </button>
        <h1 className="text-2xl font-bold ml-4" style={{ color: 'var(--color-coffee)' }}>
          DevSeek Chat
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <MessageList />
      </div>

      <div className="input-area p-4">
        <MessageInput />
        <div className="flex gap-2 mt-2">
          <button
            onClick={clearChat}
            className="btn-secondary py-2 px-4 rounded-lg"
          >
            Limpiar chat
          </button>
          <button
            onClick={saveHistory}
            className="btn-primary py-2 px-4 rounded-lg"
          >
            Guardar historial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;