import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';
import { useOllama } from '../hooks/useOllama';

function MessageInput() {
  const [input, setInput] = useState('');
  const { addMessage, saveHistory } = useChat();
  const { sendPrompt, isLoading } = useOllama();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addMessage({ text: input, sender: 'user' });
    setInput('');

    const botResponse = await sendPrompt(input);
    addMessage({ text: botResponse, sender: 'bot' });
    saveHistory();
  };

  return (
    <form onSubmit={handleSend} className="input-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje..."
        disabled={isLoading}
        className="input-field"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="btn-send"
      >
        {isLoading ? 'Pensando...' : 'Enviar'}
      </button>
    </form>
  );
}

export default MessageInput;