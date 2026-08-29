import React, { useState } from 'react';
import { ChatProvider } from './context/ChatContext';
import Chat from './components/Chat';
import History from './components/History';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <ChatProvider>
      <div className="chat-container">
        <History isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="main-chat">
          <Chat onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;