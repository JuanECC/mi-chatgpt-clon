// src/context/ChatContext.jsx

import React, { createContext, useContext, useReducer } from 'react';
import { chatReducer, initialState } from './chatReducer';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const addMessage = (message) => {
    dispatch({ type: 'ADD_MESSAGE', payload: message });
  };

  const clearChat = () => {
    dispatch({ type: 'CLEAR_CHAT' });
  };

  const saveHistory = () => {
    dispatch({ type: 'SAVE_HISTORY' });
  };

  const loadHistory = (messages) => {
    dispatch({ type: 'LOAD_HISTORY', payload: messages });
  };

  return (
    <ChatContext.Provider
      value={{
        state,
        addMessage,
        clearChat,
        saveHistory,
        loadHistory
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat debe usarse dentro de ChatProvider');
  }
  return context;
}